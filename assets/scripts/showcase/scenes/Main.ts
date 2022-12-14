import Layer from "../../common/cmpt/base/Layer";
import { DirUrl, ResUrl } from "../../common/const/Url";
import Res from "../../common/util/Res";
import { NetMgr } from "../../net/NetMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(cc.Label) public dcLab: cc.Label = null;

    protected async start() {
        NetMgr.Get().Init()
        Layer.inst.showLoading();
        await Res.loadDir(DirUrl.AudioCommon, cc.AudioClip);
        await Res.loadDir(DirUrl.JsonData, cc.JsonAsset)
        Layer.inst.hideLoading();
        Layer.inst.enterMain(ResUrl.PREFAB.Login);
        // 60s清理一次缓存
        this.schedule(() => {
            Res.releaseAll();
        }, 60);
    }

    protected lateUpdate() {
        this.dcLab.string = `DrawCall: ${cc.renderer.drawCalls}`;
    }
}
