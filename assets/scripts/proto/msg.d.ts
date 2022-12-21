import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace myproto. */
export namespace myproto {

    /** MsgId enum. */
    enum MsgId {
        Msg_None = 0,
        Msg_RegisterREQ = 1,
        Msg_RegisterACK = 2,
        Msg_LoginREQ = 3,
        Msg_LoginACK = 4,
        Msg_CreateRoleREQ = 5,
        Msg_CreateRoleACK = 6,
        Msg_EnterGameREQ = 7,
        Msg_EnterGameACK = 8,
        Msg_LogoutREQ = 9,
        Msg_LogoutACK = 10,
        Msg_KickPUSH = 11,
        Msg_ChatREQ = 12,
        Msg_ChatACK = 13,
        Msg_ChatPUSH = 14,
        Msg_GMREQ = 15,
        Msg_GMACK = 16,
        Msg_ItemUpdatePUSH = 17,
        Msg_CreateBattleREQ = 100,
        Msg_CreateBattleACK = 101,
        Msg_BattleInfoPUSH = 102,
        Msg_BattleStartPUSH = 103,
        Msg_BattleActionPUSH = 104,
        Msg_BattleFinishPUSH = 105
    }

    /** ResultCode enum. */
    enum ResultCode {
        Success = 0,
        MsgErr = 1,
        AccountExist = 101,
        AccountNotExist = 102,
        RoleNameExist = 103,
        PasswordErr = 104,
        AlreadyLogin = 105,
        AccountEmpty = 106,
        PasswordEmpty = 107,
        AccountErr = 108,
        AlreadyHasRole = 109,
        NeedLogin = 110,
        RoleNameIllegal = 111,
        CreateRoleFaild = 112,
        EnterGameFailed = 113,
        PlayerNotFound = 114,
        GMCmdNotFound = 115,
        GMCmdParamErr = 116,
        GMCmdExecErr = 117,
        CreateBattleFailed = 118
    }

    /** Properties of a RegisterREQ. */
    interface IRegisterREQ {

        /** RegisterREQ Account */
        Account?: (string|null);

        /** RegisterREQ Password */
        Password?: (string|null);
    }

    /** Represents a RegisterREQ. */
    class RegisterREQ implements IRegisterREQ {

        /**
         * Constructs a new RegisterREQ.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IRegisterREQ);

        /** RegisterREQ Account. */
        public Account: string;

        /** RegisterREQ Password. */
        public Password: string;

        /**
         * Creates a new RegisterREQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterREQ instance
         */
        public static create(properties?: myproto.IRegisterREQ): myproto.RegisterREQ;

        /**
         * Encodes the specified RegisterREQ message. Does not implicitly {@link myproto.RegisterREQ.verify|verify} messages.
         * @param m RegisterREQ message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IRegisterREQ, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterREQ message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RegisterREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.RegisterREQ;

        /**
         * Gets the default type url for RegisterREQ
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterACK. */
    interface IRegisterACK {

        /** RegisterACK Ret */
        Ret?: (myproto.ResultCode|null);
    }

    /** Represents a RegisterACK. */
    class RegisterACK implements IRegisterACK {

        /**
         * Constructs a new RegisterACK.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IRegisterACK);

        /** RegisterACK Ret. */
        public Ret: myproto.ResultCode;

        /**
         * Creates a new RegisterACK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterACK instance
         */
        public static create(properties?: myproto.IRegisterACK): myproto.RegisterACK;

        /**
         * Encodes the specified RegisterACK message. Does not implicitly {@link myproto.RegisterACK.verify|verify} messages.
         * @param m RegisterACK message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IRegisterACK, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterACK message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RegisterACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.RegisterACK;

        /**
         * Gets the default type url for RegisterACK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginREQ. */
    interface ILoginREQ {

        /** LoginREQ Account */
        Account?: (string|null);

        /** LoginREQ Password */
        Password?: (string|null);
    }

    /** Represents a LoginREQ. */
    class LoginREQ implements ILoginREQ {

