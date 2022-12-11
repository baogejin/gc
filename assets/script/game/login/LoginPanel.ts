import { ServerHander } from "../../net/ServerHandler"

export class LoginPanel {
    private node: cc.Node
    private loginBtn: cc.Node
    private registerBtn: cc.Node
    private accountBox: cc.EditBox
    private passwordBox: cc.EditBox

    constructor(node: cc.Node) {
        this.node = node
        this.loginBtn = this.node.getChildByName("loginBtn")
        this.registerBtn = this.node.getChildByName("registerBtn")
        this.accountBox = this.node.getChildByName("account").getComponent(cc.EditBox)
        this.passwordBox = this.node.getChildByName("password").getComponent(cc.EditBox)

        this.registerBtn.on(cc.Node.EventType.TOUCH_END, this.OnRegisterBtn, this)
        this.loginBtn.on(cc.Node.EventType.TOUCH_END, this.OnLoginBtn, this)
    }

    private OnRegisterBtn(e): void {
        let account: string = this.accountBox.textLabel.string
        let password: string = this.passwordBox.getComponent(cc.EditBox).string
        if (account != "" && password != "") {
            ServerHander.Get().RegisterReq(account, password)
        }
    }

    private OnLoginBtn(e): void {
        let account: string = this.accountBox.textLabel.string
        let password: string = this.passwordBox.getComponent(cc.EditBox).string
        if (account != "" && password != "") {
            ServerHander.Get().LoginReq(account, password)
        }
    }
}