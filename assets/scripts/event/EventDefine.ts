export class EventDefine {
    private static EventBegin: number = 6666666

    private static get nextEventId(): number {
        return ++EventDefine.EventBegin
    }

    public static BagItemUpdate: number = EventDefine.nextEventId
}