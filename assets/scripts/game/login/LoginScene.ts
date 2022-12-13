// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import EventMgr from "../../event/EventMgr";
import { NetMgr } from "../../../scripts/net/NetMgr";
import { ServerHander } from "../../../scripts/net/ServerHandler";
import { myproto } from "../../../scripts/proto/msg";
import { MsgBoxMgr } from "../msgBox/MsgBoxMgr";
import { PlayerData } from "../playerdata/playerdata";
import { LoginPanel } from "./LoginPanel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // // LIFE-CYCLE CALLBACKS:

    // // onLoad () {}
    private createNode: cc.Node
    private loginNode: cc.Node
    private loginPanel: LoginPanel

    start() {
        NetMgr.Get().Init()
        this.loginNode = this.node.getChildByName("login")
        this.loginPanel = new LoginPanel(this.loginNode)

        EventMgr.Get().BindEvent(myproto.MsgId.Msg_LoginACK, this.OnLoginACK, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_RegisterACK, this.OnRegisterACK, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_CreateRoleACK, this.OnCreateRoleACK, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_EnterGameACK, this.OnEnterGameACK, this)
    }

    // // update (dt) {}

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
            this.createNode.active = true
            this.loginNode.active = false
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
