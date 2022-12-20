export class PlayerInfo {
    public static NewPlayerInfo(): PlayerInfo {
        let info = new PlayerInfo()
        return info
    }
    public Uid: number
    public Name: string
}