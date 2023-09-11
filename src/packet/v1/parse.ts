import { createDecipheriv, createCipheriv } from 'crypto';
import { LongPacketType, IPacket, ILongPacket, InitialPacket, PacketType } from "../../entities/packet"
import HKDF from "../../crypto/hkdf"
import VariableInteger from "../../entities/VariableInteger";
const SALT = Buffer.from("38762cf7f55934b34d179ae6a4c80cadccbb7f0a", "hex");
const AEAD_ALGORITHM="aes-128-gcm",AEAD_ALGORITHM_AUTHTAG_LENGTH=16;
const HEADER_ALGORITHM="aes-128-ecb";
function ParseLongPacket(buffer: Buffer): ILongPacket {
    const type: LongPacketType = buffer[0] & 0x30;
    let offset = 5;
    const dstIdLength = buffer.readUint8(offset); offset++;
    const dstId = buffer.subarray(offset, offset+dstIdLength); offset += dstIdLength;
    const srcIdLength = buffer.readUint8(offset); offset++;
    const srcId = buffer.subarray(offset, offset+srcIdLength); offset += srcIdLength;

    if (type === LongPacketType.Initial) {
        return ParseInitialPacket(buffer, offset, dstIdLength, dstId, srcIdLength, srcId);
    }
    throw new Error("Method not implemented.")
}
function ParseInitialPacket(buffer: Buffer, offset: number, dstIdLength: number, dstId: Buffer, srcIdLength: number, srcId: Buffer): ILongPacket {
    //const packet=new InitialPacket();
    const tokenLength = VariableInteger.Parse(buffer.subarray(offset)); offset += tokenLength.length;
    const token = buffer.subarray(offset, offset + Number(tokenLength.value)); offset += token.length;
    const payloadLength = VariableInteger.Parse(buffer.subarray(offset)); offset += payloadLength.length;

    const hkdf = new HKDF("SHA256");
    const initial_secret = hkdf.extract(SALT, dstId);
    const client_initial_secret = hkdf.qhkdfExpandLabel(initial_secret, "client in", 32)
    const key = hkdf.qhkdfExpandLabel(client_initial_secret, "quic key", 16);
    const iv = hkdf.qhkdfExpandLabel(client_initial_secret, "quic iv", 12);
    const hp = hkdf.qhkdfExpandLabel(client_initial_secret, "quic hp", 16);
    const sample = buffer.subarray(offset + 4, offset + 4+16);
    const cipher = createCipheriv(HEADER_ALGORITHM, hp, Buffer.alloc(0));
    cipher.setAutoPadding(false);
    const updater = cipher.update(sample);
    const mask = updater.subarray(0, 5);
    buffer[0]=(buffer[0]^(mask[0]&0xf));
    const packetNumberLength=(buffer[0]&0x3)+1;
    const pn=buffer.subarray(offset,offset+packetNumberLength);offset+=packetNumberLength;
    for(let i=0;i<pn.length;i++){
        pn[i]=pn[i]^mask[i+1];
    }
    const aad=buffer.subarray(0,offset);
    const payload=buffer.subarray(offset);
    //console.log(payload);
    const nonce=Buffer.alloc(iv.length);
    for(let i=iv.length-1,pi=pn.length-1;i>=0;i--,pi--){
        let n=0;
        if(pi>=0) n=pn[pi];
        nonce[i]=n^iv[i];
    }
    const authTag=payload.subarray(payload.length-AEAD_ALGORITHM_AUTHTAG_LENGTH);
    const encPayload=payload.subarray(0,payload.length-AEAD_ALGORITHM_AUTHTAG_LENGTH);
    const decipher=createDecipheriv(AEAD_ALGORITHM,key,nonce);
    decipher.setAAD(aad);
    decipher.setAuthTag(authTag);
    const plain=Buffer.concat([decipher.update(encPayload),decipher.final()]);
    console.log('明文',plain.length,plain.toString("hex"));
    return new InitialPacket();
}
export {
    ParseLongPacket
}