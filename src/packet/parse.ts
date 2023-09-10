import { PacketType, IPacket, ILongPacket, InitialPacket,LongPacketType } from "../entities/packet"
import {ParseLongPacket as ParseLongPacket_V1} from "./v1/parse"
function Parse(buffer:Buffer):IPacket { 
    if((buffer[0]&0x80)===0x80) return ParseLongPacket(buffer);
    throw new Error("Method not implemented.")
}
function ParseLongPacket(buffer:Buffer):IPacket{
    //console.log("b0",buffer[0])
    const version=buffer.readUint32BE(1);
    if(version===1){
        return ParseLongPacket_V1(buffer);
    }
    throw new Error("Method not implemented.")
}

export default Parse;