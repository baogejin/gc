import { ItemConfig } from "../../data/gencode/ItemCfg"
import { EventDefine } from "../../event/EventDefine"
import EventMgr from "../../event/EventMgr"
import { myproto } from "../../proto/msg"

export class BagInfo {
    public static NewBagInfo(): BagInfo {
        let info = new BagInfo()
        info.Unoccupied = new Map<number, number>()
        info.StackItems = new Map<number, myproto.Item>()
        info.UnstackItems = new Map<number, myproto.Item>()
        return info
    }

    public Unoccupied: Map<number, number>
    public StackItems: Map<number, myproto.Item>
    public UnstackItems: Map<number, myproto.Item>

    public SetInfo(info: myproto.PlayerBagInfo): void {
        if (info == null) {
            return
        }
        for (let k in info.Unoccupied) {
            this.Unoccupied.set(Number(k), info.Unoccupied[k])
        }
        for (let k in info.StackItems) {
            this.StackItems.set(Number(k), <myproto.Item>info.StackItems[k])
        }
        for (let k in info.UnstackItems) {
            this.UnstackItems.set(Number(k), <myproto.Item>info.UnstackItems[k])
        }
        console.log(this)
    }

    public GetBagItems(): Array<myproto.Item> {
        let ret = new Array<myproto.Item>()
        this.StackItems.forEach((value, key) => {
            ret.push(value)
        })
        this.UnstackItems.forEach((value, key) => {
            ret.push(value)
        })
        return ret
    }

    public addItems(items: Array<myproto.Item>): void {
        let bagItemUpdate = false
        items.forEach(item => {
            let cfg = ItemConfig.Get().ItemMap.get(item.ItemId)
            if (cfg == null) {
                return
            }
            if (cfg.Type == myproto.ItemType.UnoccupiedItem) {
                let num = this.Unoccupied.get(item.ItemId)
                this.Unoccupied.set(item.ItemId, num + item.Num)
            } else if (cfg.Type == myproto.ItemType.StackItem) {
                let bagItem = this.StackItems.get(item.ItemId)
                if (bagItem == null) {
                    bagItem = new myproto.Item({
                        ItemId: item.ItemId,
                        Num: item.Num
                    })
                } else {
                    bagItem.Num += item.Num
                }
                this.StackItems.set(item.ItemId, bagItem)
                bagItemUpdate = true
            } else if (cfg.Type == myproto.ItemType.UnstackItem || cfg.Type == myproto.ItemType.EquipItem) {
                this.UnstackItems.set(item.Id, item)
                bagItemUpdate = true
            }
        })
        if (bagItemUpdate) {
            EventMgr.Get().Emit(EventDefine.BagItemUpdate, null)
        }
    }

    public delItems(items: Array<myproto.Item>): void {
        items.forEach(item => {
            let cfg = ItemConfig.Get().ItemMap.get(item.ItemId)
            if (cfg == null) {
                return
            }
            if (cfg.Type == myproto.ItemType.UnoccupiedItem) {
                let num = this.Unoccupied.get(item.ItemId)
                if (num - item.Num <= 0) {
                    this.Unoccupied.delete(item.ItemId)
                } else {
                    this.Unoccupied.set(item.ItemId, num - item.Num)
                }
            } else if (cfg.Type == myproto.ItemType.StackItem) {
                let bagItem = this.StackItems.get(item.ItemId)
                if (bagItem != null) {
                    bagItem.Num -= item.Num
                    if (bagItem.Num <= 0) {
                        this.StackItems.delete(item.ItemId)
                    } else {
                        this.StackItems.set(item.ItemId, bagItem)
                    }
                }
            } else if (cfg.Type == myproto.ItemType.UnstackItem || cfg.Type == myproto.ItemType.EquipItem) {
                this.UnstackItems.delete(item.Id)
            }
        })
    }
}