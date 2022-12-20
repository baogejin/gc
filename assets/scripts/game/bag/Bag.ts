// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import DialogBase from "../../common/cmpt/base/DialogBase";
import VirtualList from "../../common/cmpt/ui/scrollList/VirtualList";
import { ResUrl } from "../../common/const/Url";
import AudioManager, { SfxType } from "../../common/util/AudioManager";
import Res from "../../common/util/Res";
import { EventDefine } from "../../event/EventDefine";
import EventMgr from "../../event/EventMgr";
import { ServerHander } from "../../net/ServerHandler";
import { myproto } from "../../proto/msg";
import { PlayerData } from "../playerdata/PlayerDataMgr";
import { ItemArgs } from "./Item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bag extends DialogBase {
    public static pUrl: string = "prefab/bag/bag";

    btn: cc.Node
    private closeBtn: cc.Node
    private list: VirtualList<ItemArgs>

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        let bg = this.node.getChildByName("bg")
        this.btn = bg.getChildByName("button")
        this.closeBtn = bg.getChildByName("closeBtn")
        this.list = bg.getChildByName("list").getComponent(VirtualList)

        this.btn.on(cc.Node.EventType.TOUCH_END, this.OnBtn, this)
        this.closeBtn.on(cc.Node.EventType.TOUCH_END, this.OnCloseBtn, this)
        EventMgr.Get().BindEvent(EventDefine.BagItemUpdate, this.updateList, this)

        this.updateList()
    }
    protected onDestroy(): void {
        EventMgr.Get().UnbindEvent(EventDefine.BagItemUpdate, this.updateList, this)
    }

    // update (dt) {}

    OnBtn() {
        ServerHander.Get().GMReq("additem 102 3")
    }

    private OnCloseBtn(): void {
        AudioManager.playSfx(Res.get<cc.AudioClip>(ResUrl.AUDIO.BtnClick, cc.AudioClip), SfxType.NORMAL);
        this.onClickClose()
    }

    private updateList(): void {
        let items = PlayerData.Get().BagInfo.GetBagItems()
        let arr = new Array<ItemArgs>()
        items.forEach(item => {
            arr.push({ Id: item.Id, ItemId: item.ItemId, Num: item.Num })
        })
        this.list.argsArr = arr
    }
}
