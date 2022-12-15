// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Layer from "../../common/cmpt/base/Layer";
import { ResUrl } from "../../common/const/Url";
import AudioManager, { SfxType } from "../../common/util/AudioManager";
import Res from "../../common/util/Res";
import EventMgr from "../../event/EventMgr";
import { ResultMsg } from "../../net/ResultMsg";
import { ServerHander } from "../../net/ServerHandler";
import { myproto } from "../../proto/msg";
import { PlayerData } from "../playerdata/playerdata";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    private nameBox: cc.EditBox
    private createBtn: cc.Node

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.nameBox = this.node.getChildByName("nameBox").getComponent(cc.EditBox)
        this.createBtn = this.node.getChildByName("createBtn")

        this.createBtn.on(cc.Node.EventType.TOUCH_END, this.OnCreateBtn, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_CreateRoleACK, this.OnCreateRoleACK, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_EnterGameACK, this.OnEnterGameACK, this)
    }

    // update (dt) {}
    protected onDestroy(): void {
        this.createBtn.off(cc.Node.EventType.TOUCH_END, this.OnCreateBtn, this)
        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_CreateRoleACK, this.OnCreateRoleACK, this)
        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_EnterGameACK, this.OnEnterGameACK, this)
    }

    private OnCreateBtn(e): void {
        AudioManager.playSfx(Res.get<cc.AudioClip>(ResUrl.AUDIO.BtnClick, cc.AudioClip), SfxType.NORMAL);
        if (this.nameBox.textLabel.string == "") {
            Layer.inst.showTip("请输入角色名")
        } else {
            ServerHander.Get().CreateRoleReq(this.nameBox.textLabel.string)
        }
    }

    private OnCreateRoleACK(data: Uint8Array): void {
        let ack: myproto.CreateRoleACK = myproto.CreateRoleACK.decode(data)
        if (ack.Ret == myproto.ResultCode.Success) {
            ServerHander.Get().EnterGame()
        } else {
            Layer.inst.showTip(ResultMsg.GetResultMsg(ack.Ret))
        }
    }

    private OnEnterGameACK(data: Uint8Array): void {
        console.log(data)
        let ack: myproto.EnterGameACK = myproto.EnterGameACK.decode(data)
        if (ack.Ret == myproto.ResultCode.Success) {
            PlayerData.PlayerInfo = <myproto.PlayerInfo>ack.Info
            Layer.inst.enterMain(ResUrl.PREFAB.Town);
        } else {
            Layer.inst.showTip(ResultMsg.GetResultMsg(ack.Ret))
        }
    }
}
