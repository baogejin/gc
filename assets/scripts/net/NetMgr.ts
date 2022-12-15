import EventMgr from "../event/EventMgr";
import { MsgHeader } from "./MsgHeader";
import { myproto } from "../proto/msg";
import { ServerHander } from "./ServerHandler";

export class NetMgr {
    private static m_pInstance: NetMgr;
    public static Get(): NetMgr {
        if (!NetMgr.m_pInstance) {
            NetMgr.m_pInstance = new NetMgr();
        }
        return NetMgr.m_pInstance;
    }

    private m_stWebSoket: WebSocket;
    public m_stMsgHeader: MsgHeader;

    public Init(): void {
        this.m_stMsgHeader = new MsgHeader();
        this.m_stMsgHeader.m_iMessageID = 111;
        this.m_stWebSoket = new WebSocket("ws://121.4.101.211:12345/ws");
        this.m_stWebSoket.onopen = this.OnOpen.bind(this);
        this.m_stWebSoket.onerror = this.OnError.bind(this);
        this.m_stWebSoket.onclose = this.OnClose.bind(this);
        this.m_stWebSoket.onmessage = this.OnMessage.bind(this);
    }

    private OnOpen(): void {
        console.log("on open");
        // ServerHander.Get().ReqLogin();
    }

    private OnError(e): void {

    }

    private OnClose(): void {

    }

    private async OnMessage(event: MessageEvent): Promise<void> {
        console.log(event);
        let len = event.data.length
        console.log(len)
        let bysData: Uint8Array = new TextEncoder().encode(event.data)
        console.log("Received MsgLen = " + bysData.byteLength);
        if (bysData.byteLength == 0) {
            console.error(`数据为空!`);
            return;
        }
        this.m_stMsgHeader.Decode(bysData);
        EventMgr.Get().Emit(this.m_stMsgHeader.m_iMessageID, this.m_stMsgHeader.m_stBody);
    }

    public Send(msgId: number, body: Uint8Array): void {
        this.m_stMsgHeader.m_iMessageID = msgId;
        this.m_stWebSoket.send(this.m_stMsgHeader.Encode(body));
    }
}