        /**
         * Constructs a new LoginREQ.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.ILoginREQ);

        /** LoginREQ Account. */
        public Account: string;

        /** LoginREQ Password. */
        public Password: string;

        /**
         * Creates a new LoginREQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginREQ instance
         */
        public static create(properties?: myproto.ILoginREQ): myproto.LoginREQ;

        /**
         * Encodes the specified LoginREQ message. Does not implicitly {@link myproto.LoginREQ.verify|verify} messages.
         * @param m LoginREQ message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.ILoginREQ, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginREQ message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LoginREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.LoginREQ;

        /**
         * Gets the default type url for LoginREQ
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginACK. */
    interface ILoginACK {

        /** LoginACK Ret */
        Ret?: (myproto.ResultCode|null);

        /** LoginACK Uid */
        Uid?: (number|Long|null);

        /** LoginACK HasRole */
        HasRole?: (boolean|null);
    }

    /** Represents a LoginACK. */
    class LoginACK implements ILoginACK {

        /**
         * Constructs a new LoginACK.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.ILoginACK);

        /** LoginACK Ret. */
        public Ret: myproto.ResultCode;

        /** LoginACK Uid. */
        public Uid: (number|Long);

        /** LoginACK HasRole. */
        public HasRole: boolean;

        /**
         * Creates a new LoginACK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginACK instance
         */
        public static create(properties?: myproto.ILoginACK): myproto.LoginACK;

        /**
         * Encodes the specified LoginACK message. Does not implicitly {@link myproto.LoginACK.verify|verify} messages.
         * @param m LoginACK message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.ILoginACK, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginACK message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LoginACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.LoginACK;

        /**
         * Gets the default type url for LoginACK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerBagInfo. */
    interface IPlayerBagInfo {

        /** PlayerBagInfo Unoccupied */
        Unoccupied?: ({ [k: string]: (number|Long) }|null);

        /** PlayerBagInfo StackItems */
        StackItems?: ({ [k: string]: myproto.IItem }|null);

        /** PlayerBagInfo UnstackItems */
        UnstackItems?: ({ [k: string]: myproto.IItem }|null);
    }

    /** Represents a PlayerBagInfo. */
    class PlayerBagInfo implements IPlayerBagInfo {

        /**
         * Constructs a new PlayerBagInfo.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IPlayerBagInfo);

        /** PlayerBagInfo Unoccupied. */
        public Unoccupied: { [k: string]: (number|Long) };

        /** PlayerBagInfo StackItems. */
        public StackItems: { [k: string]: myproto.IItem };

        /** PlayerBagInfo UnstackItems. */
        public UnstackItems: { [k: string]: myproto.IItem };

        /**
         * Creates a new PlayerBagInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerBagInfo instance
         */
        public static create(properties?: myproto.IPlayerBagInfo): myproto.PlayerBagInfo;

        /**
         * Encodes the specified PlayerBagInfo message. Does not implicitly {@link myproto.PlayerBagInfo.verify|verify} messages.
         * @param m PlayerBagInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IPlayerBagInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerBagInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.PlayerBagInfo;

        /**
         * Gets the default type url for PlayerBagInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo Uid */
        Uid?: (number|Long|null);

        /** PlayerInfo Name */
        Name?: (string|null);

        /** PlayerInfo BagInfo */
        BagInfo?: (myproto.IPlayerBagInfo|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IPlayerInfo);

        /** PlayerInfo Uid. */
        public Uid: (number|Long);

        /** PlayerInfo Name. */
        public Name: string;

        /** PlayerInfo BagInfo. */
        public BagInfo?: (myproto.IPlayerBagInfo|null);

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: myproto.IPlayerInfo): myproto.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link myproto.PlayerInfo.verify|verify} messages.
         * @param m PlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.PlayerInfo;

        /**
         * Gets the default type url for PlayerInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateRoleREQ. */
    interface ICreateRoleREQ {

        /** CreateRoleREQ Name */
        Name?: (string|null);
    }

