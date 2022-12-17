import Res from "../../common/util/Res"

export class AnotherExampleConfig {
    private static instance: AnotherExampleConfig
    public static Get(): AnotherExampleConfig {
        if (AnotherExampleConfig.instance == null) {
            AnotherExampleConfig.instance = new AnotherExampleConfig()
            AnotherExampleConfig.instance.init()
        }
        return AnotherExampleConfig.instance
    }

    private init(): void {
        let jsonData = Res.get<cc.JsonAsset>("json/AnotherExample", cc.JsonAsset)
    }
}
