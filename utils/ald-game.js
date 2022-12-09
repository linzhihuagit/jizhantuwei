var e = require("../@babel/runtime/helpers/typeof");

!function() {
    function t(t) {
        function n(e) {
            return Object.prototype.toString.call(e);
        }
        var r = {};
        return "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(e, t) {
            r["[object " + e + "]"] = e.toLowerCase();
        }), null == t ? t : "object" == e(t) || "function" == typeof t ? r[n.call(t)] || "object" : e(t);
    }
    function n() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }
        return e() + e() + e() + e() + e() + e() + e() + e();
    }
    function r(e, t) {
        w++, "show" == t && (e.uo = !1), e.as = x, e.at = S, e.rq_c = w, e.ifo = g, e.ak = d.app_key, 
        e.uu = f, e.v = s, e.st = Date.now(), e.ev = t, e.te = l, e.wsr = y, "" !== function(e) {
            if (void 0 === e || "" === e) return "";
            var t = {};
            for (var n in e) "rawData" != n && "errMsg" != n && (t[n] = e[n]);
            return t;
        }(e.ufo) && (e.ufo = e.ufo), e.ec = v, wx.Queue.push(function() {
            return new Promise(function(t, n) {
                var r = {
                    se: m || "",
                    op: h || "",
                    img: b || ""
                };
                "" === c || (r.ai = c), wx.request({
                    url: "https://" + i + ".aldwx.com/d.html",
                    data: e,
                    header: r,
                    method: "GET",
                    fail: function() {
                        t("");
                    },
                    success: function(e) {
                        t(200 == e.statusCode ? "" : "status error");
                    }
                });
            });
        });
    }
    function a(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
    }
    function o(e) {
        for (var t = "", n = 0; n < e.length; n++) e[n].length > t.length && (t = e[n]);
        return t;
    }
    var s = "3.2.9", i = "glog", c = void 0 === wx.getAccountInfoSync ? "" : wx.getAccountInfoSync().miniProgram.appId.split("").map(function(e) {
        return e.charCodeAt(0) + 9;
    }).join("-"), d = require("./ald-game-conf");
    "" === d.app_key && console.error("请在ald-game-conf.js文件中填写小游戏统计/广告监测平台创建小游戏后生成的app_key，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南！"), 
    d.app_key = d.app_key.replace(/\s/g, "");
    var u = d.openKey, l = "wg";
    wx.request({
        url: "https://" + i + ".aldwx.com/config/app.json",
        method: "GET",
        success: function(e) {
            200 === e.statusCode && (e.data.version > s && console.warn("您的SDK不是最新版本，部分功能不可用，请尽快前往 http://tj.aldwx.com/downSDK 升级"), 
            e.data.warn && console.warn(e.data.warn), e.data.error && console.error(e.data.error));
        }
    });
    var g = "", f = function() {
        var e = "";
        try {
            e = wx.getStorageSync("aldstat_uuid"), wx.setStorageSync("ald_ifo", !0);
        } catch (t) {
            e = "uuid_getstoragesync";
        }
        if (e) g = !1; else {
            e = n(), g = !0;
            try {
                wx.setStorageSync("aldstat_uuid", e);
            } catch (e) {
                wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
            }
        }
        return e;
    }(), p = {}, m = "", h = function() {
        var e = "";
        try {
            e = wx.getStorageSync("aldstat_op");
        } catch (t) {
            e = wx.getStorageSync("aldstat_op");
        }
        if ("" === e) {
            if ("" === u) return "";
            try {
                h = e = wx.getStorageSync(u), e && wx.setStorageSync("aldstat_op", e);
            } catch (t) {
                h = e = wx.getStorageSync(u), e && wx.setStorageSync("aldstat_op", e);
            }
        }
        return e;
    }(), v = 0, w = "", y = wx.getLaunchOptionsSync(), _ = Date.now(), S = "" + Date.now() + Math.floor(1e7 * Math.random()), x = "" + Date.now() + Math.floor(1e7 * Math.random()), I = 0, q = "", b = "", N = !0, j = !1, O = [ "aldSendEvent", "aldOnShareAppMessage", "aldShareAppMessage", "aldSendSession", "aldSendOpenid", "aldLevelEvent", "aldRevenue" ], M = [ "payStart", "paySuccess", "payFail", "die", "revive", "tools", "award" ], k = [ "complete", "fail" ], D = wx.getStorageSync("ald_level_time") || 0, C = wx.getStorageSync("ald_level_session") || "";
    void 0 === wx.Queue && (wx.Queue = new function() {
        this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;
        var e = this;
        this.push = function(t) {
            this.tasks.push(new Promise(function(n, r) {
                var a = function() {
                    e.activeCount++, t().then(function(e) {
                        n(e);
                    }).then(function() {
                        e.next();
                    });
                };
                e.activeCount < e.concurrency ? a() : e.queue.push(a);
            }));
        }, this.all = function() {
            return Promise.all(this.tasks);
        }, this.next = function() {
            e.activeCount--, e.queue.length > 0 && e.queue.shift()();
        };
    }(), wx.Queue.all()), Promise.all([ new Promise(function(e, t) {
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function(t) {
                        b = o(t.userInfo.avatarUrl.split("/")), e(t);
                    },
                    fail: function() {
                        e("");
                    }
                }) : e("");
            },
            fail: function() {
                e("");
            }
        });
    }), new Promise(function(e, t) {
        wx.getNetworkType({
            success: function(t) {
                e(t);
            },
            fail: function() {
                e("");
            }
        });
    }) ]).then(function(e) {
        "" !== e[1] ? p.nt = e[1].networkType || "" : p.nt = "";
        var t = a(p);
        "" !== e[0] && (t.ufo = e[0], q = e[0]), r(t, "init");
    }), wx.onShow(function(e) {
        if (y = e, I = Date.now(), !N && !j) {
            S = "" + Date.now() + Math.floor(1e7 * Math.random()), g = !1;
            try {
                wx.setStorageSync("ald_ifo", !1);
            } catch (e) {}
        }
        N = !1, j = !1;
        var t = a(p), n = a(p);
        if (t.sm = I - _, e.query.ald_share_src && e.shareTicket && "1044" === e.scene ? (n.tp = "ald_share_click", 
        new Promise(function(e, t) {
            "1044" == y.scene ? wx.getShareInfo({
                shareTicket: y.shareTicket,
                success: function(t) {
                    e(t);
                },
                fail: function() {
                    e("");
                }
            }) : e("");
        }).then(function(e) {
            n.ct = e, r(n, "event");
        })) : e.query.ald_share_src && (n.tp = "ald_share_click", n.ct = "1", r(n, "event")), 
        "" === h) {
            var o = wx.getAccountInfoSync().miniProgram.appId;
            wx.login({
                success: function(e) {
                    wx.request({
                        url: "https://glog.aldwx.com/authorize/mini_program_openid",
                        data: {
                            ai: o,
                            uuid: f,
                            jc: e.code,
                            reqid: "1"
                        },
                        success: function(e) {
                            e.data.code || (h = e.data.data.openid, wx.setStorageSync("aldstat_op", e.data.data.openid));
                        }
                    });
                },
                fail: function(e) {}
            });
        }
        r(t, "show");
    }), wx.onHide(function() {
        wx.setStorageSync("ald_level_session", "");
        var e = a(p);
        e.dr = Date.now() - I, "" === q ? wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function(t) {
                        e.ufo = t, q = t, b = o(t.userInfo.avatarUrl.split("/")), r(e, "hide");
                    }
                }) : r(e, "hide");
            }
        }) : r(e, "hide");
    }), wx.onError(function(e) {
        var t = a(p);
        t.tp = "ald_error_message", t.ct = e, v++, r(t, "event");
    });
    var A = {
        aldSendEvent: function(t, n) {
            var o = a(p);
            if ("" !== t && "string" == typeof t && t.length <= 255) if (o.tp = t, "string" == typeof n && n.length <= 255) o.ct = String(n), 
            r(o, "event"); else if ("object" == e(n)) {
                if (JSON.stringify(n).length >= 255) return void console.error("自定义事件参数不能超过255个字符，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-自定义事件！");
                if (function(t) {
                    for (var n in t) if ("object" == e(t[n]) && null !== t[n]) return !0;
                    return !1;
                }(n)) return void console.error("事件参数内部只支持Number、String等类型，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-自定义事件！");
                o.ct = JSON.stringify(n), r(o, "event");
            } else void 0 === n || "" === n ? r(o, "event") : console.error("事件参数必须为String、Object类型，且参数长度不能超过255个字符，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-自定义事件！"); else console.error("事件名称必须为String类型且不能超过255个字符，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-自定义事件！");
        },
        aldOnShareAppMessage: function(e) {
            wx.onShareAppMessage(function() {
                j = !0;
                var n = e(), o = "";
                void 0 !== n.query && (o = n.query), "" != h && (o += void 0 !== y.query.ald_share_op ? (y.query.ald_share_op.indexOf(h), 
                (void 0 !== n.query ? "&" : "") + "ald_share_op=" + y.query.ald_share_op + "," + h) : (void 0 !== n.query ? "&" : "") + "ald_share_op=" + h), 
                o += void 0 !== y.query.ald_share_src ? (y.query.ald_share_src.indexOf(f), (void 0 !== n.query ? "&" : "") + "ald_share_src=" + y.query.ald_share_src + "," + f) : (void 0 !== n.query ? "&" : "") + "ald_share_src=" + f, 
                "undefined" != t(n.ald_desc) && (o += "&ald_desc=" + n.ald_desc), n.query = o;
                var s = a(p);
                return s.ct = n, s.ct.sho = 1, s.tp = "ald_share_chain", r(s, "event"), n;
            });
        },
        aldShareAppMessage: function(e) {
            j = !0;
            var n = e, o = "";
            void 0 !== n.query && (o = n.query), "" != h && (o += void 0 !== y.query.ald_share_op ? (y.query.ald_share_op.indexOf(h), 
            (void 0 !== n.query ? "&" : "") + "ald_share_op=" + y.query.ald_share_op + "," + h) : (void 0 !== n.query ? "&" : "") + "ald_share_op=" + h), 
            o += void 0 !== y.query.ald_share_src ? (y.query.ald_share_src.indexOf(f), (void 0 !== n.query ? "&" : "") + "ald_share_src=" + y.query.ald_share_src + "," + f) : (void 0 !== n.query ? "&" : "") + "ald_share_src=" + f;
            var s = a(p);
            "undefined" != t(n.ald_desc) && (o += "&ald_desc=" + n.ald_desc), n.query = o, s.ct = n, 
            s.tp = "ald_share_chain", r(s, "event"), wx.shareAppMessage(n);
        },
        aldSendSession: function(e) {
            if ("" !== e && e) {
                var t = a(p);
                t.tp = "session", t.ct = "session", m = e, "" === q ? wx.getSetting({
                    success: function(e) {
                        e.authSetting["scope.userInfo"] ? wx.getUserInfo({
                            success: function(e) {
                                t.ufo = e, r(t, "event");
                            }
                        }) : r(t, "event");
                    }
                }) : (t.ufo = q, "" !== q && (t.gid = ""), r(t, "event"));
            } else console.error("请传入从后台获取的session_key");
        },
        aldSendOpenid: function(e) {
            if ("" !== e && e) {
                h = e, wx.setStorageSync("aldstat_op", e);
                var t = a(p);
                t.tp = "openid", t.ct = "openid", r(t, "event");
            } else console.error("OpenID不符合规则，请参考接入文档 http://doc.aldwx.com 小游戏统计/广告监测平台-快速接入指南！");
        },
        aldRevenue: function(e) {
            var n = a(p);
            if ("[object Object]" === Object.prototype.toString.call(e)) {
                var o = e.group, s = e.money, i = e.name, c = e.stageId, d = e.stageName, u = e.desc;
                if (o && (0 === s || s) && i) {
                    if (function(e, n, r) {
                        if ("string" !== t(e)) return console.error("group必须符合传参规则，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-营收分析！"), 
                        !1;
                        switch (e) {
                          case "default":
                          case "stage":
                          case "grade":
                            break;

                          default:
                            return console.error("group为固定字段不可随便修改，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-营收分析！"), 
                            !1;
                        }
                        return "number" !== t(n) || n < 0 ? (console.error("money字段(付费金额)只支持Number类型，且不能小于0，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-营收分析！"), 
                        !1) : !("string" !== t(r) || r.length > 32) || (console.error("name字段(付费项目)只支持String类型，且长度小于32个字符，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-营收分析！"), 
                        !1);
                    }(o, s, i)) {
                        var l;
                        if ("stage" === o || "grade" === o) if (l = "stage" === o ? "关卡" : "等级", !function(e, n) {
                            return e && n ? !/^\d+(.\d+)*$/.test(e) || e.length > 32 || isNaN(Number(e)) ? (console.error("stageId(".concat(l, "Id)必须符合传参规则，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-").concat(l, "分析！")), 
                            !1) : !("string" !== t(n) || n.length > 32) || (console.error("".concat(l, "名称为必传字段，且长度小于32个字符，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-").concat(l, "分析！")), 
                            !1) : (console.error("stageId(".concat(l, "id)、stageName(").concat(l, "名称)为必传字段，且长度小于32个字符，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-").concat(l, "分析！")), 
                            !1);
                        }(c, d)) return;
                        "string" === t(u) && u.length < 32 || console.warn("desc字段只支持String类型，且长度小于32个字符,请参考接入文档 http://doc.aldwx.com 小游戏统计平台"), 
                        n.ct = e, r(n, "income");
                    }
                } else console.error("group、money、name为必传字段且数据类型必须符合规则,请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-营收分析！");
            } else console.error("wx.aldRevenue()传参不符合规则，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-营收分析！");
        }
    };
    wx.aldStage = new function() {
        function e(e) {
            return !/^\d+(.\d+)*$/.test(e.stageId) || e.stageId.length > 32 || isNaN(Number(e.stageId)) ? (console.error("关卡stageId必须符合传参规则，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-关卡分析！"), 
            !1) : !("string" !== t(e.stageName) || e.stageName.length > 32) || (console.error("关卡名称为必传字段，且长度小于32个字符，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-关卡分析！"), 
            !1);
        }
        var o = "", s = "", i = 0;
        this.onStart = function(r) {
            if (e(r)) {
                var a = {};
                i = Date.now(), a.sid = r.stageId, a.snm = r.stageName, ("string" === t(r.userId) && r.userId) < 32 ? a.uid = r.userId : a.uid = "", 
                a.state = "start", s = n(), o = a, this.request();
            }
        }, this.onRunning = function(n) {
            if (e(n)) {
                var r = {
                    params: {}
                };
                if (("string" === t(n.userId) && n.userId) < 32 ? r.uid = n.userId : r.uid = "", 
                "" === n.event || "string" !== t(n.event) || -1 === (M.join(",") + ",").indexOf(n.event + ",")) return void console.error("关卡running状态中仅支持" + M.join(",") + "事件类型，且为必传字段，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-关卡分析！");
                if (r.event = n.event, "object" !== t(n.params)) return void console.error("关卡running状态中params为必传字段，且该字段需为Object类型，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-关卡分析！");
                if ("string" !== t(n.params.itemName) || n.params.itemName.length > 32) return void console.error("道具/商品名称为必传字段，且长度小于32个字符，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-关卡分析！");
                r.params.itnm = n.params.itemName, "string" === t(n.params.itemId) && n.params.itemId.length < 32 && (r.params.itid = n.params.itemId), 
                "number" === t(n.params.itemCount) && String(n.params.itemCount).length < 32 ? r.params.itco = n.params.itemCount : n.params.itemCount ? (console.error("关卡running状态中params.itemCount必须符合传参规则，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-关卡分析！"), 
                r.params.itco = 1) : (console.info("关卡running状态中params.itemCount为选填项，请再次确认该项是否填写，如已确认，请忽略"), 
                r.params.itco = 1), -1 !== n.event.indexOf("pay") && ("number" === t(n.params.itemMoney) && String(n.params.itemMoney).length < 32 ? r.params.money = n.params.itemMoney : n.params.itemMoney ? (console.error("关卡running状态中params.itemMoney必须符合传参规则，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-关卡分析！"), 
                r.params.money = 0) : (console.info("关卡running状态中params.itemMoney为选填项，请再次确认该项是否填写，如已确认，请忽略"), 
                r.params.money = 0)), "string" === t(n.params.desc) && n.params.desc.length < 64 && (r.params.desc = n.params.desc), 
                r.state = "running", r.sid = n.stageId, r.snm = n.stageName, o = r, this.request();
            }
        }, this.onEnd = function(n) {
            if (e(n)) {
                var r = {
                    state: "end"
                };
                if (("string" === t(n.userId) && n.userId) < 32 ? r.uid = n.userId : r.uid = "", 
                "" === n.event || "string" !== t(n.event) || -1 === (k.join(",") + ",").indexOf(n.event + ",")) return void console.error("关卡end状态中仅支持" + k.join(",") + "事件类型，且为必传字段，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-关卡分析！");
                r.sid = n.stageId, r.snm = n.stageName, r.event = n.event, r.sdr = 0 !== i ? Date.now() - i : "", 
                r.params = {}, "object" === t(n.params) && "string" === t(n.params.desc) && n.params.desc.length < 64 && (r.params.desc = n.params.desc), 
                o = r, this.request();
            }
        }, this.request = function() {
            var e = a(p);
            o.ss = s, e.ct = o, r(e, "screen");
        };
    }(), wx.aldLevel = new function() {
        function e(e) {
            return !/^\d+(.\d+)*$/.test(e.levelId) || e.levelId.length > 32 || isNaN(Number(e.levelId)) ? (console.error("levelId必须符合传参规则，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-等级分析！"), 
            !1) : !("string" !== t(e.levelName) || e.levelName.length > 32) || (console.error("levelName为必传字段，且长度小于32个字符，请参考接入文档 http://doc.aldwx.com 小游戏统计平台-快速接入指南-等级分析！"), 
            !1);
        }
        var o = "", s = "", i = 0;
        this.onInitLevel = function(r) {
            if (e(r)) {
                var a = {};
                "" == C ? (s = n(), wx.setStorageSync("ald_level_session", s)) : s = C, a.lid = r.levelId, 
                a.lnm = r.levelName, ("string" === t(r.userId) && r.userId) < 32 ? a.uid = r.userId : a.uid = "", 
                a.un = r.userName, a.state = "init", o = a, this.request();
            }
        }, this.onSetLevel = function(r) {
            if (e(r)) {
                var a = {};
                s = n(), wx.setStorageSync("ald_level_session", s), a.lid = r.levelId, a.lnm = r.levelName, 
                ("string" === t(r.userId) && r.userId) < 32 ? a.uid = r.userId : a.uid = "", a.un = r.userName, 
                a.state = "set", a.tmr = 0 !== D ? Date.now() - D : "", i = Date.now(), wx.setStorageSync("ald_level_time", i), 
                o = a, this.request();
            }
        }, this.request = function() {
            var e = a(p);
            o.ls = s, e.ct = o, r(e, "level");
        };
    }();
    for (var E = 0; E < O.length; E++) !function(e, t) {
        Object.defineProperty(wx, e, {
            value: t,
            writable: !1,
            enumerable: !0,
            configurable: !0
        });
    }(O[E], A[O[E]]);
    try {
        var P = wx.getSystemInfoSync();
        p.br = P.brand || "", p.md = P.model, p.pr = P.pixelRatio, p.sw = P.screenWidth, 
        p.sh = P.screenHeight, p.ww = P.windowWidth, p.wh = P.windowHeight, p.lang = P.language, 
        p.wv = P.version, p.sv = P.system, p.wvv = P.platform, p.fs = P.fontSizeSetting, 
        p.wsdk = P.SDKVersion, p.bh = P.benchmarkLevel || "", p.bt = P.battery || "", p.wf = P.wifiSignal || "", 
        p.lng = "", p.lat = "", p.nt = "", p.spd = "", p.ufo = "";
    } catch (e) {}
}();