    /** Represents a CreateRoleREQ. */
    class CreateRoleREQ implements ICreateRoleREQ {

        /**
         * Constructs a new CreateRoleREQ.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.ICreateRoleREQ);

        /** CreateRoleREQ Name. */
        public Name: string;

        /**
         * Creates a new CreateRoleREQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoleREQ instance
         */
        public static create(properties?: myproto.ICreateRoleREQ): myproto.CreateRoleREQ;

        /**
         * Encodes the specified CreateRoleREQ message. Does not implicitly {@link myproto.CreateRoleREQ.verify|verify} messages.
         * @param m CreateRoleREQ message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.ICreateRoleREQ, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoleREQ message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CreateRoleREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.CreateRoleREQ;

        /**
         * Gets the default type url for CreateRoleREQ
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateRoleACK. */
    interface ICreateRoleACK {

        /** CreateRoleACK Ret */
        Ret?: (myproto.ResultCode|null);
    }

    /** Represents a CreateRoleACK. */
    class CreateRoleACK implements ICreateRoleACK {

        /**
         * Constructs a new CreateRoleACK.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.ICreateRoleACK);

        /** CreateRoleACK Ret. */
        public Ret: myproto.ResultCode;

        /**
         * Creates a new CreateRoleACK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoleACK instance
         */
        public static create(properties?: myproto.ICreateRoleACK): myproto.CreateRoleACK;

        /**
         * Encodes the specified CreateRoleACK message. Does not implicitly {@link myproto.CreateRoleACK.verify|verify} messages.
         * @param m CreateRoleACK message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.ICreateRoleACK, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoleACK message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CreateRoleACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.CreateRoleACK;

        /**
         * Gets the default type url for CreateRoleACK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnterGameREQ. */
    interface IEnterGameREQ {
    }

    /** Represents an EnterGameREQ. */
    class EnterGameREQ implements IEnterGameREQ {

        /**
         * Constructs a new EnterGameREQ.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IEnterGameREQ);

        /**
         * Creates a new EnterGameREQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterGameREQ instance
         */
        public static create(properties?: myproto.IEnterGameREQ): myproto.EnterGameREQ;

        /**
         * Encodes the specified EnterGameREQ message. Does not implicitly {@link myproto.EnterGameREQ.verify|verify} messages.
         * @param m EnterGameREQ message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IEnterGameREQ, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterGameREQ message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EnterGameREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.EnterGameREQ;

        /**
         * Gets the default type url for EnterGameREQ
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnterGameACK. */
    interface IEnterGameACK {

        /** EnterGameACK Ret */
        Ret?: (myproto.ResultCode|null);

        /** EnterGameACK Info */
        Info?: (myproto.IPlayerInfo|null);
    }

    /** Represents an EnterGameACK. */
    class EnterGameACK implements IEnterGameACK {

        /**
         * Constructs a new EnterGameACK.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IEnterGameACK);

        /** EnterGameACK Ret. */
        public Ret: myproto.ResultCode;

        /** EnterGameACK Info. */
        public Info?: (myproto.IPlayerInfo|null);

        /**
         * Creates a new EnterGameACK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterGameACK instance
         */
        public static create(properties?: myproto.IEnterGameACK): myproto.EnterGameACK;

        /**
         * Encodes the specified EnterGameACK message. Does not implicitly {@link myproto.EnterGameACK.verify|verify} messages.
         * @param m EnterGameACK message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IEnterGameACK, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterGameACK message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EnterGameACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.EnterGameACK;

        /**
         * Gets the default type url for EnterGameACK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LogoutREQ. */
    interface ILogoutREQ {
    }

    /** Represents a LogoutREQ. */
    class LogoutREQ implements ILogoutREQ {

        /**
         * Constructs a new LogoutREQ.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.ILogoutREQ);

        /**
         * Creates a new LogoutREQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogoutREQ instance
         */
        public static create(properties?: myproto.ILogoutREQ): myproto.LogoutREQ;

