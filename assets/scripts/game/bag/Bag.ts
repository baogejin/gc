// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import DialogBase from "../../common/cmpt/base/DialogBase";
import EventMgr from "../../event/EventMgr";
import { ServerHander } from "../../net/ServerHandler";
import { myproto } from "../../proto/msg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bag extends DialogBase {
    public static pUrl: string = "prefab/bag/bag";

    btn: cc.Node

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.btn = this.node.getChildByName("button")
        this.btn.on(cc.Node.EventType.TOUCH_END, this.OnBtn, this)
    }

    // update (dt) {}

    OnBtn() {
        ServerHander.Get().GMReq("additem 101 10")
    }
}
