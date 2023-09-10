class VariableInteger {
    length: number = 0;
    value: bigint = BigInt(0);
    constructor(length:number,value:bigint|number){
        this.length=length;
        if(typeof value==="bigint"){
            this.value=value;
        }
        else if(typeof value==="number"){
            this.value=BigInt(value)
        }
    }
    static Parse(buffer: Buffer) {
        let length = (buffer[0] >> 6);
        length = Math.pow(2, length);
        //console.log("==============",length)
        let value: bigint = BigInt(0);
        if (length === 1) {
            value = BigInt(buffer[0] & 0x3F);
        }
        else if (length === 2) {
            value =BigInt(buffer.readUint16BE(0) & 0x3FFF)
        }
        else if (length === 4) {
            value =BigInt(buffer.readUint32BE(0) & 0x3FFFFFFF)
        }
        else if (length === 8) {
            value = buffer.readBigUInt64BE(0) & BigInt("0x3FFFFFFFFFFFFFFF");
        }
        return new VariableInteger(length,value);
    }
}

export default VariableInteger;