        /**
         * Encodes the specified LogoutREQ message. Does not implicitly {@link myproto.LogoutREQ.verify|verify} messages.
         * @param m LogoutREQ message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.ILogoutREQ, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogoutREQ message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LogoutREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.LogoutREQ;

        /**
         * Gets the default type url for LogoutREQ
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LogoutACK. */
    interface ILogoutACK {

        /** LogoutACK Ret */
        Ret?: (myproto.ResultCode|null);
    }

    /** Represents a LogoutACK. */
    class LogoutACK implements ILogoutACK {

        /**
         * Constructs a new LogoutACK.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.ILogoutACK);

        /** LogoutACK Ret. */
        public Ret: myproto.ResultCode;

        /**
         * Creates a new LogoutACK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogoutACK instance
         */
        public static create(properties?: myproto.ILogoutACK): myproto.LogoutACK;

        /**
         * Encodes the specified LogoutACK message. Does not implicitly {@link myproto.LogoutACK.verify|verify} messages.
         * @param m LogoutACK message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.ILogoutACK, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogoutACK message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LogoutACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.LogoutACK;

        /**
         * Gets the default type url for LogoutACK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KickPUSH. */
    interface IKickPUSH {
    }

    /** Represents a KickPUSH. */
    class KickPUSH implements IKickPUSH {

        /**
         * Constructs a new KickPUSH.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IKickPUSH);

        /**
         * Creates a new KickPUSH instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickPUSH instance
         */
        public static create(properties?: myproto.IKickPUSH): myproto.KickPUSH;

        /**
         * Encodes the specified KickPUSH message. Does not implicitly {@link myproto.KickPUSH.verify|verify} messages.
         * @param m KickPUSH message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IKickPUSH, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickPUSH message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns KickPUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.KickPUSH;

        /**
         * Gets the default type url for KickPUSH
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChatREQ. */
    interface IChatREQ {

        /** ChatREQ Msg */
        Msg?: (string|null);
    }

    /** Represents a ChatREQ. */
    class ChatREQ implements IChatREQ {

        /**
         * Constructs a new ChatREQ.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IChatREQ);

        /** ChatREQ Msg. */
        public Msg: string;

        /**
         * Creates a new ChatREQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatREQ instance
         */
        public static create(properties?: myproto.IChatREQ): myproto.ChatREQ;

        /**
         * Encodes the specified ChatREQ message. Does not implicitly {@link myproto.ChatREQ.verify|verify} messages.
         * @param m ChatREQ message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IChatREQ, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatREQ message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ChatREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.ChatREQ;

        /**
         * Gets the default type url for ChatREQ
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChatACK. */
    interface IChatACK {

        /** ChatACK Ret */
        Ret?: (myproto.ResultCode|null);
    }

    /** Represents a ChatACK. */
    class ChatACK implements IChatACK {

        /**
         * Constructs a new ChatACK.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IChatACK);

        /** ChatACK Ret. */
        public Ret: myproto.ResultCode;

        /**
         * Creates a new ChatACK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatACK instance
         */
        public static create(properties?: myproto.IChatACK): myproto.ChatACK;

        /**
         * Encodes the specified ChatACK message. Does not implicitly {@link myproto.ChatACK.verify|verify} messages.
         * @param m ChatACK message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IChatACK, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatACK message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ChatACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.ChatACK;

        /**
         * Gets the default type url for ChatACK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChatPUSH. */
    interface IChatPUSH {

        /** ChatPUSH Uid */
        Uid?: (number|Long|null);

        /** ChatPUSH Name */
        Name?: (string|null);

        /** ChatPUSH Msg */
        Msg?: (string|null);
    }

    /** Represents a ChatPUSH. */
    class ChatPUSH implements IChatPUSH {

        /**
         * Constructs a new ChatPUSH.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IChatPUSH);

        /** ChatPUSH Uid. */
        public Uid: (number|Long);

        /** ChatPUSH Name. */
        public Name: string;

        /** ChatPUSH Msg. */
        public Msg: string;

