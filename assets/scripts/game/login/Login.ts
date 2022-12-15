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
import { NetMgr } from "../../net/NetMgr";
import { ResultMsg } from "../../net/ResultMsg";
import { ServerHander } from "../../net/ServerHandler";
import { myproto } from "../../proto/msg";
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
        AudioManager.playBgm({ clip: Res.get(ResUrl.AUDIO.LoginBgm, cc.AudioClip), fadeDuration: 2, loop: true });
        this.loginBtn = this.node.getChildByName("loginBtn")
        this.registerBtn = this.node.getChildByName("registerBtn")
        this.accountBox = this.node.getChildByName("account").getComponent(cc.EditBox)
        this.passwordBox = this.node.getChildByName("password").getComponent(cc.EditBox)

        this.registerBtn.on(cc.Node.EventType.TOUCH_END, this.OnRegisterBtn, this)
        this.loginBtn.on(cc.Node.EventType.TOUCH_END, this.OnLoginBtn, this)

        EventMgr.Get().BindEvent(myproto.MsgId.Msg_LoginACK, this.OnLoginACK, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_RegisterACK, this.OnRegisterACK, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_EnterGameACK, this.OnEnterGameACK, this)
    }

    protected onDestroy(): void {
        this.registerBtn.off(cc.Node.EventType.TOUCH_END, this.OnRegisterBtn, this)
        this.loginBtn.off(cc.Node.EventType.TOUCH_END, this.OnLoginBtn, this)

        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_LoginACK, this.OnLoginACK, this)
        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_RegisterACK, this.OnRegisterACK, this)
        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_EnterGameACK, this.OnEnterGameACK, this)
    }

    private OnRegisterBtn(e): void {
        AudioManager.playSfx(Res.get<cc.AudioClip>(ResUrl.AUDIO.BtnClick, cc.AudioClip), SfxType.NORMAL);
        let account: string = this.accountBox.textLabel.string
        let password: string = this.passwordBox.getComponent(cc.EditBox).string
        if (account != "" && password != "") {
            ServerHander.Get().RegisterReq(account, password)
        } else {
            Layer.inst.showTip("请输入账号和密码");
        }
    }

    private OnLoginBtn(e): void {
        AudioManager.playSfx(Res.get<cc.AudioClip>(ResUrl.AUDIO.BtnClick, cc.AudioClip), SfxType.NORMAL);
        let account: string = this.accountBox.textLabel.string
        let password: string = this.passwordBox.getComponent(cc.EditBox).string
        if (account != "" && password != "") {
            ServerHander.Get().LoginReq(account, password)
        } else {
            Layer.inst.showTip("请输入账号和密码");
        }
    }

    private OnLoginACK(data: Uint8Array): void {
        let ack: myproto.LoginACK = myproto.LoginACK.decode(data)
        console.log(ack)
        if (ack.Ret != myproto.ResultCode.Success) {
            Layer.inst.showTip(ResultMsg.GetResultMsg(ack.Ret))
            return
        }
        if (ack.HasRole) {
            ServerHander.Get().EnterGame()
        } else {
            Layer.inst.enterMain(ResUrl.PREFAB.CreateRole);
        }
    }

    private OnRegisterACK(data: Uint8Array): void {
        let ack: myproto.RegisterACK = myproto.RegisterACK.decode(data)
        console.log(ack)
        if (ack.Ret == myproto.ResultCode.Success) {
            Layer.inst.showTip("注册成功");
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