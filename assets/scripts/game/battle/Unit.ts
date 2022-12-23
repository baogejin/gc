// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import ResSpine from "../../common/cmpt/ui/res/ResSpine";
import { myproto } from "../../proto/msg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Unit extends cc.Component {

    private nameLab: cc.Node
    private sp: sp.Skeleton

    private info: myproto.BattleUint

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.nameLab = this.node.getChildByName("name")
        this.sp = this.node.getChildByName("sp").getComponent(sp.Skeleton)
    }

    // update (dt) {}
    public async setUnitInfo(info: myproto.BattleUint) {
        this.info = info
        if (info.Team == 1) {
            this.sp.node.scaleX = -3
        }
        await this.sp.node.getComponent(ResSpine).setSkeletonData("spine/10001/skeleton")
        this.sp.animation = "ready"
    }
}
