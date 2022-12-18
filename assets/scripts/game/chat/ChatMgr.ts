import EventMgr from "../../event/EventMgr"
import { myproto } from "../../proto/msg"
import { ChatArgs } from "./ChatRender"

export class ChatMgr {
    private static instance: ChatMgr
    private arrChat: Array<ChatArgs>
    public static Get(): ChatMgr {
        if (ChatMgr.instance == null) {
            ChatMgr.instance = new ChatMgr()
            ChatMgr.instance.init()
        }
        return ChatMgr.instance
    }

    private init(): void {
        this.arrChat = new Array<ChatArgs>()
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_ChatPUSH, this.OnChatPUSH, this)
    }

    private OnChatPUSH(data: Uint8Array): void {
        let push = myproto.ChatPUSH.decode(data)
        this.arrChat.push({ Uid: push.Uid, Name: push.Name, Msg: push.Msg })
        if (this.arrChat.length > 20) {
            this.arrChat = this.arrChat.slice(this.arrChat.length - 20)
        }
    }

    public GetChatHistory(): Array<ChatArgs> {
        return this.arrChat
    }

    public Clear(): void {
        this.arrChat.length = 0
    }
}