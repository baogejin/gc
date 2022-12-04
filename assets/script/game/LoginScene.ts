// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import EventMgr from "../event/EventMgr";
import { NetMgr } from "../net/NetMgr";
import { ServerHander } from "../net/ServerHandler";
import { myproto } from "../proto/msg";
import { MsgBoxMgr } from "./msgBox/MsgBoxMgr";
import { PlayerData } from "./playerdata/playerdata";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    registerBtn: cc.Node = null;

    @property(cc.Node)
    loginBtn: cc.Node = null;

    @property(cc.EditBox)
    accountBox: cc.EditBox = null;

    @property(cc.EditBox)
    passwordBox: cc.EditBox = null;

    @property(cc.Node)
    createBtn: cc.Node = null;

    @property(cc.EditBox)
    nameBox: cc.EditBox = null;

    @property(cc.Node)
    loginPanel: cc.Node = null;

    @property(cc.Node)
    createPanel: cc.Node = null;

    // // LIFE-CYCLE CALLBACKS:

    // // onLoad () {}

    start() {
        this.createPanel.active = false
        this.loginPanel.active = true
        NetMgr.Get().Init()
        this.registerBtn.on(cc.Node.EventType.TOUCH_END, this.OnRegisterBtn, this)
        this.loginBtn.on(cc.Node.EventType.TOUCH_END, this.OnLoginBtn, this)
        this.createBtn.on(cc.Node.EventType.TOUCH_END, this.OnCreateBtn, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_LoginACK, this.OnLoginACK, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_RegisterACK, this.OnRegisterACK, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_CreateRoleACK, this.OnCreateRoleACK, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_EnterGameACK, this.OnEnterGameACK, this)
    }

    // // update (dt) {}

    OnRegisterBtn(e) {
        let account: string = this.accountBox.textLabel.string
        let password: string = this.passwordBox.getComponent(cc.EditBox).string
        if (account != "" && password != "") {
            ServerHander.Get().RegisterReq(account, password)
        }
    }

    OnLoginBtn(e) {
        let account: string = this.accountBox.textLabel.string
        let password: string = this.passwordBox.getComponent(cc.EditBox).string
        if (account != "" && password != "") {
            ServerHander.Get().LoginReq(account, password)
        }
    }

    OnCreateBtn(e) {
        let name: string = this.nameBox.textLabel.string
        if (name != "") {
            ServerHander.Get().CreateRoleReq(name)
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
            ServerHander.Get().EnterGame()
        } else {
            this.createPanel.active = true
            this.loginPanel.active = false
        }
    }

    OnRegisterACK(data: Uint8Array) {
        let ack: myproto.RegisterACK = myproto.RegisterACK.decode(data)
        console.log(ack)
        if (ack.Ret == myproto.ResultCode.Success) {
            MsgBoxMgr.Get().ShowMsg("注册成功")
        } else {
            MsgBoxMgr.Get().ShowMsgByRet(ack.Ret)
        }
    }

    OnCreateRoleACK(data: Uint8Array) {
        let ack: myproto.CreateRoleACK = myproto.CreateRoleACK.decode(data)
        if (ack.Ret == myproto.ResultCode.Success) {
            MsgBoxMgr.Get().ShowMsg("创建成功")
            ServerHander.Get().EnterGame()
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
            cc.director.loadScene("Hall", () => {
                console.log("进入游戏");
            });
        } else {
            MsgBoxMgr.Get().ShowMsgByRet(ack.Ret)
        }
    }
}
