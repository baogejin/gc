import { CodeEngine } from "./CodeEngine";

export class MsgHeader {
    // 包头固定长度
    private static CONST_HEADLEN: number = 16;
    public m_iMessageID: number;
    public m_stBody: Uint8Array;
    public m_iSeq: number;
    public Encode(bys: Uint8Array): ArrayBuffer {
        let buffer: ArrayBuffer = new ArrayBuffer(
            MsgHeader.CONST_HEADLEN + bys.length
        );
        let headBys: Uint8Array = new Uint8Array(buffer);

        let index: number = 0;
        console.log(buffer.byteLength, MsgHeader.CONST_HEADLEN + bys.length)
        index = CodeEngine.encode_int32(headBys, index, buffer.byteLength);
        index = CodeEngine.encode_int64(headBys, index, this.m_iSeq);
        index = CodeEngine.encode_int32(headBys, index, this.m_iMessageID);
        headBys.set(bys, index);
        console.log(buffer)
        return buffer;
    }

    public Decode(bys: Uint8Array): void {
        let index: number = 0;
        let msgLen: number = CodeEngine.decode_int32(bys, index);
        index += 4;
        let seq: number = CodeEngine.decode_int64(bys, index);
        index += 8;
        this.m_iMessageID = CodeEngine.decode_int32(bys, index);
        index += 4;
        this.m_stBody = bys.subarray(index);
    }
}
