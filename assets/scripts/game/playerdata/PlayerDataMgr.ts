import { myproto } from "../../proto/msg";
import { ItemConfig } from "../../data/gencode/ItemCfg";
import EventMgr from "../../event/EventMgr";
import { ChatArgs } from "../chat/ChatRender";
import { PlayerInfo } from "./PlayerInfo";
import { BagInfo } from "./BagInfo";

export class PlayerData {
    private static instance: PlayerData
    public static Get(): PlayerData {
        if (PlayerData.instance == null) {
            PlayerData.instance = new PlayerData()
            PlayerData.instance.init()
        }
        return PlayerData.instance
    }
    public PlayerInfo: PlayerInfo
    public BagInfo: BagInfo
    public ChatHistory: Array<ChatArgs>


    public Reset(): void {
        this.PlayerInfo = PlayerInfo.NewPlayerInfo()
        this.BagInfo = BagInfo.NewBagInfo()
        this.ChatHistory = new Array<ChatArgs>()
    }
    private init(): void {
        this.Reset()
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_EnterGameACK, this.OnEnterGame, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_ChatPUSH, this.OnChatPUSH, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_ItemUpdatePUSH, this.OnItemUpdate, this)
    }

    private OnEnterGame(data: Uint8Array): void {
        let ack: myproto.EnterGameACK = myproto.EnterGameACK.decode(data)
        this.PlayerInfo.Uid = ack.Info.Uid
        this.PlayerInfo.Name = ack.Info.Name
        this.BagInfo.SetInfo(<myproto.PlayerBagInfo>ack.Info.BagInfo)
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
        switch (push.UpdateType) {
            case myproto.ItemUpdateType.ItemAdd:
                this.BagInfo.addItems(<Array<myproto.Item>>push.Items)
                break
            case myproto.ItemUpdateType.ItemDel:
                this.BagInfo.delItems(<Array<myproto.Item>>push.Items)
                break
            default:
                return

        }
    }
}