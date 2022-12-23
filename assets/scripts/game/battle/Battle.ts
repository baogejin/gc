// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Layer from "../../common/cmpt/base/Layer";
import { ResUrl } from "../../common/const/Url";
import { myproto } from "../../proto/msg";
import { PlayerData } from "../playerdata/PlayerDataMgr";
import Unit from "./Unit";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Battle extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    @property(cc.Prefab)
    unitPrefab: cc.Prefab = null

    private pos0: cc.Node
    private pos1: cc.Node

    start() {
        this.pos0 = this.node.getChildByName("pos0")
        this.pos1 = this.node.getChildByName("pos1")

        this.createUnits()
    }

    // update (dt) {}

    private async createUnits() {
        let info = PlayerData.Get().BattleInfo
        if (info == null) {
            Layer.inst.enterMain(ResUrl.PREFAB.Town);
        }
        PlayerData.Get().BattleInfo = null

        info.Units.forEach(battleUnit => {
            let unit = cc.instantiate(this.unitPrefab)
            // unit.getComponent(Unit).setUnitInfo(<myproto.BattleUint>battleUnit)
            if (battleUnit.Team == 0) {
                unit.parent = this.pos0
            } else {
                unit.parent = this.pos1
            }
        })
    }
}
