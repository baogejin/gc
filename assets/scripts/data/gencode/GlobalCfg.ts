import Res from "../../common/util/Res"

export class GlobalInfo {
    public Key: string
    public Value: number
    public SlcValue: Array<Array<number>>
    public StrValue: string
}

export class GlobalConfig {
    private static instance: GlobalConfig
    public static Get(): GlobalConfig {
        if (GlobalConfig.instance == null) {
            GlobalConfig.instance = new GlobalConfig()
            GlobalConfig.instance.init()
        }
        return GlobalConfig.instance
    }

    public GlobalSlc: Array<GlobalInfo>
    public GlobalMap: Map<string, GlobalInfo>

    private init(): void {
        this.GlobalSlc = new Array<GlobalInfo>()
        this.GlobalMap = new Map<string, GlobalInfo>()
        let jsonData = Res.get<cc.JsonAsset>("json/Global", cc.JsonAsset)
        this.GlobalSlc = jsonData.json['Global']
        this.GlobalSlc.forEach(global => {
            this.GlobalMap.set(global.Key, global)
        })
    }
}