// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Layer from "../../common/cmpt/base/Layer";
import { ResUrl } from "../../common/const/Url";
import EventMgr from "../../event/EventMgr";
import { ServerHander } from "../../net/ServerHandler";
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

    private backBtn: cc.Node

    private mapUnit: Map<number, Unit>

    start() {
        this.pos0 = this.node.getChildByName("pos0")
        this.pos1 = this.node.getChildByName("pos1")
        this.backBtn = this.node.getChildByName("back")
        this.backBtn.active = false

        this.backBtn.on(cc.Node.EventType.TOUCH_END, this.OnBackBtn, this)

        EventMgr.Get().BindEvent(myproto.MsgId.Msg_BattleStartPUSH, this.OnBattleStart, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_BattleActionPUSH, this.OnBattleAction, this)
        EventMgr.Get().BindEvent(myproto.MsgId.Msg_BattleFinishPUSH, this.OnBattleFinish, this)

        this.createUnits()
    }

    protected onDestroy(): void {
        this.backBtn.off(cc.Node.EventType.TOUCH_END, this.OnBackBtn, this)
        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_BattleStartPUSH, this.OnBattleStart, this)
        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_BattleActionPUSH, this.OnBattleAction, this)
        EventMgr.Get().UnbindEvent(myproto.MsgId.Msg_BattleFinishPUSH, this.OnBattleFinish, this)
    }

    // update (dt) {}

    private async createUnits() {
        let info = PlayerData.Get().BattleInfo
        if (info == null) {
            Layer.inst.enterMain(ResUrl.PREFAB.Town);
        }
        PlayerData.Get().BattleInfo = null

        this.mapUnit = new Map<number, Unit>()
        for (let i = 0; i < info.Units.length; i++) {
            let battleUnit: myproto.BattleUnit = <myproto.BattleUnit>info.Units[i]
            let unit = cc.instantiate(this.unitPrefab).getComponent(Unit)
            unit.start()
            await unit.setUnitInfo(battleUnit)
            if (battleUnit.Team == 0) {
                unit.node.parent = this.pos0
            } else {
                unit.node.parent = this.pos1
            }
            this.mapUnit.set(unit.info.Id, unit)
        }
        ServerHander.Get().BattleStartReq(info.BattleId)
    }

    private OnBattleStart(data: Uint8Array): void {
        let push = myproto.BattleStartPUSH.decode(data)
        console.log(push)
    }

    private OnBattleAction(data: Uint8Array): void {
        let push = myproto.BattleActionPUSH.decode(data)
        console.log(push)
        push.Skills.forEach(skill => {
            let unit = this.mapUnit.get(skill.Src)
            if (unit != null) {
                unit.Attack()
            }
        })
        push.Effects.forEach(effect => {
            let unit = this.mapUnit.get(effect.Tar)
            if (unit != null) {
                unit.Damage(effect.Value)
            }
        })
    }

    private OnBattleFinish(data: Uint8Array): void {
        let push = myproto.BattleFinishPUSH.decode(data)
        console.log(push)
        if (push.Win) {
            Layer.inst.showTip("赢了");
        } else {
            Layer.inst.showTip("啊，gg了");
        }
        this.backBtn.active = true
    }

    private OnBackBtn(): void {
        Layer.inst.enterMain(ResUrl.PREFAB.Town);
    }
}
