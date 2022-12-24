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

    private nameLab: cc.Label
    private sp: sp.Skeleton
    private hpLab: cc.Label

    public info: myproto.BattleUnit

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.nameLab = this.node.getChildByName("name").getComponent(cc.Label)
        this.sp = this.node.getChildByName("sp").getComponent(sp.Skeleton)
        this.hpLab = this.node.getChildByName("hp").getComponent(cc.Label)
    }

    // update (dt) {}
    public async setUnitInfo(info: myproto.BattleUnit) {
        this.info = info
        if (info.Team == 1) {
            this.sp.node.scaleX = -3
        }
        await this.sp.node.getComponent(ResSpine).setSkeletonData("spine/10001/skeleton")
        this.sp.animation = "ready"
        this.nameLab.string = info.Name
        this.hpLab.string = info.HP + "/" + info.MaxHP
    }

    public Attack(): void {
        this.sp.setAnimation(1, "skill0", false)
        this.sp.addAnimation(1, "ready", true)
    }

    public Damage(damage: number): void {
        this.info.HP -= damage
        if (this.info.HP < 0) {
            this.info.HP = 0
        }
        this.hpLab.string = this.info.HP + "/" + this.info.MaxHP
        if (this.info.HP <= 0) {
            this.sp.setAnimation(1, "dead", false)
        }
    }
}
