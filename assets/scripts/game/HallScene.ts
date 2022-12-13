// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { PlayerData } from "./playerdata/playerdata";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Node)
    chatNode: cc.Node = null;

    @property(cc.Node)
    chatBtn: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        if (PlayerData.PlayerInfo) {
            this.label.string = PlayerData.PlayerInfo.Name
        }
        this.chatBtn.on(cc.Node.EventType.TOUCH_END, this.OpenChatPanel, this)
    }

    // update (dt) {}

    OpenChatPanel() {
        this.chatNode.active = true
    }
}
