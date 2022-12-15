import { myproto } from "../proto/msg"

export class ResultMsg {
    public static GetResultMsg(ret: myproto.ResultCode): string {
        switch (ret) {
            case myproto.ResultCode.Success:
                return "成功"
            case myproto.ResultCode.MsgErr:
                return "消息解析错误"
            case myproto.ResultCode.AccountExist:
                return "账号已存在"
            case myproto.ResultCode.AccountNotExist:
                return "账号不存在"
            case myproto.ResultCode.RoleNameExist:
                return "角色名已存在"
            case myproto.ResultCode.PasswordErr:
                return "密码错误"
            case myproto.ResultCode.AlreadyLogin:
                return "你已登录"
            case myproto.ResultCode.AccountEmpty:
                return "账号不能为空"
            case myproto.ResultCode.PasswordEmpty:
                return "密码不能为空"
            case myproto.ResultCode.AccountErr:
                return "账号错误"
            case myproto.ResultCode.AlreadyHasRole:
                return "已经创建过角色"
            case myproto.ResultCode.NeedLogin:
                return "还未登录"
            case myproto.ResultCode.RoleNameIllegal:
                return "名字不合法"
            case myproto.ResultCode.CreateRoleFaild:
                return "角色创建失败"
            case myproto.ResultCode.EnterGameFailed:
                return "进入游戏失败"
            default:
                break
        }
        return "错误" + ret
    }
}