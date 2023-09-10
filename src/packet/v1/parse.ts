import { createDecipheriv, createCipheriv } from 'crypto';
import { LongPacketType, IPacket, ILongPacket, InitialPacket, PacketType } from "../../entities/packet"
import HKDF from "../../crypto/hkdf"
import VariableInteger from "../../entities/VariableInteger";
const SALT = Buffer.from("38762cf7f55934b34d179ae6a4c80cadccbb7f0a", "hex");
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
    const cipher = createCipheriv("aes-128-ecb", hp, Buffer.alloc(0));
    cipher.setAutoPadding(false);
    const updater = cipher.update(sample);
    const mask = updater.subarray(0, 5);
    //let first=buffer[0]^(mask[0]&0xf);
    //console.log('first',buffer[0],'===>',first&0x3)
    const packetNumberLength=((buffer[0]^(mask[0]&0xf))&0x3)+1;
    console.log('offset',offset,packetNumberLength)
    const pn=buffer.subarray(offset,offset+packetNumberLength);offset+=packetNumberLength;
    for(let i=0;i<pn.length;i++){
        pn[i]=pn[i]^mask[i+1]
    }
    console.log('pn',pn);
    const payload=buffer.subarray(offset);
    console.log(payload)
    return new InitialPacket();
}
export {
    ParseLongPacket
}