        /**
         * Creates a new ChatPUSH instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatPUSH instance
         */
        public static create(properties?: myproto.IChatPUSH): myproto.ChatPUSH;

        /**
         * Encodes the specified ChatPUSH message. Does not implicitly {@link myproto.ChatPUSH.verify|verify} messages.
         * @param m ChatPUSH message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IChatPUSH, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatPUSH message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ChatPUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.ChatPUSH;

        /**
         * Gets the default type url for ChatPUSH
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** UnitType enum. */
    enum UnitType {
        UnitMonster = 0,
        UnitPlayer = 1
    }

    /** TargetType enum. */
    enum TargetType {
        TargetNone = 0,
        EnemySingle = 1,
        EnemySingleFront = 2,
        EnemySingleBehind = 3,
        EnemyAll = 4,
        EnemyFrontAll = 5,
        EnemyBehindAll = 6,
        TargetSelf = 10,
        AllySingle = 11,
        AllySingleFront = 12,
        AllySingleBehind = 13,
        AllyAll = 14,
        AllyFrontAll = 15,
        AllyBehindAll = 16
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item Id */
        Id?: (number|Long|null);

        /** Item ItemId */
        ItemId?: (number|null);

        /** Item Num */
        Num?: (number|Long|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IItem);

        /** Item Id. */
        public Id: (number|Long);

        /** Item ItemId. */
        public ItemId: number;

        /** Item Num. */
        public Num: (number|Long);

        /**
         * Creates a new Item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Item instance
         */
        public static create(properties?: myproto.IItem): myproto.Item;

        /**
         * Encodes the specified Item message. Does not implicitly {@link myproto.Item.verify|verify} messages.
         * @param m Item message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.Item;

        /**
         * Gets the default type url for Item
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ItemType enum. */
    enum ItemType {
        ItemTypeNone = 0,
        UnoccupiedItem = 1,
        StackItem = 2,
        UnstackItem = 3,
        EquipItem = 4
    }

    /** Quality enum. */
    enum Quality {
        QualityNone = 0,
        White = 1,
        Green = 2,
        Blue = 3,
        Purple = 4,
        Orange = 5
    }

    /** Properties of a GMREQ. */
    interface IGMREQ {

        /** GMREQ Cmd */
        Cmd?: (string|null);
    }

    /** Represents a GMREQ. */
    class GMREQ implements IGMREQ {

        /**
         * Constructs a new GMREQ.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IGMREQ);

        /** GMREQ Cmd. */
        public Cmd: string;

        /**
         * Creates a new GMREQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GMREQ instance
         */
        public static create(properties?: myproto.IGMREQ): myproto.GMREQ;

        /**
         * Encodes the specified GMREQ message. Does not implicitly {@link myproto.GMREQ.verify|verify} messages.
         * @param m GMREQ message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IGMREQ, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GMREQ message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GMREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.GMREQ;

        /**
         * Gets the default type url for GMREQ
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GMACK. */
    interface IGMACK {

        /** GMACK Ret */
        Ret?: (myproto.ResultCode|null);
    }

    /** Represents a GMACK. */
    class GMACK implements IGMACK {

        /**
         * Constructs a new GMACK.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IGMACK);

        /** GMACK Ret. */
        public Ret: myproto.ResultCode;

        /**
         * Creates a new GMACK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GMACK instance
         */
        public static create(properties?: myproto.IGMACK): myproto.GMACK;

        /**
         * Encodes the specified GMACK message. Does not implicitly {@link myproto.GMACK.verify|verify} messages.
         * @param m GMACK message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IGMACK, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GMACK message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GMACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.GMACK;

        /**
         * Gets the default type url for GMACK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ItemUpdateType enum. */
    enum ItemUpdateType {
        ItemUpdateNone = 0,
        ItemAdd = 1,
        ItemDel = 2
    }

    /** Properties of an ItemUpdatePUSH. */
    interface IItemUpdatePUSH {

