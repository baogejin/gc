import { myproto } from "../../../scripts/proto/msg";
import EventMgr from "../../event/EventMgr";
import { ChatArgs } from "../chat/ChatRender";

export class PlayerData {
    private static instance: PlayerData
    public static Get(): PlayerData {
        if (PlayerData.instance == null) {
            PlayerData.instance = new PlayerData()
            PlayerData.instance.init()
        }
        return PlayerData.instance
    }
    public PlayerInfo: myproto.PlayerInfo
    public ChatHistory: Array<ChatArgs>


    public Reset(): void {
        this.ChatHistory.length = 0
        this.PlayerInfo = new myproto.PlayerInfo()
    }
    private init(): void {
        this.ChatHistory = new Array<ChatArgs>()
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_EnterGameACK, this.OnEnterGame, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_ChatPUSH, this.OnChatPUSH, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_ItemUpdatePUSH, this.OnItemUpdate, this)
    }

    private OnEnterGame(data: Uint8Array): void {
        let ack: myproto.EnterGameACK = myproto.EnterGameACK.decode(data)
        this.PlayerInfo = <myproto.PlayerInfo>ack.Info
    }

    private OnChatPUSH(data: Uint8Array): void {
        let push = myproto.ChatPUSH.decode(data)
        this.ChatHistory.push({ Uid: push.Uid, Name: push.Name, Msg: push.Msg })
        if (this.ChatHistory.length > 20) {
            this.ChatHistory = this.ChatHistory.slice(this.ChatHistory.length - 20)
        }
    }

    private OnItemUpdate(data: Uint8Array): void {
        let push = myproto.ItemUpdatePUSH.decode(data)
        console.log(push)
    }
}