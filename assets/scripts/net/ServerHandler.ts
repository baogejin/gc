import { NetMgr } from "./NetMgr";
import { myproto } from "../proto/msg"


export class ServerHander {
    private static m_pInstance: ServerHander;
    public static Get(): ServerHander {
        if (!ServerHander.m_pInstance) {
            ServerHander.m_pInstance = new ServerHander();
        }
        return ServerHander.m_pInstance;
    }
    constructor() {
        this.Init();
    }

    private Init(): void {

    }

    public RegisterReq(account: string, password: string): void {
        let req: myproto.RegisterREQ = myproto.RegisterREQ.create()
        req.Account = account;
        req.Password = password;
        let buf: Uint8Array = myproto.RegisterREQ.encode(req).finish();
        NetMgr.Get().Send(myproto.MsgId.Msg_RegisterREQ, buf);
    }

    public LoginReq(account: string, password: string): void {
        let req: myproto.LoginREQ = myproto.LoginREQ.create()
        req.Account = account;
        req.Password = password
        let buf: Uint8Array = myproto.LoginREQ.encode(req).finish();
        NetMgr.Get().Send(myproto.MsgId.Msg_LoginREQ, buf);
    }

    public CreateRoleReq(name: string): void {
        let req: myproto.CreateRoleREQ = myproto.CreateRoleREQ.create()
        req.Name = name
        let buf: Uint8Array = myproto.CreateRoleREQ.encode(req).finish()
        NetMgr.Get().Send(myproto.MsgId.Msg_CreateRoleREQ, buf);
    }

    public EnterGame(): void {
        let req: myproto.EnterGameREQ = myproto.EnterGameREQ.create()
        let buf: Uint8Array = myproto.EnterGameREQ.encode(req).finish()
        NetMgr.Get().Send(myproto.MsgId.Msg_EnterGameREQ, buf);
    }

    public ChatReq(msg: string): void {
        if (msg == "") {
            return
        }
        let req: myproto.ChatREQ = myproto.ChatREQ.create()
        req.Msg = msg
        let buf: Uint8Array = myproto.ChatREQ.encode(req).finish()
        NetMgr.Get().Send(myproto.MsgId.Msg_ChatREQ, buf)
    }

    public GMReq(cmd: string): void {
        let req: myproto.GMREQ = myproto.GMREQ.create()
        req.Cmd = cmd
        let buf: Uint8Array = myproto.GMREQ.encode(req).finish()
        NetMgr.Get().Send(myproto.MsgId.Msg_GMREQ, buf)
    }

    public CreateBattleReq(levelId: number): void {
        let req: myproto.CreateBattleREQ = myproto.CreateBattleREQ.create()
        req.LevelId = levelId
        let buf: Uint8Array = myproto.CreateBattleREQ.encode(req).finish()
        NetMgr.Get().Send(myproto.MsgId.Msg_CreateBattleREQ, buf)
    }

    public BattleStartReq(battleId: number): void {
        let req: myproto.BattleStartREQ = myproto.BattleStartREQ.create()
        req.BattleId = battleId
        let buf: Uint8Array = myproto.BattleStartREQ.encode(req).finish()
        NetMgr.Get().Send(myproto.MsgId.Msg_BattleStartREQ, buf)
    }
}