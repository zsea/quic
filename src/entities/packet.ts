enum PacketType{
    Long=1,
    Short=0
}
enum LongPacketType{
    Initial=0,
    "0RTT"=1,
    ShakeHands=2,
    Retry=3
}
interface IPacket{
    GetPacketType():PacketType
    GetDestId():Buffer
    GetPayload():Buffer
}
interface ILongPacket extends IPacket{
    GetPacketType():PacketType
    GetVersion():number
    GetLongPacketType():LongPacketType
    GetDestIdLength():number
    GetDestId():Buffer
    GetSrcIdLength():number
    GetSrcId():Buffer
    GetPayload():Buffer
}
class InitialPacket implements ILongPacket{
    GetLongPacketType(): LongPacketType {
        return LongPacketType.Initial;
    }
    GetPacketType(): PacketType {
        return PacketType.Long;
    }
    GetVersion(): number {
        return this.version;
    }
    GetDestIdLength(): number {
        return this.destIdLength;
    }
    GetDestId(): Buffer {
        return this.destId;
    }
    GetSrcIdLength(): number {
        return this.srcIdLength;
    }
    GetSrcId(): Buffer {
        return this.srcId;
    }
    GetPayload(): Buffer {
        return this.payload;
    }
    
    public tokenLength:number=0
    public token:Buffer=Buffer.alloc(0)
    public length:number=0;
    public packetNumber:number=0;


    private version:number=0
    private destIdLength:number=0
    private destId:Buffer=Buffer.alloc(0);
    private srcIdLength:number=0
    private srcId:Buffer=Buffer.alloc(0);
    private payload:Buffer=Buffer.alloc(0);
}
export {
    PacketType,
    IPacket,
    ILongPacket,
    InitialPacket,
    LongPacketType
}