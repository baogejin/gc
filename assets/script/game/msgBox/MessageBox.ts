// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { EventID } from "../../event/EventDefine";
import EventMgr from "../../event/EventMgr";


const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Node)
    bg: cc.Node = null;

    t: cc.Tween

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        EventMgr.Get().BindEvent(EventID.ShowMessageBox, this.ShowMsgBox, this)
    }

    // update (dt) {}

    ShowMsgBox(msg: string) {
        if (this.t) {
            this.t.stop()
        }
        this.bg.active = true
        this.bg.scaleY = 1
        this.label.string = msg
        this.t = cc.tween(this.bg).delay(1).to(0.2, { scaleY: 0 }).start()
    }
}