        /** ItemUpdatePUSH UpdateType */
        UpdateType?: (myproto.ItemUpdateType|null);

        /** ItemUpdatePUSH Items */
        Items?: (myproto.IItem[]|null);
    }

    /** Represents an ItemUpdatePUSH. */
    class ItemUpdatePUSH implements IItemUpdatePUSH {

        /**
         * Constructs a new ItemUpdatePUSH.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IItemUpdatePUSH);

        /** ItemUpdatePUSH UpdateType. */
        public UpdateType: myproto.ItemUpdateType;

        /** ItemUpdatePUSH Items. */
        public Items: myproto.IItem[];

        /**
         * Creates a new ItemUpdatePUSH instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemUpdatePUSH instance
         */
        public static create(properties?: myproto.IItemUpdatePUSH): myproto.ItemUpdatePUSH;

        /**
         * Encodes the specified ItemUpdatePUSH message. Does not implicitly {@link myproto.ItemUpdatePUSH.verify|verify} messages.
         * @param m ItemUpdatePUSH message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IItemUpdatePUSH, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemUpdatePUSH message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ItemUpdatePUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.ItemUpdatePUSH;

        /**
         * Gets the default type url for ItemUpdatePUSH
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateBattleREQ. */
    interface ICreateBattleREQ {

        /** CreateBattleREQ LevelId */
        LevelId?: (number|null);
    }

    /** Represents a CreateBattleREQ. */
    class CreateBattleREQ implements ICreateBattleREQ {

        /**
         * Constructs a new CreateBattleREQ.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.ICreateBattleREQ);

        /** CreateBattleREQ LevelId. */
        public LevelId: number;

        /**
         * Creates a new CreateBattleREQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateBattleREQ instance
         */
        public static create(properties?: myproto.ICreateBattleREQ): myproto.CreateBattleREQ;

        /**
         * Encodes the specified CreateBattleREQ message. Does not implicitly {@link myproto.CreateBattleREQ.verify|verify} messages.
         * @param m CreateBattleREQ message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.ICreateBattleREQ, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateBattleREQ message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CreateBattleREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.CreateBattleREQ;

        /**
         * Gets the default type url for CreateBattleREQ
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateBattleACK. */
    interface ICreateBattleACK {

        /** CreateBattleACK Ret */
        Ret?: (myproto.ResultCode|null);
    }

    /** Represents a CreateBattleACK. */
    class CreateBattleACK implements ICreateBattleACK {

        /**
         * Constructs a new CreateBattleACK.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.ICreateBattleACK);

        /** CreateBattleACK Ret. */
        public Ret: myproto.ResultCode;

        /**
         * Creates a new CreateBattleACK instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateBattleACK instance
         */
        public static create(properties?: myproto.ICreateBattleACK): myproto.CreateBattleACK;

        /**
         * Encodes the specified CreateBattleACK message. Does not implicitly {@link myproto.CreateBattleACK.verify|verify} messages.
         * @param m CreateBattleACK message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.ICreateBattleACK, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateBattleACK message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CreateBattleACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.CreateBattleACK;

        /**
         * Gets the default type url for CreateBattleACK
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattleUint. */
    interface IBattleUint {

        /** BattleUint Id */
        Id?: (number|null);

        /** BattleUint Uid */
        Uid?: (number|Long|null);

        /** BattleUint Name */
        Name?: (string|null);

        /** BattleUint Team */
        Team?: (number|null);

        /** BattleUint Position */
        Position?: (number|null);

        /** BattleUint HP */
        HP?: (number|Long|null);

        /** BattleUint MaxHP */
        MaxHP?: (number|Long|null);
    }

    /** Represents a BattleUint. */
    class BattleUint implements IBattleUint {

        /**
         * Constructs a new BattleUint.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IBattleUint);

        /** BattleUint Id. */
        public Id: number;

        /** BattleUint Uid. */
        public Uid: (number|Long);

        /** BattleUint Name. */
        public Name: string;

        /** BattleUint Team. */
        public Team: number;

