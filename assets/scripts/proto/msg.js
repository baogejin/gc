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
     * @property {number} Msg_GMREQ=15 Msg_GMREQ value
     * @property {number} Msg_GMACK=16 Msg_GMACK value
     * @property {number} Msg_ItemUpdatePUSH=17 Msg_ItemUpdatePUSH value
     * @property {number} Msg_CreateBattleREQ=100 Msg_CreateBattleREQ value
     * @property {number} Msg_CreateBattleACK=101 Msg_CreateBattleACK value
     * @property {number} Msg_BattleInfoPUSH=102 Msg_BattleInfoPUSH value
     * @property {number} Msg_BattleStartPUSH=103 Msg_BattleStartPUSH value
     * @property {number} Msg_BattleActionPUSH=104 Msg_BattleActionPUSH value
     * @property {number} Msg_BattleFinishPUSH=105 Msg_BattleFinishPUSH value
     * @property {number} Msg_BattleStartREQ=106 Msg_BattleStartREQ value
     * @property {number} Msg_BattleStartACK=107 Msg_BattleStartACK value
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
        values[valuesById[15] = "Msg_GMREQ"] = 15;
        values[valuesById[16] = "Msg_GMACK"] = 16;
        values[valuesById[17] = "Msg_ItemUpdatePUSH"] = 17;
        values[valuesById[100] = "Msg_CreateBattleREQ"] = 100;
        values[valuesById[101] = "Msg_CreateBattleACK"] = 101;
        values[valuesById[102] = "Msg_BattleInfoPUSH"] = 102;
        values[valuesById[103] = "Msg_BattleStartPUSH"] = 103;
        values[valuesById[104] = "Msg_BattleActionPUSH"] = 104;
        values[valuesById[105] = "Msg_BattleFinishPUSH"] = 105;
        values[valuesById[106] = "Msg_BattleStartREQ"] = 106;
        values[valuesById[107] = "Msg_BattleStartACK"] = 107;
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
     * @property {number} GMCmdNotFound=115 GMCmdNotFound value
     * @property {number} GMCmdParamErr=116 GMCmdParamErr value
     * @property {number} GMCmdExecErr=117 GMCmdExecErr value
     * @property {number} CreateBattleFailed=118 CreateBattleFailed value
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
        values[valuesById[115] = "GMCmdNotFound"] = 115;
        values[valuesById[116] = "GMCmdParamErr"] = 116;
        values[valuesById[117] = "GMCmdExecErr"] = 117;
        values[valuesById[118] = "CreateBattleFailed"] = 118;
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

    myproto.PlayerBagInfo = (function () {

        /**
         * Properties of a PlayerBagInfo.
         * @memberof myproto
         * @interface IPlayerBagInfo
         * @property {Object.<string,number|Long>|null} [Unoccupied] PlayerBagInfo Unoccupied
         * @property {Object.<string,myproto.IItem>|null} [StackItems] PlayerBagInfo StackItems
         * @property {Object.<string,myproto.IItem>|null} [UnstackItems] PlayerBagInfo UnstackItems
         */

        /**
         * Constructs a new PlayerBagInfo.
         * @memberof myproto
         * @classdesc Represents a PlayerBagInfo.
         * @implements IPlayerBagInfo
         * @constructor
         * @param {myproto.IPlayerBagInfo=} [p] Properties to set
         */
        function PlayerBagInfo(p) {
            this.Unoccupied = {};
            this.StackItems = {};
            this.UnstackItems = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PlayerBagInfo Unoccupied.
         * @member {Object.<string,number|Long>} Unoccupied
         * @memberof myproto.PlayerBagInfo
         * @instance
         */
        PlayerBagInfo.prototype.Unoccupied = $util.emptyObject;

        /**
         * PlayerBagInfo StackItems.
         * @member {Object.<string,myproto.IItem>} StackItems
         * @memberof myproto.PlayerBagInfo
         * @instance
         */
        PlayerBagInfo.prototype.StackItems = $util.emptyObject;

        /**
         * PlayerBagInfo UnstackItems.
         * @member {Object.<string,myproto.IItem>} UnstackItems
         * @memberof myproto.PlayerBagInfo
         * @instance
         */
        PlayerBagInfo.prototype.UnstackItems = $util.emptyObject;

        /**
         * Creates a new PlayerBagInfo instance using the specified properties.
         * @function create
         * @memberof myproto.PlayerBagInfo
         * @static
         * @param {myproto.IPlayerBagInfo=} [properties] Properties to set
         * @returns {myproto.PlayerBagInfo} PlayerBagInfo instance
         */
        PlayerBagInfo.create = function create(properties) {
            return new PlayerBagInfo(properties);
        };

        /**
         * Encodes the specified PlayerBagInfo message. Does not implicitly {@link myproto.PlayerBagInfo.verify|verify} messages.
         * @function encode
         * @memberof myproto.PlayerBagInfo
         * @static
         * @param {myproto.IPlayerBagInfo} m PlayerBagInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerBagInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Unoccupied != null && Object.hasOwnProperty.call(m, "Unoccupied")) {
                for (var ks = Object.keys(m.Unoccupied), i = 0; i < ks.length; ++i) {
                    w.uint32(10).fork().uint32(8).int32(ks[i]).uint32(16).int64(m.Unoccupied[ks[i]]).ldelim();
                }
            }
            if (m.StackItems != null && Object.hasOwnProperty.call(m, "StackItems")) {
                for (var ks = Object.keys(m.StackItems), i = 0; i < ks.length; ++i) {
                    w.uint32(18).fork().uint32(8).int32(ks[i]);
                    $root.myproto.Item.encode(m.StackItems[ks[i]], w.uint32(18).fork()).ldelim().ldelim();
                }
            }
            if (m.UnstackItems != null && Object.hasOwnProperty.call(m, "UnstackItems")) {
                for (var ks = Object.keys(m.UnstackItems), i = 0; i < ks.length; ++i) {
                    w.uint32(26).fork().uint32(8).uint64(ks[i]);
                    $root.myproto.Item.encode(m.UnstackItems[ks[i]], w.uint32(18).fork()).ldelim().ldelim();
                }
            }
            return w;
        };

        /**
         * Decodes a PlayerBagInfo message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.PlayerBagInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.PlayerBagInfo} PlayerBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerBagInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.PlayerBagInfo(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        if (m.Unoccupied === $util.emptyObject)
                            m.Unoccupied = {};
                        var c2 = r.uint32() + r.pos;
                        k = 0;
                        value = 0;
                        while (r.pos < c2) {
                            var tag2 = r.uint32();
                            switch (tag2 >>> 3) {
                                case 1:
                                    k = r.int32();
                                    break;
                                case 2:
                                    value = r.int64();
                                    break;
                                default:
                                    r.skipType(tag2 & 7);
                                    break;
                            }
                        }
                        m.Unoccupied[k] = value;
                        break;
                    }
                    case 2: {
                        if (m.StackItems === $util.emptyObject)
                            m.StackItems = {};
                        var c2 = r.uint32() + r.pos;
                        k = 0;
                        value = null;
                        while (r.pos < c2) {
                            var tag2 = r.uint32();
                            switch (tag2 >>> 3) {
                                case 1:
                                    k = r.int32();
                                    break;
                                case 2:
                                    value = $root.myproto.Item.decode(r, r.uint32());
                                    break;
                                default:
                                    r.skipType(tag2 & 7);
                                    break;
                            }
                        }
                        m.StackItems[k] = value;
                        break;
                    }
                    case 3: {
                        if (m.UnstackItems === $util.emptyObject)
                            m.UnstackItems = {};
                        var c2 = r.uint32() + r.pos;
                        k = 0;
                        value = null;
                        while (r.pos < c2) {
                            var tag2 = r.uint32();
                            switch (tag2 >>> 3) {
                                case 1:
                                    k = r.uint64();
                                    break;
                                case 2:
                                    value = $root.myproto.Item.decode(r, r.uint32());
                                    break;
                                default:
                                    r.skipType(tag2 & 7);
                                    break;
                            }
                        }
                        m.UnstackItems[typeof k === "object" ? $util.longToHash(k) : k] = value;
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
         * Gets the default type url for PlayerBagInfo
         * @function getTypeUrl
         * @memberof myproto.PlayerBagInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerBagInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.PlayerBagInfo";
        };

        return PlayerBagInfo;
    })();

    myproto.PlayerInfo = (function () {

        /**
         * Properties of a PlayerInfo.
         * @memberof myproto
         * @interface IPlayerInfo
         * @property {number|Long|null} [Uid] PlayerInfo Uid
         * @property {string|null} [Name] PlayerInfo Name
         * @property {myproto.IPlayerBagInfo|null} [BagInfo] PlayerInfo BagInfo
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
         * PlayerInfo BagInfo.
         * @member {myproto.IPlayerBagInfo|null|undefined} BagInfo
         * @memberof myproto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.BagInfo = null;

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
            if (m.BagInfo != null && Object.hasOwnProperty.call(m, "BagInfo"))
                $root.myproto.PlayerBagInfo.encode(m.BagInfo, w.uint32(26).fork()).ldelim();
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
                    case 3: {
                        m.BagInfo = $root.myproto.PlayerBagInfo.decode(r, r.uint32());
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

    /**
     * UnitType enum.
     * @name myproto.UnitType
     * @enum {number}
     * @property {number} UnitMonster=0 UnitMonster value
     * @property {number} UnitPlayer=1 UnitPlayer value
     */
    myproto.UnitType = (function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnitMonster"] = 0;
        values[valuesById[1] = "UnitPlayer"] = 1;
        return values;
    })();

    /**
     * TargetType enum.
     * @name myproto.TargetType
     * @enum {number}
     * @property {number} TargetNone=0 TargetNone value
     * @property {number} EnemySingle=1 EnemySingle value
     * @property {number} EnemySingleFront=2 EnemySingleFront value
     * @property {number} EnemySingleBehind=3 EnemySingleBehind value
     * @property {number} EnemyAll=4 EnemyAll value
     * @property {number} EnemyFrontAll=5 EnemyFrontAll value
     * @property {number} EnemyBehindAll=6 EnemyBehindAll value
     * @property {number} TargetSelf=10 TargetSelf value
     * @property {number} AllySingle=11 AllySingle value
     * @property {number} AllySingleFront=12 AllySingleFront value
     * @property {number} AllySingleBehind=13 AllySingleBehind value
     * @property {number} AllyAll=14 AllyAll value
     * @property {number} AllyFrontAll=15 AllyFrontAll value
     * @property {number} AllyBehindAll=16 AllyBehindAll value
     */
    myproto.TargetType = (function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TargetNone"] = 0;
        values[valuesById[1] = "EnemySingle"] = 1;
        values[valuesById[2] = "EnemySingleFront"] = 2;
        values[valuesById[3] = "EnemySingleBehind"] = 3;
        values[valuesById[4] = "EnemyAll"] = 4;
        values[valuesById[5] = "EnemyFrontAll"] = 5;
        values[valuesById[6] = "EnemyBehindAll"] = 6;
        values[valuesById[10] = "TargetSelf"] = 10;
        values[valuesById[11] = "AllySingle"] = 11;
        values[valuesById[12] = "AllySingleFront"] = 12;
        values[valuesById[13] = "AllySingleBehind"] = 13;
        values[valuesById[14] = "AllyAll"] = 14;
        values[valuesById[15] = "AllyFrontAll"] = 15;
        values[valuesById[16] = "AllyBehindAll"] = 16;
        return values;
    })();

    myproto.Item = (function () {

        /**
         * Properties of an Item.
         * @memberof myproto
         * @interface IItem
         * @property {number|Long|null} [Id] Item Id
         * @property {number|null} [ItemId] Item ItemId
         * @property {number|Long|null} [Num] Item Num
         */

        /**
         * Constructs a new Item.
         * @memberof myproto
         * @classdesc Represents an Item.
         * @implements IItem
         * @constructor
         * @param {myproto.IItem=} [p] Properties to set
         */
        function Item(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Item Id.
         * @member {number|Long} Id
         * @memberof myproto.Item
         * @instance
         */
        Item.prototype.Id = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

        /**
         * Item ItemId.
         * @member {number} ItemId
         * @memberof myproto.Item
         * @instance
         */
        Item.prototype.ItemId = 0;

        /**
         * Item Num.
         * @member {number|Long} Num
         * @memberof myproto.Item
         * @instance
         */
        Item.prototype.Num = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new Item instance using the specified properties.
         * @function create
         * @memberof myproto.Item
         * @static
         * @param {myproto.IItem=} [properties] Properties to set
         * @returns {myproto.Item} Item instance
         */
        Item.create = function create(properties) {
            return new Item(properties);
        };

        /**
         * Encodes the specified Item message. Does not implicitly {@link myproto.Item.verify|verify} messages.
         * @function encode
         * @memberof myproto.Item
         * @static
         * @param {myproto.IItem} m Item message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).uint64(m.Id);
            if (m.ItemId != null && Object.hasOwnProperty.call(m, "ItemId"))
                w.uint32(16).int32(m.ItemId);
            if (m.Num != null && Object.hasOwnProperty.call(m, "Num"))
                w.uint32(24).int64(m.Num);
            return w;
        };

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.Item();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Id = r.uint64();
                        break;
                    }
                    case 2: {
                        m.ItemId = r.int32();
                        break;
                    }
                    case 3: {
                        m.Num = r.int64();
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
         * Gets the default type url for Item
         * @function getTypeUrl
         * @memberof myproto.Item
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Item.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.Item";
        };

        return Item;
    })();

    /**
     * ItemType enum.
     * @name myproto.ItemType
     * @enum {number}
     * @property {number} ItemTypeNone=0 ItemTypeNone value
     * @property {number} UnoccupiedItem=1 UnoccupiedItem value
     * @property {number} StackItem=2 StackItem value
     * @property {number} UnstackItem=3 UnstackItem value
     * @property {number} EquipItem=4 EquipItem value
     */
    myproto.ItemType = (function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ItemTypeNone"] = 0;
        values[valuesById[1] = "UnoccupiedItem"] = 1;
        values[valuesById[2] = "StackItem"] = 2;
        values[valuesById[3] = "UnstackItem"] = 3;
        values[valuesById[4] = "EquipItem"] = 4;
        return values;
    })();

    /**
     * Quality enum.
     * @name myproto.Quality
     * @enum {number}
     * @property {number} QualityNone=0 QualityNone value
     * @property {number} White=1 White value
     * @property {number} Green=2 Green value
     * @property {number} Blue=3 Blue value
     * @property {number} Purple=4 Purple value
     * @property {number} Orange=5 Orange value
     */
    myproto.Quality = (function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "QualityNone"] = 0;
        values[valuesById[1] = "White"] = 1;
        values[valuesById[2] = "Green"] = 2;
        values[valuesById[3] = "Blue"] = 3;
        values[valuesById[4] = "Purple"] = 4;
        values[valuesById[5] = "Orange"] = 5;
        return values;
    })();

    myproto.GMREQ = (function () {

        /**
         * Properties of a GMREQ.
         * @memberof myproto
         * @interface IGMREQ
         * @property {string|null} [Cmd] GMREQ Cmd
         */

        /**
         * Constructs a new GMREQ.
         * @memberof myproto
         * @classdesc Represents a GMREQ.
         * @implements IGMREQ
         * @constructor
         * @param {myproto.IGMREQ=} [p] Properties to set
         */
        function GMREQ(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GMREQ Cmd.
         * @member {string} Cmd
         * @memberof myproto.GMREQ
         * @instance
         */
        GMREQ.prototype.Cmd = "";

        /**
         * Creates a new GMREQ instance using the specified properties.
         * @function create
         * @memberof myproto.GMREQ
         * @static
         * @param {myproto.IGMREQ=} [properties] Properties to set
         * @returns {myproto.GMREQ} GMREQ instance
         */
        GMREQ.create = function create(properties) {
            return new GMREQ(properties);
        };

        /**
         * Encodes the specified GMREQ message. Does not implicitly {@link myproto.GMREQ.verify|verify} messages.
         * @function encode
         * @memberof myproto.GMREQ
         * @static
         * @param {myproto.IGMREQ} m GMREQ message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GMREQ.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Cmd != null && Object.hasOwnProperty.call(m, "Cmd"))
                w.uint32(10).string(m.Cmd);
            return w;
        };

        /**
         * Decodes a GMREQ message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.GMREQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.GMREQ} GMREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GMREQ.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.GMREQ();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Cmd = r.string();
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
         * Gets the default type url for GMREQ
         * @function getTypeUrl
         * @memberof myproto.GMREQ
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GMREQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.GMREQ";
        };

        return GMREQ;
    })();

    myproto.GMACK = (function () {

        /**
         * Properties of a GMACK.
         * @memberof myproto
         * @interface IGMACK
         * @property {myproto.ResultCode|null} [Ret] GMACK Ret
         */

        /**
         * Constructs a new GMACK.
         * @memberof myproto
         * @classdesc Represents a GMACK.
         * @implements IGMACK
         * @constructor
         * @param {myproto.IGMACK=} [p] Properties to set
         */
        function GMACK(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GMACK Ret.
         * @member {myproto.ResultCode} Ret
         * @memberof myproto.GMACK
         * @instance
         */
        GMACK.prototype.Ret = 0;

        /**
         * Creates a new GMACK instance using the specified properties.
         * @function create
         * @memberof myproto.GMACK
         * @static
         * @param {myproto.IGMACK=} [properties] Properties to set
         * @returns {myproto.GMACK} GMACK instance
         */
        GMACK.create = function create(properties) {
            return new GMACK(properties);
        };

        /**
         * Encodes the specified GMACK message. Does not implicitly {@link myproto.GMACK.verify|verify} messages.
         * @function encode
         * @memberof myproto.GMACK
         * @static
         * @param {myproto.IGMACK} m GMACK message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GMACK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ret != null && Object.hasOwnProperty.call(m, "Ret"))
                w.uint32(8).int32(m.Ret);
            return w;
        };

        /**
         * Decodes a GMACK message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.GMACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.GMACK} GMACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GMACK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.GMACK();
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
         * Gets the default type url for GMACK
         * @function getTypeUrl
         * @memberof myproto.GMACK
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GMACK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.GMACK";
        };

        return GMACK;
    })();

    /**
     * ItemUpdateType enum.
     * @name myproto.ItemUpdateType
     * @enum {number}
     * @property {number} ItemUpdateNone=0 ItemUpdateNone value
     * @property {number} ItemAdd=1 ItemAdd value
     * @property {number} ItemDel=2 ItemDel value
     */
    myproto.ItemUpdateType = (function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ItemUpdateNone"] = 0;
        values[valuesById[1] = "ItemAdd"] = 1;
        values[valuesById[2] = "ItemDel"] = 2;
        return values;
    })();

    myproto.ItemUpdatePUSH = (function () {

        /**
         * Properties of an ItemUpdatePUSH.
         * @memberof myproto
         * @interface IItemUpdatePUSH
         * @property {myproto.ItemUpdateType|null} [UpdateType] ItemUpdatePUSH UpdateType
         * @property {Array.<myproto.IItem>|null} [Items] ItemUpdatePUSH Items
         */

        /**
         * Constructs a new ItemUpdatePUSH.
         * @memberof myproto
         * @classdesc Represents an ItemUpdatePUSH.
         * @implements IItemUpdatePUSH
         * @constructor
         * @param {myproto.IItemUpdatePUSH=} [p] Properties to set
         */
        function ItemUpdatePUSH(p) {
            this.Items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ItemUpdatePUSH UpdateType.
         * @member {myproto.ItemUpdateType} UpdateType
         * @memberof myproto.ItemUpdatePUSH
         * @instance
         */
        ItemUpdatePUSH.prototype.UpdateType = 0;

        /**
         * ItemUpdatePUSH Items.
         * @member {Array.<myproto.IItem>} Items
         * @memberof myproto.ItemUpdatePUSH
         * @instance
         */
        ItemUpdatePUSH.prototype.Items = $util.emptyArray;

        /**
         * Creates a new ItemUpdatePUSH instance using the specified properties.
         * @function create
         * @memberof myproto.ItemUpdatePUSH
         * @static
         * @param {myproto.IItemUpdatePUSH=} [properties] Properties to set
         * @returns {myproto.ItemUpdatePUSH} ItemUpdatePUSH instance
         */
        ItemUpdatePUSH.create = function create(properties) {
            return new ItemUpdatePUSH(properties);
        };

        /**
         * Encodes the specified ItemUpdatePUSH message. Does not implicitly {@link myproto.ItemUpdatePUSH.verify|verify} messages.
         * @function encode
         * @memberof myproto.ItemUpdatePUSH
         * @static
         * @param {myproto.IItemUpdatePUSH} m ItemUpdatePUSH message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemUpdatePUSH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UpdateType != null && Object.hasOwnProperty.call(m, "UpdateType"))
                w.uint32(8).int32(m.UpdateType);
            if (m.Items != null && m.Items.length) {
                for (var i = 0; i < m.Items.length; ++i)
                    $root.myproto.Item.encode(m.Items[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes an ItemUpdatePUSH message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.ItemUpdatePUSH
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.ItemUpdatePUSH} ItemUpdatePUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemUpdatePUSH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.ItemUpdatePUSH();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.UpdateType = r.int32();
                        break;
                    }
                    case 2: {
                        if (!(m.Items && m.Items.length))
                            m.Items = [];
                        m.Items.push($root.myproto.Item.decode(r, r.uint32()));
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
         * Gets the default type url for ItemUpdatePUSH
         * @function getTypeUrl
         * @memberof myproto.ItemUpdatePUSH
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ItemUpdatePUSH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.ItemUpdatePUSH";
        };

        return ItemUpdatePUSH;
    })();

    myproto.CreateBattleREQ = (function () {

        /**
         * Properties of a CreateBattleREQ.
         * @memberof myproto
         * @interface ICreateBattleREQ
         * @property {number|null} [LevelId] CreateBattleREQ LevelId
         */

        /**
         * Constructs a new CreateBattleREQ.
         * @memberof myproto
         * @classdesc Represents a CreateBattleREQ.
         * @implements ICreateBattleREQ
         * @constructor
         * @param {myproto.ICreateBattleREQ=} [p] Properties to set
         */
        function CreateBattleREQ(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CreateBattleREQ LevelId.
         * @member {number} LevelId
         * @memberof myproto.CreateBattleREQ
         * @instance
         */
        CreateBattleREQ.prototype.LevelId = 0;

        /**
         * Creates a new CreateBattleREQ instance using the specified properties.
         * @function create
         * @memberof myproto.CreateBattleREQ
         * @static
         * @param {myproto.ICreateBattleREQ=} [properties] Properties to set
         * @returns {myproto.CreateBattleREQ} CreateBattleREQ instance
         */
        CreateBattleREQ.create = function create(properties) {
            return new CreateBattleREQ(properties);
        };

        /**
         * Encodes the specified CreateBattleREQ message. Does not implicitly {@link myproto.CreateBattleREQ.verify|verify} messages.
         * @function encode
         * @memberof myproto.CreateBattleREQ
         * @static
         * @param {myproto.ICreateBattleREQ} m CreateBattleREQ message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBattleREQ.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LevelId != null && Object.hasOwnProperty.call(m, "LevelId"))
                w.uint32(8).int32(m.LevelId);
            return w;
        };

        /**
         * Decodes a CreateBattleREQ message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.CreateBattleREQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.CreateBattleREQ} CreateBattleREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBattleREQ.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.CreateBattleREQ();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.LevelId = r.int32();
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
         * Gets the default type url for CreateBattleREQ
         * @function getTypeUrl
         * @memberof myproto.CreateBattleREQ
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateBattleREQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.CreateBattleREQ";
        };

        return CreateBattleREQ;
    })();

    myproto.CreateBattleACK = (function () {

        /**
         * Properties of a CreateBattleACK.
         * @memberof myproto
         * @interface ICreateBattleACK
         * @property {myproto.ResultCode|null} [Ret] CreateBattleACK Ret
         */

        /**
         * Constructs a new CreateBattleACK.
         * @memberof myproto
         * @classdesc Represents a CreateBattleACK.
         * @implements ICreateBattleACK
         * @constructor
         * @param {myproto.ICreateBattleACK=} [p] Properties to set
         */
        function CreateBattleACK(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CreateBattleACK Ret.
         * @member {myproto.ResultCode} Ret
         * @memberof myproto.CreateBattleACK
         * @instance
         */
        CreateBattleACK.prototype.Ret = 0;

        /**
         * Creates a new CreateBattleACK instance using the specified properties.
         * @function create
         * @memberof myproto.CreateBattleACK
         * @static
         * @param {myproto.ICreateBattleACK=} [properties] Properties to set
         * @returns {myproto.CreateBattleACK} CreateBattleACK instance
         */
        CreateBattleACK.create = function create(properties) {
            return new CreateBattleACK(properties);
        };

        /**
         * Encodes the specified CreateBattleACK message. Does not implicitly {@link myproto.CreateBattleACK.verify|verify} messages.
         * @function encode
         * @memberof myproto.CreateBattleACK
         * @static
         * @param {myproto.ICreateBattleACK} m CreateBattleACK message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBattleACK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ret != null && Object.hasOwnProperty.call(m, "Ret"))
                w.uint32(8).int32(m.Ret);
            return w;
        };

        /**
         * Decodes a CreateBattleACK message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.CreateBattleACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.CreateBattleACK} CreateBattleACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBattleACK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.CreateBattleACK();
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
         * Gets the default type url for CreateBattleACK
         * @function getTypeUrl
         * @memberof myproto.CreateBattleACK
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateBattleACK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.CreateBattleACK";
        };

        return CreateBattleACK;
    })();

    myproto.BattleUnit = (function () {

        /**
         * Properties of a BattleUnit.
         * @memberof myproto
         * @interface IBattleUnit
         * @property {number|null} [Id] BattleUnit Id
         * @property {number|Long|null} [Uid] BattleUnit Uid
         * @property {string|null} [Name] BattleUnit Name
         * @property {number|null} [Team] BattleUnit Team
         * @property {number|null} [Position] BattleUnit Position
         * @property {number|Long|null} [HP] BattleUnit HP
         * @property {number|Long|null} [MaxHP] BattleUnit MaxHP
         */

        /**
         * Constructs a new BattleUnit.
         * @memberof myproto
         * @classdesc Represents a BattleUnit.
         * @implements IBattleUnit
         * @constructor
         * @param {myproto.IBattleUnit=} [p] Properties to set
         */
        function BattleUnit(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BattleUnit Id.
         * @member {number} Id
         * @memberof myproto.BattleUnit
         * @instance
         */
        BattleUnit.prototype.Id = 0;

        /**
         * BattleUnit Uid.
         * @member {number|Long} Uid
         * @memberof myproto.BattleUnit
         * @instance
         */
        BattleUnit.prototype.Uid = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

        /**
         * BattleUnit Name.
         * @member {string} Name
         * @memberof myproto.BattleUnit
         * @instance
         */
        BattleUnit.prototype.Name = "";

        /**
         * BattleUnit Team.
         * @member {number} Team
         * @memberof myproto.BattleUnit
         * @instance
         */
        BattleUnit.prototype.Team = 0;

        /**
         * BattleUnit Position.
         * @member {number} Position
         * @memberof myproto.BattleUnit
         * @instance
         */
        BattleUnit.prototype.Position = 0;

        /**
         * BattleUnit HP.
         * @member {number|Long} HP
         * @memberof myproto.BattleUnit
         * @instance
         */
        BattleUnit.prototype.HP = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * BattleUnit MaxHP.
         * @member {number|Long} MaxHP
         * @memberof myproto.BattleUnit
         * @instance
         */
        BattleUnit.prototype.MaxHP = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new BattleUnit instance using the specified properties.
         * @function create
         * @memberof myproto.BattleUnit
         * @static
         * @param {myproto.IBattleUnit=} [properties] Properties to set
         * @returns {myproto.BattleUnit} BattleUnit instance
         */
        BattleUnit.create = function create(properties) {
            return new BattleUnit(properties);
        };

        /**
         * Encodes the specified BattleUnit message. Does not implicitly {@link myproto.BattleUnit.verify|verify} messages.
         * @function encode
         * @memberof myproto.BattleUnit
         * @static
         * @param {myproto.IBattleUnit} m BattleUnit message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleUnit.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Uid != null && Object.hasOwnProperty.call(m, "Uid"))
                w.uint32(16).uint64(m.Uid);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Team != null && Object.hasOwnProperty.call(m, "Team"))
                w.uint32(32).int32(m.Team);
            if (m.Position != null && Object.hasOwnProperty.call(m, "Position"))
                w.uint32(40).int32(m.Position);
            if (m.HP != null && Object.hasOwnProperty.call(m, "HP"))
                w.uint32(48).int64(m.HP);
            if (m.MaxHP != null && Object.hasOwnProperty.call(m, "MaxHP"))
                w.uint32(56).int64(m.MaxHP);
            return w;
        };

        /**
         * Decodes a BattleUnit message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.BattleUnit
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.BattleUnit} BattleUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleUnit.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.BattleUnit();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Id = r.int32();
                        break;
                    }
                    case 2: {
                        m.Uid = r.uint64();
                        break;
                    }
                    case 3: {
                        m.Name = r.string();
                        break;
                    }
                    case 4: {
                        m.Team = r.int32();
                        break;
                    }
                    case 5: {
                        m.Position = r.int32();
                        break;
                    }
                    case 6: {
                        m.HP = r.int64();
                        break;
                    }
                    case 7: {
                        m.MaxHP = r.int64();
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
         * Gets the default type url for BattleUnit
         * @function getTypeUrl
         * @memberof myproto.BattleUnit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleUnit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.BattleUnit";
        };

        return BattleUnit;
    })();

    myproto.BattleInfoPUSH = (function () {

        /**
         * Properties of a BattleInfoPUSH.
         * @memberof myproto
         * @interface IBattleInfoPUSH
         * @property {number|Long|null} [BattleId] BattleInfoPUSH BattleId
         * @property {number|null} [LevelId] BattleInfoPUSH LevelId
         * @property {Array.<myproto.IBattleUnit>|null} [Units] BattleInfoPUSH Units
         */

        /**
         * Constructs a new BattleInfoPUSH.
         * @memberof myproto
         * @classdesc Represents a BattleInfoPUSH.
         * @implements IBattleInfoPUSH
         * @constructor
         * @param {myproto.IBattleInfoPUSH=} [p] Properties to set
         */
        function BattleInfoPUSH(p) {
            this.Units = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BattleInfoPUSH BattleId.
         * @member {number|Long} BattleId
         * @memberof myproto.BattleInfoPUSH
         * @instance
         */
        BattleInfoPUSH.prototype.BattleId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

        /**
         * BattleInfoPUSH LevelId.
         * @member {number} LevelId
         * @memberof myproto.BattleInfoPUSH
         * @instance
         */
        BattleInfoPUSH.prototype.LevelId = 0;

        /**
         * BattleInfoPUSH Units.
         * @member {Array.<myproto.IBattleUnit>} Units
         * @memberof myproto.BattleInfoPUSH
         * @instance
         */
        BattleInfoPUSH.prototype.Units = $util.emptyArray;

        /**
         * Creates a new BattleInfoPUSH instance using the specified properties.
         * @function create
         * @memberof myproto.BattleInfoPUSH
         * @static
         * @param {myproto.IBattleInfoPUSH=} [properties] Properties to set
         * @returns {myproto.BattleInfoPUSH} BattleInfoPUSH instance
         */
        BattleInfoPUSH.create = function create(properties) {
            return new BattleInfoPUSH(properties);
        };

        /**
         * Encodes the specified BattleInfoPUSH message. Does not implicitly {@link myproto.BattleInfoPUSH.verify|verify} messages.
         * @function encode
         * @memberof myproto.BattleInfoPUSH
         * @static
         * @param {myproto.IBattleInfoPUSH} m BattleInfoPUSH message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleInfoPUSH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BattleId != null && Object.hasOwnProperty.call(m, "BattleId"))
                w.uint32(8).uint64(m.BattleId);
            if (m.LevelId != null && Object.hasOwnProperty.call(m, "LevelId"))
                w.uint32(16).int32(m.LevelId);
            if (m.Units != null && m.Units.length) {
                for (var i = 0; i < m.Units.length; ++i)
                    $root.myproto.BattleUnit.encode(m.Units[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a BattleInfoPUSH message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.BattleInfoPUSH
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.BattleInfoPUSH} BattleInfoPUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleInfoPUSH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.BattleInfoPUSH();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.BattleId = r.uint64();
                        break;
                    }
                    case 2: {
                        m.LevelId = r.int32();
                        break;
                    }
                    case 3: {
                        if (!(m.Units && m.Units.length))
                            m.Units = [];
                        m.Units.push($root.myproto.BattleUnit.decode(r, r.uint32()));
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
         * Gets the default type url for BattleInfoPUSH
         * @function getTypeUrl
         * @memberof myproto.BattleInfoPUSH
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleInfoPUSH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.BattleInfoPUSH";
        };

        return BattleInfoPUSH;
    })();

    myproto.BattleStartPUSH = (function () {

        /**
         * Properties of a BattleStartPUSH.
         * @memberof myproto
         * @interface IBattleStartPUSH
         * @property {number|Long|null} [BattleId] BattleStartPUSH BattleId
         */

        /**
         * Constructs a new BattleStartPUSH.
         * @memberof myproto
         * @classdesc Represents a BattleStartPUSH.
         * @implements IBattleStartPUSH
         * @constructor
         * @param {myproto.IBattleStartPUSH=} [p] Properties to set
         */
        function BattleStartPUSH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BattleStartPUSH BattleId.
         * @member {number|Long} BattleId
         * @memberof myproto.BattleStartPUSH
         * @instance
         */
        BattleStartPUSH.prototype.BattleId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

        /**
         * Creates a new BattleStartPUSH instance using the specified properties.
         * @function create
         * @memberof myproto.BattleStartPUSH
         * @static
         * @param {myproto.IBattleStartPUSH=} [properties] Properties to set
         * @returns {myproto.BattleStartPUSH} BattleStartPUSH instance
         */
        BattleStartPUSH.create = function create(properties) {
            return new BattleStartPUSH(properties);
        };

        /**
         * Encodes the specified BattleStartPUSH message. Does not implicitly {@link myproto.BattleStartPUSH.verify|verify} messages.
         * @function encode
         * @memberof myproto.BattleStartPUSH
         * @static
         * @param {myproto.IBattleStartPUSH} m BattleStartPUSH message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleStartPUSH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BattleId != null && Object.hasOwnProperty.call(m, "BattleId"))
                w.uint32(8).uint64(m.BattleId);
            return w;
        };

        /**
         * Decodes a BattleStartPUSH message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.BattleStartPUSH
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.BattleStartPUSH} BattleStartPUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleStartPUSH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.BattleStartPUSH();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.BattleId = r.uint64();
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
         * Gets the default type url for BattleStartPUSH
         * @function getTypeUrl
         * @memberof myproto.BattleStartPUSH
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleStartPUSH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.BattleStartPUSH";
        };

        return BattleStartPUSH;
    })();

    myproto.BattleSkillStart = (function () {

        /**
         * Properties of a BattleSkillStart.
         * @memberof myproto
         * @interface IBattleSkillStart
         * @property {number|null} [Src] BattleSkillStart Src
         * @property {number|null} [SkillId] BattleSkillStart SkillId
         * @property {Array.<number>|null} [Tar] BattleSkillStart Tar
         */

        /**
         * Constructs a new BattleSkillStart.
         * @memberof myproto
         * @classdesc Represents a BattleSkillStart.
         * @implements IBattleSkillStart
         * @constructor
         * @param {myproto.IBattleSkillStart=} [p] Properties to set
         */
        function BattleSkillStart(p) {
            this.Tar = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BattleSkillStart Src.
         * @member {number} Src
         * @memberof myproto.BattleSkillStart
         * @instance
         */
        BattleSkillStart.prototype.Src = 0;

        /**
         * BattleSkillStart SkillId.
         * @member {number} SkillId
         * @memberof myproto.BattleSkillStart
         * @instance
         */
        BattleSkillStart.prototype.SkillId = 0;

        /**
         * BattleSkillStart Tar.
         * @member {Array.<number>} Tar
         * @memberof myproto.BattleSkillStart
         * @instance
         */
        BattleSkillStart.prototype.Tar = $util.emptyArray;

        /**
         * Creates a new BattleSkillStart instance using the specified properties.
         * @function create
         * @memberof myproto.BattleSkillStart
         * @static
         * @param {myproto.IBattleSkillStart=} [properties] Properties to set
         * @returns {myproto.BattleSkillStart} BattleSkillStart instance
         */
        BattleSkillStart.create = function create(properties) {
            return new BattleSkillStart(properties);
        };

        /**
         * Encodes the specified BattleSkillStart message. Does not implicitly {@link myproto.BattleSkillStart.verify|verify} messages.
         * @function encode
         * @memberof myproto.BattleSkillStart
         * @static
         * @param {myproto.IBattleSkillStart} m BattleSkillStart message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSkillStart.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Src != null && Object.hasOwnProperty.call(m, "Src"))
                w.uint32(8).int32(m.Src);
            if (m.SkillId != null && Object.hasOwnProperty.call(m, "SkillId"))
                w.uint32(16).int32(m.SkillId);
            if (m.Tar != null && m.Tar.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Tar.length; ++i)
                    w.int32(m.Tar[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a BattleSkillStart message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.BattleSkillStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.BattleSkillStart} BattleSkillStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSkillStart.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.BattleSkillStart();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Src = r.int32();
                        break;
                    }
                    case 2: {
                        m.SkillId = r.int32();
                        break;
                    }
                    case 3: {
                        if (!(m.Tar && m.Tar.length))
                            m.Tar = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.Tar.push(r.int32());
                        } else
                            m.Tar.push(r.int32());
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
         * Gets the default type url for BattleSkillStart
         * @function getTypeUrl
         * @memberof myproto.BattleSkillStart
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleSkillStart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.BattleSkillStart";
        };

        return BattleSkillStart;
    })();

    myproto.BattleSkillEffect = (function () {

        /**
         * Properties of a BattleSkillEffect.
         * @memberof myproto
         * @interface IBattleSkillEffect
         * @property {number|null} [Src] BattleSkillEffect Src
         * @property {number|null} [SkillId] BattleSkillEffect SkillId
         * @property {number|null} [Tar] BattleSkillEffect Tar
         * @property {boolean|null} [IsHeal] BattleSkillEffect IsHeal
         * @property {number|Long|null} [Value] BattleSkillEffect Value
         */

        /**
         * Constructs a new BattleSkillEffect.
         * @memberof myproto
         * @classdesc Represents a BattleSkillEffect.
         * @implements IBattleSkillEffect
         * @constructor
         * @param {myproto.IBattleSkillEffect=} [p] Properties to set
         */
        function BattleSkillEffect(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BattleSkillEffect Src.
         * @member {number} Src
         * @memberof myproto.BattleSkillEffect
         * @instance
         */
        BattleSkillEffect.prototype.Src = 0;

        /**
         * BattleSkillEffect SkillId.
         * @member {number} SkillId
         * @memberof myproto.BattleSkillEffect
         * @instance
         */
        BattleSkillEffect.prototype.SkillId = 0;

        /**
         * BattleSkillEffect Tar.
         * @member {number} Tar
         * @memberof myproto.BattleSkillEffect
         * @instance
         */
        BattleSkillEffect.prototype.Tar = 0;

        /**
         * BattleSkillEffect IsHeal.
         * @member {boolean} IsHeal
         * @memberof myproto.BattleSkillEffect
         * @instance
         */
        BattleSkillEffect.prototype.IsHeal = false;

        /**
         * BattleSkillEffect Value.
         * @member {number|Long} Value
         * @memberof myproto.BattleSkillEffect
         * @instance
         */
        BattleSkillEffect.prototype.Value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new BattleSkillEffect instance using the specified properties.
         * @function create
         * @memberof myproto.BattleSkillEffect
         * @static
         * @param {myproto.IBattleSkillEffect=} [properties] Properties to set
         * @returns {myproto.BattleSkillEffect} BattleSkillEffect instance
         */
        BattleSkillEffect.create = function create(properties) {
            return new BattleSkillEffect(properties);
        };

        /**
         * Encodes the specified BattleSkillEffect message. Does not implicitly {@link myproto.BattleSkillEffect.verify|verify} messages.
         * @function encode
         * @memberof myproto.BattleSkillEffect
         * @static
         * @param {myproto.IBattleSkillEffect} m BattleSkillEffect message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSkillEffect.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Src != null && Object.hasOwnProperty.call(m, "Src"))
                w.uint32(8).int32(m.Src);
            if (m.SkillId != null && Object.hasOwnProperty.call(m, "SkillId"))
                w.uint32(16).int32(m.SkillId);
            if (m.Tar != null && Object.hasOwnProperty.call(m, "Tar"))
                w.uint32(24).int32(m.Tar);
            if (m.IsHeal != null && Object.hasOwnProperty.call(m, "IsHeal"))
                w.uint32(32).bool(m.IsHeal);
            if (m.Value != null && Object.hasOwnProperty.call(m, "Value"))
                w.uint32(40).int64(m.Value);
            return w;
        };

        /**
         * Decodes a BattleSkillEffect message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.BattleSkillEffect
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.BattleSkillEffect} BattleSkillEffect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSkillEffect.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.BattleSkillEffect();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.Src = r.int32();
                        break;
                    }
                    case 2: {
                        m.SkillId = r.int32();
                        break;
                    }
                    case 3: {
                        m.Tar = r.int32();
                        break;
                    }
                    case 4: {
                        m.IsHeal = r.bool();
                        break;
                    }
                    case 5: {
                        m.Value = r.int64();
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
         * Gets the default type url for BattleSkillEffect
         * @function getTypeUrl
         * @memberof myproto.BattleSkillEffect
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleSkillEffect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.BattleSkillEffect";
        };

        return BattleSkillEffect;
    })();

    myproto.BattleActionPUSH = (function () {

        /**
         * Properties of a BattleActionPUSH.
         * @memberof myproto
         * @interface IBattleActionPUSH
         * @property {number|Long|null} [BattleId] BattleActionPUSH BattleId
         * @property {Array.<myproto.IBattleSkillEffect>|null} [Effects] BattleActionPUSH Effects
         * @property {Array.<myproto.IBattleSkillStart>|null} [Skills] BattleActionPUSH Skills
         */

        /**
         * Constructs a new BattleActionPUSH.
         * @memberof myproto
         * @classdesc Represents a BattleActionPUSH.
         * @implements IBattleActionPUSH
         * @constructor
         * @param {myproto.IBattleActionPUSH=} [p] Properties to set
         */
        function BattleActionPUSH(p) {
            this.Effects = [];
            this.Skills = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BattleActionPUSH BattleId.
         * @member {number|Long} BattleId
         * @memberof myproto.BattleActionPUSH
         * @instance
         */
        BattleActionPUSH.prototype.BattleId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

        /**
         * BattleActionPUSH Effects.
         * @member {Array.<myproto.IBattleSkillEffect>} Effects
         * @memberof myproto.BattleActionPUSH
         * @instance
         */
        BattleActionPUSH.prototype.Effects = $util.emptyArray;

        /**
         * BattleActionPUSH Skills.
         * @member {Array.<myproto.IBattleSkillStart>} Skills
         * @memberof myproto.BattleActionPUSH
         * @instance
         */
        BattleActionPUSH.prototype.Skills = $util.emptyArray;

        /**
         * Creates a new BattleActionPUSH instance using the specified properties.
         * @function create
         * @memberof myproto.BattleActionPUSH
         * @static
         * @param {myproto.IBattleActionPUSH=} [properties] Properties to set
         * @returns {myproto.BattleActionPUSH} BattleActionPUSH instance
         */
        BattleActionPUSH.create = function create(properties) {
            return new BattleActionPUSH(properties);
        };

        /**
         * Encodes the specified BattleActionPUSH message. Does not implicitly {@link myproto.BattleActionPUSH.verify|verify} messages.
         * @function encode
         * @memberof myproto.BattleActionPUSH
         * @static
         * @param {myproto.IBattleActionPUSH} m BattleActionPUSH message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleActionPUSH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BattleId != null && Object.hasOwnProperty.call(m, "BattleId"))
                w.uint32(8).uint64(m.BattleId);
            if (m.Effects != null && m.Effects.length) {
                for (var i = 0; i < m.Effects.length; ++i)
                    $root.myproto.BattleSkillEffect.encode(m.Effects[i], w.uint32(18).fork()).ldelim();
            }
            if (m.Skills != null && m.Skills.length) {
                for (var i = 0; i < m.Skills.length; ++i)
                    $root.myproto.BattleSkillStart.encode(m.Skills[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a BattleActionPUSH message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.BattleActionPUSH
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.BattleActionPUSH} BattleActionPUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleActionPUSH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.BattleActionPUSH();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.BattleId = r.uint64();
                        break;
                    }
                    case 2: {
                        if (!(m.Effects && m.Effects.length))
                            m.Effects = [];
                        m.Effects.push($root.myproto.BattleSkillEffect.decode(r, r.uint32()));
                        break;
                    }
                    case 3: {
                        if (!(m.Skills && m.Skills.length))
                            m.Skills = [];
                        m.Skills.push($root.myproto.BattleSkillStart.decode(r, r.uint32()));
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
         * Gets the default type url for BattleActionPUSH
         * @function getTypeUrl
         * @memberof myproto.BattleActionPUSH
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleActionPUSH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.BattleActionPUSH";
        };

        return BattleActionPUSH;
    })();

    myproto.BattleFinishPUSH = (function () {

        /**
         * Properties of a BattleFinishPUSH.
         * @memberof myproto
         * @interface IBattleFinishPUSH
         * @property {number|Long|null} [BattleId] BattleFinishPUSH BattleId
         * @property {boolean|null} [Win] BattleFinishPUSH Win
         */

        /**
         * Constructs a new BattleFinishPUSH.
         * @memberof myproto
         * @classdesc Represents a BattleFinishPUSH.
         * @implements IBattleFinishPUSH
         * @constructor
         * @param {myproto.IBattleFinishPUSH=} [p] Properties to set
         */
        function BattleFinishPUSH(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BattleFinishPUSH BattleId.
         * @member {number|Long} BattleId
         * @memberof myproto.BattleFinishPUSH
         * @instance
         */
        BattleFinishPUSH.prototype.BattleId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

        /**
         * BattleFinishPUSH Win.
         * @member {boolean} Win
         * @memberof myproto.BattleFinishPUSH
         * @instance
         */
        BattleFinishPUSH.prototype.Win = false;

        /**
         * Creates a new BattleFinishPUSH instance using the specified properties.
         * @function create
         * @memberof myproto.BattleFinishPUSH
         * @static
         * @param {myproto.IBattleFinishPUSH=} [properties] Properties to set
         * @returns {myproto.BattleFinishPUSH} BattleFinishPUSH instance
         */
        BattleFinishPUSH.create = function create(properties) {
            return new BattleFinishPUSH(properties);
        };

        /**
         * Encodes the specified BattleFinishPUSH message. Does not implicitly {@link myproto.BattleFinishPUSH.verify|verify} messages.
         * @function encode
         * @memberof myproto.BattleFinishPUSH
         * @static
         * @param {myproto.IBattleFinishPUSH} m BattleFinishPUSH message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleFinishPUSH.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BattleId != null && Object.hasOwnProperty.call(m, "BattleId"))
                w.uint32(8).uint64(m.BattleId);
            if (m.Win != null && Object.hasOwnProperty.call(m, "Win"))
                w.uint32(16).bool(m.Win);
            return w;
        };

        /**
         * Decodes a BattleFinishPUSH message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.BattleFinishPUSH
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.BattleFinishPUSH} BattleFinishPUSH
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleFinishPUSH.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.BattleFinishPUSH();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.BattleId = r.uint64();
                        break;
                    }
                    case 2: {
                        m.Win = r.bool();
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
         * Gets the default type url for BattleFinishPUSH
         * @function getTypeUrl
         * @memberof myproto.BattleFinishPUSH
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleFinishPUSH.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.BattleFinishPUSH";
        };

        return BattleFinishPUSH;
    })();

    myproto.BattleStartREQ = (function () {

        /**
         * Properties of a BattleStartREQ.
         * @memberof myproto
         * @interface IBattleStartREQ
         * @property {number|Long|null} [BattleId] BattleStartREQ BattleId
         */

        /**
         * Constructs a new BattleStartREQ.
         * @memberof myproto
         * @classdesc Represents a BattleStartREQ.
         * @implements IBattleStartREQ
         * @constructor
         * @param {myproto.IBattleStartREQ=} [p] Properties to set
         */
        function BattleStartREQ(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BattleStartREQ BattleId.
         * @member {number|Long} BattleId
         * @memberof myproto.BattleStartREQ
         * @instance
         */
        BattleStartREQ.prototype.BattleId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

        /**
         * Creates a new BattleStartREQ instance using the specified properties.
         * @function create
         * @memberof myproto.BattleStartREQ
         * @static
         * @param {myproto.IBattleStartREQ=} [properties] Properties to set
         * @returns {myproto.BattleStartREQ} BattleStartREQ instance
         */
        BattleStartREQ.create = function create(properties) {
            return new BattleStartREQ(properties);
        };

        /**
         * Encodes the specified BattleStartREQ message. Does not implicitly {@link myproto.BattleStartREQ.verify|verify} messages.
         * @function encode
         * @memberof myproto.BattleStartREQ
         * @static
         * @param {myproto.IBattleStartREQ} m BattleStartREQ message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleStartREQ.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BattleId != null && Object.hasOwnProperty.call(m, "BattleId"))
                w.uint32(8).uint64(m.BattleId);
            return w;
        };

        /**
         * Decodes a BattleStartREQ message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.BattleStartREQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.BattleStartREQ} BattleStartREQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleStartREQ.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.BattleStartREQ();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1: {
                        m.BattleId = r.uint64();
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
         * Gets the default type url for BattleStartREQ
         * @function getTypeUrl
         * @memberof myproto.BattleStartREQ
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleStartREQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.BattleStartREQ";
        };

        return BattleStartREQ;
    })();

    myproto.BattleStartACK = (function () {

        /**
         * Properties of a BattleStartACK.
         * @memberof myproto
         * @interface IBattleStartACK
         * @property {myproto.ResultCode|null} [Ret] BattleStartACK Ret
         */

        /**
         * Constructs a new BattleStartACK.
         * @memberof myproto
         * @classdesc Represents a BattleStartACK.
         * @implements IBattleStartACK
         * @constructor
         * @param {myproto.IBattleStartACK=} [p] Properties to set
         */
        function BattleStartACK(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BattleStartACK Ret.
         * @member {myproto.ResultCode} Ret
         * @memberof myproto.BattleStartACK
         * @instance
         */
        BattleStartACK.prototype.Ret = 0;

        /**
         * Creates a new BattleStartACK instance using the specified properties.
         * @function create
         * @memberof myproto.BattleStartACK
         * @static
         * @param {myproto.IBattleStartACK=} [properties] Properties to set
         * @returns {myproto.BattleStartACK} BattleStartACK instance
         */
        BattleStartACK.create = function create(properties) {
            return new BattleStartACK(properties);
        };

        /**
         * Encodes the specified BattleStartACK message. Does not implicitly {@link myproto.BattleStartACK.verify|verify} messages.
         * @function encode
         * @memberof myproto.BattleStartACK
         * @static
         * @param {myproto.IBattleStartACK} m BattleStartACK message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleStartACK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ret != null && Object.hasOwnProperty.call(m, "Ret"))
                w.uint32(8).int32(m.Ret);
            return w;
        };

        /**
         * Decodes a BattleStartACK message from the specified reader or buffer.
         * @function decode
         * @memberof myproto.BattleStartACK
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {myproto.BattleStartACK} BattleStartACK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleStartACK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.myproto.BattleStartACK();
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
         * Gets the default type url for BattleStartACK
         * @function getTypeUrl
         * @memberof myproto.BattleStartACK
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BattleStartACK.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/myproto.BattleStartACK";
        };

        return BattleStartACK;
    })();

    return myproto;
})();

module.exports = $root;
