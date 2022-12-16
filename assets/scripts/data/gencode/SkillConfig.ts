import Res from "../../common/util/Res"

export class SkillInfo {
    public ID: number
    public Name: string
}

export class SkillConfig {
    private static instance: SkillConfig
    public static Get(): SkillConfig {
        if (SkillConfig.instance == null) {
            SkillConfig.instance = new SkillConfig()
            SkillConfig.instance.init()
        }
        return SkillConfig.instance
    }

    public SkillSlc: Array<SkillInfo>
    public SkillMap: Map<number, SkillInfo>

    private init(): void {
        this.SkillSlc = new Array<SkillInfo>()
        this.SkillMap = new Map<number, SkillInfo>()
        // console.log(this.SkillMap)
        let jsonData = Res.get<cc.JsonAsset>("json/Skill", cc.JsonAsset)
        console.log(jsonData)
        this.SkillSlc = jsonData.json['Skill']
        this.SkillSlc.forEach(skill => {
            this.SkillMap.set(skill.ID, skill)
        })
    }
}