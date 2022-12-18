// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import EventMgr from "../../event/EventMgr";
import { ServerHander } from "../../../scripts/net/ServerHandler";
import { myproto } from "../../../scripts/proto/msg";
import DialogBase from "../../common/cmpt/base/DialogBase";
import AudioManager, { SfxType } from "../../common/util/AudioManager";
import Res from "../../common/util/Res";
import { ResUrl } from "../../common/const/Url";
import VirtualList from "../../common/cmpt/ui/scrollList/VirtualList";
import { ChatArgs } from "./ChatRender";
import Layer from "../../common/cmpt/base/Layer";
import { PlayerData } from "../playerdata/playerdata";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ChatPanel extends DialogBase {
    public static pUrl: string = "prefab/chat/chat";

    @property(VirtualList) list: VirtualList<ChatArgs> = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private closeBtn: cc.Node
    private msgBox: cc.EditBox
    private sendBtn: cc.Node
    private content: cc.Node

    start() {
        this.closeBtn = this.node.getChildByName("closeBtn")
        this.msgBox = this.node.getChildByName("bg").getChildByName("msgbox").getComponent(cc.EditBox)
        this.sendBtn = this.node.getChildByName("bg").getChildByName("sendBtn")
        this.content = this.node.getChildByName("bg").getChildByName("scrollview").getComponent(cc.ScrollView).content

        this.closeBtn.on(cc.Node.EventType.TOUCH_END, this.OnCloseBtn, this)
        this.sendBtn.on(cc.Node.EventType.TOUCH_END, this.OnSendBtn, this)

        this.InitChat()

        EventMgr.Get().BindEvent(myproto.MsgId.Msg_ChatPUSH, this.OnChatMsg, this)
    }

    protected onDestroy(): void {
        this.closeBtn.off(cc.Node.EventType.TOUCH_END, this.OnCloseBtn, this)
        this.sendBtn.off(cc.Node.EventType.TOUCH_END, this.OnSendBtn, this)
        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_ChatPUSH, this.OnChatMsg, this)
    }

    // update (dt) {}

    private OnCloseBtn(e): void {
        AudioManager.playSfx(Res.get<cc.AudioClip>(ResUrl.AUDIO.BtnClick, cc.AudioClip), SfxType.NORMAL);
        this.onClickClose()
    }

    private OnSendBtn(e): void {
        AudioManager.playSfx(Res.get<cc.AudioClip>(ResUrl.AUDIO.BtnClick, cc.AudioClip), SfxType.NORMAL);
        if (this.msgBox.string == "") {
            Layer.inst.showTip("请输入消息！");
        } else {
            ServerHander.Get().ChatReq(this.msgBox.string)
            this.msgBox.string = ""
        }
    }

    private InitChat(): void {
        let chats = PlayerData.Get().ChatHistory
        chats.forEach(arg => {
            this.list.push(arg)
        })
        this.content.height = this.list.argsArr.length * 200
        this.list.scrollToBottom()
    }

    private OnChatMsg(data: Uint8Array) {
        let push = myproto.ChatPUSH.decode(data)
        this.list.push({ Uid: push.Uid, Name: push.Name, Msg: push.Msg })
        this.content.height = this.list.argsArr.length * 200
        this.list.scrollToBottom(0.2)
    }
}
