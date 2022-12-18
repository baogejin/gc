// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import VirtualItem from "../../common/cmpt/ui/scrollList/VirtualItem";
import Res from "../../common/util/Res";
import { ItemConfig } from "../../data/gencode/ItemCfg";
import { myproto } from "../../proto/msg";

const { ccclass, property } = cc._decorator;

export class ItemArgs {
    public ItemId: number
    public Num: number
}

@ccclass
export default class Item extends VirtualItem<ItemArgs> {
    private frame: cc.Sprite
    private icon: cc.Sprite
    private numLab: cc.Label

    protected async onLoad() {
        this.frame = this.node.getChildByName("frame").getComponent(cc.Sprite)
        this.icon = this.node.getChildByName("icon").getComponent(cc.Sprite)
        this.numLab = this.node.getChildByName("num").getComponent(cc.Label)

        let sf = await Res.load<cc.SpriteFrame>("textures/item/icon/102", cc.SpriteFrame)
        if (sf != null) {
            this.icon.spriteFrame = sf
        }
    }
    public async onRefresh(args: ItemArgs) {
        let itemInfo = ItemConfig.Get().ItemMap.get(args.ItemId)
        if (itemInfo == null) {
            return
        }
        let iconsf = await Res.load<cc.SpriteFrame>("textures/item/icon/" + itemInfo.Icon, cc.SpriteFrame)
        if (iconsf != null) {
            this.icon.spriteFrame = iconsf
        }

        let framesf = await Res.load<cc.SpriteFrame>("textures/item/icon/" + this.getFrameRes(itemInfo.Quality) + itemInfo.Icon, cc.SpriteFrame)
        if (framesf != null) {
            this.frame.spriteFrame = framesf
        }
    }

    private getFrameRes(quality: number): string {
        switch (quality) {
            case myproto.Quality.White:
                return "white"
            case myproto.Quality.Green:
                return "green"
            case myproto.Quality.Blue:
                return "blue"
            case myproto.Quality.Purple:
                return "purple"
            case myproto.Quality.Orange:
                return "orange"
        }
        return "white"
    }
}