        /** BattleUint Position. */
        public Position: number;

        /** BattleUint HP. */
        public HP: (number|Long);

        /** BattleUint MaxHP. */
        public MaxHP: (number|Long);

        /**
         * Creates a new BattleUint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleUint instance
         */
        public static create(properties?: myproto.IBattleUint): myproto.BattleUint;

        /**
         * Encodes the specified BattleUint message. Does not implicitly {@link myproto.BattleUint.verify|verify} messages.
         * @param m BattleUint message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IBattleUint, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleUint message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BattleUint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.BattleUint;

        /**
         * Gets the default type url for BattleUint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattleInfoPUSH. */
    interface IBattleInfoPUSH {

        /** BattleInfoPUSH BattleId */
        BattleId?: (number|Long|null);

        /** BattleInfoPUSH LevelId */
        LevelId?: (number|null);

        /** BattleInfoPUSH Units */
        Units?: (myproto.IBattleUint[]|null);
    }

    /** Represents a BattleInfoPUSH. */
    class BattleInfoPUSH implements IBattleInfoPUSH {

        /**
         * Constructs a new BattleInfoPUSH.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IBattleInfoPUSH);

        /** BattleInfoPUSH BattleId. */
        public BattleId: (number|Long);

        /** BattleInfoPUSH LevelId. */
        public LevelId: number;

        /** BattleInfoPUSH Units. */
        public Units: myproto.IBattleUint[];

        /**
         * Creates a new BattleInfoPUSH instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleInfoPUSH instance
         */
        public static create(properties?: myproto.IBattleInfoPUSH): myproto.BattleInfoPUSH;

        /**
         * Encodes the specified BattleInfoPUSH message. Does not implicitly {@link myproto.BattleInfoPUSH.verify|verify} messages.
         * @param m BattleInfoPUSH message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IBattleInfoPUSH, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleInfoPUSH message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BattleInfoPUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.BattleInfoPUSH;

        /**
         * Gets the default type url for BattleInfoPUSH
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattleStartPUSH. */
    interface IBattleStartPUSH {

        /** BattleStartPUSH BattleId */
        BattleId?: (number|Long|null);
    }

    /** Represents a BattleStartPUSH. */
    class BattleStartPUSH implements IBattleStartPUSH {

        /**
         * Constructs a new BattleStartPUSH.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IBattleStartPUSH);

        /** BattleStartPUSH BattleId. */
        public BattleId: (number|Long);

        /**
         * Creates a new BattleStartPUSH instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleStartPUSH instance
         */
        public static create(properties?: myproto.IBattleStartPUSH): myproto.BattleStartPUSH;

        /**
         * Encodes the specified BattleStartPUSH message. Does not implicitly {@link myproto.BattleStartPUSH.verify|verify} messages.
         * @param m BattleStartPUSH message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IBattleStartPUSH, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleStartPUSH message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BattleStartPUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.BattleStartPUSH;

        /**
         * Gets the default type url for BattleStartPUSH
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattleSkillStart. */
    interface IBattleSkillStart {

        /** BattleSkillStart Src */
        Src?: (number|null);

        /** BattleSkillStart SkillId */
        SkillId?: (number|null);

        /** BattleSkillStart Tar */
        Tar?: (number[]|null);
    }

    /** Represents a BattleSkillStart. */
    class BattleSkillStart implements IBattleSkillStart {

        /**
         * Constructs a new BattleSkillStart.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IBattleSkillStart);

        /** BattleSkillStart Src. */
        public Src: number;

        /** BattleSkillStart SkillId. */
        public SkillId: number;

        /** BattleSkillStart Tar. */
        public Tar: number[];

        /**
         * Creates a new BattleSkillStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleSkillStart instance
         */
        public static create(properties?: myproto.IBattleSkillStart): myproto.BattleSkillStart;

        /**
         * Encodes the specified BattleSkillStart message. Does not implicitly {@link myproto.BattleSkillStart.verify|verify} messages.
         * @param m BattleSkillStart message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IBattleSkillStart, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleSkillStart message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BattleSkillStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.BattleSkillStart;

        /**
         * Gets the default type url for BattleSkillStart
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattleSkillEffect. */
    interface IBattleSkillEffect {

