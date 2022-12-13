// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import EventMgr from "../../event/EventMgr";
import { ServerHander } from "../../../scripts/net/ServerHandler";
import { myproto } from "../../../scripts/proto/msg";
import { ChatRender } from "./ChatRender";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    @property(cc.Prefab)
    chatRenderPrefab: cc.Prefab = null;

    closeBtn: cc.Node
    sendBtn: cc.Node
    editbox: cc.EditBox
    scrollview: cc.ScrollView
    content: cc.Node

    start() {
        this.closeBtn = this.node.getChildByName("bg").getChildByName("closeBtn")
        this.sendBtn = this.node.getChildByName("bg").getChildByName("sendBtn")
        this.editbox = this.node.getChildByName("bg").getChildByName("editbox").getComponent(cc.EditBox)
        this.scrollview = this.node.getChildByName("bg").getChildByName("scrollview").getComponent(cc.ScrollView)
        this.content = this.scrollview.content

        this.closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeChatPanel, this)
        this.sendBtn.on(cc.Node.EventType.TOUCH_END, this.SendChatMsg, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_ChatPUSH, this.OnChatMsg, this)
    }

    // update (dt) {}

    closeChatPanel() {
        this.node.active = false;
    }

    SendChatMsg() {
        let msg: string = this.editbox.textLabel.string
        ServerHander.Get().ChatReq(msg)
    }

    OnChatMsg(data: Uint8Array) {
        let push: myproto.ChatPUSH = myproto.ChatPUSH.decode(data)
        console.log(this.chatRenderPrefab)
        let render: ChatRender = new ChatRender(cc.instantiate(this.chatRenderPrefab))
        render.SetMsg(push.Name + ":" + push.Msg)
        render.node.parent = this.content
        render.node.y = -this.content.height;
        this.content.height += render.node.height;
        this.scrollview.scrollToBottom()
    }
}
