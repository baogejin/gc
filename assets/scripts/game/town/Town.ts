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
import { ServerHander } from "../../net/ServerHandler";
import { myproto } from "../../proto/msg";
import Bag from "../bag/Bag";
import ChatPanel from "../chat/ChatPanel";
import { PlayerData } from "../playerdata/PlayerDataMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Town extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private chatBtn: cc.Node
    private bagBtn: cc.Node
    private battleBtn: cc.Node

    start() {
        this.chatBtn = this.node.getChildByName("chat")
        this.bagBtn = this.node.getChildByName("bottom").getChildByName("bag")
        this.battleBtn = this.node.getChildByName("battle")

        this.chatBtn.on(cc.Node.EventType.TOUCH_END, this.OnChatBtn, this)
        this.bagBtn.on(cc.Node.EventType.TOUCH_END, this.OnBagBtn, this)
        this.battleBtn.on(cc.Node.EventType.TOUCH_END, this.OnBattleBtn, this)

        EventMgr.Get().BindEvent(myproto.MsgId.Msg_BattleStartPUSH, this.OnBattleStart, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_BattleInfoPUSH, this.OnBattleInfo, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_BattleActionPUSH, this.OnBattleAction, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_BattleFinishPUSH, this.OnBattleFinish, this)
    }

    protected onDestroy(): void {
        this.chatBtn.off(cc.Node.EventType.TOUCH_END, this.OnChatBtn, this)
        this.bagBtn.off(cc.Node.EventType.TOUCH_END, this.OnBagBtn, this)
        this.battleBtn.off(cc.Node.EventType.TOUCH_END, this.OnBattleBtn, this)

        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_BattleStartPUSH, this.OnBattleStart, this)
        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_BattleInfoPUSH, this.OnBattleInfo, this)
        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_BattleActionPUSH, this.OnBattleAction, this)
        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_BattleFinishPUSH, this.OnBattleFinish, this)
    }

    // update (dt) {}

    private OnChatBtn(e): void {
        AudioManager.playSfx(Res.get<cc.AudioClip>(ResUrl.AUDIO.BtnClick, cc.AudioClip), SfxType.NORMAL);
        Layer.inst.openUniDialogAsync(ChatPanel.pUrl);
    }

    private OnBagBtn(e): void {
        AudioManager.playSfx(Res.get<cc.AudioClip>(ResUrl.AUDIO.BtnClick, cc.AudioClip), SfxType.NORMAL);
        Layer.inst.openUniDialogAsync(Bag.pUrl)
    }

    private OnBattleBtn(e): void {
        ServerHander.Get().CreateBattleReq(1)
    }

    private OnBattleStart(data: Uint8Array): void {
        let push = myproto.BattleStartPUSH.decode(data)
        console.log(push)
    }

    private OnBattleInfo(data: Uint8Array): void {
        console.log(data)
        let push = myproto.BattleInfoPUSH.decode(data)
        console.log(push)
        PlayerData.Get().BattleInfo = push
        Layer.inst.enterMain(ResUrl.PREFAB.Battle)
    }

    private OnBattleAction(data: Uint8Array): void {
        let push = myproto.BattleActionPUSH.decode(data)
        console.log(push)
    }

    private OnBattleFinish(data: Uint8Array): void {
        let push = myproto.BattleFinishPUSH.decode(data)
        console.log(push)
    }
}
