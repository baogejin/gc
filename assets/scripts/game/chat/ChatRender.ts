// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import VirtualItem from "../../common/cmpt/ui/scrollList/VirtualItem";
import { PlayerData } from "../playerdata/PlayerDataMgr";

const { ccclass, property } = cc._decorator;

export class ChatArgs {
    public Uid: number
    public Name: string
    public Msg: string
}

@ccclass
export default class ChatRender extends VirtualItem<ChatArgs> {
    private nameLabel: cc.Label
    private msgLabel: cc.Label
    public Uid: number

    onLoad() {
        this.nameLabel = this.node.getChildByName("name").getComponent(cc.Label)
        this.msgLabel = this.node.getChildByName("msgbg").getChildByName("label").getComponent(cc.Label)
    }

    public onRefresh(args: ChatArgs) {
        this.Uid = args.Uid
        this.nameLabel.string = args.Name
        this.msgLabel.string = args.Msg
        if (this.Uid == PlayerData.Get().PlayerInfo.Uid) {
            this.nameLabel.node.color = cc.Color.GREEN
        } else {
            this.nameLabel.node.color = cc.Color.YELLOW
        }
    }
}
