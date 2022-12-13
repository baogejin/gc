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
        Msg_ChatPUSH = 14
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
        PlayerNotFound = 114
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

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo Uid */
        Uid?: (number|Long|null);

        /** PlayerInfo Name */
        Name?: (string|null);
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
}
