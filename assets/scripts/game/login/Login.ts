// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Layer from "../../common/cmpt/base/Layer";
import EventMgr from "../../event/EventMgr";
import { NetMgr } from "../../net/NetMgr";
import { ServerHander } from "../../net/ServerHandler";
import { myproto } from "../../proto/msg";
import { MsgBoxMgr } from "../msgBox/MsgBoxMgr";
import { PlayerData } from "../playerdata/playerdata";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Login extends cc.Component {

    // // LIFE-CYCLE CALLBACKS:

    // // onLoad () {}
    private loginBtn: cc.Node
    private registerBtn: cc.Node
    private accountBox: cc.EditBox
    private passwordBox: cc.EditBox

    start() {
        this.loginBtn = this.node.getChildByName("loginBtn")
        this.registerBtn = this.node.getChildByName("registerBtn")
        this.accountBox = this.node.getChildByName("account").getComponent(cc.EditBox)
        this.passwordBox = this.node.getChildByName("password").getComponent(cc.EditBox)

        this.registerBtn.on(cc.Node.EventType.TOUCH_END, this.OnRegisterBtn, this)
        this.loginBtn.on(cc.Node.EventType.TOUCH_END, this.OnLoginBtn, this)

        EventMgr.Get().BindEvent(myproto.MsgId.Msg_LoginACK, this.OnLoginACK, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_RegisterACK, this.OnRegisterACK, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_CreateRoleACK, this.OnCreateRoleACK, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_EnterGameACK, this.OnEnterGameACK, this)
    }

    // // update (dt) {}

    private OnRegisterBtn(e): void {
        let account: string = this.accountBox.textLabel.string
        let password: string = this.passwordBox.getComponent(cc.EditBox).string
        if (account != "" && password != "") {
            ServerHander.Get().RegisterReq(account, password)
        }
    }

    private OnLoginBtn(e): void {
        let account: string = this.accountBox.textLabel.string
        let password: string = this.passwordBox.getComponent(cc.EditBox).string
        if (account != "" && password != "") {
            ServerHander.Get().LoginReq(account, password)
        }
    }

    OnLoginACK(data: Uint8Array) {
        let ack: myproto.LoginACK = myproto.LoginACK.decode(data)
        console.log(ack)
        if (ack.Ret == myproto.ResultCode.Success) {
            MsgBoxMgr.Get().ShowMsg("登录成功")
        } else {
            MsgBoxMgr.Get().ShowMsgByRet(ack.Ret)
        }
        if (ack.Ret != myproto.ResultCode.Success) {
            return
        }
        if (ack.HasRole) {
        }
    }

    OnRegisterACK(data: Uint8Array) {
        let ack: myproto.RegisterACK = myproto.RegisterACK.decode(data)
        console.log(ack)
        if (ack.Ret == myproto.ResultCode.Success) {
            Layer.inst.showTip({ text: "注册成功", end: cc.v2(0, 100), duration: 0.5 });
        } else {
            // Layer.inst.showTip("注册失败")
            Layer.inst.showTip("注册失败");
        }
    }

    OnCreateRoleACK(data: Uint8Array) {
        let ack: myproto.CreateRoleACK = myproto.CreateRoleACK.decode(data)
        if (ack.Ret == myproto.ResultCode.Success) {
            MsgBoxMgr.Get().ShowMsg("创建成功")

        } else {
            MsgBoxMgr.Get().ShowMsgByRet(ack.Ret)
        }
    }

    OnEnterGameACK(data: Uint8Array) {
        console.log(data)
        let ack: myproto.EnterGameACK = myproto.EnterGameACK.decode(data)
        if (ack.Ret == myproto.ResultCode.Success) {
            PlayerData.PlayerInfo = <myproto.PlayerInfo>ack.Info
            console.log(PlayerData.PlayerInfo)

        } else {
            MsgBoxMgr.Get().ShowMsgByRet(ack.Ret)
        }
    }
}