        /** BattleSkillEffect Src */
        Src?: (number|null);

        /** BattleSkillEffect SkillId */
        SkillId?: (number|null);

        /** BattleSkillEffect Tar */
        Tar?: (number|null);

        /** BattleSkillEffect IsHeal */
        IsHeal?: (boolean|null);

        /** BattleSkillEffect Value */
        Value?: (number|Long|null);
    }

    /** Represents a BattleSkillEffect. */
    class BattleSkillEffect implements IBattleSkillEffect {

        /**
         * Constructs a new BattleSkillEffect.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IBattleSkillEffect);

        /** BattleSkillEffect Src. */
        public Src: number;

        /** BattleSkillEffect SkillId. */
        public SkillId: number;

        /** BattleSkillEffect Tar. */
        public Tar: number;

        /** BattleSkillEffect IsHeal. */
        public IsHeal: boolean;

        /** BattleSkillEffect Value. */
        public Value: (number|Long);

        /**
         * Creates a new BattleSkillEffect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleSkillEffect instance
         */
        public static create(properties?: myproto.IBattleSkillEffect): myproto.BattleSkillEffect;

        /**
         * Encodes the specified BattleSkillEffect message. Does not implicitly {@link myproto.BattleSkillEffect.verify|verify} messages.
         * @param m BattleSkillEffect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IBattleSkillEffect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleSkillEffect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BattleSkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.BattleSkillEffect;

        /**
         * Gets the default type url for BattleSkillEffect
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattleActionPUSH. */
    interface IBattleActionPUSH {

        /** BattleActionPUSH Effects */
        Effects?: (myproto.IBattleSkillEffect[]|null);

        /** BattleActionPUSH Skills */
        Skills?: (myproto.IBattleSkillStart[]|null);
    }

    /** Represents a BattleActionPUSH. */
    class BattleActionPUSH implements IBattleActionPUSH {

        /**
         * Constructs a new BattleActionPUSH.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IBattleActionPUSH);

        /** BattleActionPUSH Effects. */
        public Effects: myproto.IBattleSkillEffect[];

        /** BattleActionPUSH Skills. */
        public Skills: myproto.IBattleSkillStart[];

        /**
         * Creates a new BattleActionPUSH instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleActionPUSH instance
         */
        public static create(properties?: myproto.IBattleActionPUSH): myproto.BattleActionPUSH;

        /**
         * Encodes the specified BattleActionPUSH message. Does not implicitly {@link myproto.BattleActionPUSH.verify|verify} messages.
         * @param m BattleActionPUSH message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IBattleActionPUSH, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleActionPUSH message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BattleActionPUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.BattleActionPUSH;

        /**
         * Gets the default type url for BattleActionPUSH
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BattleFinishPUSH. */
    interface IBattleFinishPUSH {

        /** BattleFinishPUSH Win */
        Win?: (boolean|null);
    }

    /** Represents a BattleFinishPUSH. */
    class BattleFinishPUSH implements IBattleFinishPUSH {

        /**
         * Constructs a new BattleFinishPUSH.
         * @param [p] Properties to set
         */
        constructor(p?: myproto.IBattleFinishPUSH);

        /** BattleFinishPUSH Win. */
        public Win: boolean;

        /**
         * Creates a new BattleFinishPUSH instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleFinishPUSH instance
         */
        public static create(properties?: myproto.IBattleFinishPUSH): myproto.BattleFinishPUSH;

        /**
         * Encodes the specified BattleFinishPUSH message. Does not implicitly {@link myproto.BattleFinishPUSH.verify|verify} messages.
         * @param m BattleFinishPUSH message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: myproto.IBattleFinishPUSH, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleFinishPUSH message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BattleFinishPUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): myproto.BattleFinishPUSH;

        /**
         * Gets the default type url for BattleFinishPUSH
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
