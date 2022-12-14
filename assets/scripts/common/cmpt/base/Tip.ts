const { ccclass, property, disallowMultiple, menu } = cc._decorator;

@ccclass
@disallowMultiple
@menu("Framework/基础组件/Tip")
export default class Tip extends cc.Component {

    @property(cc.Label) private textLab: cc.Label = null;

    public init(text: string): void {
        this.textLab.string = text;
        this.textLab["_forceUpdateRenderData"]();
    }
}
