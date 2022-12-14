import Res from "../../common/util/Res"

export class ExampleInfo {
    public ID: number// 数字
    public Name: string// 字符串
    public Ignore: number// 服务器不用字段
    public Slc1: Array<number>// 数组
}

export class AbbInfo {
    public ID: number// ID
    public Sth: string// 参数1
    public Other: string// 其他
}

export class ExampleConfig {
    private static instance: ExampleConfig
    public static Get(): ExampleConfig {
        if (ExampleConfig.instance == null) {
            ExampleConfig.instance = new ExampleConfig()
            ExampleConfig.instance.init()
        }
        return ExampleConfig.instance
    }

    public ExampleSlc: Array<ExampleInfo>
    public ExampleMap: Map<number, ExampleInfo>

    public AbbSlc: Array<AbbInfo>
    public AbbMap: Map<number, AbbInfo>

    private init(): void {
        this.ExampleSlc = new Array<ExampleInfo>()
        this.ExampleMap = new Map<number, ExampleInfo>()

        this.AbbSlc = new Array<AbbInfo>()
        this.AbbMap = new Map<number, AbbInfo>()

        let jsonData = Res.get<cc.JsonAsset>("json/Example", cc.JsonAsset)
        this.ExampleSlc = jsonData.json['Example']
        this.ExampleSlc.forEach(example => {
            this.ExampleMap.set(example.ID, example)
        })

        this.AbbSlc = jsonData.json['Abb']
        this.AbbSlc.forEach(abb => {
            this.AbbMap.set(abb.ID, abb)
        })

    }
}
