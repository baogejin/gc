/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.myproto = (function () {

    /**
     * Namespace myproto.
     * @exports myproto
     * @namespace
     */
    var myproto = {};

    /**
     * MsgId enum.
     * @name myproto.MsgId
     * @enum {number}
     * @property {number} Msg_None=0 Msg_None value
     * @property {number} Msg_RegisterREQ=1 Msg_RegisterREQ value
     * @property {number} Msg_RegisterACK=2 Msg_RegisterACK value
     * @property {number} Msg_LoginREQ=3 Msg_LoginREQ value
     * @property {number} Msg_LoginACK=4 Msg_LoginACK value
     * @property {number} Msg_CreateRoleREQ=5 Msg_CreateRoleREQ value
     * @property {number} Msg_CreateRoleACK=6 Msg_CreateRoleACK value
     * @property {number} Msg_EnterGameREQ=7 Msg_EnterGameREQ value
     * @property {number} Msg_EnterGameACK=8 Msg_EnterGameACK value
     * @property {number} Msg_LogoutREQ=9 Msg_LogoutREQ value
     * @property {number} Msg_LogoutACK=10 Msg_LogoutACK value
     * @property {number} Msg_KickPUSH=11 Msg_KickPUSH value
     * @property {number} Msg_ChatREQ=12 Msg_ChatREQ value
     * @property {number} Msg_ChatACK=13 Msg_ChatACK value
     * @property {number} Msg_ChatPUSH=14 Msg_ChatPUSH value
     */
    myproto.MsgId = (function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Msg_None"] = 0;
        values[valuesById[1] = "Msg_RegisterREQ"] = 1;
        values[valuesById[2] = "Msg_RegisterACK"] = 2;
        values[valuesById[3] = "Msg_LoginREQ"] = 3;
        values[valuesById[4] = "Msg_LoginACK"] = 4;
        values[valuesById[5] = "Msg_CreateRoleREQ"] = 5;
        values[valuesById[6] = "Msg_CreateRoleACK"] = 6;
        values[valuesById[7] = "Msg_EnterGameREQ"] = 7;
        values[valuesById[8] = "Msg_EnterGameACK"] = 8;
        values[valuesById[9] = "Msg_LogoutREQ"] = 9;
        values[valuesById[10] = "Msg_LogoutACK"] = 10;
        values[valuesById[11] = "Msg_KickPUSH"] = 11;
        values[valuesById[12] = "Msg_ChatREQ"] = 12;
        values[valuesById[13] = "Msg_ChatACK"] = 13;
        values[valuesById[14] = "Msg_ChatPUSH"] = 14;
        return values;
    })();

    /**
     * ResultCode enum.
     * @name myproto.ResultCode
     * @enum {number}
     * @property {number} Success=0 Success value
     * @property {number} MsgErr=1 MsgErr value
     * @property {number} AccountExist=101 AccountExist value
     * @property {number} AccountNotExist=102 AccountNotExist value
     * @property {number} RoleNameExist=103 RoleNameExist value
     * @property {number} PasswordErr=104 PasswordErr value
     * @property {number} AlreadyLogin=105 AlreadyLogin value
     * @property {number} AccountEmpty=106 AccountEmpty value
     * @property {number} PasswordEmpty=107 PasswordEmpty value
     * @property {number} AccountErr=108 AccountErr value
     * @property {number} AlreadyHasRole=109 AlreadyHasRole value
     * @property {number} NeedLogin=110 NeedLogin value
     * @property {number} RoleNameIllegal=111 RoleNameIllegal value
     * @property {number} CreateRoleFaild=112 CreateRoleFaild value
     * @property {number} EnterGameFailed=113 EnterGameFailed value
     * @property {number} PlayerNotFound=114 PlayerNotFound value
     */
    myproto.ResultCode = (function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Success"] = 0;
        values[valuesById[1] = "MsgErr"] = 1;
        values[valuesById[101] = "AccountExist"] = 101;
        values[valuesById[102] = "AccountNotExist"] = 102;
        values[valuesById[103] = "RoleNameExist"] = 103;
        values[valuesById[104] = "PasswordErr"] = 104;
        values[valuesById[105] = "AlreadyLogin"] = 105;
        values[valuesById[106] = "AccountEmpty"] = 106;
        values[valuesById[107] = "PasswordEmpty"] = 107;
        values[valuesById[108] = "AccountErr"] = 108;
        values[valuesById[109] = "AlreadyHasRole"] = 109;
        values[valuesById[110] = "NeedLogin"] = 110;
        values[valuesById[111] = "RoleNameIllegal"] = 111;
        values[valuesById[112] = "CreateRoleFaild"] = 112;
        values[valuesById[113] = "EnterGameFailed"] = 113;
        values[valuesById[114] = "PlayerNotFound"] = 114;
        return values;
    })();

    myproto.RegisterREQ = (function () {

        /**
         * Properties of a RegisterREQ.
         * @memberof myproto
         * @interface IRegisterREQ
         * @property {string|null} [Account] RegisterREQ Account
         * @property {string|null} [Password] RegisterREQ Password
         */

        /**
         * Constructs a new RegisterREQ.
         * @memberof myproto
         * @classdesc Represents a RegisterREQ.
         * @implements IRegisterREQ
         * @constructor
         * @param {myproto.IRegisterREQ=} [p] Properties to set
         */
        function RegisterREQ(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RegisterREQ Account.
         * @member {string} Account
         * @memberof myproto.RegisterREQ
         * @instance
         */
        RegisterREQ.prototype.Account = "";

        /**
         * RegisterREQ Password.
         * @member {string} Password
         * @memberof myproto.RegisterREQ
         * @instance
         */
        RegisterREQ.prototype.Password = "";

        /**
         * Creates a new RegisterREQ instance using the specified properties.
         * @function create
         * @memberof myproto.RegisterREQ
         * @static
         * @param {myproto.IRegisterREQ=} [properties] Properties to set
         * @returns {myproto.RegisterREQ} RegisterREQ instance
         */
        RegisterREQ.create = function create(properties) {
            return new RegisterREQ(properties);
        };

        /**
         * Encodes the specified RegisterREQ message. Does not implicitly {@link myproto.RegisterREQ.verify|verify} messages.
         * @function encode
         * @memberof myproto.RegisterREQ
         * @static
         * @param {myproto.IRegisterREQ} m RegisterREQ message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterREQ.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Account != null && Object.hasOwnProperty.call(m, "Account"))
                w.uint32(10).string(m.Account);
            if (m.Password != null && Object.hasOwnProperty.call(m, "Password"))
                w.uint32(18).string(m.Password);
            return w;
        };

        /**
         * Decodes a RegisterREQ message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.RegisterREQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.RegisterREQ} RegisterREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterREQ.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.RegisterREQ();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Account = r.string();
                        break;
                    }
                    case 2: {
                        m.Password = r.string();
                        break;
                    }
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for RegisterREQ
         * @function getTypeUrl
         * @memberof myproto.RegisterREQ
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterREQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.RegisterREQ";
        };

        return RegisterREQ;
    })();

    myproto.RegisterACK = (function () {

        /**
         * Properties of a RegisterACK.
         * @memberof myproto
         * @interface IRegisterACK
         * @property {myproto.ResultCode|null} [Ret] RegisterACK Ret
         */

        /**
         * Constructs a new RegisterACK.
         * @memberof myproto
         * @classdesc Represents a RegisterACK.
         * @implements IRegisterACK
         * @constructor
         * @param {myproto.IRegisterACK=} [p] Properties to set
         */
        function RegisterACK(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RegisterACK Ret.
         * @member {myproto.ResultCode} Ret
         * @memberof myproto.RegisterACK
         * @instance
         */
        RegisterACK.prototype.Ret = 0;

        /**
         * Creates a new RegisterACK instance using the specified properties.
         * @function create
         * @memberof myproto.RegisterACK
         * @static
         * @param {myproto.IRegisterACK=} [properties] Properties to set
         * @returns {myproto.RegisterACK} RegisterACK instance
         */
        RegisterACK.create = function create(properties) {
            return new RegisterACK(properties);
        };

        /**
         * Encodes the specified RegisterACK message. Does not implicitly {@link myproto.RegisterACK.verify|verify} messages.
         * @function encode
         * @memberof myproto.RegisterACK
         * @static
         * @param {myproto.IRegisterACK} m RegisterACK message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterACK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ret != null && Object.hasOwnProperty.call(m, "Ret"))
                w.uint32(8).int32(m.Ret);
            return w;
        };

        /**
         * Decodes a RegisterACK message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.RegisterACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.RegisterACK} RegisterACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterACK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.RegisterACK();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Ret = r.int32();
                        break;
                    }
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for RegisterACK
         * @function getTypeUrl
         * @memberof myproto.RegisterACK
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterACK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.RegisterACK";
        };

        return RegisterACK;
    })();

    myproto.LoginREQ = (function () {

        /**
         * Properties of a LoginREQ.
         * @memberof myproto
         * @interface ILoginREQ
         * @property {string|null} [Account] LoginREQ Account
         * @property {string|null} [Password] LoginREQ Password
         */

        /**
         * Constructs a new LoginREQ.
         * @memberof myproto
         * @classdesc Represents a LoginREQ.
         * @implements ILoginREQ
         * @constructor
         * @param {myproto.ILoginREQ=} [p] Properties to set
         */
        function LoginREQ(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LoginREQ Account.
         * @member {string} Account
         * @memberof myproto.LoginREQ
         * @instance
         */
        LoginREQ.prototype.Account = "";

        /**
         * LoginREQ Password.
         * @member {string} Password
         * @memberof myproto.LoginREQ
         * @instance
         */
        LoginREQ.prototype.Password = "";

        /**
         * Creates a new LoginREQ instance using the specified properties.
         * @function create
         * @memberof myproto.LoginREQ
         * @static
         * @param {myproto.ILoginREQ=} [properties] Properties to set
         * @returns {myproto.LoginREQ} LoginREQ instance
         */
        LoginREQ.create = function create(properties) {
            return new LoginREQ(properties);
        };

        /**
         * Encodes the specified LoginREQ message. Does not implicitly {@link myproto.LoginREQ.verify|verify} messages.
         * @function encode
         * @memberof myproto.LoginREQ
         * @static
         * @param {myproto.ILoginREQ} m LoginREQ message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginREQ.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Account != null && Object.hasOwnProperty.call(m, "Account"))
                w.uint32(10).string(m.Account);
            if (m.Password != null && Object.hasOwnProperty.call(m, "Password"))
                w.uint32(18).string(m.Password);
            return w;
        };

        /**
         * Decodes a LoginREQ message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.LoginREQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.LoginREQ} LoginREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginREQ.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.LoginREQ();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Account = r.string();
                        break;
                    }
                    case 2: {
                        m.Password = r.string();
                        break;
                    }
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for LoginREQ
         * @function getTypeUrl
         * @memberof myproto.LoginREQ
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginREQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.LoginREQ";
        };

        return LoginREQ;
    })();

    myproto.LoginACK = (function () {

        /**
         * Properties of a LoginACK.
         * @memberof myproto
         * @interface ILoginACK
         * @property {myproto.ResultCode|null} [Ret] LoginACK Ret
         * @property {number|Long|null} [Uid] LoginACK Uid
         * @property {boolean|null} [HasRole] LoginACK HasRole
         */

        /**
         * Constructs a new LoginACK.
         * @memberof myproto
         * @classdesc Represents a LoginACK.
         * @implements ILoginACK
         * @constructor
         * @param {myproto.ILoginACK=} [p] Properties to set
         */
        function LoginACK(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LoginACK Ret.
         * @member {myproto.ResultCode} Ret
         * @memberof myproto.LoginACK
         * @instance
         */
        LoginACK.prototype.Ret = 0;

        /**
         * LoginACK Uid.
         * @member {number|Long} Uid
         * @memberof myproto.LoginACK
         * @instance
         */
        LoginACK.prototype.Uid = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

        /**
         * LoginACK HasRole.
         * @member {boolean} HasRole
         * @memberof myproto.LoginACK
         * @instance
         */
        LoginACK.prototype.HasRole = false;

        /**
         * Creates a new LoginACK instance using the specified properties.
         * @function create
         * @memberof myproto.LoginACK
         * @static
         * @param {myproto.ILoginACK=} [properties] Properties to set
         * @returns {myproto.LoginACK} LoginACK instance
         */
        LoginACK.create = function create(properties) {
            return new LoginACK(properties);
        };

        /**
         * Encodes the specified LoginACK message. Does not implicitly {@link myproto.LoginACK.verify|verify} messages.
         * @function encode
         * @memberof myproto.LoginACK
         * @static
         * @param {myproto.ILoginACK} m LoginACK message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginACK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ret != null && Object.hasOwnProperty.call(m, "Ret"))
                w.uint32(8).int32(m.Ret);
            if (m.Uid != null && Object.hasOwnProperty.call(m, "Uid"))
                w.uint32(16).uint64(m.Uid);
            if (m.HasRole != null && Object.hasOwnProperty.call(m, "HasRole"))
                w.uint32(24).bool(m.HasRole);
            return w;
        };

        /**
         * Decodes a LoginACK message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.LoginACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.LoginACK} LoginACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginACK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.LoginACK();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Ret = r.int32();
                        break;
                    }
                    case 2: {
                        m.Uid = r.uint64();
                        break;
                    }
                    case 3: {
                        m.HasRole = r.bool();
                        break;
                    }
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for LoginACK
         * @function getTypeUrl
         * @memberof myproto.LoginACK
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginACK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.LoginACK";
        };

        return LoginACK;
    })();

    myproto.PlayerInfo = (function () {

        /**
         * Properties of a PlayerInfo.
         * @memberof myproto
         * @interface IPlayerInfo
         * @property {number|Long|null} [Uid] PlayerInfo Uid
         * @property {string|null} [Name] PlayerInfo Name
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof myproto
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {myproto.IPlayerInfo=} [p] Properties to set
         */
        function PlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PlayerInfo Uid.
         * @member {number|Long} Uid
         * @memberof myproto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Uid = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

        /**
         * PlayerInfo Name.
         * @member {string} Name
         * @memberof myproto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Name = "";

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof myproto.PlayerInfo
         * @static
         * @param {myproto.IPlayerInfo=} [properties] Properties to set
         * @returns {myproto.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link myproto.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof myproto.PlayerInfo
         * @static
         * @param {myproto.IPlayerInfo} m PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Uid != null && Object.hasOwnProperty.call(m, "Uid"))
                w.uint32(8).uint64(m.Uid);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            return w;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.PlayerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Uid = r.uint64();
                        break;
                    }
                    case 2: {
                        m.Name = r.string();
                        break;
                    }
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for PlayerInfo
         * @function getTypeUrl
         * @memberof myproto.PlayerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.PlayerInfo";
        };

        return PlayerInfo;
    })();

    myproto.CreateRoleREQ = (function () {

        /**
         * Properties of a CreateRoleREQ.
         * @memberof myproto
         * @interface ICreateRoleREQ
         * @property {string|null} [Name] CreateRoleREQ Name
         */

        /**
         * Constructs a new CreateRoleREQ.
         * @memberof myproto
         * @classdesc Represents a CreateRoleREQ.
         * @implements ICreateRoleREQ
         * @constructor
         * @param {myproto.ICreateRoleREQ=} [p] Properties to set
         */
        function CreateRoleREQ(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CreateRoleREQ Name.
         * @member {string} Name
         * @memberof myproto.CreateRoleREQ
         * @instance
         */
        CreateRoleREQ.prototype.Name = "";

        /**
         * Creates a new CreateRoleREQ instance using the specified properties.
         * @function create
         * @memberof myproto.CreateRoleREQ
         * @static
         * @param {myproto.ICreateRoleREQ=} [properties] Properties to set
         * @returns {myproto.CreateRoleREQ} CreateRoleREQ instance
         */
        CreateRoleREQ.create = function create(properties) {
            return new CreateRoleREQ(properties);
        };

        /**
         * Encodes the specified CreateRoleREQ message. Does not implicitly {@link myproto.CreateRoleREQ.verify|verify} messages.
         * @function encode
         * @memberof myproto.CreateRoleREQ
         * @static
         * @param {myproto.ICreateRoleREQ} m CreateRoleREQ message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoleREQ.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(10).string(m.Name);
            return w;
        };

        /**
         * Decodes a CreateRoleREQ message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.CreateRoleREQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.CreateRoleREQ} CreateRoleREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoleREQ.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.CreateRoleREQ();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Name = r.string();
                        break;
                    }
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for CreateRoleREQ
         * @function getTypeUrl
         * @memberof myproto.CreateRoleREQ
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateRoleREQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.CreateRoleREQ";
        };

        return CreateRoleREQ;
    })();

    myproto.CreateRoleACK = (function () {

        /**
         * Properties of a CreateRoleACK.
         * @memberof myproto
         * @interface ICreateRoleACK
         * @property {myproto.ResultCode|null} [Ret] CreateRoleACK Ret
         */

        /**
         * Constructs a new CreateRoleACK.
         * @memberof myproto
         * @classdesc Represents a CreateRoleACK.
         * @implements ICreateRoleACK
         * @constructor
         * @param {myproto.ICreateRoleACK=} [p] Properties to set
         */
        function CreateRoleACK(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CreateRoleACK Ret.
         * @member {myproto.ResultCode} Ret
         * @memberof myproto.CreateRoleACK
         * @instance
         */
        CreateRoleACK.prototype.Ret = 0;

        /**
         * Creates a new CreateRoleACK instance using the specified properties.
         * @function create
         * @memberof myproto.CreateRoleACK
         * @static
         * @param {myproto.ICreateRoleACK=} [properties] Properties to set
         * @returns {myproto.CreateRoleACK} CreateRoleACK instance
         */
        CreateRoleACK.create = function create(properties) {
            return new CreateRoleACK(properties);
        };

        /**
         * Encodes the specified CreateRoleACK message. Does not implicitly {@link myproto.CreateRoleACK.verify|verify} messages.
         * @function encode
         * @memberof myproto.CreateRoleACK
         * @static
         * @param {myproto.ICreateRoleACK} m CreateRoleACK message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoleACK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ret != null && Object.hasOwnProperty.call(m, "Ret"))
                w.uint32(8).int32(m.Ret);
            return w;
        };

        /**
         * Decodes a CreateRoleACK message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.CreateRoleACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.CreateRoleACK} CreateRoleACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoleACK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.CreateRoleACK();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Ret = r.int32();
                        break;
                    }
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for CreateRoleACK
         * @function getTypeUrl
         * @memberof myproto.CreateRoleACK
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateRoleACK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.CreateRoleACK";
        };

        return CreateRoleACK;
    })();

    myproto.EnterGameREQ = (function () {

        /**
         * Properties of an EnterGameREQ.
         * @memberof myproto
         * @interface IEnterGameREQ
         */

        /**
         * Constructs a new EnterGameREQ.
         * @memberof myproto
         * @classdesc Represents an EnterGameREQ.
         * @implements IEnterGameREQ
         * @constructor
         * @param {myproto.IEnterGameREQ=} [p] Properties to set
         */
        function EnterGameREQ(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Creates a new EnterGameREQ instance using the specified properties.
         * @function create
         * @memberof myproto.EnterGameREQ
         * @static
         * @param {myproto.IEnterGameREQ=} [properties] Properties to set
         * @returns {myproto.EnterGameREQ} EnterGameREQ instance
         */
        EnterGameREQ.create = function create(properties) {
            return new EnterGameREQ(properties);
        };

        /**
         * Encodes the specified EnterGameREQ message. Does not implicitly {@link myproto.EnterGameREQ.verify|verify} messages.
         * @function encode
         * @memberof myproto.EnterGameREQ
         * @static
         * @param {myproto.IEnterGameREQ} m EnterGameREQ message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGameREQ.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes an EnterGameREQ message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.EnterGameREQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.EnterGameREQ} EnterGameREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGameREQ.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.EnterGameREQ();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for EnterGameREQ
         * @function getTypeUrl
         * @memberof myproto.EnterGameREQ
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnterGameREQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.EnterGameREQ";
        };

        return EnterGameREQ;
    })();

    myproto.EnterGameACK = (function () {

        /**
         * Properties of an EnterGameACK.
         * @memberof myproto
         * @interface IEnterGameACK
         * @property {myproto.ResultCode|null} [Ret] EnterGameACK Ret
         * @property {myproto.IPlayerInfo|null} [Info] EnterGameACK Info
         */

        /**
         * Constructs a new EnterGameACK.
         * @memberof myproto
         * @classdesc Represents an EnterGameACK.
         * @implements IEnterGameACK
         * @constructor
         * @param {myproto.IEnterGameACK=} [p] Properties to set
         */
        function EnterGameACK(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * EnterGameACK Ret.
         * @member {myproto.ResultCode} Ret
         * @memberof myproto.EnterGameACK
         * @instance
         */
        EnterGameACK.prototype.Ret = 0;

        /**
         * EnterGameACK Info.
         * @member {myproto.IPlayerInfo|null|undefined} Info
         * @memberof myproto.EnterGameACK
         * @instance
         */
        EnterGameACK.prototype.Info = null;

        /**
         * Creates a new EnterGameACK instance using the specified properties.
         * @function create
         * @memberof myproto.EnterGameACK
         * @static
         * @param {myproto.IEnterGameACK=} [properties] Properties to set
         * @returns {myproto.EnterGameACK} EnterGameACK instance
         */
        EnterGameACK.create = function create(properties) {
            return new EnterGameACK(properties);
        };

        /**
         * Encodes the specified EnterGameACK message. Does not implicitly {@link myproto.EnterGameACK.verify|verify} messages.
         * @function encode
         * @memberof myproto.EnterGameACK
         * @static
         * @param {myproto.IEnterGameACK} m EnterGameACK message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGameACK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ret != null && Object.hasOwnProperty.call(m, "Ret"))
                w.uint32(8).int32(m.Ret);
            if (m.Info != null && Object.hasOwnProperty.call(m, "Info"))
                $root.myproto.PlayerInfo.encode(m.Info, w.uint32(18).fork()).ldelim();
            return w;
        };

        /**
         * Decodes an EnterGameACK message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.EnterGameACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.EnterGameACK} EnterGameACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGameACK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.EnterGameACK();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Ret = r.int32();
                        break;
                    }
                    case 2: {
                        m.Info = $root.myproto.PlayerInfo.decode(r, r.uint32());
                        break;
                    }
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for EnterGameACK
         * @function getTypeUrl
         * @memberof myproto.EnterGameACK
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnterGameACK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.EnterGameACK";
        };

        return EnterGameACK;
    })();

    myproto.LogoutREQ = (function () {

        /**
         * Properties of a LogoutREQ.
         * @memberof myproto
         * @interface ILogoutREQ
         */

        /**
         * Constructs a new LogoutREQ.
         * @memberof myproto
         * @classdesc Represents a LogoutREQ.
         * @implements ILogoutREQ
         * @constructor
         * @param {myproto.ILogoutREQ=} [p] Properties to set
         */
        function LogoutREQ(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Creates a new LogoutREQ instance using the specified properties.
         * @function create
         * @memberof myproto.LogoutREQ
         * @static
         * @param {myproto.ILogoutREQ=} [properties] Properties to set
         * @returns {myproto.LogoutREQ} LogoutREQ instance
         */
        LogoutREQ.create = function create(properties) {
            return new LogoutREQ(properties);
        };

        /**
         * Encodes the specified LogoutREQ message. Does not implicitly {@link myproto.LogoutREQ.verify|verify} messages.
         * @function encode
         * @memberof myproto.LogoutREQ
         * @static
         * @param {myproto.ILogoutREQ} m LogoutREQ message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutREQ.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a LogoutREQ message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.LogoutREQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.LogoutREQ} LogoutREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutREQ.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.LogoutREQ();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for LogoutREQ
         * @function getTypeUrl
         * @memberof myproto.LogoutREQ
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LogoutREQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.LogoutREQ";
        };

        return LogoutREQ;
    })();

    myproto.LogoutACK = (function () {

        /**
         * Properties of a LogoutACK.
         * @memberof myproto
         * @interface ILogoutACK
         * @property {myproto.ResultCode|null} [Ret] LogoutACK Ret
         */

        /**
         * Constructs a new LogoutACK.
         * @memberof myproto
         * @classdesc Represents a LogoutACK.
         * @implements ILogoutACK
         * @constructor
         * @param {myproto.ILogoutACK=} [p] Properties to set
         */
        function LogoutACK(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LogoutACK Ret.
         * @member {myproto.ResultCode} Ret
         * @memberof myproto.LogoutACK
         * @instance
         */
        LogoutACK.prototype.Ret = 0;

        /**
         * Creates a new LogoutACK instance using the specified properties.
         * @function create
         * @memberof myproto.LogoutACK
         * @static
         * @param {myproto.ILogoutACK=} [properties] Properties to set
         * @returns {myproto.LogoutACK} LogoutACK instance
         */
        LogoutACK.create = function create(properties) {
            return new LogoutACK(properties);
        };

        /**
         * Encodes the specified LogoutACK message. Does not implicitly {@link myproto.LogoutACK.verify|verify} messages.
         * @function encode
         * @memberof myproto.LogoutACK
         * @static
         * @param {myproto.ILogoutACK} m LogoutACK message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutACK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ret != null && Object.hasOwnProperty.call(m, "Ret"))
                w.uint32(8).int32(m.Ret);
            return w;
        };

        /**
         * Decodes a LogoutACK message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.LogoutACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.LogoutACK} LogoutACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutACK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.LogoutACK();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Ret = r.int32();
                        break;
                    }
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for LogoutACK
         * @function getTypeUrl
         * @memberof myproto.LogoutACK
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LogoutACK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.LogoutACK";
        };

        return LogoutACK;
    })();

    myproto.KickPUSH = (function () {

        /**
         * Properties of a KickPUSH.
         * @memberof myproto
         * @interface IKickPUSH
         */

        /**
         * Constructs a new KickPUSH.
         * @memberof myproto
         * @classdesc Represents a KickPUSH.
         * @implements IKickPUSH
         * @constructor
         * @param {myproto.IKickPUSH=} [p] Properties to set
         */
        function KickPUSH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Creates a new KickPUSH instance using the specified properties.
         * @function create
         * @memberof myproto.KickPUSH
         * @static
         * @param {myproto.IKickPUSH=} [properties] Properties to set
         * @returns {myproto.KickPUSH} KickPUSH instance
         */
        KickPUSH.create = function create(properties) {
            return new KickPUSH(properties);
        };

        /**
         * Encodes the specified KickPUSH message. Does not implicitly {@link myproto.KickPUSH.verify|verify} messages.
         * @function encode
         * @memberof myproto.KickPUSH
         * @static
         * @param {myproto.IKickPUSH} m KickPUSH message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickPUSH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a KickPUSH message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.KickPUSH
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.KickPUSH} KickPUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickPUSH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.KickPUSH();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for KickPUSH
         * @function getTypeUrl
         * @memberof myproto.KickPUSH
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KickPUSH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.KickPUSH";
        };

        return KickPUSH;
    })();

    myproto.ChatREQ = (function () {

        /**
         * Properties of a ChatREQ.
         * @memberof myproto
         * @interface IChatREQ
         * @property {string|null} [Msg] ChatREQ Msg
         */

        /**
         * Constructs a new ChatREQ.
         * @memberof myproto
         * @classdesc Represents a ChatREQ.
         * @implements IChatREQ
         * @constructor
         * @param {myproto.IChatREQ=} [p] Properties to set
         */
        function ChatREQ(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ChatREQ Msg.
         * @member {string} Msg
         * @memberof myproto.ChatREQ
         * @instance
         */
        ChatREQ.prototype.Msg = "";

        /**
         * Creates a new ChatREQ instance using the specified properties.
         * @function create
         * @memberof myproto.ChatREQ
         * @static
         * @param {myproto.IChatREQ=} [properties] Properties to set
         * @returns {myproto.ChatREQ} ChatREQ instance
         */
        ChatREQ.create = function create(properties) {
            return new ChatREQ(properties);
        };

        /**
         * Encodes the specified ChatREQ message. Does not implicitly {@link myproto.ChatREQ.verify|verify} messages.
         * @function encode
         * @memberof myproto.ChatREQ
         * @static
         * @param {myproto.IChatREQ} m ChatREQ message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatREQ.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(10).string(m.Msg);
            return w;
        };

        /**
         * Decodes a ChatREQ message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.ChatREQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.ChatREQ} ChatREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatREQ.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.ChatREQ();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Msg = r.string();
                        break;
                    }
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for ChatREQ
         * @function getTypeUrl
         * @memberof myproto.ChatREQ
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatREQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.ChatREQ";
        };

        return ChatREQ;
    })();

    myproto.ChatACK = (function () {

        /**
         * Properties of a ChatACK.
         * @memberof myproto
         * @interface IChatACK
         * @property {myproto.ResultCode|null} [Ret] ChatACK Ret
         */

        /**
         * Constructs a new ChatACK.
         * @memberof myproto
         * @classdesc Represents a ChatACK.
         * @implements IChatACK
         * @constructor
         * @param {myproto.IChatACK=} [p] Properties to set
         */
        function ChatACK(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ChatACK Ret.
         * @member {myproto.ResultCode} Ret
         * @memberof myproto.ChatACK
         * @instance
         */
        ChatACK.prototype.Ret = 0;

        /**
         * Creates a new ChatACK instance using the specified properties.
         * @function create
         * @memberof myproto.ChatACK
         * @static
         * @param {myproto.IChatACK=} [properties] Properties to set
         * @returns {myproto.ChatACK} ChatACK instance
         */
        ChatACK.create = function create(properties) {
            return new ChatACK(properties);
        };

        /**
         * Encodes the specified ChatACK message. Does not implicitly {@link myproto.ChatACK.verify|verify} messages.
         * @function encode
         * @memberof myproto.ChatACK
         * @static
         * @param {myproto.IChatACK} m ChatACK message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatACK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ret != null && Object.hasOwnProperty.call(m, "Ret"))
                w.uint32(8).int32(m.Ret);
            return w;
        };

        /**
         * Decodes a ChatACK message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.ChatACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.ChatACK} ChatACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatACK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.ChatACK();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Ret = r.int32();
                        break;
                    }
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for ChatACK
         * @function getTypeUrl
         * @memberof myproto.ChatACK
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatACK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.ChatACK";
        };

        return ChatACK;
    })();

    myproto.ChatPUSH = (function () {

        /**
         * Properties of a ChatPUSH.
         * @memberof myproto
         * @interface IChatPUSH
         * @property {number|Long|null} [Uid] ChatPUSH Uid
         * @property {string|null} [Name] ChatPUSH Name
         * @property {string|null} [Msg] ChatPUSH Msg
         */

        /**
         * Constructs a new ChatPUSH.
         * @memberof myproto
         * @classdesc Represents a ChatPUSH.
         * @implements IChatPUSH
         * @constructor
         * @param {myproto.IChatPUSH=} [p] Properties to set
         */
        function ChatPUSH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ChatPUSH Uid.
         * @member {number|Long} Uid
         * @memberof myproto.ChatPUSH
         * @instance
         */
        ChatPUSH.prototype.Uid = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

        /**
         * ChatPUSH Name.
         * @member {string} Name
         * @memberof myproto.ChatPUSH
         * @instance
         */
        ChatPUSH.prototype.Name = "";

        /**
         * ChatPUSH Msg.
         * @member {string} Msg
         * @memberof myproto.ChatPUSH
         * @instance
         */
        ChatPUSH.prototype.Msg = "";

        /**
         * Creates a new ChatPUSH instance using the specified properties.
         * @function create
         * @memberof myproto.ChatPUSH
         * @static
         * @param {myproto.IChatPUSH=} [properties] Properties to set
         * @returns {myproto.ChatPUSH} ChatPUSH instance
         */
        ChatPUSH.create = function create(properties) {
            return new ChatPUSH(properties);
        };

        /**
         * Encodes the specified ChatPUSH message. Does not implicitly {@link myproto.ChatPUSH.verify|verify} messages.
         * @function encode
         * @memberof myproto.ChatPUSH
         * @static
         * @param {myproto.IChatPUSH} m ChatPUSH message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatPUSH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Uid != null && Object.hasOwnProperty.call(m, "Uid"))
                w.uint32(8).uint64(m.Uid);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(26).string(m.Msg);
            return w;
        };

        /**
         * Decodes a ChatPUSH message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.ChatPUSH
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.ChatPUSH} ChatPUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatPUSH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.ChatPUSH();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Uid = r.uint64();
                        break;
                    }
                    case 2: {
                        m.Name = r.string();
                        break;
                    }
                    case 3: {
                        m.Msg = r.string();
                        break;
                    }
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        /**
         * Gets the default type url for ChatPUSH
         * @function getTypeUrl
         * @memberof myproto.ChatPUSH
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatPUSH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.ChatPUSH";
        };

        return ChatPUSH;
    })();

    return myproto;
})();

module.exports = $root;
