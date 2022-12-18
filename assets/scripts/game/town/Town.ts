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
import Bag from "../bag/Bag";
import ChatPanel from "../chat/ChatPanel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Town extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private chatBtn: cc.Node
    private bagBtn: cc.Node

    start() {
        this.chatBtn = this.node.getChildByName("chat")
        this.bagBtn = this.node.getChildByName("bottom").getChildByName("bag")

        this.chatBtn.on(cc.Node.EventType.TOUCH_END, this.OnChatBtn, this)
        this.bagBtn.on(cc.Node.EventType.TOUCH_END, this.OnBagBtn, this)

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
}
