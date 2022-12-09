var _typeof2 = require("../../@babel/runtime/helpers/typeof"), mid, cid;

System.register("chunks:///_virtual/AdvertManager.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./SDKSystem.ts", "./EventManager.ts", "./EventTypes.ts" ], function(t) {
    var e, n, i, o, s, a, r, l, u, c, h;
    return {
        setters: [ function(t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, 
            o = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, a = t._decorator, r = t.Component;
        }, function(t) {
            l = t.SDKSystem, u = t.PlatformType;
        }, function(t) {
            c = t.default;
        }, function(t) {
            h = t.EventTypes;
        } ],
        execute: function() {
            var d, f, p;
            s._RF.push({}, "2acbaoCi2tKKYcDA4TNzCyQ", "AdvertManager", void 0);
            var m = a.ccclass, v = a.property;
            t("AdvertManager", m("AdvertManager")((p = e((f = function(t) {
                function e() {
                    for (var e, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, i(e, "testBanner", p, o(e)), 
                    e;
                }
                n(e, t);
                var s = e.prototype;
                return s.onLoad = function() {
                    this.onEvents();
                }, s.onEvents = function() {
                    c.on(h.SDKEvents.ShowBanner, this.onShowBanner, this), c.on(h.SDKEvents.HideBanner, this.onHideBanner, this);
                }, s.onShowBanner = function() {
                    this.onShowTestBanner(!0);
                }, s.onHideBanner = function() {
                    this.onShowTestBanner(!1);
                }, s.onShowTestBanner = function(t) {
                    this.node.children[0].active = l._curPlatform == u.PCMiniGame && this.testBanner && t;
                }, e;
            }(r)).prototype, "testBanner", [ v ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), d = f)) || d), s._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/AdvertSystem.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./BasicSystem.ts", "./AdvertUIConfig.ts", "./EventManager.ts", "./EventTypes.ts", "./SDKSystem.ts", "./StorageSystem.ts", "./ColorLog.ts" ], function(t) {
    var e, n, i, o, s, a, r, l, u, c, h;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy;
        }, function(t) {
            i = t.BasicSystem;
        }, function(t) {
            o = t.TTAdvertUIConfig, s = t.WXAdvertUIConfig;
        }, function(t) {
            a = t.default;
        }, function(t) {
            r = t.EventTypes;
        }, function(t) {
            l = t.SDKSystem, u = t.PlatformType;
        }, function(t) {
            c = t.StorageSystem;
        }, function(t) {
            h = t.clog;
        } ],
        execute: function() {
            n._RF.push({}, "0faf7DjtN9AFa4W0ICTdU4z", "AdvertSystem", void 0);
            var d = t("AdvertSystem", function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                return e(n, t), n.init = function(t) {
                    this.uiLayer = t, this.isInit || (this.isInit = !0, this.onEvents(), this.isInitFinished = !0);
                }, n.onEvents = function() {
                    a.on(r.GameEvents.UIChanged, this.onUIChanged, this);
                }, n.getTopActiveUI = function(t) {
                    for (var e = this.uiLayer.children.length - 1; e >= 0; e--) {
                        var n = this.uiLayer.children[e];
                        if (n) {
                            var i = n.children[0];
                            if (i && i.active && t[i.name]) return h.mark("TopUI: ", i.name), t[i.name];
                        }
                    }
                }, n.onUIChanged = function() {
                    if (!(c.getData().levelAssets.curLv <= this.startLv)) {
                        var t;
                        switch (l._curPlatform) {
                          case u.PCMiniGame:
                          case u.WXMiniGame:
                            t = s;
                            break;

                          case u.TTMiniGame:
                            t = o;
                        }
                        if (t) {
                            var e = this.getTopActiveUI(t);
                            if (!e) return;
                            null != e.banner && (e.banner ? a.emit(r.SDKEvents.ShowBanner) : a.emit(r.SDKEvents.HideBanner));
                        }
                    }
                }, n;
            }(i));
            d.uiLayer = null, d.startLv = 0, n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/AdvertUIConfig.ts", [ "cc" ], function(t) {
    var e;
    return {
        setters: [ function(t) {
            e = t.cclegacy;
        } ],
        execute: function() {
            e._RF.push({}, "a5b4cD8PX5A3JvDk3r4uFuR", "AdvertUIConfig", void 0), t("WXAdvertUIConfig", {
                HomeUI: {
                    banner: !0
                },
                SignUI: {
                    banner: !0
                },
                ShopUI: {
                    banner: !0
                },
                FreeGoldUI: {
                    banner: !1
                },
                SettingUI: {
                    banner: !0
                },
                ResurgenceUI: {
                    banner: !1
                },
                WinUI: {
                    banner: !0
                },
                LoseUI: {
                    banner: !0
                },
                TurntableUI: {
                    banner: !0
                },
                OnlineAwardUI: {
                    banner: !1
                },
                LevelInfoUI: {
                    banner: !1
                }
            }), t("TTAdvertUIConfig", {
                HomeUI: {
                    banner: !0
                },
                SignUI: {
                    banner: !0
                },
                ShopUI: {
                    banner: !0
                },
                FreeGoldUI: {
                    banner: !0
                },
                SettingUI: {
                    banner: !0
                },
                ResurgenceUI: {
                    banner: !1
                },
                WinUI: {
                    banner: !0
                },
                LoseUI: {
                    banner: !0
                },
                TurntableUI: {
                    banner: !0
                },
                OnlineAwardUI: {
                    banner: !0
                },
                LevelInfoUI: {
                    banner: !1
                }
            }), e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/AudioEnum.ts", [ "cc" ], function(t) {
    var e;
    return {
        setters: [ function(t) {
            e = t.cclegacy;
        } ],
        execute: function() {
            var n;
            t("AudioEnum", void 0), e._RF.push({}, "04334In1FNHrpqjuVMz/iyO", "AudioEnum", void 0), 
            function(t) {
                t.BtnClick = "BtnClick", t.Win = "Win", t.Lose = "Lose", t.lvupProp = "lvupProp", 
                t.enterGame = "enterGame", t.homeBgm = "homeBgm", t.lvBgm = "lvBgm", t.loding = "loding", 
                t.addRole = "addRole", t.boom = "boom", t.Drone = "Drone", t.Hammer = "Hammer", 
                t.FireGun = "FireGun", t.MachineGun = "MachineGun", t.Pistol = "Pistol", t.shotGun = "shotGun";
            }(n || (n = t("AudioEnum", {}))), e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/AudioSystem.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./BasicSystem.ts", "./GlobalTmpData.ts", "./StorageSystem.ts", "./Loader.ts" ], function(t) {
    var e, n, i, o, s, a, r, l, u;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy, i = t.Node, o = t.AudioSource, s = t.warn;
        }, function(t) {
            a = t.BasicSystem;
        }, function(t) {
            r = t.GlobalTmpData;
        }, function(t) {
            l = t.StorageSystem;
        }, function(t) {
            u = t.default;
        } ],
        execute: function() {
            n._RF.push({}, "1a9b06ZT3RLwYrJs+dOmIOL", "AudioSystem", void 0);
            var c = t("AudioSystem", function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                return e(n, t), n.init = function() {
                    if (!this.isInit) {
                        this.isInit = !0, this.bgmAudioSourceNode || (this.bgmAudioSourceNode = new i("bgmAudioSourceNode"), 
                        this.bgmAudioSource = this.bgmAudioSourceNode.addComponent(o), this.bgmAudioSource.playOnAwake = !1), 
                        this.effectAudioSourceNode || (this.effectAudioSourceNode = new i("effectAudioSourceNode"), 
                        this.effectAudioSource = this.effectAudioSourceNode.addComponent(o), this.effectAudioSource.playOnAwake = !1), 
                        this.onEvents();
                        var t = l.getData();
                        this.audioSwitch.Effects = t.userSetting.AudioSwith, this.audioSwitch.Bgm = t.userSetting.AudioSwith, 
                        this.isInitFinished = !0;
                    }
                }, n.onEvents = function() {}, n.setAudioState = function(t) {
                    t ? (this.audioSwitch.Bgm = !0, this.audioSwitch.Effects = !0, this.playBGM(this.curBGM)) : (this.audioSwitch.Bgm = !1, 
                    this.audioSwitch.Effects = !1, this.stopBGM(), this.stopEffect());
                }, n.playEffectLimit = function(t, e) {
                    var n = Date.now();
                    this.limitTimeRec[t] || (this.limitTimeRec[t] = 0);
                    var i = this.limitTimeRec[t];
                    this.limitTimeRec[t] = n, n - i > 1e3 * this._limitCd && this.playEffect(t, e);
                }, n.playEffectLimit2 = function(t, e) {
                    var n = Date.now();
                    this.limitTimeRec2[t] || (this.limitTimeRec2[t] = {
                        n: 0,
                        t: n
                    });
                    var i = n - this.limitTimeRec2[t].t;
                    i > 1e3 && (this.limitTimeRec2[t].t = n, this.limitTimeRec2[t].n = 0), i < 1e3 && this.limitTimeRec2[t].n < this._limitCount && (this.limitTimeRec2[t].n++, 
                    this.playEffect(t, e));
                }, n.playEffect = function(t, e) {
                    var n = this;
                    r.Game.isPause || (null == e ? e = {
                        isLoop: !1,
                        volume: 1
                    } : (null == e.isLoop && (e.isLoop = !1), null == e.volume && (e.volume = 1), e.isLoop && this.loopClips.indexOf(t) < 0 && this.loopClips.push(t)), 
                    void 0 === this.allClips[t] ? u.loadBundle(this.audioBound, function() {
                        u.loadBundleRes(n.audioBound, t, function(i) {
                            if (!i) return n.allClips[t] = null, void s("要播放的音效资源未找到：", t);
                            n.allClips[t] = i, n._playEffect(t, e.isLoop, e.volume);
                        }, !1);
                    }, !1) : this._playEffect(t, e.isLoop, e.volume));
                }, n._playEffect = function(t, e, n) {
                    if (void 0 === e && (e = !1), void 0 === n && (n = 1), this.audioSwitch.Effects && null !== this.allClips[t]) {
                        var i = this.allClips[t];
                        e ? (this.effectAudioSource.clip = i, this.effectAudioSource.loop = !0, this.effectAudioSource.play()) : this.effectAudioSource.playOneShot(i, n);
                    }
                }, n.stopEffect = function(t) {
                    if (this.effectAudioSource.stop(), t && this.allClips[t]) {
                        var e = this.loopClips.indexOf(t);
                        e >= 0 && this.loopClips.splice(e, 1);
                    }
                }, n.playBGM = function(t) {
                    var e = this;
                    if (t) {
                        if (this.audioSwitch.Bgm && this.curBGM && this.curBGM == t && this.allClips[this.curBGM]) {
                            var n = this.allClips[this.curBGM];
                            return this.bgmAudioSource.clip = n, this.bgmAudioSource.loop = !0, void (1 != this.bgmAudioSource.state && this.bgmAudioSource.play());
                        }
                        void 0 === this.allClips[t] ? u.loadBundle(this.audioBound, function() {
                            u.loadBundleRes(e.audioBound, t, function(n) {
                                if (!n) return e.allClips[t] = null, void s("要播放的音效资源未找到：", t);
                                e.allClips[t] = n, e._playBGM(t);
                            }, !1);
                        }, !1) : this._playBGM(t);
                    }
                }, n._playBGM = function(t) {
                    if (this.audioSwitch.Bgm && null !== this.allClips[t]) {
                        this.curBGM && this.bgmAudioSource.stop();
                        var e = this.allClips[t];
                        this.bgmAudioSource.clip = e, this.bgmAudioSource.loop = !0, this.curBGM = t, this.bgmAudioSource.play();
                    }
                }, n.stopBGM = function() {
                    this.curBGM && this.bgmAudioSource.stop();
                }, n.pauseBGM = function() {
                    this.curBGM && this.bgmAudioSource.pause();
                }, n.resumeBGM = function() {
                    this.audioSwitch.Bgm && this.curBGM && this.bgmAudioSource.play();
                }, n.onLevelInit = function() {
                    this.loopClips = [];
                }, n.onGameOver = function() {
                    for (var t = this.loopClips.length - 1; t >= 0; t--) {
                        var e = this.loopClips[t];
                        this.stopEffect(e);
                    }
                }, n;
            }(a));
            c.audioSwitch = {
                Effects: !0,
                Bgm: !0
            }, c.allClips = {}, c.loopClips = [], c.bgmAudioSource = null, c.bgmAudioSourceNode = null, 
            c.effectAudioSource = null, c.effectAudioSourceNode = null, c.audioBound = "AudioAssets", 
            c._limitCd = .1, c.limitTimeRec = {}, c._limitCount = 10, c.limitTimeRec2 = {}, 
            c.curBGM = null, n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/BasicComponet.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts" ], function(t) {
    var e, n, i, o;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy, i = t.Component;
        }, function(t) {
            o = t.default;
        } ],
        execute: function() {
            n._RF.push({}, "15963z6Jl5KOKkq93+2wHQx", "BasicComponet", void 0), t("BasicComponet", function(t) {
                function n() {
                    for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).events = {}, e.onceEvents = {}, 
                    e;
                }
                e(n, t);
                var i = n.prototype;
                return i.init = function(t) {
                    this.initSub(t), this.onEvents(), this.setData(t);
                }, i.initSub = function(t) {}, i.onEvents = function() {}, i.setData = function(t) {}, 
                i.reuse = function(t) {
                    this.reset(), this.onEvents(), this.setData(t);
                }, i.unuse = function() {
                    this.reset(), this.offEvents();
                }, i.reset = function() {}, i.on = function(t, e, n) {
                    var i = o.on(t, e, n);
                    i && (this.events.hasOwnProperty(t) || (this.events[t] = []), this.events[t].push(i));
                }, i.once = function(t, e, n) {
                    var i = o.once(t, e, n);
                    i && (this.onceEvents.hasOwnProperty(t) || (this.onceEvents[t] = []), this.onceEvents[t].push(i));
                }, i.emit = function(t, e, n) {
                    void 0 === e ? o.emit(t) : void 0 === n ? o.emit(t, e) : o.emit(t, e, n), this.onceEvents.hasOwnProperty(t) && delete this.onceEvents[t];
                }, i.off = function(t, e, n) {
                    var i = this.events[t];
                    if (i) for (var s = i.length - 1; s >= 0; --s) i[s].cb === e && i[s].target === n && (o.off(t, i[s]), 
                    i.splice(s, 1));
                    if (i = this.onceEvents[t]) for (var a = i.length - 1; a >= 0; --a) i[a].cb === e && i[a].target === n && (o.off(t, i[a]), 
                    i.splice(a, 1));
                }, i.offEvents = function() {
                    for (var t in this.events) o.offGroup(t, this.events[t]);
                    for (var e in this.events = {}, this.onceEvents) o.offGroup(e, this.onceEvents[e]);
                    this.onceEvents = {};
                }, i.customUpdate = function(t) {}, i.customLateUpdate = function(t) {}, i.onDestroy = function() {
                    this.offEvents();
                }, n;
            }(i)), n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/BasicSystem.ts", [ "cc" ], function(t) {
    var e;
    return {
        setters: [ function(t) {
            e = t.cclegacy;
        } ],
        execute: function() {
            e._RF.push({}, "80865ptJzZM443Pch5Pg+NA", "BasicSystem", void 0);
            var n = t("BasicSystem", function() {
                function t() {}
                return t.init = function(t) {}, t;
            }());
            n.isInit = !1, n.isInitFinished = !1, e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/BasicUI.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./BasicComponet.ts" ], function(t) {
    var e, n, i, o;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy, i = t._decorator;
        }, function(t) {
            o = t.BasicComponet;
        } ],
        execute: function() {
            var s;
            n._RF.push({}, "4c39fVWajlDEp1zDM3jQoI0", "BasicUI", void 0);
            var a = i.ccclass;
            i.property, t("BasicUI", a("BasicUI")(s = function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                e(n, t);
                var i = n.prototype;
                return i.show = function(t) {
                    this.node.active = !0, this.onEvents();
                }, i.hide = function(t) {
                    this.node.active = !1, this.offEvents();
                }, n;
            }(o)) || s), n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/ColorLog.ts", [ "cc" ], function(t) {
    var e;
    return {
        setters: [ function(t) {
            e = t.cclegacy;
        } ],
        execute: function() {
            var n, i;
            t("clog", void 0), e._RF.push({}, "9337cXj6ypBBKYq0yIs9jNe", "ColorLog", void 0), 
            (i = n || (n = t("clog", {}))).log = function(t, e) {
                e ? console.log("%c " + t + " %c " + e + " ", "background: #35495E;padding: 1px;border-radius: 2px 0 0 2px;color: #fff;", "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;") : console.log("%c " + t + " ", "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;");
            }, i.mark = function(t, e) {
                e ? console.log("%c " + t + " %c " + e + " ", "background: #DD55FF;padding: 1px;border-radius: 2px 0 0 2px;color: #fff;", "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;") : console.log("%c " + t + " ", "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;");
            }, i.warn = function(t, e) {
                e ? console.log("%c " + t + " %c " + e + " ", "background: #FF7026;padding: 1px;border-radius: 2px 0 0 2px;color: #fff;", "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;") : console.log("%c " + t + " ", "background: #FF7026;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;");
            }, i.error = function(t, e) {
                e ? console.log("%c " + t + " %c " + e + " ", "background: #FF2626;padding: 1px;border-radius: 2px 0 0 2px;color: #fff;", "background: #FFA800;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;") : console.log("%c " + t + " ", "background: #FF2626;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;");
            }, window.yy = n, e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/CustomCollision.ts", [ "cc" ], function(t) {
    var e, n, i;
    return {
        setters: [ function(t) {
            e = t.cclegacy, n = t._decorator, i = t.v3;
        } ],
        execute: function() {
            var o;
            e._RF.push({}, "8e392FS1ZZOhb5dMyJ1C6ZM", "CustomCollision", void 0);
            var s = n.ccclass, a = (n.property, i()), r = i(), l = i(), u = i(), c = i(), h = i(), d = i(), f = i(), p = i();
            t("CustomCollision", s("CustomCollision")(o = function() {
                function t() {}
                return t.prototype.RectRectXZ = function(t, e, n, i, o, s, m, v) {
                    var g = .5 * e, y = .5 * n;
                    r.set(t.x - g, t.y, t.z - y), l.set(t.x + g, t.y, t.z - y), u.set(t.x + g, t.y, t.z + y), 
                    c.set(t.x - g, t.y, t.z + y);
                    var S = Math.cos(.01745 * i), P = Math.sin(.01745 * i);
                    a.set(r), r.x = a.z * P + a.x * S, r.z = a.z * S - a.x * P, a.set(l), l.x = a.z * P + a.x * S, 
                    l.z = a.z * S - a.x * P, a.set(u), u.x = a.z * P + a.x * S, u.z = a.z * S - a.x * P, 
                    a.set(c), c.x = a.z * P + a.x * S, c.z = a.z * S - a.x * P;
                    var b = .5 * s, _ = .5 * m;
                    h.set(o.x - b, o.y, o.z - _), d.set(o.x + b, o.y, o.z - _), f.set(o.x + b, o.y, o.z + _), 
                    p.set(o.x - b, o.y, o.z + _);
                    var w = Math.cos(.01745 * v), I = Math.sin(.01745 * v);
                    a.set(h), h.x = a.z * I + a.x * w, h.z = a.z * w - a.x * I, a.set(d), d.x = a.z * I + a.x * w, 
                    d.z = a.z * w - a.x * I, a.set(f), f.x = a.z * I + a.x * w, f.z = a.z * w - a.x * I, 
                    a.set(p), p.x = a.z * I + a.x * w, p.z = a.z * w - a.x * I;
                }, t;
            }()) || o), e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/EventManager.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    var e, n;
    return {
        setters: [ function(t) {
            e = t.createClass;
        }, function(t) {
            n = t.cclegacy;
        } ],
        execute: function() {
            n._RF.push({}, "e81baxTn4lD74yR/am9WmRu", "EventManager", void 0);
            var i = t("default", function() {
                function t() {}
                return t.on = function(t, e, n) {
                    this.events.hasOwnProperty(t) || (this.events[t] = []);
                    for (var i = this.events[t].length - 1; i >= 0; --i) if (this.events[t][i].equal(e, n)) return null;
                    var s = new o(e, n);
                    return this.events[t].push(s), s;
                }, t.once = function(t, e, n) {
                    this.onceEvents.hasOwnProperty(t) || (this.onceEvents[t] = []);
                    for (var i = this.onceEvents[t].length - 1; i >= 0; --i) if (this.onceEvents[t][i].equal(e, n)) return null;
                    var s = new o(e, n);
                    return this.onceEvents[t].push(s), s;
                }, t.off = function(t, e, n) {
                    if (!e) return this.events[t] = [], void (this.onceEvents[t] = []);
                    if (e instanceof o) {
                        if (this.events.hasOwnProperty(t)) for (var i = this.events[t].length - 1; i >= 0; --i) if (this.events[t][i].id == e.id) {
                            this.events[t].splice(i, 1);
                            break;
                        }
                        if (this.onceEvents.hasOwnProperty(t)) for (var s = this.onceEvents[t].length - 1; s >= 0; --s) if (this.onceEvents[t][s].id == e.id) {
                            this.onceEvents[t].splice(s, 1);
                            break;
                        }
                    } else {
                        if (this.events.hasOwnProperty(t)) for (var a = this.events[t].length - 1; a >= 0; --a) if (this.events[t][a].equal(e, n)) {
                            this.events[t].splice(a, 1);
                            break;
                        }
                        if (this.onceEvents.hasOwnProperty(t)) for (var r = this.onceEvents[t].length - 1; r >= 0; --r) if (this.onceEvents[t][r].equal(e, n)) {
                            this.onceEvents[t].splice(r, 1);
                            break;
                        }
                    }
                }, t.offGroup = function(t, e) {
                    if (this.events.hasOwnProperty(t)) for (var n = e.length - 1; n >= 0; --n) for (var i = this.events[t].length - 1; i >= 0; --i) if (this.events[t][i].id == e[n].id) {
                        this.events[t].splice(i, 1);
                        break;
                    }
                    if (this.onceEvents.hasOwnProperty(t)) for (var o = e.length - 1; o >= 0; --o) for (var s = this.onceEvents[t].length - 1; s >= 0; --s) if (this.onceEvents[t][s].id == e[o].id) {
                        this.onceEvents[t].splice(s, 1);
                        break;
                    }
                }, t.emit = function(t, e, n) {
                    if (this.events.hasOwnProperty(t)) for (var i = this.events[t], o = i.length - 1; o >= 0; --o) void 0 === e ? i[o].cb.call(i[o].target) : void 0 === n ? i[o].cb.call(i[o].target, e) : i[o].cb.call(i[o].target, e, n);
                    if (this.onceEvents.hasOwnProperty(t)) {
                        for (var s = this.onceEvents[t], a = s.length - 1; a >= 0; --a) void 0 === e ? s[a].cb.call(s[a].target) : void 0 === n ? s[a].cb.call(s[a].target, e) : s[a].cb.call(s[a].target, e, n);
                        delete this.onceEvents[t];
                    }
                }, t;
            }());
            i.events = {}, i.onceEvents = {};
            var o = t("Handler", function() {
                function t(e, n) {
                    this._id = void 0, this.cb = void 0, this.target = void 0, this._id = t.idCount++, 
                    this.target = n, this.cb = e;
                }
                return t.prototype.equal = function(t, e) {
                    return this.target === e && this.cb == t;
                }, e(t, [ {
                    key: "id",
                    get: function() {
                        return this._id;
                    }
                } ]), t;
            }());
            o.idCount = 0, n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/EventTypes.ts", [ "cc" ], function(t) {
    var e;
    return {
        setters: [ function(t) {
            e = t.cclegacy;
        } ],
        execute: function() {
            var n, i, o, s, a, r, l, u, c, h, d, f, p, m;
            t("EventTypes", void 0), e._RF.push({}, "c341dv6x7lG16e5men4IBY4", "EventTypes", void 0), 
            i = n || (n = t("EventTypes", {})), function(t) {
                t[t.Index = 0] = "Index", t[t.ShowBanner = 1] = "ShowBanner", t[t.HideBanner = 2] = "HideBanner", 
                t[t.ShowVideo = 3] = "ShowVideo", t[t.ShowInsertAd = 4] = "ShowInsertAd", t[t.ShowCustomAd = 5] = "ShowCustomAd", 
                t[t.HideCustomAd = 6] = "HideCustomAd", t[t.Share = 7] = "Share", t[t.ExitApp = 8] = "ExitApp", 
                t[t.StartRecord = 9] = "StartRecord", t[t.PauseRecord = 10] = "PauseRecord", t[t.ResumeRecord = 11] = "ResumeRecord", 
                t[t.StopRecord = 12] = "StopRecord", t[t.RecordSaved = 13] = "RecordSaved", t[t.ShareRecord = 14] = "ShareRecord", 
                t[t.ReportAldEvent = 15] = "ReportAldEvent", t[t.ReportAldStageStart = 16] = "ReportAldStageStart", 
                t[t.ReportAldStageWin = 17] = "ReportAldStageWin", t[t.ReportAldStageFail = 18] = "ReportAldStageFail", 
                t[t.ReportAldStageAward = 19] = "ReportAldStageAward", t[t.ReportAldStageTools = 20] = "ReportAldStageTools", 
                t[t.ReportEvent = 21] = "ReportEvent";
            }(o || (o = {})), i.SDKEvents = o, function(t) {
                t[t.Index = 1e3] = "Index", t[t.InitLoadFinished = 1001] = "InitLoadFinished", t[t.GameStart = 1002] = "GameStart", 
                t[t.GameLoadFinish = 1003] = "GameLoadFinish", t[t.GameRun = 1004] = "GameRun", 
                t[t.GamePause = 1005] = "GamePause", t[t.GameResume = 1006] = "GameResume", t[t.GameOver = 1007] = "GameOver", 
                t[t.SetInitUIEnable = 1008] = "SetInitUIEnable", t[t.SetLevelManagerEnable = 1009] = "SetLevelManagerEnable", 
                t[t.SetGameTimeScale = 1010] = "SetGameTimeScale", t[t.UserAssetsChanged = 1011] = "UserAssetsChanged", 
                t[t.SetTouchMaskEnable = 1012] = "SetTouchMaskEnable", t[t.LoadSubPkg = 1013] = "LoadSubPkg", 
                t[t.ShowTips = 1014] = "ShowTips", t[t.UIChanged = 1015] = "UIChanged", t[t.EnterChooseLv = 1016] = "EnterChooseLv";
            }(s || (s = {})), i.GameEvents = s, function(t) {
                t[t.Index = 1100] = "Index", t[t.SetTouchEnable = 1101] = "SetTouchEnable", t[t.TouchStart = 1102] = "TouchStart", 
                t[t.TouchMove = 1103] = "TouchMove", t[t.TouchEnd = 1104] = "TouchEnd", t[t.TouchStartObj = 1105] = "TouchStartObj", 
                t[t.TouchMoveObj = 1106] = "TouchMoveObj", t[t.TouchEndObj = 1107] = "TouchEndObj";
            }(a || (a = {})), i.TouchEvents = a, function(t) {
                t[t.Index = 1200] = "Index", t[t.SetCameraPos = 1201] = "SetCameraPos", t[t.SetFollowPos = 1202] = "SetFollowPos", 
                t[t.SetCameraSelfRot = 1203] = "SetCameraSelfRot", t[t.SetCameraSelfPos = 1204] = "SetCameraSelfPos", 
                t[t.SetCameraSelfOffset = 1205] = "SetCameraSelfOffset", t[t.SetCameraOrthoHeightOffset = 1206] = "SetCameraOrthoHeightOffset";
            }(r || (r = {})), i.CameraEvents = r, function(t) {
                t[t.Index = 1300] = "Index", t[t.PrivacyConfirm = 1301] = "PrivacyConfirm", t[t.AddGoldEffect = 1302] = "AddGoldEffect", 
                t[t.ShowCutEnergyAnim = 1303] = "ShowCutEnergyAnim", t[t.ShowTestBanner = 1304] = "ShowTestBanner";
            }(l || (l = {})), i.UIEvents = l, function(t) {
                t[t.Index = 1400] = "Index", t[t.ShowGridAd = 1401] = "ShowGridAd", t[t.ShowHorizonAd = 1402] = "ShowHorizonAd", 
                t[t.ShowVerticalAd = 1403] = "ShowVerticalAd", t[t.HideAdByAdId = 1404] = "HideAdByAdId";
            }(u || (u = {})), i.WXCustomAD = u, function(t) {
                t[t.Index = 2e3] = "Index", t[t.CreateMapData = 2001] = "CreateMapData", t[t.HideMapGrid = 2002] = "HideMapGrid";
            }(c || (c = {})), i.GridMapEvents = c, function(t) {
                t[t.Index = 2050] = "Index", t[t.GetEndPathInfo = 2051] = "GetEndPathInfo", t[t.CreateProps = 2052] = "CreateProps", 
                t[t.HideIncreaceProp = 2053] = "HideIncreaceProp", t[t.CreateDrones = 2054] = "CreateDrones", 
                t[t.ShowHomeCamera = 2055] = "ShowHomeCamera", t[t.HideWeaponProp = 2056] = "HideWeaponProp";
            }(h || (h = {})), i.CurLevelEvents = h, function(t) {
                t[t.Index = 2300] = "Index", t[t.LoadFinish = 2301] = "LoadFinish", t[t.Lvprops = 2302] = "Lvprops", 
                t[t.HitByEnemy = 2303] = "HitByEnemy", t[t.AddHP = 2304] = "AddHP", t[t.SetRolePos = 2305] = "SetRolePos", 
                t[t.Resurgence = 2306] = "Resurgence", t[t.CanceResurgence = 2307] = "CanceResurgence", 
                t[t.LvupWeapon = 2308] = "LvupWeapon", t[t.AddRoles = 2309] = "AddRoles", t[t.SetWeapon = 2310] = "SetWeapon", 
                t[t.Death = 2311] = "Death", t[t.LvupGaint = 2312] = "LvupGaint";
            }(d || (d = {})), i.RoleEvents = d, function(t) {
                t[t.Index = 2400] = "Index", t[t.ShowBoomErea = 2401] = "ShowBoomErea", t[t.ShowEmoji = 2402] = "ShowEmoji", 
                t[t.ShowTrail = 2403] = "ShowTrail", t[t.HideTrail = 2404] = "HideTrail", t[t.showHomeUILvupEffect = 2405] = "showHomeUILvupEffect", 
                t[t.show3DTo2DEffect = 2406] = "show3DTo2DEffect", t[t.showUIEffect = 2407] = "showUIEffect", 
                t[t.showParticleEffect = 2408] = "showParticleEffect", t[t.showDropGolds = 2409] = "showDropGolds", 
                t[t.showMergeEffect = 2410] = "showMergeEffect", t[t.showFrameEffect = 2411] = "showFrameEffect", 
                t[t.showObjs = 2412] = "showObjs";
            }(f || (f = {})), i.EffectEvents = f, function(t) {
                t[t.Index = 2500] = "Index", t[t.CreateEnemys = 2501] = "CreateEnemys";
            }(p || (p = {})), i.EnemyEvents = p, function(t) {
                t[t.Index = 2600] = "Index", t[t.ShowGuideAnim = 2601] = "ShowGuideAnim";
            }(m || (m = {})), i.GuideEvents = m, e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/GameDirector.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalData.ts", "./GlobalEnum.ts", "./EventManager.ts", "./EventTypes.ts", "./SDKSystem.ts", "./StorageSystem.ts", "./UIEnum.ts", "./UISystem.ts", "./ColorLog.ts", "./GlobalPool.ts", "./Loader.ts" ], function(t) {
    var e, n, i, o, s, a, r, l, u, c, h, d, f, p, m, v, g, y;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy, i = t._decorator, o = t.Vec3, s = t.Prefab, a = t.Component;
        }, function(t) {
            r = t.default;
        }, function(t) {
            l = t.GlobalEnum;
        }, function(t) {
            u = t.default;
        }, function(t) {
            c = t.EventTypes;
        }, function(t) {
            h = t.SDKSystem, d = t.PlatformType;
        }, function(t) {
            f = t.StorageSystem;
        }, function(t) {
            p = t.UIEnum;
        }, function(t) {
            m = t.UISystem;
        }, function(t) {
            v = t.clog;
        }, function(t) {
            g = t.default;
        }, function(t) {
            y = t.default;
        } ],
        execute: function() {
            var S;
            n._RF.push({}, "26c3aXLN61GOox0IInQZMpO", "GameDirector", void 0);
            var P = i.ccclass;
            i.property, t("GameDirector", P("GameDirector")(S = function(t) {
                function n() {
                    for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this)._levelManager = null, e._isOver = !1, 
                    e.subPackgeArr = [ "Game", "Effect", "Roles" ], e.subPackgeRec = {}, e.isLoadFinish = !1, 
                    e.customPrefabUrl = {
                        Game: "Prefabs",
                        Effect: "Prefabs"
                    }, e.customPrefabState = {}, e.preLoadCfg = {}, e._touchMask = null, e._tmpLoadState = {}, 
                    e;
                }
                e(n, t);
                var i = n.prototype;
                return i.onLoad = function() {
                    this.onEvents();
                }, i.onEvents = function() {
                    u.on(c.GameEvents.GameStart, this.onGameStart, this), u.on(c.GameEvents.GameOver, this.onGameOver, this), 
                    u.on(c.GameEvents.SetLevelManagerEnable, this.onSetLevelManagerEnable, this), u.on(c.GameEvents.SetTouchMaskEnable, this.onSetTouchMaskEnable, this), 
                    u.on(c.GameEvents.LoadSubPkg, this.onLoadSubPkg, this);
                }, i.loadSubBound = function(t) {
                    var e = this;
                    if (0 != this.subPackgeArr.length) for (var n = function(n) {
                        e.subPackgeRec[n] = !0;
                        var i = !0;
                        for (var o in e.subPackgeRec) i = i && e.subPackgeRec[o];
                        i && t && t();
                    }, i = function(t, i) {
                        var o = e.subPackgeArr[t];
                        void 0 === e.subPackgeRec[o] && (e.subPackgeRec[o] = !1), e.subPackgeRec[o] ? n(o) : y.loadBundle(e.subPackgeArr[t], function() {
                            n(o);
                        }, !1, !1);
                    }, o = 0, s = this.subPackgeArr.length; o < s; ++o) i(o); else t && t();
                }, i.loadGameAssets = function(t) {
                    var e = this;
                    this.isLoadFinish ? t && t() : this.loadCustomPrefabs(function() {
                        e._levelManager = g.get("LevelManager"), e._levelManager.setPosition(o.ZERO), e._levelManager.parent = e.node, 
                        e.isLoadFinish = !0, v.log("-----游戏中预制体加载完成-----"), t && t();
                    });
                }, i.loadCustomPrefabs = function(t) {
                    var e = this, n = function(n) {
                        e.customPrefabState[n] = !0;
                        var i = !0;
                        for (var o in e.customPrefabState) i = i && e.customPrefabState[o];
                        i && t && t();
                    }, i = function(t) {
                        if (null == e.customPrefabState[t] && (e.customPrefabState[t] = !1), e.customPrefabState[t]) n(t); else {
                            var i = e.customPrefabUrl[t];
                            y.loadBundle(t, function() {
                                y.loadBundleDir(t, i, function(e) {
                                    for (var i = 0; i < e.length; i++) {
                                        var o = e[i];
                                        g.createPool(o.data.name, o);
                                    }
                                    n(t);
                                }, s, !1);
                            }, !1);
                        }
                    };
                    for (var o in this.customPrefabUrl) i(o);
                }, i.loadExtralAssets = function(t) {
                    t();
                }, i.preLoadPrefabs = function() {
                    for (var t in this.preLoadCfg) if (Object.prototype.hasOwnProperty.call(this.preLoadCfg, t)) {
                        var e = this.preLoadCfg[t];
                        g.preCreate(t, e);
                    }
                }, i.onSetTouchMaskEnable = function(t) {
                    if (void 0 === t && (t = !1), !this._touchMask) {
                        var e = r.get(l.GlobalDataType.Canvas);
                        this._touchMask = e.getChildByName("TouchMask");
                    }
                    this._touchMask.active = t, v.warn("TouchMask: " + t);
                }, i.onSetLevelManagerEnable = function(t) {
                    null != t && this._levelManager && (this._levelManager.active = t);
                }, i.onGameStart = function(t) {
                    var e = this;
                    u.emit(c.GameEvents.SetInitUIEnable, !0), this._isOver = !1, this.loadSubBound(function() {
                        e.loadExtralAssets(function() {
                            e.loadGameAssets(function() {
                                e.preLoadPrefabs(), e._levelManager.active = !0, u.emit(c.GameEvents.SetInitUIEnable, !1), 
                                t && t();
                            });
                        });
                    });
                }, i.onGameOver = function(t) {
                    if (!this._isOver) if (this._isOver = !0, m.hideUI(p.LevelController), t) switch (h._curPlatform) {
                      case d.PCMiniGame:
                      case d.WXMiniGame:
                        m.showUI(p.FinishAwardBoxUI, function() {
                            m.showUI(p.WinUI), f.addLv();
                        });
                        break;

                      default:
                        m.showUI(p.WinUI), f.addLv();
                    } else m.showUI(p.LoseUI);
                }, i.onLoadSubPkg = function(t, e) {
                    var n = this;
                    this._tmpLoadState = {};
                    var i = function(t) {
                        n._tmpLoadState[t] = !0;
                        var i = !0;
                        for (var o in n._tmpLoadState) i = i && n._tmpLoadState[o];
                        console.log("#2 动态加载分包:", t, "完成"), i && e && e();
                    }, o = function(e) {
                        var o = t[e];
                        n._tmpLoadState[e] = !1;
                        var a = o.isMask || !1;
                        console.log("#1 动态加载分包开始:", e), y.loadBundle(e, function() {
                            if (o.isLoadPrefab) {
                                var t = o.prefabUrl || "";
                                y.loadBundleDir(e, t, function(t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var o = t[n];
                                        g.createPool(o.data.name, o);
                                    }
                                    i(e);
                                }, s, a);
                            } else i(e);
                        }, a);
                    };
                    for (var a in t) o(a);
                }, n;
            }(a)) || S), n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/GlobalClass.ts", [ "cc" ], function(t) {
    var e, n;
    return {
        setters: [ function(t) {
            e = t.cclegacy, n = t.v3;
        } ],
        execute: function() {
            e._RF.push({}, "d33ab3ux0dLs6NMxjOaUEqy", "GlobalClass", void 0), t("HPInfo", function() {
                this.isShow = !0, this.rate = 1, this.curRate = 1, this.isPlayer = !1, this.wpos = n(), 
                this.countTime = 0, this.type = 0, this.isShadowReady = !1;
            }), t("BossHPInfo", function() {
                this.bossName = void 0, this.rate = 1, this.curRate = 1, this.countTime = 0, this.isShadowReady = !1;
            }), t("PathInfo", function() {
                this.n = void 0, this.p = n(), this.path = [];
            }), t("WeaponInfo", function() {
                this.atk = 0, this.atkSpd = 1, this.perfab = "", this.bullet = "", this.bulletSpd = 20, 
                this.propScale = 1, this.droneheight = 4, this.boomRadius = 2;
            }), t("TrapInfo", function() {
                this.atk = 0, this.perfab = "", this.isMuilty = !1, this.atkRate = 1, this.atkSpd = 1, 
                this.bulletSpd = 10, this.bulletType = "mergePistolBullet";
            }), e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/GlobalConfig.ts", [ "cc" ], function(t) {
    var e, n, i;
    return {
        setters: [ function(t) {
            e = t.cclegacy, n = t.clamp, i = t.v2;
        } ],
        execute: function() {
            e._RF.push({}, "456dexnqmNATI/Y3iPzIjTN", "GlobalConfig", void 0);
            var o = t("GlobalConfig", {
                Scale2DTo3D: 1 / 30,
                ShowCollider2D: !0,
                Award: {
                    WinAward: 500,
                    WinLvStep: 50,
                    WinVideoRate: 3,
                    LoseAward: 200,
                    VideoAward: 500,
                    VideoMistryAward: 10,
                    OnlineAwardMin: 300,
                    addStep: 1,
                    LvCost: 1,
                    recoverTime: 300,
                    max: 6
                },
                AwardCfg: [ {
                    id: 0,
                    lv: 3
                }, {
                    id: 1,
                    lv: 3
                }, {
                    id: 2,
                    lv: 3
                }, {
                    id: 3,
                    lv: 3
                }, {
                    id: 4,
                    lv: 3
                }, {
                    id: 5,
                    lv: 3
                } ],
                GoodsCfg: {
                    Weapon: {
                        0: 300,
                        1: 300,
                        2: 300,
                        3: 300,
                        4: 300,
                        5: 300
                    }
                },
                SignCfg: [ {
                    awardNum: 500,
                    type: 0
                }, {
                    awardNum: 1e3,
                    type: 0
                }, {
                    awardNum: 800,
                    type: 0
                }, {
                    awardNum: 1e3,
                    type: 0
                }, {
                    awardNum: 1200,
                    type: 0
                }, {
                    awardNum: 1500,
                    type: 0
                }, {
                    awardNum: 2e3,
                    type: 0
                } ],
                RolePropCfg: {
                    roleNum: {
                        default: 1,
                        step: 1,
                        maxLv: 100
                    },
                    goldRate: {
                        default: 1,
                        step: .1,
                        maxLv: 50
                    },
                    bossInfo: {
                        default: 1,
                        lvupNum: 3,
                        maxLv: 27
                    },
                    roleNumCost: {
                        default: 100,
                        step: 200
                    },
                    goldRateCost: {
                        default: 100,
                        step: 400
                    },
                    bossCost: {
                        default: 1e3,
                        step: 300
                    },
                    getRoleNumByLv: function(t) {
                        t = n(t, 1, t);
                        var e = o.RolePropCfg;
                        return (t - 1) * e.roleNum.step + e.roleNum.default;
                    },
                    getGoldRateByLv: function(t) {
                        t = n(t, 1, t);
                        var e = o.RolePropCfg;
                        return (t - 1) * e.goldRate.step + e.goldRate.default;
                    },
                    getBossInfoByLv: function(t) {
                        t = n(t, 1, t);
                        var e = o.RolePropCfg, i = {
                            bossNum: 0,
                            lastLv: 0
                        };
                        i.bossNum = Math.floor((t - 1) / e.bossInfo.lvupNum) + 1;
                        var s = t % e.bossInfo.lvupNum;
                        return i.lastLv = 0 == s ? 3 : s, i;
                    },
                    getRoleNumCostByLv: function(t) {
                        t = n(t, 1, t);
                        var e = o.RolePropCfg;
                        return (t - 1) * e.roleNumCost.step + e.roleNumCost.default;
                    },
                    getGoldRateCostByLv: function(t) {
                        t = n(t, 1, t);
                        var e = o.RolePropCfg;
                        return (t - 1) * e.goldRateCost.step + e.goldRateCost.default;
                    },
                    getBossCostByLv: function(t) {
                        t = n(t, 1, t);
                        var e = o.RolePropCfg;
                        return (t - 1) * e.bossCost.step + e.bossCost.default;
                    }
                },
                Player: {
                    moveSpd: 6.5,
                    scale: 1.2,
                    cldRadius: 1,
                    hp: 1,
                    atkRate: 1,
                    checkRadius: 2,
                    centerCldRadius: 2,
                    giantScale: 2.4,
                    giantCldRadius: 1,
                    giantHp: 6,
                    giantAtkRate: 2.5
                },
                EnemyCfg: {
                    cldRadius: 1,
                    creatSize: i(4.5, 4.5),
                    followDist: 7,
                    lvupStep: .06
                },
                Enemy: {
                    0: {
                        spd: 7.2,
                        atk: 1,
                        hp: 2,
                        scale: 1.2
                    },
                    1: {
                        spd: 8.2,
                        atk: 1,
                        hp: 8,
                        scale: 1.2,
                        boomRadius: 2.5,
                        boomAtk: 2
                    },
                    2: {
                        spd: 10,
                        atk: 1,
                        hp: 5,
                        scale: 1.5
                    },
                    3: {
                        spd: 7.8,
                        atk: 1,
                        hp: 15,
                        scale: 3
                    },
                    4: {
                        spd: 7.2,
                        atk: 1,
                        hp: 22,
                        scale: 2.4
                    }
                },
                ShowDebugCld: !1,
                ShowDebugCamera: !1,
                DebugCameraHeight: 150,
                VisibleSize: i(80, 80),
                RunPropSize: i(50, 50),
                RoadWidth: 9.25,
                Formation: [ {
                    x: 0,
                    y: 0,
                    z: 0
                }, {
                    x: 30,
                    y: 0,
                    z: 0
                }, {
                    x: 15,
                    y: -30,
                    z: 0
                }, {
                    x: -15,
                    y: -30,
                    z: 0
                }, {
                    x: -30,
                    y: 0,
                    z: 0
                }, {
                    x: -15,
                    y: 30,
                    z: 0
                }, {
                    x: 15,
                    y: 30,
                    z: 0
                }, {
                    x: 45,
                    y: 30,
                    z: 0
                }, {
                    x: 60,
                    y: 0,
                    z: 0
                }, {
                    x: 45,
                    y: -30,
                    z: 0
                }, {
                    x: 30,
                    y: -60,
                    z: 0
                }, {
                    x: 0,
                    y: -60,
                    z: 0
                }, {
                    x: -30,
                    y: -60,
                    z: 0
                }, {
                    x: -45,
                    y: -30,
                    z: 0
                }, {
                    x: -60,
                    y: 0,
                    z: 0
                }, {
                    x: -45,
                    y: 30,
                    z: 0
                }, {
                    x: -30,
                    y: 60,
                    z: 0
                }, {
                    x: 0,
                    y: 60,
                    z: 0
                }, {
                    x: 30,
                    y: 60,
                    z: 0
                }, {
                    x: 60,
                    y: 60,
                    z: 0
                }, {
                    x: 75,
                    y: 30,
                    z: 0
                }, {
                    x: 90,
                    y: 0,
                    z: 0
                }, {
                    x: 75,
                    y: -30,
                    z: 0
                }, {
                    x: 60,
                    y: -60,
                    z: 0
                }, {
                    x: 45,
                    y: -90,
                    z: 0
                }, {
                    x: 15,
                    y: -90,
                    z: 0
                }, {
                    x: -15,
                    y: -90,
                    z: 0
                }, {
                    x: -45,
                    y: -90,
                    z: 0
                }, {
                    x: -60,
                    y: -60,
                    z: 0
                }, {
                    x: -75,
                    y: -30,
                    z: 0
                }, {
                    x: -90,
                    y: 0,
                    z: 0
                }, {
                    x: -75,
                    y: 30,
                    z: 0
                }, {
                    x: -60,
                    y: 60,
                    z: 0
                }, {
                    x: -45,
                    y: 90,
                    z: 0
                }, {
                    x: -15,
                    y: 90,
                    z: 0
                }, {
                    x: 15,
                    y: 90,
                    z: 0
                }, {
                    x: 45,
                    y: 90,
                    z: 0
                }, {
                    x: 75,
                    y: 90,
                    z: 0
                }, {
                    x: 90,
                    y: 60,
                    z: 0
                }, {
                    x: 105,
                    y: 30,
                    z: 0
                }, {
                    x: 120,
                    y: 0,
                    z: 0
                }, {
                    x: 105,
                    y: -30,
                    z: 0
                }, {
                    x: 90,
                    y: -60,
                    z: 0
                }, {
                    x: 75,
                    y: -90,
                    z: 0
                }, {
                    x: 60,
                    y: -120,
                    z: 0
                }, {
                    x: 30,
                    y: -120,
                    z: 0
                }, {
                    x: 0,
                    y: -120,
                    z: 0
                }, {
                    x: -30,
                    y: -120,
                    z: 0
                }, {
                    x: -60,
                    y: -120,
                    z: 0
                }, {
                    x: -75,
                    y: -90,
                    z: 0
                }, {
                    x: -90,
                    y: -60,
                    z: 0
                }, {
                    x: -105,
                    y: -30,
                    z: 0
                }, {
                    x: -120,
                    y: 0,
                    z: 0
                }, {
                    x: -105,
                    y: 30,
                    z: 0
                }, {
                    x: -90,
                    y: 60,
                    z: 0
                }, {
                    x: -75,
                    y: 90,
                    z: 0
                }, {
                    x: -60,
                    y: 120,
                    z: 0
                }, {
                    x: -30,
                    y: 120,
                    z: 0
                }, {
                    x: 0,
                    y: 120,
                    z: 0
                }, {
                    x: 30,
                    y: 120,
                    z: 0
                }, {
                    x: 60,
                    y: 120,
                    z: 0
                }, {
                    x: 90,
                    y: 120,
                    z: 0
                }, {
                    x: 105,
                    y: 90,
                    z: 0
                }, {
                    x: 120,
                    y: 60,
                    z: 0
                }, {
                    x: 135,
                    y: 30,
                    z: 0
                }, {
                    x: 150,
                    y: 0,
                    z: 0
                }, {
                    x: 135,
                    y: -30,
                    z: 0
                }, {
                    x: 120,
                    y: -60,
                    z: 0
                }, {
                    x: 105,
                    y: -90,
                    z: 0
                }, {
                    x: 90,
                    y: -120,
                    z: 0
                }, {
                    x: 75,
                    y: -150,
                    z: 0
                }, {
                    x: 45,
                    y: -150,
                    z: 0
                }, {
                    x: 15,
                    y: -150,
                    z: 0
                }, {
                    x: -15,
                    y: -150,
                    z: 0
                }, {
                    x: -45,
                    y: -150,
                    z: 0
                }, {
                    x: -75,
                    y: -150,
                    z: 0
                }, {
                    x: -90,
                    y: -120,
                    z: 0
                }, {
                    x: -105,
                    y: -90,
                    z: 0
                }, {
                    x: -120,
                    y: -60,
                    z: 0
                }, {
                    x: -135,
                    y: -30,
                    z: 0
                }, {
                    x: -150,
                    y: 0,
                    z: 0
                }, {
                    x: -135,
                    y: 30,
                    z: 0
                }, {
                    x: -120,
                    y: 60,
                    z: 0
                }, {
                    x: -105,
                    y: 90,
                    z: 0
                }, {
                    x: -90,
                    y: 120,
                    z: 0
                }, {
                    x: -75,
                    y: 150,
                    z: 0
                }, {
                    x: -45,
                    y: 150,
                    z: 0
                }, {
                    x: -15,
                    y: 150,
                    z: 0
                }, {
                    x: 15,
                    y: 150,
                    z: 0
                }, {
                    x: 45,
                    y: 150,
                    z: 0
                }, {
                    x: 75,
                    y: 150,
                    z: 0
                }, {
                    x: 105,
                    y: 150,
                    z: 0
                }, {
                    x: 120,
                    y: 120,
                    z: 0
                }, {
                    x: 135,
                    y: 90,
                    z: 0
                }, {
                    x: 150,
                    y: 60,
                    z: 0
                }, {
                    x: 165,
                    y: 30,
                    z: 0
                }, {
                    x: 180,
                    y: 0,
                    z: 0
                }, {
                    x: 165,
                    y: -30,
                    z: 0
                }, {
                    x: 150,
                    y: -60,
                    z: 0
                }, {
                    x: 135,
                    y: -90,
                    z: 0
                }, {
                    x: 120,
                    y: -120,
                    z: 0
                }, {
                    x: 105,
                    y: -150,
                    z: 0
                }, {
                    x: 90,
                    y: -180,
                    z: 0
                }, {
                    x: 60,
                    y: -180,
                    z: 0
                }, {
                    x: 30,
                    y: -180,
                    z: 0
                }, {
                    x: 0,
                    y: -180,
                    z: 0
                }, {
                    x: -30,
                    y: -180,
                    z: 0
                }, {
                    x: -60,
                    y: -180,
                    z: 0
                }, {
                    x: -90,
                    y: -180,
                    z: 0
                }, {
                    x: -105,
                    y: -150,
                    z: 0
                }, {
                    x: -120,
                    y: -120,
                    z: 0
                }, {
                    x: -135,
                    y: -90,
                    z: 0
                }, {
                    x: -150,
                    y: -60,
                    z: 0
                }, {
                    x: -165,
                    y: -30,
                    z: 0
                }, {
                    x: -180,
                    y: 0,
                    z: 0
                }, {
                    x: -165,
                    y: 30,
                    z: 0
                }, {
                    x: -150,
                    y: 60,
                    z: 0
                }, {
                    x: -135,
                    y: 90,
                    z: 0
                }, {
                    x: -120,
                    y: 120,
                    z: 0
                }, {
                    x: -105,
                    y: 150,
                    z: 0
                }, {
                    x: -90,
                    y: 180,
                    z: 0
                }, {
                    x: -60,
                    y: 180,
                    z: 0
                }, {
                    x: -30,
                    y: 180,
                    z: 0
                }, {
                    x: 0,
                    y: 180,
                    z: 0
                }, {
                    x: 30,
                    y: 180,
                    z: 0
                }, {
                    x: 60,
                    y: 180,
                    z: 0
                }, {
                    x: 90,
                    y: 180,
                    z: 0
                } ],
                FormationScale: .9
            });
            t("WeaponCfg", {
                0: {
                    atk: 1,
                    atkSpd: 2,
                    perfab: "Pistol",
                    bullet: "mergePistolBullet",
                    bulletSpd: 20,
                    propScale: 5
                },
                1: {
                    atk: 1,
                    atkSpd: 1,
                    perfab: "Shotgun",
                    bullet: "mergeShotgunBullet",
                    bulletSpd: 20,
                    propScale: 3
                },
                2: {
                    atk: 3,
                    atkSpd: 1,
                    perfab: "FireGun",
                    bullet: "mergeFireGunBullet",
                    bulletSpd: 20,
                    propScale: 2
                },
                3: {
                    atk: 1,
                    atkSpd: 3,
                    perfab: "MachineGun",
                    bullet: "mergeMachineGunBullet",
                    bulletSpd: 30,
                    propScale: 2
                },
                4: {
                    atk: .8,
                    atkSpd: 1,
                    perfab: "Grenades",
                    bullet: " ",
                    bulletSpd: 5,
                    propScale: 2,
                    boomRadius: 3
                },
                5: {
                    atk: 1,
                    atkSpd: 4,
                    perfab: "Drone",
                    bullet: "mergeDroneBullet",
                    bulletSpd: 20,
                    propScale: 2,
                    droneheight: 7
                }
            }), t("TrapCfg", {
                0: {
                    atk: 5,
                    perfab: "ElectricSaw",
                    isMuilty: !1
                },
                1: {
                    atk: 5,
                    perfab: "Spininess",
                    isMuilty: !1
                },
                2: {
                    atk: 5,
                    perfab: "Hammer",
                    isMuilty: !1
                },
                3: {
                    atk: 5,
                    perfab: "Rocket",
                    isMuilty: !0
                },
                4: {
                    atk: 5,
                    atkSpd: 5,
                    bulletType: "mergeFortBarbetteBullet",
                    perfab: "FortBarbette",
                    isMuilty: !0
                },
                5: {
                    atk: 5,
                    perfab: "UpperAirNail",
                    isMuilty: !1
                },
                6: {
                    atk: 5,
                    perfab: "LandMine",
                    isMuilty: !0
                }
            }), e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/GlobalData.ts", [ "cc" ], function(t) {
    var e;
    return {
        setters: [ function(t) {
            e = t.cclegacy;
        } ],
        execute: function() {
            e._RF.push({}, "cd2fcYjOedJ2rLbYgJii6jc", "GlobalData", void 0), t("default", function() {
                function t() {}
                return t.get = function(t) {
                    return this.data[t];
                }, t.set = function(t, e) {
                    this.data[t] = e;
                }, t;
            }()).data = {}, e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/GlobalEnum.ts", [ "cc" ], function(t) {
    var e;
    return {
        setters: [ function(t) {
            e = t.cclegacy;
        } ],
        execute: function() {
            var n, i, o, s, a, r, l, u, c, h, d, f, p, m, v, g, y, S, P, b, _;
            t("GlobalEnum", void 0), e._RF.push({}, "7186ejKIJlHxasa8cdUsQf0", "GlobalEnum", void 0), 
            i = n || (n = t("GlobalEnum", {})), function(t) {
                t[t.Index = 0] = "Index", t[t.Canvas = 1] = "Canvas", t[t.CameraUI = 2] = "CameraUI", 
                t[t.Camera3D = 3] = "Camera3D";
            }(o || (o = {})), i.GlobalDataType = o, function(t) {
                t[t.DirecRoad = 0] = "DirecRoad", t[t.TurnRoad = 1] = "TurnRoad";
            }(s || (s = {})), i.RoadType = s, function(t) {
                t[t.Front = 0] = "Front", t[t.Right = 1] = "Right", t[t.Back = 2] = "Back", t[t.Left = 3] = "Left";
            }(a || (a = {})), i.MoveDirec = a, function(t) {
                t[t.Asset = 0] = "Asset", t[t.Tip = 1] = "Tip", t[t.Skin = 2] = "Skin";
            }(r || (r = {})), i.AwardType = r, function(t) {
                t[t.CreateBtn = 0] = "CreateBtn", t[t.DeleteBtn = 1] = "DeleteBtn", t[t.RsetBtn = 2] = "RsetBtn", 
                t[t.RunBtn = 3] = "RunBtn", t[t.SkipBtn = 4] = "SkipBtn", t[t.TipBtn = 5] = "TipBtn";
            }(l || (l = {})), i.LevelBtns = l, function(t) {
                t.GetGold = "GetGold";
            }(u || (u = {})), i.Effect2DType = u, function(t) {
                t.grenadesThrow = "grenadesThrow";
            }(c || (c = {})), i.ThrowBullets = c, function(t) {
                t.Effect_IS_buff_get_001 = "Effect_IS_buff_get_001", t.Effect_IS_buff_prop_001 = "Effect_IS_buff_prop_001", 
                t.Effect_jz_bomb_boom = "Effect_jz_bomb_boom", t.Effect_jz_fireball_boom = "Effect_jz_fireball_boom", 
                t.Effect_jz_grenade_boom = "Effect_jz_grenade_boom", t.Effect_jz_mine_boom = "Effect_jz_mine_boom", 
                t.Effect_jz_rocketboom = "Effect_jz_rocketboom", t.fireEffect = "fireEffect", t.fireWork = "fireWork";
            }(h || (h = {})), i.Effect3dType = h, d || (d = {}), i.ExtralProp = d, function(t) {
                t.MergeEffect = "mergeEffect", t.MergeFrameAnim = "mergeFrameAnim", t.MergeShadow = "mergeShadow", 
                t.MergePistolBullet = "mergePistolBullet", t.MergeShotgunBullet = "mergeShotgunBullet", 
                t.MergeFireGunBullet = "mergeFireGunBullet", t.MergeMachineGunBullet = "mergeMachineGunBullet", 
                t.MergeDroneBullet = "mergeDroneBullet", t.MergeRocketSmook = "mergeRocketSmook", 
                t.MergeRoleDeath = "mergeRoleDeath", t.MergeEnemyByHit = "mergeEnemyByHit", t.MergeFireEffect = "mergeFireEffect";
            }(f || (f = {})), i.MergeEffectType = f, function(t) {
                t[t.Boom0 = 0] = "Boom0", t[t.Quad = 1] = "Quad";
            }(p || (p = {})), i.MergeType = p, function(t) {
                t.idle = "idle", t.win = "win", t.standShoot = "standShoot", t.shootBack = "shootBack", 
                t.throwBack = "throwBack", t.throwStand = "throwStand";
            }(m || (m = {})), i.PlayerClip = m, function(t) {
                t.run = "run", t.rush = "rush", t.death = "death", t.idle = "idle";
            }(v || (v = {})), i.EnemyClip = v, function(t) {
                t.Normal = "enemyNormal", t.Bomb = "enemyBomb", t.Ninja = "enemyNinja", t.Giant = "enemyGiant", 
                t.Boss = "enemyBoss";
            }(g || (g = {})), i.EnemyPrefabs = g, function(t) {
                t[t.Normal = 0] = "Normal", t[t.Bomb = 1] = "Bomb", t[t.Ninja = 2] = "Ninja", t[t.Giant = 3] = "Giant", 
                t[t.Boss = 4] = "Boss";
            }(y || (y = {})), i.EnemyType = y, function(t) {
                t[t.Weapon = 0] = "Weapon", t[t.Trap = 1] = "Trap", t[t.Increase = 2] = "Increase";
            }(S || (S = {})), i.PropType = S, function(t) {
                t[t.Pistol = 0] = "Pistol", t[t.Shotgun = 1] = "Shotgun", t[t.FireGun = 2] = "FireGun", 
                t[t.MachineGun = 3] = "MachineGun", t[t.Grenades = 4] = "Grenades", t[t.Drone = 5] = "Drone";
            }(P || (P = {})), i.WeaponType = P, function(t) {
                t[t.symbol_Add = 0] = "symbol_Add", t[t.symbol_Reduce = 1] = "symbol_Reduce", t[t.symbol_Multip = 2] = "symbol_Multip", 
                t[t.symbol_Division = 3] = "symbol_Division";
            }(b || (b = {})), i.IncreaseType = b, function(t) {
                t[t.ElectricSaw = 0] = "ElectricSaw", t[t.Spininess = 1] = "Spininess", t[t.Hammer = 2] = "Hammer", 
                t[t.Rocket = 3] = "Rocket", t[t.FortBarbette = 4] = "FortBarbette", t[t.UpperAirNail = 5] = "UpperAirNail", 
                t[t.LandMine = 6] = "LandMine", t[t.Increase = 7] = "Increase";
            }(_ || (_ = {})), i.TrapType = _, e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/GlobalPool.ts", [ "cc", "./BasicComponet.ts" ], function(t) {
    var e, n, i;
    return {
        setters: [ function(t) {
            e = t.cclegacy, n = t.instantiate;
        }, function(t) {
            i = t.BasicComponet;
        } ],
        execute: function() {
            e._RF.push({}, "a2f27QuS1RNHr+o8u84VQ3s", "GlobalPool", void 0), t("default", function() {
                function t() {}
                return t.createPool = function(t, e) {
                    this.allPools.hasOwnProperty(t) || (this.allPools[t] = new o(e));
                }, t.get = function(t, e) {
                    return this.allPools[t] ? this.allPools[t].get(e) : (console.warn("未创建对应名称的对象池，获取实例失败：", t), 
                    null);
                }, t.put = function(t, e) {
                    if (t) {
                        if (e || (e = t.name), !this.allPools[e]) {
                            console.warn("未创建对应名称的对象池，将销毁节点：", e);
                            var n = t.getComponent(e);
                            return n && n.unuse && n.unuse(), void t.destroy();
                        }
                        this.allPools[e].put(t);
                    }
                }, t.putAllChildren = function(t, e) {
                    if (void 0 === e && (e = !1), t && 0 != t.children.length) if (e) {
                        var n = t.children[0].name;
                        if (this.allPools[n]) for (var i = this.allPools[n], o = t.children.length - 1; o >= 0; --o) i.put(t.children[o]); else for (var s = t.children.length - 1; s >= 0; --s) {
                            var a = t.children[s].getComponent(n);
                            a && a.unuse && a.unuse(), t.children[s].destroy();
                        }
                    } else for (var r = t.children.length - 1; r >= 0; --r) {
                        var l = t.children[r];
                        this.put(l);
                    }
                }, t.clear = function(t) {
                    if (t) this.allPools.hasOwnProperty(t) && (this.allPools[t].clear(), delete this.allPools[t]); else {
                        for (var e in this.allPools) this.allPools[e].clear();
                        this.allPools = {};
                    }
                }, t.preCreate = function(t, e) {
                    this.allPools[t] ? this.allPools[t].preCreate(e) : console.warn("不存在对应名称的对象池，无法预先创建实例：", t);
                }, t;
            }()).allPools = {};
            var o = t("AutoNodePool", function() {
                function t(t) {
                    this.prefab = void 0, this.pool = void 0, this.keyArr = [], this.prefab = t, t.data.getComponent(i), 
                    this.pool = {}, this.keyArr = [];
                }
                var e = t.prototype;
                return e.get = function(t) {
                    if (this.keyArr.length > 0) {
                        var e = this.keyArr.pop(), o = this.pool[e];
                        return o.cmp && o.cmp.reuse(t), o.node.active = !0, delete this.pool[e], o.node;
                    }
                    var s = n(this.prefab), a = s.getComponent(i);
                    return a && a.init(t), s.active = !0, s;
                }, e.put = function(t) {
                    if (t) {
                        var e = t.getComponent(i);
                        e && e.unuse && e.unuse(), t.removeFromParent(), t.active = !1;
                        var n = t.uuid;
                        this.keyArr.indexOf(n) < 0 && (this.keyArr.push(n), this.pool[n] || (this.pool[n] = {
                            cmp: e,
                            node: t
                        }));
                    }
                }, e.clear = function() {
                    for (var t in this.pool) {
                        var e = this.pool[t];
                        e.cmp && e.cmp.unuse && e.cmp.unuse(), e.node.destroy();
                    }
                    this.pool = {}, this.keyArr = [];
                }, e.preCreate = function(t) {
                    var e = t - this.keyArr.length;
                    if (!(e <= 0)) for (var o = 0; o < e; ++o) {
                        var s = n(this.prefab), a = s.getComponent(i);
                        a && a.init(), this.put(s);
                    }
                }, t;
            }());
            e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/GlobalTmpData.ts", [ "cc", "./Tools.ts" ], function(t) {
    var e, n, i;
    return {
        setters: [ function(t) {
            e = t.cclegacy, n = t.v3;
        }, function(t) {
            i = t.default;
        } ],
        execute: function() {
            e._RF.push({}, "bf052EAOMJMq7pwpKhYtGk2", "GlobalTmpData", void 0);
            var o = t("GlobalTmpData", function() {
                function t() {}
                return t.reset = function() {
                    this.timeScale = 1, this.Game.isGameRun = !1, this.Game.isGameOver = !1, this.Game.isGuideLv = !1, 
                    this.Game.isGuideFinish = !1, this.Game.isPause = !1, i.clearObj(this.HpData), this.ResetRailCount = 0, 
                    this.HpData = {}, this.Player.isDeath = !1, this.Player.isPathEnd = !1, this.Player.wpos.set(0, 0, 0), 
                    this.Player.offset.set(0, 0, 0), this.UIData.isEnterLv = !1, this.PathInfo = [], 
                    this.endFormationRec = {}, this.normalRoleNum = 0;
                }, t;
            }());
            o.timeScale = 1, o.Game = {
                isGameRun: !1,
                isPause: !1,
                isGameOver: !1,
                isGuideLv: !1,
                isGuideFinish: !1,
                startTime: 0,
                totalTime: 0,
                gameTime: 0,
                endTime: 0
            }, o.ResetRailCount = 0, o.HpData = {}, o.Player = {
                wpos: n(),
                offset: n(),
                wrotY: 0,
                lineVec: n(),
                radius: .5,
                isDeath: !1,
                formation: {
                    minX: 0,
                    maxX: 0,
                    minZ: 0,
                    maxZ: 0
                },
                endMarkPos: n(),
                isPathEnd: !1
            }, o.UIData = {
                isEnterLv: !1,
                onlineTime: 0,
                isShowTurnTableUI: !1
            }, o.MapSize = n(), o.PathInfo = [], o.EnemyNum = 0, o.normalRoleNum = 0, o.endPassPath = [], 
            o.endFormationRec = {}, e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/Init.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalData.ts", "./GlobalEnum.ts", "./EventManager.ts", "./EventTypes.ts", "./AdvertSystem.ts", "./AudioSystem.ts", "./SDKSystem.ts", "./StorageSystem.ts", "./UIEnum.ts", "./UISystem.ts", "./ColorLog.ts", "./Loader.ts" ], function(t) {
    var e, n, i, o, s, a, r, l, u, c, h, d, f, p, m, v, g;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy, i = t._decorator, o = t.Camera, s = t.Component;
        }, function(t) {
            a = t.default;
        }, function(t) {
            r = t.GlobalEnum;
        }, function(t) {
            l = t.default;
        }, function(t) {
            u = t.EventTypes;
        }, function(t) {
            c = t.AdvertSystem;
        }, function(t) {
            h = t.AudioSystem;
        }, function(t) {
            d = t.SDKSystem;
        }, function(t) {
            f = t.StorageSystem;
        }, function(t) {
            p = t.UIEnum;
        }, function(t) {
            m = t.UISystem;
        }, function(t) {
            v = t.clog;
        }, function(t) {
            g = t.default;
        } ],
        execute: function() {
            var y;
            n._RF.push({}, "f7903wvDfZLQbSfwI6ZTa3d", "Init", void 0);
            var S = i.ccclass;
            i.property, t("Init", S("Init")(y = function(t) {
                function n() {
                    for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).uiLayer = null, e.isSysInitFish = !1, 
                    e.preLoadBounds = [ "AudioAssets", "Game" ], e;
                }
                e(n, t);
                var i = n.prototype;
                return i.onLoad = function() {
                    a.set(r.GlobalDataType.Canvas, this.node), a.set(r.GlobalDataType.CameraUI, this.node.getChildByName("CameraUI").getComponent(o)), 
                    this.uiLayer = this.node.getChildByName("UILayer"), this.initSystems();
                }, i.initSystems = function() {
                    f.init(), h.init(), d.init(), m.init(this.uiLayer), c.init(this.uiLayer);
                }, i.update = function(t) {
                    this.checkSysInitState();
                }, i.checkSysInitState = function() {
                    if (!this.isSysInitFish) {
                        var t = !0;
                        t = (t = (t = (t = (t = t && f.isInitFinished) && h.isInitFinished) && c.isInitFinished) && d.isInitFinished) && m.isInitFinished, 
                        this.isSysInitFish = t, this.isSysInitFish && this.enterGame();
                    }
                }, i.enterGame = function() {
                    var t = this;
                    l.emit(u.GameEvents.InitLoadFinished), v.log("#进入游戏");
                    var e = setTimeout(function() {
                        clearTimeout(e), m.showUI(p.CustomAdUI), m.showUI(p.HomeUI), setTimeout(function() {
                            t.preLoadBound();
                        }, 100);
                    }, 100);
                }, i.preLoadBound = function() {
                    for (var t = 0, e = this.preLoadBounds.length; t < e; ++t) g.loadBundle(this.preLoadBounds[t], null, !1, !1);
                }, n;
            }(s)) || y), n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/InitProgressBar.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./EventTypes.ts" ], function(t) {
    var e, n, i, o, s, a, r, l, u, c, h;
    return {
        setters: [ function(t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, 
            o = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, a = t._decorator, r = t.ProgressBar, l = t.Label, u = t.Component;
        }, function(t) {
            c = t.default;
        }, function(t) {
            h = t.EventTypes;
        } ],
        execute: function() {
            var d, f, p, m, v, g, y;
            s._RF.push({}, "21d518DboJGArJ/Xi3WNGGO", "InitProgressBar", void 0);
            var S = a.ccclass, P = a.property;
            t("InitProgressBar", (d = S("InitProgressBar"), f = P(r), p = P(l), d((g = e((v = function(t) {
                function e() {
                    for (var e, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, i(e, "progressBar", g, o(e)), 
                    i(e, "progressLabel", y, o(e)), e.spd = .15, e.waitTime = 1, e.curWt = 0, e.isWait = !1, 
                    e;
                }
                n(e, t);
                var s = e.prototype;
                return s.onLoad = function() {
                    c.on(h.GameEvents.InitLoadFinished, this.onInitLoadFinished, this);
                }, s.onEnable = function() {
                    this.progressBar.progress = 0, this.progressLabel.string = "0", this.curWt = 0, 
                    this.isWait = !1;
                }, s.update = function(t) {
                    if (this.isWait) this.curWt += t, this.curWt > this.waitTime && (this.curWt = 0, 
                    this.isWait = !1, this.progressBar.progress = 0); else {
                        var e = this.spd * t;
                        this.progressBar.progress += e, this.progressBar.progress >= 1 && (this.progressBar.progress = 1, 
                        this.isWait = !0), this.progressLabel.string = (100 * this.progressBar.progress).toFixed(0);
                    }
                }, s.onInitLoadFinished = function() {
                    this.isWait = !0, this.progressBar.progress = 1, this.progressLabel.string = (100 * this.progressBar.progress).toFixed(0);
                }, e;
            }(u)).prototype, "progressBar", [ f ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), y = e(v.prototype, "progressLabel", [ p ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), m = v)) || m)), s._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/InitUI.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./EventTypes.ts" ], function(t) {
    var e, n, i, o, s, a;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy, i = t._decorator, o = t.Component;
        }, function(t) {
            s = t.default;
        }, function(t) {
            a = t.EventTypes;
        } ],
        execute: function() {
            var r;
            n._RF.push({}, "1f545voEX9J/5kNmpfK4F2Q", "InitUI", void 0);
            var l = i.ccclass;
            i.property, t("InitUI", l("InitUI")(r = function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                e(n, t);
                var i = n.prototype;
                return i.onLoad = function() {
                    s.on(a.GameEvents.SetInitUIEnable, this.onSetInitUIEnable, this);
                }, i.show = function(t) {
                    this.node.active = !0;
                }, i.hide = function(t) {
                    this.node.active = !1;
                }, i.onSetInitUIEnable = function(t) {
                    null != t && (t && this.show(), !t && this.hide());
                }, n;
            }(o)) || r), n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/LevelConfig.ts", [ "cc", "./StorageTemp.ts", "./GlobalConfig.ts" ], function(t) {
    var e, n, i, o;
    return {
        setters: [ function(t) {
            e = t.cclegacy, n = t.clamp;
        }, function(t) {
            i = t.LevelDataTmp;
        }, function(t) {
            o = t.TrapCfg;
        } ],
        execute: function() {
            e._RF.push({}, "2eca8M/mtVIu7CvQFMULD39", "LevelConfig", void 0), t("AssetsPkgCfg", {
                Scene: {}
            }), t("GetRandomLvData", function(t) {
                for (var e = [ "P002L", "P003L", "P004L" ], s = [ "P002R", "P003R", "P004R" ], a = [ "P002LB", "P003LB", "P004LB" ], r = [ "P002RB", "P003RB", "P004RB" ], l = [ "P001", "P003" ], u = [ "P001L" ], c = [ "P001R" ], h = [], d = Math.floor(3 * Math.random()) + 1, f = 0; f < d; f++) {
                    h[f] = [];
                    var p = Math.random() > .5, m = p ? e : s, v = p ? a : r, g = m[Math.floor(Math.random() * m.length)], y = v[Math.floor(Math.random() * v.length)], S = p ? u[0] : c[0], P = Math.floor(3 * Math.random()) + 2;
                    h[f].push(g);
                    for (var b = 0; b < P; b++) h[f].push(S);
                    h[f].push(y);
                }
                var _ = new i();
                _.lv = t, _.path.push("P000");
                for (var w = 0; w < h.length; w++) {
                    for (var I = Math.floor(3 * Math.random()) + 1, R = 0; R < I; R++) {
                        var x = l[Math.floor(Math.random() * l.length)];
                        _.path.push(x);
                    }
                    for (var C = h[w], A = 0; A < C.length; A++) _.path.push(C[A]);
                }
                _.path.push("P999"), console.log("路段数量: ", _.path.length);
                for (var B = {
                    P000: "0",
                    P999: "0",
                    P001: "0",
                    P002: "0",
                    P003: "012",
                    P004: "01"
                }, L = [ 1, 2, 3, 4 ], E = "0", k = 0, M = 0, D = 0, T = 0; T < _.path.length; T++) {
                    var G = _.path[T];
                    0 == T ? (M = (k = Math.floor(1 * t)) + 50, D = k + 60) : T == _.path.length - 2 ? (M = (k = Math.floor(1 * t)) + 60, 
                    D = k + 70) : (M = (k = Math.floor(1 * t)) + 30, D = k + 40);
                    var z = B[G.slice(0, 4)], U = Math.floor(Math.random() * z.length) + 1;
                    U = n(U, 1, 3);
                    var F = (E = z.slice(0, U)) + ",0," + M + "," + D, O = E + "," + L[Math.floor(Math.random() * L.length)] + "," + (M = D = Math.ceil(t / 5)) + "," + D;
                    _.enemy.push([ F, O ]);
                }
                for (var N = 0, K = 0; K < _.path.length; K++) {
                    var H = _.path[K];
                    if (a.indexOf(H) >= 0 || r.indexOf(H) >= 0 || "P000" == H || "P999" == H) _.prop.push(null); else if (Math.random() > .95) _.prop.push(null); else {
                        N = Math.floor(3 * Math.random()) + 1;
                        var j = Math.random();
                        switch (j < .45 ? 2 : j < .8 ? 1 : 0) {
                          case 0:
                            for (var W = [ 1, 2, 3, 4, 5 ], V = "", q = 0; q < N; q++) {
                                var X = Math.floor(Math.random() * W.length);
                                V += W[X], W.splice(X, 1);
                            }
                            _.prop.push([ 0, 0, 0, V ]);
                            break;

                          case 1:
                            var Z = [ 0, 1, 2, 3, 4, 5 ], Y = Z[Math.floor(Math.random() * Z.length)], J = o[Y].isMuilty ? N : 1, Q = 0;
                            switch (Y) {
                              case 0:
                                Q = Math.random() > .5 ? 0 : 1;
                                break;

                              case 0:
                              case 0:
                                Q = Math.random() > .5 ? 2 : 1;
                            }
                            _.prop.push([ 1, Y, J, Q ]);
                            break;

                          case 2:
                            for (var $ = Math.floor(1.9 * Math.random()) + 1, tt = 1 == $ && Math.random() > .5 ? 1 : 0, et = [], nt = 0; nt < $; nt++) {
                                var it = Math.random(), ot = void 0, st = void 0;
                                it <= .1 ? (ot = "/", st = Math.floor(3 * Math.random()) + 2) : it <= .3 ? (ot = "-", 
                                st = Math.floor(19 * Math.random()) + 2) : it <= .6 ? (ot = "x", st = Math.floor(5 * Math.random()) + 2) : (ot = "+", 
                                st = Math.floor(24 * Math.random()) + 2), et.push(ot + st);
                            }
                            _.prop.push([ 2, et[0], et[1] || null, tt ]);
                        }
                    }
                }
                return console.log("------------随机关卡数据---------(lv: ", t, " )-------"), console.log(JSON.stringify(_)), 
                _;
            }), t("LevelConfig", {
                1: {
                    lv: 1,
                    path: [ "P000", "P001", "P001", "P001", "P001", "P001", "P001", "P999" ],
                    enemy: [ [ "0,0,35,35" ], [ "0,0,20,20" ], [ "0,0,20,30" ], [ "0,0,20,25" ], [ "0,0,30,45" ], [ "0,0,45,45" ], [ "0,0,40,45" ], null ],
                    prop: [ null, null, [ 2, "x5", "+10", 0 ], [ 1, 0, 1, 0 ], [ 0, 0, 0, "3" ], [ 2, "x3", "+20", 0 ], [ 1, 2, 1, 2 ], null ]
                },
                2: {
                    lv: 2,
                    path: [ "P000", "P001", "P001", "P001", "P001", "P001", "P001", "P001", "P999" ],
                    enemy: [ [ "0,0,50,50" ], [ "0,0,30,30" ], [ "0,0,30,30" ], [ "0,0,30,35" ], [ "0,0,30,45" ], [ "0,0,50,50" ], [ "0,0,45,45" ], [ "0,0,40,45" ], null ],
                    prop: [ null, null, [ 2, "x6", "x4", 0 ], [ 1, 0, 1, 0 ], [ 2, "+12", "+6", 0 ], [ 0, 0, 0, "3" ], [ 1, 0, 1, 1 ], [ 2, "x3", "+10", 0 ], [ 1, 2, 1, 1 ], [ 1, 2, 1, 2 ], null ]
                },
                3: {
                    lv: 3,
                    path: [ "P000", "P001", "P001", "P001", "P001", "P001", "P001", "P001", "P001", "P001", "P004R", "P001R", "P003RB", "P999" ],
                    enemy: [ [ "012,0,45,55", "012,4,2,2" ], [ "012,0,35,35" ], [ "012,0,35,35", "012,4,1,1" ], [ "012,0,35,35" ], [ "012,0,30,35", "012,4,1,1" ], [ "012,0,30,35" ], [ "012,0,30,35", "012,4,1,1" ], [ "012,0,30,35" ], [ "012,0,35,35" ], [ "012,0,40,45", "012,4,2,2" ], [ "012,0,55,55" ], [ "012,0,60,65", "012,4,2,2" ], [ "012,0,45,45" ], null ],
                    prop: [ null, [ 0, 0, 0, "3" ], [ 2, "-3", "+10", 0 ], [ 1, 0, 1, 0 ], [ 2, "x1", "-5", 0 ], [ 1, 0, 1, 1 ], [ 2, "+10", "+15", 0 ], [ 2, "+4", "+5", 0 ], [ 0, 0, 0, "5" ], [ 1, 0, 1, 1 ], null, [ 2, "x2", "+15", 0 ], [ 1, 0, 1, 1 ], null ]
                },
                4: {
                    lv: 4,
                    path: [ "P000", "P001", "P001", "P001", "P001", "P001", "P002R", "P001R", "P001R", "P001R", "P003RB", "P001", "P999" ],
                    enemy: [ [ "012,0,55,55", "012,4,1,2" ], [ "012,0,45,45" ], [ "012,0,35,35", "012,4,2,3" ], [ "012,0,35,35" ], [ "012,0,30,35", "012,3,2,2" ], [ "012,0,30,35" ], [ "012,0,50,55", "012,4,2,3" ], [ "012,0,50,55" ], [ "012,0,65,65", "012,4,4,5" ], [ "012,0,60,65" ], [ "012,0,65,65", "012,4,4,5", "012,1,1,1" ], [ "012,0,60,75" ], null ],
                    prop: [ null, [ 2, "x2", "x4", 0 ], [ 1, 0, 1, 1 ], [ 2, "+5", "-10", 0 ], [ 0, 0, 0, "23" ], [ 1, 0, 1, 1 ], null, [ 2, "+10", "+20", 0 ], [ 1, 0, 1, 0 ], [ 2, "-10", "+10", 0 ], [ 2, "-5", 0, 0 ], [ 1, 0, 1, 1 ], null ]
                },
                5: {
                    lv: 5,
                    path: [ "P000", "P001", "P001", "P001", "P001", "P004L", "P001L", "P001L", "P004LB", "P001", "P001", "P999" ],
                    enemy: [ [ "012,0,65,75", "012,3,3,3" ], [ "012,0,55,55" ], [ "012,0,35,35", "012,3,4,4" ], [ "012,0,35,35" ], [ "012,0,30,35", "012,3,4,6" ], [ "012,0,30,35" ], [ "012,0,30,35", "012,3,4,4" ], [ "012,0,30,35" ], [ "012,0,55,65", "012,3,4,4" ], [ "012,0,50,55" ], [ "012,0,65,65", "012,1,4,4" ], [ "012,0,70,75" ], null ],
                    prop: [ null, [ 2, "+3", "x3", 0 ], [ 2, 0, "+6", 0 ], [ 1, 0, 1, 1 ], [ 0, 0, 0, "1" ], null, [ 1, 0, 1, 1 ], [ 2, "+25", "-15", 0 ], [ 1, 3, 1, 0 ], [ 2, "-5", "-10", 0 ], [ 0, 0, 0, "4" ], null ]
                },
                6: {
                    lv: 6,
                    path: [ "P000", "P001", "P001", "P001", "P001", "P001", "P004L", "P001L", "P001L", "P001L", "P004LB", "P001", "P001", "P999" ],
                    enemy: [ [ "012,0,65,65", "012,3,3,3" ], [ "012,0,55,55" ], [ "012,0,35,35", "012,3,4,4" ], [ "012,0,35,35" ], [ "012,0,30,35", "012,3,7,7" ], [ "012,0,40,45" ], [ "012,0,30,45", "012,3,4,4" ], [ "012,0,30,35" ], [ "012,0,55,55", "012,3,4,4" ], [ "012,0,50,65" ], [ "012,0,55,65", "012,1,4,4" ], [ "012,0,70,75" ], [ "012,0,75,75" ], null ],
                    prop: [ null, [ 2, 0, "+3", 0 ], [ 2, "x2", "+6", 0 ], [ 1, 3, 1, 0 ], [ 0, 0, 0, "12" ], [ 1, 0, 1, 1 ], null, [ 1, 0, 1, 0 ], [ 2, "+5", "+15", 0 ], [ 1, 3, 1, 2 ], null, [ 2, "+20", "+15", 0 ], [ 1, 3, 1, 0 ], null ]
                },
                7: {
                    lv: 7,
                    path: [ "P000", "P001", "P003", "P003", "P003L", "P001L", "P001L", "P002LB", "P001", "P002R", "P001R", "P001R", "P002RB", "P999" ],
                    enemy: [ [ "0,0,58,68", "0,4,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "01,0,38,48", "01,1,2,2" ], [ "012,0,38,48", "012,3,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "0,0,38,48", "0,1,2,2" ], [ "0,0,38,48", "0,1,2,2" ], [ "0,0,38,48" ], [ "0,0,58,58", "0,1,3,3" ], [ "0,0,68,68", "0,2,2,3" ], [ "0,0,68,78", "0,1,5,5" ] ],
                    prop: [ null, [ 2, "x4", "x2", 0 ], [ 1, 2, 1, 1 ], [ 2, "x2", "+25", 0 ], [ 0, 0, 0, "453" ], [ 1, 1, 1, 1 ], [ 2, "+14", "-20", 0 ], [ 0, 0, 0, "234" ], [ 2, "-17", "x3", 0 ], null, [ 1, 6, 3, 0 ], [ 0, 0, 0, "52" ], [ 2, "-11", "+15", 0 ], [ 1, 3, 3, 0 ] ]
                },
                8: {
                    lv: 8,
                    path: [ "P000", "P001", "P003", "P004L", "P001L", "P001L", "P003LB", "P003", "P003", "P003", "P004R", "P001R", "P001R", "P001R", "P003RB", "P999" ],
                    enemy: [ [ "0,0,58,68", "0,4,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "01,0,38,48", "0,4,2,2" ], [ "01,0,38,48", "01,1,2,2" ], [ "012,0,38,48", "012,3,2,2" ], [ "012,0,38,48", "0,4,2,2" ], [ "012,0,38,48", "0,4,2,2" ], [ "012,0,38,48", "0,1,2,2" ], [ "012,0,38,48", "0,1,2,2" ], [ "012,0,38,48" ], [ "012,0,38,48", "0,4,2,2" ], [ "012,0,38,48", "0,4,2,2" ], [ "012,0,48,58", "0,1,3,3" ], [ "01,0,68,68", "0,2,2,3" ], [ "01,0,68,78", "0,1,5,5" ], [ "01,0,58,68", "0,4,2,2" ] ],
                    prop: [ null, [ 2, "x2", "+15", 0 ], [ 0, 0, 0, "325" ], [ 1, 2, 1, 1 ], [ 2, "-10", "x2", 0 ], [ 1, 3, 2, 1 ], [ 2, "+15", "-10", 0 ], null, [ 1, 2, 1, 1 ], [ 2, "x2", "+25", 0 ], [ 0, 0, 0, "524" ], [ 2, "-10", "+15", 0 ], null, null ]
                },
                9: {
                    lv: 9,
                    path: [ "P000", "P001", "P001", "P001", "P001", "P001", "P004L", "P001L", "P001L", "P001L", "P004LB", "P001", "P001", "P999" ],
                    enemy: [ [ "012,0,75,75", "012,3,3,3" ], [ "012,0,65,65" ], [ "012,0,45,45", "012,3,4,4" ], [ "012,0,45,45" ], [ "012,0,40,45", "012,3,5,5" ], [ "012,0,50,55" ], [ "012,0,40,55", "012,3,4,4" ], [ "012,0,50,55" ], [ "012,0,45,45", "012,1,2,2" ], [ "012,0,60,65" ], [ "012,0,65,65", "012,1,4,4" ], [ "012,0,60,75", "012,1,4,4" ], [ "012,0,65,75", "012,1,5,5" ], [ "012,0,75,75", "012,1,2,2" ] ],
                    prop: [ null, [ 2, "x2", "+9", 0 ], [ 1, 0, 1, 1 ], [ 0, 0, 0, "12" ], [ 2, "+12", "x2", 0 ], [ 1, 0, 1, 1 ], null, [ 1, 0, 1, 0 ], [ 2, "+5", "+15", 0 ], [ 1, 3, 1, 0 ], [ 0, 0, 0, "234" ], null, [ 2, "+25", "+15", 0 ], [ 1, 5, 1, 0 ], null ]
                },
                10: {
                    lv: 10,
                    path: [ "P000", "P003", "P003", "P001", "P004L", "P001L", "P001L", "P001L", "P002LB", "P001", "P003L", "P001L", "P001L", "P004LB", "P999" ],
                    enemy: [ [ "0,0,58,68", "0,4,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "01,0,38,48", "01,1,2,2" ], null, [ "012,0,28,58", "012,3,2,2" ], [ "0,0,48,48", "0,2,2,2" ], [ "0,0,48,48", "0,4,5,5" ], [ "0,0,48,48", "0,2,4,4" ], [ "0,0,48,48", "0,1,5,5" ], [ "0,0,38,48" ], [ "0,0,48,48", "0,2,5,5" ], [ "0,0,58,68", "0,4,4,5" ], [ "0,0,58,58", "0,1,3,5" ], [ "0,0,58,58", "0,2,2,6" ], [ "0,0,68,68", "0,1,5,6" ], [ "0,0,50,50", "0,4,2,6" ] ],
                    prop: [ null, [ 2, "x3", "+15", 0 ], [ 1, 2, 1, 1 ], [ 0, 0, 0, "324" ], [ 2, "+10", "x2", 0 ], [ 1, 3, 2, 1 ], [ 2, "-5", "+10", 0 ], null, [ 1, 2, 1, 1 ], [ 2, "x2", "+25", 0 ], [ 0, 0, 0, "214" ], [ 2, "-10", "+15", 0 ], [ 1, 3, 1, 1 ], [ 2, "-5", "+5", 0 ] ]
                },
                11: {
                    lv: 11,
                    path: [ "P000", "P001", "P003", "P002L", "P001L", "P001L", "P001L", "P003LB", "P001", "P004R", "P001R", "P001R", "P001R", "P004RB", "P999" ],
                    enemy: [ [ "012,0,55,55", "012,4,1,2" ], [ "012,0,45,45" ], [ "01,0,20,25", "01,4,2,3" ], [ "01,0,35,35" ], [ "012,0,30,35", "012,3,2,5" ], [ "012,0,30,45" ], [ "012,0,35,55", "012,4,3,5" ], [ "02,0,30,35" ], [ "01,0,45,55", "012,4,5,5" ], [ "01,0,40,45" ], [ "01,0,40,40", "012,4,6,6", "012,1,2,2" ], [ "01,0,50,50" ], [ "01,0,65,65", "01,4,4,5" ], [ "01,0,65,65", "01,4,4,5", "012,1,2,2" ], null ],
                    prop: [ null, [ 2, "+15", "x3", 0 ], [ 1, 0, 1, 1 ], [ 2, "+10", "+15", 0 ], null, [ 0, 0, 0, "23" ], [ 2, "-10", "+10", 0 ], [ 0, 0, 0, "23" ], [ 1, 1, 1, 1 ], null, [ 2, "-2", "-5", 0 ], [ 1, 0, 1, 0 ], [ 2, "-10", "+10", 0 ], [ 2, "-5", 0, 0 ], [ 1, 0, 1, 1 ], null ]
                },
                12: {
                    lv: 12,
                    path: [ "P000", "P003", "P003", "P001", "P004L", "P001L", "P001L", "P001L", "P002LB", "P001", "P003L", "P001L", "P001L", "P004LB", "P999" ],
                    enemy: [ [ "0,0,68,68", "0,4,2,2" ], [ "0,0,48,48", "0,4,2,2" ], [ "0,0,48,48", "0,4,2,2" ], [ "01,0,48,48", "01,1,2,2" ], null, [ "012,0,38,48", "012,3,2,2" ], [ "0,0,48,48", "0,2,2,2" ], [ "0,0,58,68", "0,4,5,5" ], [ "0,0,58,58", "0,2,4,4" ], [ "0,0,48,58", "0,1,5,5" ], [ "0,0,48,58" ], [ "0,0,48,48", "0,2,5,5" ], [ "0,0,58,68", "0,4,4,5" ], [ "0,0,58,58", "0,1,3,5" ], [ "0,0,58,58", "0,2,2,6" ], [ "0,0,68,68", "0,1,5,6" ], [ "0,0,50,50", "0,4,2,6" ] ],
                    prop: [ null, [ 2, "x3", "+15", 0 ], [ 1, 2, 1, 1 ], [ 1, 2, 1, 1 ], [ 2, "x2", "+25", 0 ], [ 0, 0, 0, "214" ], [ 2, "+10", "x2", 0 ], [ 1, 3, 2, 1 ], [ 2, "-5", "+10", 0 ], null, [ 2, "-10", "+15", 0 ], [ 1, 3, 1, 1 ], [ 2, "-5", "+5", 0 ], [ 0, 0, 0, "324" ] ]
                },
                13: {
                    lv: 13,
                    path: [ "P000", "P001", "P003", "P004L", "P001L", "P001L", "P003LB", "P003", "P003", "P003", "P004R", "P001R", "P001R", "P001R", "P003RB", "P999" ],
                    enemy: [ [ "0,0,58,68", "0,4,2,2" ], [ "0,0,48,48", "0,4,2,2" ], [ "01,0,48,48", "0,4,2,2" ], [ "01,0,48,48", "01,1,2,2" ], [ "012,0,48,48", "012,3,2,2" ], [ "012,0,48,48", "0,4,2,2" ], [ "012,0,48,48", "0,4,2,2" ], [ "012,0,38,48", "0,1,2,2" ], [ "012,0,48,48", "0,1,2,2" ], [ "012,0,48,48" ], [ "012,0,38,48", "0,4,2,2" ], [ "012,0,48,48", "0,4,2,2" ], [ "012,0,48,58", "0,1,3,3" ], [ "01,0,88,88", "0,2,2,3" ], [ "01,0,68,78", "0,1,5,5" ], [ "01,0,58,68", "0,4,2,2" ] ],
                    prop: [ null, [ 2, "x2", "+15", 0 ], [ 0, 0, 0, "325" ], [ 1, 2, 1, 1 ], [ 2, "+15", "-10", 0 ], [ 1, 3, 2, 1 ], [ 2, "x2", "+25", 0 ], null, [ 1, 2, 1, 1 ], [ 2, "-10", "+15", 0 ], null, [ 0, 0, 0, "524" ], [ 2, "-10", "x2", 0 ], null ]
                },
                14: {
                    lv: 14,
                    path: [ "P000", "P001", "P001", "P001", "P001", "P001", "P001", "P001", "P001", "P001", "P004R", "P001R", "P003RB", "P999" ],
                    enemy: [ [ "012,0,65,65", "012,4,2,2" ], [ "012,0,45,45" ], [ "012,0,55,65", "012,4,6,6" ], [ "012,0,45,65" ], [ "012,0,40,65", "012,1,2,6" ], [ "012,0,40,65" ], [ "012,0,50,55", "012,2,4,4" ], [ "012,0,50,55" ], [ "012,0,45,45" ], [ "012,0,50,55", "012,4,3,5" ], [ "012,0,65,65" ], [ "012,0,70,75", "012,4,3,5" ], [ "012,0,55,55" ], null ],
                    prop: [ null, [ 0, 0, 0, "3" ], [ 2, "-3", "+10", 0 ], [ 1, 0, 1, 0 ], [ 2, "x1", "-5", 0 ], [ 1, 0, 1, 1 ], [ 2, "+10", "+15", 0 ], [ 2, "+4", "+5", 0 ], [ 0, 0, 0, "5" ], [ 1, 0, 1, 1 ], null, [ 2, "x2", "+15", 0 ], [ 1, 0, 1, 1 ], null ]
                },
                15: {
                    lv: 15,
                    path: [ "P000", "P001", "P003", "P003", "P003L", "P001L", "P001L", "P002LB", "P001", "P002R", "P001R", "P001R", "P002RB", "P999" ],
                    enemy: [ [ "0,0,58,68", "0,4,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "012,0,38,48", "0,4,2,4" ], [ "012,0,38,48", "01,1,4,6" ], [ "012,0,38,48", "012,3,2,6" ], [ "012,0,38,48", "0,4,4,6" ], [ "012,0,38,48", "0,4,2,6" ], [ "012,0,38,48", "0,1,3,6" ], [ "012,0,38,48", "0,2,1,6" ], [ "012,0,38,48" ], [ "012,0,58,58", "0,1,4,6" ], [ "012,0,68,68", "0,2,4,6" ], [ "012,0,68,78", "0,3,5,8" ] ],
                    prop: [ null, [ 2, "x2", "+10", 0 ], [ 1, 2, 1, 1 ], [ 2, "x2", "+25", 0 ], [ 0, 0, 0, "453" ], [ 1, 1, 1, 1 ], [ 2, "+10", "-20", 0 ], [ 0, 0, 0, "234" ], [ 2, "-15", "-3", 0 ], null, [ 1, 6, 3, 0 ], [ 0, 0, 0, "52" ], [ 2, "-12", "+15", 0 ], [ 1, 3, 3, 0 ] ]
                },
                16: {
                    lv: 16,
                    path: [ "P000", "P001", "P003", "P004L", "P001L", "P001L", "P003LB", "P003", "P003", "P003", "P004R", "P001R", "P001R", "P001R", "P003RB", "P999" ],
                    enemy: [ [ "0,0,58,68", "0,4,2,2" ], [ "0,0,48,48", "0,4,2,2" ], [ "01,0,48,48", "0,4,2,2" ], [ "01,0,48,48", "01,1,2,2" ], [ "012,0,38,48", "012,3,2,2" ], [ "012,0,38,48", "0,4,2,2" ], [ "012,0,38,48", "0,4,2,3" ], [ "012,0,38,48", "0,1,2,3" ], [ "012,0,48,48", "0,1,2,3" ], [ "012,0,48,48" ], [ "012,0,48,48", "0,4,2,5" ], [ "012,0,48,48", "0,4,2,5" ], [ "012,0,48,58", "0,1,3,5" ], [ "01,0,58,68", "0,2,2,4" ], [ "01,0,68,78", "0,1,5,5" ], [ "01,0,58,68", "0,4,2,2" ] ],
                    prop: [ null, [ 2, "x3", "+25", 0 ], [ 0, 0, 0, "325" ], [ 1, 2, 1, 1 ], [ 2, "-10", "x2", 0 ], [ 1, 3, 2, 1 ], [ 2, "+15", "-10", 0 ], null, [ 1, 2, 1, 1 ], [ 2, "x2", "+25", 0 ], [ 0, 0, 0, "524" ], [ 2, "-10", "+15", 0 ], [ 1, 3, 2, 1 ], null ]
                },
                17: {
                    lv: 17,
                    path: [ "P000", "P003", "P003", "P001", "P004L", "P001L", "P001L", "P001L", "P002LB", "P001", "P003L", "P001L", "P001L", "P004LB", "P999" ],
                    enemy: [ [ "0,0,58,68", "0,4,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "01,0,38,48", "01,1,2,2" ], null, [ "012,0,28,58", "012,3,2,2" ], [ "0,0,48,48", "0,2,2,2" ], [ "0,0,48,48", "0,4,5,5" ], [ "0,0,48,48", "0,2,4,4" ], [ "0,0,48,48", "0,1,5,5" ], [ "0,0,38,48" ], [ "0,0,48,48", "0,2,5,5" ], [ "0,0,58,68", "0,4,4,5" ], [ "0,0,58,58", "0,1,3,5" ], [ "0,0,58,58", "0,2,2,6" ], [ "0,0,68,68", "0,1,5,6" ], [ "0,0,50,50", "0,4,2,6" ] ],
                    prop: [ null, [ 2, "x2", "+40", 0 ], [ 1, 2, 1, 1 ], [ 0, 0, 0, "324" ], [ 2, "+25", "+30", 0 ], [ 1, 3, 2, 1 ], [ 2, "-5", "-15", 0 ], null, [ 1, 2, 1, 1 ], [ 2, "x2", "+25", 0 ], [ 0, 0, 0, "214" ], [ 2, "-10", "+15", 0 ], [ 1, 3, 1, 1 ], [ 2, "-15", "+15", 0 ] ]
                },
                18: {
                    lv: 18,
                    path: [ "P000", "P001", "P003", "P003", "P003L", "P001L", "P001L", "P002LB", "P001", "P002R", "P001R", "P001R", "P002RB", "P999" ],
                    enemy: [ [ "0,0,58,68", "0,4,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "01,0,38,48", "01,1,2,2" ], [ "012,0,38,48", "012,3,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "0,0,38,48", "0,4,2,2" ], [ "0,0,38,48", "0,1,2,2" ], [ "0,0,38,48", "0,1,2,2" ], [ "0,0,38,48" ], [ "0,0,58,58", "0,1,3,3" ], [ "0,0,68,68", "0,2,2,3" ], [ "0,0,68,78", "0,1,5,5" ] ],
                    prop: [ null, [ 2, "x3", "+32", 0 ], [ 1, 2, 1, 1 ], [ 2, "/2", "-10", 0 ], [ 0, 0, 0, "453" ], [ 1, 1, 1, 1 ], [ 2, "+14", "-20", 0 ], [ 0, 0, 0, "234" ], [ 2, "-17", "x3", 0 ], null, [ 1, 6, 3, 0 ], [ 0, 0, 0, "52" ], [ 2, "-11", "+15", 0 ], [ 1, 3, 3, 0 ] ]
                },
                19: {
                    lv: 19,
                    path: [ "P000", "P001", "P001", "P001", "P001", "P001", "P001", "P001", "P001", "P001", "P004R", "P001R", "P003RB", "P999" ],
                    enemy: [ [ "012,0,65,65", "012,4,2,2" ], [ "012,0,45,45" ], [ "012,0,55,65", "012,4,6,6" ], [ "012,0,45,65" ], [ "012,0,40,65", "012,1,2,6" ], [ "012,0,40,65" ], [ "012,0,50,55", "012,2,4,4" ], [ "012,0,50,55" ], [ "012,0,45,45" ], [ "012,0,50,55", "012,4,3,5" ], [ "012,0,65,65" ], [ "012,0,70,75", "012,4,3,5" ], [ "012,0,55,55" ], null ],
                    prop: [ null, [ 0, 0, 0, "3" ], [ 2, "-8", "+20", 0 ], [ 1, 0, 1, 0 ], [ 2, "x2", "+10", 0 ], [ 1, 0, 1, 1 ], [ 2, "+10", "+15", 0 ], [ 2, "+4", "+8", 0 ], [ 0, 0, 0, "5" ], [ 1, 0, 1, 1 ], null, [ 2, "x2", "+15", 0 ], [ 1, 0, 1, 1 ], null ]
                },
                20: {
                    lv: 20,
                    path: [ "P000", "P001", "P003", "P004L", "P001L", "P001L", "P003LB", "P003", "P003", "P003", "P004R", "P001R", "P001R", "P001R", "P003RB", "P999" ],
                    enemy: [ [ "0,0,58,68", "0,4,2,2" ], [ "0,0,48,48", "0,4,2,2" ], [ "01,0,48,48", "0,4,2,2" ], [ "01,0,48,48", "01,1,2,2" ], [ "012,0,48,48", "012,3,2,2" ], [ "012,0,48,48", "0,4,2,2" ], [ "012,0,48,48", "0,4,2,2" ], [ "012,0,38,48", "0,1,2,2" ], [ "012,0,48,48", "0,1,2,2" ], [ "012,0,48,48" ], [ "012,0,38,48", "0,4,2,2" ], [ "012,0,48,48", "0,4,2,2" ], [ "012,0,48,58", "0,1,3,3" ], [ "01,0,88,88", "0,2,2,3" ], [ "01,0,68,78", "0,1,5,5" ], [ "01,0,58,68", "0,4,2,2" ] ],
                    prop: [ null, [ 2, "x2", "+10", 0 ], [ 0, 0, 0, "325" ], [ 1, 2, 1, 1 ], [ 2, "+15", "-10", 0 ], [ 1, 3, 2, 1 ], [ 2, "x2", "+25", 0 ], null, [ 1, 2, 1, 1 ], [ 2, "-10", "+15", 0 ], null, [ 0, 0, 0, "524" ], [ 2, "-10", "x2", 0 ], null ]
                },
                21: {
                    lv: 5,
                    path: [ "P000", "P001", "P001", "P001", "P001", "P004L", "P001L", "P001L", "P004LB", "P001", "P001", "P999" ],
                    enemy: [ [ "012,0,65,75", "012,3,3,3" ], [ "012,0,55,55" ], [ "012,0,35,35", "012,3,4,4" ], [ "012,0,35,35" ], [ "012,0,30,35", "012,3,4,6" ], [ "012,0,30,35" ], [ "012,0,30,35", "012,3,4,4" ], [ "012,0,30,35" ], [ "012,0,55,65", "012,3,4,4" ], [ "012,0,50,55" ], [ "012,0,65,65", "012,1,4,4" ], [ "012,0,70,75" ], null ],
                    prop: [ null, [ 2, "+20", "x3", 0 ], [ 2, 0, "+6", 0 ], [ 1, 0, 1, 1 ], [ 0, 0, 0, "1" ], [ 2, "+10", "+5", 0 ], [ 1, 0, 1, 1 ], [ 2, "-5", "-15", 0 ], [ 1, 3, 1, 0 ], [ 2, "+20", "x2", 0 ], [ 1, 0, 0, "4" ], null ]
                },
                22: {
                    lv: 22,
                    path: [ "P000", "P001", "P001", "P001", "P001", "P001", "P004L", "P001L", "P001L", "P001L", "P004LB", "P001", "P001", "P999" ],
                    enemy: [ [ "012,0,75,75", "012,3,3,3" ], [ "012,0,65,65" ], [ "012,0,45,45", "012,3,4,4" ], [ "012,0,45,45" ], [ "012,0,40,45", "012,3,5,5" ], [ "012,0,50,55" ], [ "012,0,40,55", "012,3,4,4" ], [ "012,0,50,55" ], [ "012,0,45,45", "012,1,2,2" ], [ "012,0,60,65" ], [ "012,0,65,65", "012,1,4,4" ], [ "012,0,60,75", "012,1,4,4" ], [ "012,0,65,75", "012,1,5,5" ], [ "012,0,75,75", "012,1,2,2" ] ],
                    prop: [ null, [ 2, "x2", "+15", 0 ], [ 1, 0, 1, 1 ], [ 0, 0, 0, "12" ], [ 2, "+10", "x2", 0 ], [ 1, 0, 1, 1 ], null, [ 1, 0, 1, 0 ], [ 2, "+5", "+15", 0 ], [ 1, 3, 1, 0 ], [ 0, 0, 0, "234" ], null, [ 2, "+25", "+15", 0 ], [ 1, 5, 1, 0 ], null ]
                }
            }), e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/Loader.ts", [ "cc", "./GlobalData.ts", "./GlobalEnum.ts" ], function(t) {
    var e, n, i, o, s, a, r, l, u;
    return {
        setters: [ function(t) {
            e = t.cclegacy, n = t.ProgressBar, i = t.BlockInputEvents, o = t.clamp01, s = t.assetManager, 
            a = t.error, r = t.log;
        }, function(t) {
            l = t.default;
        }, function(t) {
            u = t.GlobalEnum;
        } ],
        execute: function() {
            e._RF.push({}, "96d0e7EbqhLra466gUH0CXn", "Loader", void 0);
            var c = t("default", function() {
                function t() {}
                return t.initLoaderUI = function() {
                    if (!this.isInitLoaderUI) {
                        var t = l.get(u.GlobalDataType.Canvas).getChildByName("LoaderUI");
                        this.loadUIData.ui = t, this.loadUIData.progressBar = t.getComponentInChildren(n), 
                        this.loadUIData.blockInput = t.getComponent(i), this.isInitLoaderUI = !0;
                    }
                }, t.showProgressBar = function(t) {
                    this.showMask(), this.loadUIData.ui && (this.loadUIData.ui.active = !0);
                }, t.updateProgress = function(t, e, n) {
                    var i = o(t / e);
                    this.loadUIData.progressBar && (this.loadUIData.progressBar.progress = o(i));
                }, t.hideProgressBar = function() {
                    this.loadUIData.ui && (this.loadUIData.ui.active = !1), this.hideMask();
                }, t.showMask = function() {
                    this.loadUIData.blockInput && (this.loadUIData.blockInput.enabled = !0);
                }, t.hideMask = function() {
                    this.loadUIData.blockInput && (this.loadUIData.blockInput.enabled = !1);
                }, t.loadBundle = function(t, e, n, i) {
                    void 0 === n && (n = !1), void 0 === i && (i = !1), this.initLoaderUI(), this.loadSubpackage(t, e, n, i);
                }, t.loadSubpackage = function(t, e, n, i) {
                    void 0 === n && (n = !1), void 0 === i && (i = !1);
                    var o = this.subpackageRecords[t];
                    switch (o || (o = new d(t, e, n), this.subpackageRecords[t] = o), o.state) {
                      case h.inited:
                        n && this.showSubpackageProgress(), i && this.subpackageSequence.length > 0 ? (this.subpackageSequence.splice(1, 0, t), 
                        o.enterSequence()) : (this.subpackageSequence.push(t), this.subpackageSequence.length > 1 ? o.enterSequence() : this._loadSubpackage(t));
                        break;

                      case h.waiting:
                        if (n && this.showSubpackageProgress(), o.pushCb(e, n), i && this.subpackageSequence.length > 0) {
                            var s = this.subpackageSequence.indexOf(t);
                            s > 1 && (this.subpackageSequence.splice(s, 1), this.subpackageSequence.splice(1, 0, t), 
                            o.enterSequence());
                        }
                        break;

                      case h.turnTo:
                        n && this.showSubpackageProgress(), o.pushCb(e, n), this._loadSubpackage(t);
                        break;

                      case h.loading:
                        n && this.showSubpackageProgress(), o.pushCb(e, n);
                        break;

                      case h.finished:
                        setTimeout(function() {
                            e && e();
                        }, 0);
                    }
                }, t._loadSubpackage = function(t) {
                    var e = this;
                    console.log("Loader: 开始加载子包：", t), this.subpackageRecords[t].loadStart(), s.loadBundle(t, function(n, i) {
                        if (n) return console.error("Loader: 子包加载出错：", t), void console.error(n);
                        console.log("Loader: 子包加载完成：", t);
                        var o = e.subpackageSequence.indexOf(t);
                        if (e.subpackageSequence.splice(o, 1), e.hideSubpackageProgress(), e.subpackageRecords[t].loadFinish(), 
                        e.subpackageSequence.length > 0) {
                            var s = e.subpackageSequence[0], a = e.subpackageRecords[s];
                            a && a.turnToLoad(), e.loadSubpackage(s, null, !!e.subpackageRecords[s].maskCount);
                        }
                    });
                }, t.showSubpackageProgress = function() {
                    null === this.subpackageProgressTimer && (this.showProgressBar(), this.subpackageProgress = 0, 
                    this.subpackageProgressTimer = setInterval(this.updateSubpackageProgress.bind(this), 100));
                }, t.updateSubpackageProgress = function() {
                    this.subpackageProgress += .03, this.subpackageProgress >= 1 && (this.subpackageProgress = 0);
                }, t.hideSubpackageProgress = function() {
                    if (null !== this.subpackageProgressTimer) {
                        for (var t = 0, e = this.subpackageSequence.length - 1; e >= 0; --e) t += this.subpackageRecords[this.subpackageSequence[e]].maskCount;
                        0 == t && (clearInterval(this.subpackageProgressTimer), this.subpackageProgressTimer = null, 
                        this.subpackageProgress = 0, this.hideProgressBar());
                    }
                }, t.loadBundleRes = function(t, e, n, i, o) {
                    var r = this, l = s.getBundle(t);
                    if (!l) return console.error("资源包 " + t + " 尚未加载，无法获取资源:", e), void n(null);
                    var u = null;
                    void 0 === i ? o = !0 : "boolean" == typeof i ? o = !!i : (u = i, void 0 === o && (o = !0)), 
                    o && this.showMask(), null !== u ? l.load(e, u, function(t, e) {
                        if (o && r.hideMask(), t) return a(t.message || t), void n(null);
                        n(e);
                    }) : l.load(e, function(t, e) {
                        if (o && r.hideMask(), t) return a(t.message || t), void n(null);
                        n(e);
                    });
                }, t.loadBundleArray = function(t, e, n, i, o) {
                    var r = this, l = s.getBundle(t);
                    if (!l) return console.error("资源包 " + t + " 尚未加载，无法获取资源数组:", e), void n(null);
                    var u = null;
                    void 0 === i ? o = !0 : "boolean" == typeof i ? o = !!i : (u = i, void 0 === o && (o = !0)), 
                    o && this.showProgressBar(), u ? l.load(e, u, this.updateProgress.bind(this), function(t, e) {
                        if (o && r.hideProgressBar(), t) return a(t.message || t), void n(null);
                        n(e);
                    }) : l.load(e, this.updateProgress.bind(this), function(t, e) {
                        if (o && r.hideProgressBar(), t) return a(t.message || t), void n(null);
                        n(e);
                    });
                }, t.loadBundleDir = function(t, e, n, i, o) {
                    var a = this, l = s.getBundle(t);
                    if (!l) return console.error("资源包 " + t + " 尚未加载，无法获取资源文件夹:", e), void n(null);
                    var u = null;
                    void 0 === i ? o = !0 : "boolean" == typeof i ? o = !!i : (u = i, void 0 === o && (o = !0)), 
                    o && this.showProgressBar(), u ? l.loadDir(e, u, this.updateProgress.bind(this), function(t, e) {
                        if (o && a.hideProgressBar(), t) return r(t), void n(null);
                        n(e);
                    }) : l.loadDir(e, this.updateProgress.bind(this), function(t, e) {
                        if (o && a.hideProgressBar(), t) return r(t), void n(null);
                        n(e);
                    });
                }, t.loadBundleScene = function(t, e, n, i) {
                    var o = this, a = s.getBundle(t);
                    if (!a) return console.error("资源包 " + t + " 尚未加载，无法加载场景:", e), void n(null);
                    void 0 === i && (i = !0), i && this.showProgressBar(), a.loadScene(e, this.updateProgress.bind(this), function(t, e) {
                        i && o.hideProgressBar(), t ? console.error(t) : n(e);
                    });
                }, t.preLoadBundleRes = function(t, e, n) {
                    var i = s.getBundle(t);
                    i && (void 0 === n ? i.preload(e) : i.preload(e, n));
                }, t.preLoadBundleArray = function(t, e, n) {
                    var i = s.getBundle(t);
                    i && (void 0 === n ? i.preload(e) : i.preload(e, n));
                }, t.preLoadBundleDir = function(t, e, n) {
                    var i = s.getBundle(t);
                    i && (void 0 === n ? i.preloadDir(e) : i.preloadDir(e, n));
                }, t.preLoadBundleScene = function(t, e) {
                    var n = s.getBundle(t);
                    n && n.preloadScene(e);
                }, t;
            }());
            c.dirAsset = {}, c.singleAsset = {}, c.isInitLoaderUI = !1, c.loadUIData = {
                ui: null,
                progressBar: null,
                blockInput: null
            }, c.subpackageRecords = {}, c.subpackageSequence = [], c.subpackageProgressTimer = null, 
            c.subpackageProgress = 0;
            var h, d = function() {
                function t(t, e, n) {
                    this.name = void 0, this.state = void 0, this.cbs = void 0, this.maskCount = void 0, 
                    this.name = t, this.state = h.inited, this.cbs = [], e && this.pushCb(e), this.maskCount = n ? 1 : 0;
                }
                var e = t.prototype;
                return e.pushCb = function(t, e) {
                    t && this.cbs.push(t), e && this.maskCount++;
                }, e.enterSequence = function() {
                    this.state = h.waiting;
                }, e.loadStart = function() {
                    this.state = h.loading;
                }, e.loadFinish = function() {
                    for (;this.cbs.length > 0; ) {
                        var t = this.cbs.shift();
                        t && t();
                    }
                    this.state = h.finished, this.maskCount = 0;
                }, e.turnToLoad = function() {
                    this.state = h.turnTo;
                }, t;
            }();
            !function(t) {
                t[t.inited = 1] = "inited", t[t.waiting = 2] = "waiting", t[t.loading = 3] = "loading", 
                t[t.finished = 4] = "finished", t[t.turnTo = 5] = "turnTo";
            }(h || (h = {})), e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/main", [ "./BasicComponet.ts", "./BasicSystem.ts", "./BasicUI.ts", "./GlobalClass.ts", "./GlobalConfig.ts", "./GlobalData.ts", "./GlobalEnum.ts", "./GlobalTmpData.ts", "./LevelConfig.ts", "./GameDirector.ts", "./Init.ts", "./InitProgressBar.ts", "./InitUI.ts", "./Smook2dCmp.ts", "./TipUI.ts", "./AdvertManager.ts", "./AdvertUIConfig.ts", "./EventManager.ts", "./EventTypes.ts", "./AdvertSystem.ts", "./AudioEnum.ts", "./AudioSystem.ts", "./OPPOSDK.ts", "./SDK.ts", "./SDKSystem.ts", "./TTSDK.ts", "./VIVOSDK.ts", "./WXSDK.ts", "./StorageSystem.ts", "./StorageTemp.ts", "./UIEnum.ts", "./UISystem.ts", "./ColorLog.ts", "./CustomCollision.ts", "./GlobalPool.ts", "./Loader.ts", "./ReplaceChildrenMat.ts", "./ReplaceChildrenName.ts", "./Tools.ts", "./UIAnimations.ts" ], function() {
    return {
        setters: [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
        execute: function() {}
    };
}), System.register("chunks:///_virtual/OPPOSDK.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./SDK.ts" ], function(t) {
    var e, n, i;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy;
        }, function(t) {
            i = t.default;
        } ],
        execute: function() {
            n._RF.push({}, "35755PVkvlBcYX1+5JV+oM1", "OPPOSDK", void 0), t("OPPOSDK", function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                e(n, t);
                var i = n.prototype;
                return i.onEvents = function() {
                    t.prototype.onEvents.call(this);
                }, i.setAdCfg = function() {
                    this.adConfig.adBannerIdList = [ "595496" ], this.adConfig.adVideoIdList = [ "595498" ], 
                    this.adConfig.adInterstitialId = "", this.adConfig.adCustomIdList = [ "595543" ];
                }, i.showBanner = function() {
                    console.log("showBanner"), uniSdk.showCustomAd(0, function(t) {
                        console.warn("#showCustomAd: " + t), t || uniSdk.showBanner();
                    });
                }, i.onExitApp = function() {
                    console.log("退出游戏"), window.qg && window.qg.exitApplication({});
                }, n;
            }(i)), n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/ReplaceChildrenMat.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    var e, n, i, o, s, a, r, l, u;
    return {
        setters: [ function(t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, 
            o = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, a = t._decorator, r = t.Material, l = t.MeshRenderer, u = t.Component;
        } ],
        execute: function() {
            var c, h, d, f, p, m;
            s._RF.push({}, "bda086TFuBFvLgUhluu8B1C", "ReplaceChildrenMat", void 0);
            var v = a.ccclass, g = a.property, y = a.executeInEditMode;
            t("ReplaceChildrenMat", (c = v("ReplaceChildrenMat"), h = g(r), c(d = y((p = e((f = function(t) {
                function e() {
                    for (var e, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, i(e, "mats", p, o(e)), i(e, "useReplace", m, o(e)), 
                    e;
                }
                return n(e, t), e.prototype.onEnable = function() {
                    var t = this;
                    this.useReplace && this.node.children.forEach(function(e) {
                        e.getComponent(l).sharedMaterials = t.mats;
                    });
                }, e;
            }(u)).prototype, "mats", [ h ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), m = e(f.prototype, "useReplace", [ g ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), d = f)) || d) || d)), s._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/ReplaceChildrenName.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc" ], function(exports) {
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component;
    return {
        setters: [ function(t) {
            _applyDecoratedDescriptor = t.applyDecoratedDescriptor, _inheritsLoose = t.inheritsLoose, 
            _initializerDefineProperty = t.initializerDefineProperty, _assertThisInitialized = t.assertThisInitialized;
        }, function(t) {
            cclegacy = t.cclegacy, _decorator = t._decorator, Component = t.Component;
        } ],
        execute: function execute() {
            var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3;
            cclegacy._RF.push({}, "68ca2UzesxNP7tIN/A9N9Gk", "ReplaceChildrenName", void 0);
            var ccclass = _decorator.ccclass, property = _decorator.property, executeInEditMode = _decorator.executeInEditMode, ReplaceChildrenName = exports("ReplaceChildrenName", (_dec = ccclass("ReplaceChildrenName"), 
            _dec(_class = executeInEditMode((_class2 = function(_Component) {
                function ReplaceChildrenName() {
                    for (var t, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    return t = _Component.call.apply(_Component, [ this ].concat(n)) || this, _initializerDefineProperty(t, "fromArr", _descriptor, _assertThisInitialized(t)), 
                    _initializerDefineProperty(t, "toArr", _descriptor2, _assertThisInitialized(t)), 
                    _initializerDefineProperty(t, "useReplace", _descriptor3, _assertThisInitialized(t)), 
                    t;
                }
                _inheritsLoose(ReplaceChildrenName, _Component);
                var _proto = ReplaceChildrenName.prototype;
                return _proto.onEnable = function onEnable() {
                    var _this2 = this;
                    this.useReplace && this.node.children.forEach(function(e) {
                        for (var name = e.name, i = 0; i < _this2.fromArr.length; i++) {
                            var f = _this2.fromArr[i], t = _this2.toArr[i], str = "/([" + f + "])/g";
                            name = name.replace(eval(str), t), e.name = name;
                        }
                    });
                }, ReplaceChildrenName;
            }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "fromArr", [ property ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [ "-", "1", "2", "3", "4", "5", "6", "7", "8" ];
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toArr", [ property ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [ "_", "A", "B", "C", "D", "E", "F", "G", "H" ];
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useReplace", [ property ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), _class = _class2)) || _class) || _class));
            cclegacy._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/SDK.ts", [ "cc", "./EventManager.ts", "./EventTypes.ts", "./AudioSystem.ts" ], function(t) {
    var e, n, i, o;
    return {
        setters: [ function(t) {
            e = t.cclegacy;
        }, function(t) {
            n = t.default;
        }, function(t) {
            i = t.EventTypes;
        }, function(t) {
            o = t.AudioSystem;
        } ],
        execute: function() {
            e._RF.push({}, "dd49cmiX7BHPbTKw6vYfi17", "SDK", void 0), t("default", function() {
                function t() {
                    this.api = null, this.adConfig = null;
                }
                var e = t.prototype;
                return e.init = function(t, e) {
                    this.onEvents(), this.adConfig = new uniSdk.AdConfig(), this.setAdCfg(), this.initSdk(t, e);
                }, e.onEvents = function() {
                    n.on(i.SDKEvents.ShowBanner, this.showBanner, this), n.on(i.SDKEvents.HideBanner, this.hideBanner, this), 
                    n.on(i.SDKEvents.ShowVideo, this.showRewardedVideo, this), n.on(i.SDKEvents.ShowInsertAd, this.showInterstitial, this), 
                    n.on(i.SDKEvents.ShowCustomAd, this.showCustomAd, this), n.on(i.SDKEvents.HideCustomAd, this.hideCustomAd, this), 
                    n.on(i.SDKEvents.Share, this.share, this), n.on(i.SDKEvents.ExitApp, this.onExitApp, this), 
                    n.on(i.SDKEvents.ReportAldEvent, this.reportAldEvent, this), n.on(i.SDKEvents.ReportAldStageStart, this.reportAldStageStart, this), 
                    n.on(i.SDKEvents.ReportAldStageWin, this.reportAldStageEnd, this), n.on(i.SDKEvents.ReportAldStageFail, this.reportAldStageFail, this), 
                    n.on(i.SDKEvents.ReportAldStageAward, this.reportAldStageAward, this), n.on(i.SDKEvents.ReportAldStageTools, this.reportAldStageTools, this), 
                    n.on(i.SDKEvents.ReportEvent, this.reportEvent, this);
                }, e.setAdCfg = function() {
                    this.adConfig.app_key = "dqxekvujtxxrtoub", this.adConfig.adBannerIdList = [ "adunit-e29df638c636869a", "adunit-5471e710c78c639b", "adunit-a4d4fbc1357dfa4e" ], 
                    this.adConfig.adVideoIdList = [ "adunit-1344099b40bbe089" ], this.adConfig.adInterstitialId = "adunit-a3cc34c12c4d8f85", 
                    this.adConfig.adCustomIdList = [ "adunit-6b13bdce9b8c6ef9" ], this.adConfig.shareInfoArr = [ {
                        title: "一起来玩吧!",
                        img: ""
                    } ], this.adConfig.isExportWxGameAd = !0;
                }, e.initSdk = function(t, e) {
                    uniSdk.init(this.adConfig, function(n) {
                        n && n.uid ? (console.log("初始化SDK 完成!", n), console.log("用户微信ID:" + n.openid), console.log("用户UID:" + n.uid), 
                        console.log("用户昵称:" + n.nickName), console.log("用户头像:" + n.avatarUrl), console.log("用户当前游戏关卡:" + n.gameLevel), 
                        console.log("用户当前金币:" + n.money)) : console.warn("SDK未能完全初始化用户信息, 可能的原因是: app_key 填写错误或缺少相应的渠道, 请到 https://zerosgame.com/admin 验证渠道与APPKEY信息是否有误"), 
                        t && t.call(e);
                    }, this);
                }, e.showMessage = function(t) {
                    n.emit(i.GameEvents.ShowTips, t);
                }, e.reportWXAldOpenId = function(t) {}, e.reportAldEvent = function(t) {}, e.reportAldStageStart = function(t, e) {
                    uniSdk.Global.reportAldStageStart(t, e);
                }, e.reportAldStageEnd = function(t, e) {
                    uniSdk.Global.reportAldStageEnd(t, e);
                }, e.reportAldStageFail = function(t, e) {
                    uniSdk.Global.reportAldStageFail(t, e);
                }, e.reportAldStageAward = function(t) {}, e.reportAldStageTools = function(t) {}, 
                e.reportEvent = function(t) {}, e.showBanner = function() {
                    console.log("showBanner"), uniSdk.showBanner();
                }, e.hideBanner = function() {
                    console.log("hideBanner"), uniSdk.hideBanner();
                }, e.showRewardedVideo = function(t) {
                    var e = null, s = null, a = null;
                    "object" == _typeof2(t) ? (e = t.success, s = t.fail, a = t.cancel) : e = t, n.emit(i.GameEvents.GamePause), 
                    o.pauseBGM(), console.warn("观看视频中"), uniSdk.showRewardedVideo(0, function(t) {
                        1 == t ? (console.log("激励视频已观看完毕 "), e && e(), n.emit(i.GameEvents.GameResume), 
                        o.resumeBGM()) : 0 == t ? (console.log("激励视频未观看完毕 "), a && a(), n.emit(i.GameEvents.GameResume), 
                        o.resumeBGM()) : (console.log("激励视频加载失败 "), s && s(), n.emit(i.GameEvents.GameResume), 
                        o.resumeBGM());
                    }, this);
                }, e.showInterstitial = function(t, e) {
                    console.log("showInterstitial-SDK"), uniSdk.showInterstitial(function(e) {
                        e ? console.log("插屏广告显示成功") : (console.log("插屏广告显示失败， 这里处理失败的逻辑"), uniSdk.showCustomAd(0)), 
                        t && t(e);
                    }, function() {
                        console.log("插屏广告被用户关闭， 这里处理广告关闭后的逻辑"), e && e();
                    }, this);
                }, e.showCustomAd = function(t) {
                    console.log("SDK-showCustomAd"), uniSdk.showCustomAd(t, function(t) {
                        t ? console.log("原生模板广告显示成功") : (console.log("原生模板广告显示失败 "), uniSdk.showInterstitial());
                    }, function() {
                        console.log("原生模板广告被用户关闭 ");
                    }, this);
                }, e.hideCustomAd = function(t) {
                    console.log("hideCustomAd"), uniSdk.hideCustomAd(t);
                }, e.share = function() {
                    console.log("share"), uniSdk.share();
                }, e.onExitApp = function() {}, t;
            }()), uniSdk.getCustomAdStyle = function(t) {
                var e = uniSdk.getSystemInfo();
                console.log("sysinfo:", e.windowHeight, e.windowWidth);
                var n = null;
                if (uniSdk.Global.isWxgame) {
                    var i = 320, o = 400, s = 0, a = 0;
                    switch (t) {
                      case 0:
                        i = 320, o = 400, s = .5 * (e.windowHeight - o) - 30, a = .5 * (e.windowWidth - i);
                        break;

                      case 1:
                        i = 110, o = 110, s = .5 * (e.windowHeight - o) - 50, a = 10;
                        break;

                      case 2:
                        i = 110, o = 110, s = .5 * (e.windowHeight - o) - 50, a = e.windowWidth - .5 * i - 10;
                        break;

                      case 3:
                        i = 320, o = 110, s = .5 * (e.windowHeight - o) + 300, a = .5 * (e.windowWidth - i);
                        break;

                      case 4:
                        i = 110, o = 110, s = .5 * (e.windowHeight - o) - 20, a = e.windowWidth - .5 * i - 10;
                        break;

                      case 5:
                        i = 110, o = 110, s = 55, a = e.windowWidth - .5 * i - 10;
                        break;

                      case 6:
                        i = 320, o = 400, s = .5 * (e.windowHeight - o) - 30, a = .5 * (e.windowWidth - i);
                    }
                    n = {
                        top: s,
                        left: a,
                        fixed: !1,
                        width: i
                    };
                }
                return n;
            }, e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/SDKSystem.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./BasicSystem.ts", "./ColorLog.ts", "./OPPOSDK.ts", "./SDK.ts", "./TTSDK.ts", "./VIVOSDK.ts", "./WXSDK.ts" ], function(t) {
    var e, n, i, o, s, a, r, l, u;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy;
        }, function(t) {
            i = t.BasicSystem;
        }, function(t) {
            o = t.clog;
        }, function(t) {
            s = t.OPPOSDK;
        }, function(t) {
            a = t.default;
        }, function(t) {
            r = t.TTSDK;
        }, function(t) {
            l = t.VIVOSDK;
        }, function(t) {
            u = t.WXSDK;
        } ],
        execute: function() {
            var c;
            t("PlatformType", void 0), n._RF.push({}, "4d39fbD9ehK4L7aAfdoDok4", "SDKSystem", void 0), 
            function(t) {
                t[t.PCMiniGame = 0] = "PCMiniGame", t[t.WXMiniGame = 1] = "WXMiniGame", t[t.OPPOMiniGame = 2] = "OPPOMiniGame", 
                t[t.VIVOMiniGame = 3] = "VIVOMiniGame", t[t.TTMiniGame = 4] = "TTMiniGame", t[t.QQMiniGame = 5] = "QQMiniGame", 
                t[t.MEIZUMiniGame = 6] = "MEIZUMiniGame", t[t.HUAWEIMiniGame = 7] = "HUAWEIMiniGame", 
                t[t.Gamebox4399 = 8] = "Gamebox4399", t[t.Android = 9] = "Android";
            }(c || (c = t("PlatformType", {})));
            var h = t("SDKSystem", function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                return e(n, t), n.init = function(t) {
                    this.isInit || (this.isInit = !0, this.checkPlatform(), this.checkSystem(), o.warn("当前平台:" + c[this._curPlatform]));
                }, n.checkPlatform = function() {
                    var t = window.navigator.userAgent;
                    if (console.log("initPlatforms--" + JSON.stringify(t)), !this._curSDK) {
                        if (void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("oppo") > -1) return this._curPlatform = c.OPPOMiniGame, 
                        void this.instanceSDK(new s());
                        if (void 0 !== window.qg && window.qg.getProvider().toLowerCase().indexOf("vivo") > -1) return this._curPlatform = c.VIVOMiniGame, 
                        void this.instanceSDK(new l());
                        if (void 0 === window.qq) {
                            if (void 0 !== window.tt) return this._curPlatform = c.TTMiniGame, void this.instanceSDK(new r());
                            if (!(void 0 !== window.mz && window.mz.getProvider().toLowerCase().indexOf("meizu") > -1)) return void 0 !== window.wx ? (this._curPlatform = c.WXMiniGame, 
                            void this.instanceSDK(new u())) : void (void 0 === window.hbs ? void 0 === window.gamebox ? void 0 === window.jsb && void 0 === window.conch && null == window.DBApp ? this.instanceSDK(new a()) : this._curPlatform = c.Android : this._curPlatform = c.Gamebox4399 : this._curPlatform = c.HUAWEIMiniGame);
                            this._curPlatform = c.MEIZUMiniGame;
                        } else this._curPlatform = c.QQMiniGame;
                    }
                }, n.checkSystem = function() {
                    var t = uniSdk.BrowersUtils.isAndroid();
                    console.log("isAndroid", t);
                }, n.instanceSDK = function(t) {
                    this._curSDK = t, this._curSDK.init(function() {
                        n.isInitFinished = !0;
                    });
                    var e = setTimeout(function() {
                        clearTimeout(e), n.isInitFinished = !0;
                    }, 1e4);
                }, n;
            }(i));
            h._curPlatform = c.PCMiniGame, h._curSDK = null, n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/Smook2dCmp.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./GlobalPool.ts", "./Tools.ts" ], function(t) {
    var e, n, i, o, s, a, r, l, u, c, h, d, f, p;
    return {
        setters: [ function(t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, 
            o = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, a = t._decorator, r = t.Prefab, l = t.tween, u = t.instantiate, 
            c = t.Component, h = t.v3, d = t.UIOpacity;
        }, function(t) {
            f = t.default;
        }, function(t) {
            p = t.default;
        } ],
        execute: function() {
            var m, v, g, y, S;
            s._RF.push({}, "13ab6h46cNP0Z1l/Umn9NRF", "Smook2dCmp", void 0);
            var P = a.ccclass, b = a.property, _ = (t("Smook2dCmp", (m = P("Smook2dCmp"), v = b(r), 
            m((S = e((y = function(t) {
                function e() {
                    for (var e, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                    return (e = t.call.apply(t, [ this ].concat(s)) || this)._smookeRecs = {}, i(e, "smoke", S, o(e)), 
                    e._cd = .4, e._curt = 0, e;
                }
                n(e, t);
                var s = e.prototype;
                return s.onLoad = function() {}, s.update = function(t) {
                    for (var e in this._curt += t, this._curt >= this._cd && (this._curt = 0, this.createSmook()), 
                    this._smookeRecs) {
                        var n = this._smookeRecs[e];
                        n.isFinish ? (n.reset(), delete this._smookeRecs[e]) : n.update(t);
                    }
                }, s.createSmook = function() {
                    var t = u(this.smoke);
                    t.parent = this.node, t.setPosition(0, 0, 0);
                    var e = new _(t);
                    this._smookeRecs[t.uuid] = e;
                }, e;
            }(c)).prototype, "smoke", [ v ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), g = y)) || g)), t("SmokeItem", function() {
                function t(t) {
                    this.node = void 0, this.opacity = void 0, this.p = h(), this.s = h(), this.o = {
                        a: 0
                    }, this.isFinish = !1, this._delay = 2, this._enterOt = .05, this._hideOt = .1, 
                    this._curt = 0, this.tmpP = h(), this.node = t, this.opacity = t.getComponent(d), 
                    this.node.setPosition(0, 0, 0), this.p.set(0, 0, 0), this.s.set(.2, .2, .2), this.node.setScale(this.s), 
                    this.o.a = 0, this.opacity.opacity = this.o.a, this._curt = 0, this._enterOt = .1 * this._delay, 
                    this._hideOt = .2 * this._delay, this.showAnim();
                }
                var e = t.prototype;
                return e.showAnim = function() {
                    var t = this, e = 20 * Math.random() - 50;
                    l(this.p).to(this._delay, {
                        x: e,
                        y: 100
                    }).call(function() {
                        t.isFinish = !0;
                    }).start(), l(this.s).to(this._delay, {
                        x: 1,
                        y: 1
                    }, {
                        easing: "sineOut"
                    }).start(), l(this.o).to(this._enterOt, {
                        a: 255
                    }).delay(this._delay - this._enterOt - this._hideOt).to(this._hideOt, {
                        a: 0
                    }).start();
                }, e.update = function(t) {
                    this.isFinish || (this.tmpP.set(this.node.parent.worldPosition).add(this.p), this.node.setWorldPosition(this.tmpP), 
                    this.node.setScale(this.s), this.opacity.opacity = this.o.a);
                }, e.reset = function() {
                    f.put(this.node), p.clearObj(this);
                }, t;
            }()));
            s._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/StorageSystem.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./BasicSystem.ts", "./LevelConfig.ts", "./EventManager.ts", "./EventTypes.ts", "./ColorLog.ts", "./Loader.ts", "./StorageTemp.ts" ], function(t) {
    var e, n, i, o, s, a, r, l, u, c, h, d;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy, i = t.sys, o = t.JsonAsset;
        }, function(t) {
            s = t.BasicSystem;
        }, function(t) {
            a = t.LevelConfig, r = t.GetRandomLvData;
        }, function(t) {
            l = t.default;
        }, function(t) {
            u = t.EventTypes;
        }, function(t) {
            c = t.clog;
        }, function(t) {
            h = t.default;
        }, function(t) {
            d = t.StorageTemp;
        } ],
        execute: function() {
            n._RF.push({}, "8490fpHgjdDQK6IPlLrhKQh", "StorageSystem", void 0);
            var f = t("StorageSystem", function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                return e(n, t), n.init = function(t) {
                    if (!this.isInit) {
                        this.isInit = !0;
                        var e = new d(), n = i.localStorage.getItem(this._storageName);
                        if (n) {
                            var o = JSON.parse(n);
                            o ? (this.copyObject(o, e), this._data = o) : this._data = e;
                        } else this._data = e;
                        this.saveData(), this.loadLevelData();
                    }
                }, n.getData = function() {
                    return this._data;
                }, n.getJsonData = function(t) {
                    return this._allJsonData[t];
                }, n.setData = function(t, e) {
                    void 0 === e && (e = !1), t(this._data), e && this.saveData();
                }, n.updateToAssets = function(t, e) {
                    void 0 === t && (t = !1), void 0 === e && (e = !0), l.emit(u.GameEvents.UserAssetsChanged, t, e);
                }, n.saveData = function() {
                    i.localStorage.setItem(this._storageName, JSON.stringify(this._data));
                }, n.addLv = function() {
                    this._data.levelAssets.curLv++, this.saveData();
                }, n.getLvData = function(t) {
                    var e;
                    return void 0 === t && (t = this._data.levelAssets.curLv), e = t > Object.keys(a).length ? r(t) : a[t], 
                    c.warn("当前关卡 :" + t), e;
                }, n.getMaxLvCount = function() {
                    return Object.keys(this._levelData).length;
                }, n.loadLevelData = function() {
                    var t = this;
                    h.loadBundle(this.levelDataBound, function() {
                        h.loadBundleDir(t.levelDataBound, "/", function(e) {
                            e.forEach(function(e) {
                                t._allJsonData[e.name] = e.json;
                            }), t._levelData = t._allJsonData[t.levelDataJson], t.isInitFinished = !0;
                        }, o, !1);
                    });
                }, n.copyObject = function(t, e) {
                    for (var n in e) switch (_typeof2(e[n])) {
                      case "number":
                      case "boolean":
                      case "string":
                        t[n] = void 0 !== t[n] ? t[n] : e[n];
                        break;

                      case "object":
                        Array.isArray(e[n]) ? null == t[n] && (t[n] = [].concat(e[n])) : (null == t[n] && (t[n] = {}), 
                        this.copyObject(t[n], e[n]));
                    }
                }, n;
            }(s));
            f._storageName = "RoadCreator01", f._data = void 0, f.levelDataBound = "LevelData", 
            f.levelDataJson = "LevelData", f._levelData = {}, f._allJsonData = {}, n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/StorageTemp.ts", [ "cc" ], function(t) {
    var e, n;
    return {
        setters: [ function(t) {
            e = t.cclegacy, n = t.v3;
        } ],
        execute: function() {
            e._RF.push({}, "3ca5bVbUgZO/aJ20hRj1ZLi", "StorageTemp", void 0), t("StorageTemp", function() {
                this.userSetting = void 0, this.userAssets = void 0, this.levelAssets = void 0, 
                this.userSetting = new i(), this.userAssets = new s(), this.levelAssets = new o();
            });
            var i = t("UserSetting", function() {
                this.AudioSwith = !0, this.ShakeSwith = !0, this.showPrivacy = !0;
            }), o = t("LevelAssets", function() {
                this.curLv = 1, this.maxLv = 1, this.data = new a(), this.randLvArr = [];
            }), s = t("UserAsstes", function() {
                this.asset = 5, this.skin = {
                    choose: 0,
                    unlock: [ 0 ]
                }, this.turntableNum = 1, this.signData = {
                    lastTime: 0,
                    count: -1
                }, this.isDoubleSign = !1, this.props = {
                    RoleNumLv: 1,
                    GoldRateLv: 1,
                    GiantLv: 1
                }, this.unlockGoods = [ 0 ], this.displayGoods = [ 0 ], this.chooseWeapon = 0, this.lastRecoverTime = Date.now(), 
                this.tipNum = 1, this.unlockLvRec = {
                    curId: 1,
                    curLv: 0
                }, this.shareResuergenceNum = 0;
            }), a = t("LevelDataTmp", function() {
                this.lv = 1, this.path = [], this.enemy = [], this.prop = [];
            });
            t("LvModelData", function() {
                this.lv = 1, this.sceneType = "SceneCity", this.models = {}, this.camera = {
                    p: n(5.5, 12, 4),
                    r: n(-60, 60, 0),
                    height: 3
                };
            }), e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/TipUI.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./EventTypes.ts" ], function(t) {
    var e, n, i, o, s, a, r, l, u, c, h;
    return {
        setters: [ function(t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, 
            o = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, a = t._decorator, r = t.Node, l = t.Label, u = t.Component;
        }, function(t) {
            c = t.default;
        }, function(t) {
            h = t.EventTypes;
        } ],
        execute: function() {
            var d, f, p, m, v;
            s._RF.push({}, "03e12tAEkBD77pu9ei0mpN/", "TipUI", void 0);
            var g = a.ccclass, y = a.property;
            t("TipUI", (d = g("TipUI"), f = y(r), d((v = e((m = function(t) {
                function e() {
                    for (var e, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, i(e, "tipNode", v, o(e)), 
                    e.tipLabel = null, e._cd = 2, e._cut = 0, e;
                }
                n(e, t);
                var s = e.prototype;
                return s.onLoad = function() {
                    this.tipLabel = this.tipNode.getComponentInChildren(l), this.tipLabel.string = "", 
                    this.tipNode.active = !1, c.on(h.GameEvents.ShowTips, this.onShowTips, this);
                }, s.onShowTips = function(t) {
                    this.tipLabel.string = t, this.tipNode.active = !1, this.tipNode.active = !0, this._cut = 0;
                }, s.update = function(t) {
                    this.tipNode.active && (this._cut += t, this._cut >= this._cd && (this._cut = 0, 
                    this.tipNode.active = !1));
                }, e;
            }(u)).prototype, "tipNode", [ f ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), p = m)) || p)), s._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/Tools.ts", [ "cc" ], function(t) {
    var e, n, i, o, s, a, r, l;
    return {
        setters: [ function(t) {
            e = t.cclegacy, n = t.v2, i = t.v4, o = t.v3, s = t.Sprite, a = t.UITransform, r = t.size, 
            l = t.Intersection2D;
        } ],
        execute: function() {
            e._RF.push({}, "6bc101NlghLeogD/eBUWk1B", "Tools", void 0);
            var u = t("default", function() {
                function t() {}
                return t.roundNum = function(t, e) {
                    var n = t.toFixed(e);
                    return e > 0 ? parseFloat(n) : parseInt(n);
                }, t.roundVec = function(t, e) {
                    var s = t;
                    return null != s.w ? i(this.roundNum(s.x, e), this.roundNum(s.y, e), this.roundNum(s.z, e), this.roundNum(s.w, e)) : null != s.z ? o(this.roundNum(s.x, e), this.roundNum(s.y, e), this.roundNum(s.z, e)) : n(this.roundNum(s.x, e), this.roundNum(s.y, e));
                }, t.getMinAngle = function(t) {
                    var e = t >= 0 ? 1 : -1, n = Math.abs(t) % 360, i = 360 - n;
                    return n > i ? i * e : n * e;
                }, t.convertToString = function(t) {
                    return t < 1100 ? t.toString() : t < 1e6 ? (.001 * t).toFixed(1) + "K" : (1e-6 * t).toFixed(1) + "M";
                }, t.getMinByScend = function(t, e) {
                    if (!t || t < 0) return {
                        min: "00",
                        scend: "00"
                    };
                    var n = 0, i = t = Math.ceil(t);
                    i >= 60 && (n = Math.floor(i / 60), i %= 60);
                    var o = n >= 10 ? "" + n : "0" + n, s = i >= 10 ? "" + i : "0" + i;
                    return e && (e.min = o, e.scend = s), e;
                }, t.getMinByScend2 = function(t) {
                    if (!t || t < 0) return {
                        min: "0",
                        scend: "0"
                    };
                    var e = 0, n = t = Math.ceil(t);
                    return n >= 60 && (e = Math.floor(n / 60), n %= 60), {
                        min: "" + e,
                        scend: "" + n
                    };
                }, t.getTimeByScend = function(t) {
                    if (!t || t < 0) return {
                        hour: "00",
                        min: "00",
                        scend: "00"
                    };
                    var e, n, i = t = Math.ceil(t);
                    return {
                        hour: (e = Math.floor(t / 3600)) >= 10 ? "" + e : "0" + e,
                        min: (n = Math.floor(t / 60) - 60 * e) >= 10 ? "" + n : "0" + n,
                        scend: (i = t - 3600 * e - 60 * n) >= 10 ? "" + i : "0" + i
                    };
                }, t.scaleSize = function(t, e, n) {
                    if (void 0 === n && (n = !1), !n && t.width <= e && t.height <= e) return t;
                    var i = 1;
                    return t.width > t.height ? (i = e / t.width, t.height = i * t.height, t.width = e) : (i = e / t.height, 
                    t.width = i * t.width, t.height = e), t;
                }, t.scaleSprite = function(e, n) {
                    e.sizeMode = s.SizeMode.TRIMMED;
                    var i = e.node.getComponent(a), o = r(i.contentSize);
                    t.scaleSize(o, n, !0), i.setContentSize(o);
                }, t.scaleSpriteByHeight = function(t, e) {
                    t.sizeMode = s.SizeMode.TRIMMED;
                    var n, i = t.node.getComponent(a), o = r(i.contentSize);
                    n = e / o.height, o.width = n * o.width, o.height = e, i.setContentSize(o);
                }, t.scaleSpriteByWidth = function(t, e) {
                    t.sizeMode = s.SizeMode.TRIMMED;
                    var n, i = t.node.getComponent(a), o = r(i.contentSize);
                    n = e / o.width, o.height = n * o.height, o.width = e, i.setContentSize(o);
                }, t.createBezierPoints = function(t, e) {
                    for (var n = [], i = 0; i < e; i++) {
                        var o = this.multiPointBezier(t, i / e);
                        n.push(o);
                    }
                    return n;
                }, t.multiPointBezier = function(t, e) {
                    for (var n = t.length, i = 0, o = 0, s = function(t, e) {
                        for (var n = 1, i = 1; e > 0; ) n *= t, i *= e, t--, e--;
                        return n / i;
                    }, a = 0; a < n; a++) {
                        var r = t[a];
                        i += r.x * Math.pow(1 - e, n - 1 - a) * Math.pow(e, a) * s(n - 1, a), o += r.y * Math.pow(1 - e, n - 1 - a) * Math.pow(e, a) * s(n - 1, a);
                    }
                    return {
                        x: i,
                        y: o
                    };
                }, t.getShadowPath = function(t, e, i, s) {
                    void 0 === s && (s = n(0, -10));
                    for (var a = [], r = 0; r < i; r++) {
                        var l = .04 * r, u = e.x + t.x * l, c = e.z + t.z * l, h = e.y + t.y * l + .5 * s.y * l * l;
                        a.push(o(u, h, c));
                    }
                    return a;
                }, t.getRandomNum = function(t, e) {
                    if (t == e) return 1;
                    var n = e;
                    do {
                        n = Math.floor(Math.random() * t) + 1;
                    } while (n == e);
                    return n;
                }, t.getNumArr = function(t, e) {
                    for (var n = [], i = t; i <= e; i++) n.push(i);
                    return n;
                }, t.getRandomNumFromArr = function(t, e) {
                    var n = [].concat(t), i = [];
                    if ((e = e || 1) >= t.length) return t;
                    for (var o = 0; o < e; o++) {
                        var s = Math.floor(Math.random() * n.length), a = n[s];
                        n.splice(s, 1), i.push(a);
                    }
                    return i;
                }, t.removeArr2FroArr1 = function(t, e) {
                    for (var n = [].concat(t), i = n.length - 1; i >= 0; i--) {
                        var o = n[i];
                        e.indexOf(o) >= 0 && n.splice(i, 1);
                    }
                    return n;
                }, t.getRandomFromArr = function(t) {
                    return t.length <= 0 ? null : t[Math.floor(Math.random() * t.length)];
                }, t.randomArr = function(t) {
                    for (var e = t.length, n = 0; n < e - 1; n++) {
                        var i = Math.floor(Math.random() * e), o = t[i];
                        t[i] = t[e - n - 1], t[e - n - 1] = o;
                    }
                    return t;
                }, t.getRandomIDStr = function() {
                    var t = "asdadjaskdalkdqownaklsdjalasdad";
                    return t[Math.floor(Math.random() * t.length)] + 1e4 * Math.random();
                }, t.lerp = function(t, e, n, i, o) {
                    return i = i || n, o = o || n, t.x += n * (e.x - t.x), t.y += i * (e.y - t.y), t.z += o * (e.z - t.z), 
                    t;
                }, t.numberLerp = function(t, e, n) {
                    return t + n * (e - t);
                }, t.getAngIn360 = function(t) {
                    return (t % 360 + 360) % 360;
                }, t.getAngIn180 = function(t) {
                    return (t %= 360) > 180 && (t -= 360), t < -180 && (t += 360), t;
                }, t.atkAreaCheck = function(t, e, n, i, o, s) {
                    if (t ? this._tmpSubV2.set(e.x - i.x, -(e.z - i.z)) : this._tmpSubV2.set(e.x - i.x, e.y - i.y), 
                    this._tmpSubV2.length() > s) return !1;
                    this._tmpSubV2.normalize(), this._tmpRotV2.set(1, 0), this._tmpRotV2.rotate(.01745 * n);
                    var a = this._tmpSubV2.dot(this._tmpRotV2);
                    return !(a < 0) && a > o;
                }, t.getColorRate = function(t, e) {
                    return (e = e || i()).x = t.r / 255, e.y = t.g / 255, e.z = t.b / 255, e.w = t.a / 255, 
                    e;
                }, t.prototype.calRotation = function(t) {
                    t.toRadianY = t.r;
                    var e = Math.PI;
                    t.toRadianY < 0 && (t.toRadianY += 2 * e), t.curRadianY = t.curRadianY % (2 * e), 
                    t.curRadianY > 2 * e ? t.toRadianY -= 2 * e : t.curRadianY < 0 && (t.toRadianY += 2 * e);
                    var n = t.toRadianY - t.curRadianY;
                    n > e ? (t.curRadianY += 2 * e, t.toDirec = -1) : n < -e ? (t.toRadianY += 2 * e, 
                    t.toDirec = 1) : n > 0 ? t.toDirec = 1 : n < 0 && (t.toDirec = -1);
                }, t.circleCircleCheckXZ = function(t, e, n, i) {
                    return this.tmpV2_1.set(t.x, -t.z), this.tmpV2_2.set(n.x, -n.z), l.circleCircle(this.tmpV2_1, e, this.tmpV2_2, i);
                }, t.clearObj = function(t) {
                    if (t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && "object" == _typeof2(t[e]) && (t[e] = null);
                }, t;
            }());
            u._tmpSubV2 = n(), u._tmpRotV2 = n(), u.tmpV2_1 = n(), u.tmpV2_2 = n(), e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/TTSDK.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./EventTypes.ts", "./SDK.ts" ], function(t) {
    var e, n, i, o, s;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy;
        }, function(t) {
            i = t.default;
        }, function(t) {
            o = t.EventTypes;
        }, function(t) {
            s = t.default;
        } ],
        execute: function() {
            n._RF.push({}, "3f58cI3vFZC2IYBu0WRS/Ch", "TTSDK", void 0), t("TTSDK", function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                e(n, t);
                var s = n.prototype;
                return s.onEvents = function() {
                    t.prototype.onEvents.call(this), i.on(o.GameEvents.GameRun, this.onGameRun, this), 
                    i.on(o.GameEvents.GameOver, this.onGameOver, this), i.on(o.SDKEvents.StartRecord, this.onStartRecord, this), 
                    i.on(o.SDKEvents.PauseRecord, this.onPauseRecord, this), i.on(o.SDKEvents.ResumeRecord, this.onResumeRecord, this), 
                    i.on(o.SDKEvents.StopRecord, this.onStopRecord, this), i.on(o.SDKEvents.ShareRecord, this.onShareRecord, this);
                }, s.setAdCfg = function() {
                    this.adConfig.adBannerIdList = [ "65c9m3ciga529uqhwg" ], this.adConfig.adVideoIdList = [ "750hfa7ie428397efd" ], 
                    this.adConfig.adInterstitialId = "d5gsrvfjic732lk6lh", this.adConfig.shareInfoArr = [ {
                        title: "一起来玩吧!",
                        img: ""
                    } ], this.onShareAppMessage();
                }, s.onShareAppMessage = function() {
                    window.tt.onShareAppMessage(function() {
                        return {
                            title: "",
                            imageUrl: ""
                        };
                    });
                }, s.showInterstitial = function(t, e) {
                    console.log("showInterstitial-SDK"), uniSdk.showInterstitial(function(e) {
                        e ? console.log("插屏广告显示成功") : console.log("插屏广告显示失败， 这里处理失败的逻辑"), t && t(e);
                    }, function() {
                        console.log("插屏广告被用户关闭， 这里处理广告关闭后的逻辑"), e && e();
                    }, this);
                }, s.onGameRun = function() {
                    this.onStartRecord();
                }, s.onGameOver = function() {
                    this.onStopRecord();
                }, s.onStartRecord = function() {
                    uniSdk.AdPlat.instance.startRecord();
                }, s.onPauseRecord = function() {
                    uniSdk.AdPlat.instance.pauseRecord();
                }, s.onResumeRecord = function() {
                    uniSdk.AdPlat.instance.resumeRecord();
                }, s.onStopRecord = function() {
                    uniSdk.AdPlat.instance.stopRecord();
                }, s.onShareRecord = function(t, e) {
                    var n = this;
                    void 0 === e && (e = null), uniSdk.AdPlat.instance.share({
                        channel: "video"
                    }, function(n) {
                        n ? (console.log("分享成功!"), t && t()) : (console.log("分享失败!"), e && e());
                    }, function() {
                        n.showMessage("录屏时间少于3秒");
                    });
                }, n;
            }(s)), n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/UIAnimations.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    var e, n, i, o, s, a, r, l, u, c, h, d, f, p;
    return {
        setters: [ function(t) {
            e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, 
            o = t.assertThisInitialized;
        }, function(t) {
            s = t.cclegacy, a = t._decorator, r = t.Enum, l = t.v3, u = t.Tween, c = t.Widget, 
            h = t.UITransform, d = t.tween, f = t.UIOpacity, p = t.Component;
        } ],
        execute: function() {
            var m, v, g, y, S, P, b, _, w, I, R, x, C, A, B;
            s._RF.push({}, "294f6Gp3tZL54Z4UhFK7L8G", "UIAnimations", void 0);
            var L, E, k = a.ccclass, M = a.property;
            !function(t) {
                t[t.None = 0] = "None", t[t.Top = 1] = "Top", t[t.Bottom = 2] = "Bottom", t[t.Left = 3] = "Left", 
                t[t.Right = 4] = "Right", t[t.Center_zoomOut = 5] = "Center_zoomOut", t[t.Center_zoomIn = 6] = "Center_zoomIn";
            }(L || (L = {})), function(t) {
                t[t.SineIn = 0] = "SineIn", t[t.SineOut = 1] = "SineOut", t[t.SineInOut = 2] = "SineInOut", 
                t[t.BackIn = 3] = "BackIn", t[t.BackOut = 4] = "BackOut", t[t.BackInOut = 5] = "BackInOut";
            }(E || (E = {})), t("UIAnimtions", (m = k("UIAnimtions"), v = M({
                type: r(L)
            }), g = M({
                type: r(E),
                visible: function() {
                    return this.enterDirection != L.None;
                }
            }), y = M({
                visible: function() {
                    return this.enterDirection != L.None && this.enterDirection != L.Center_zoomOut;
                }
            }), S = M({
                visible: function() {
                    return this.isDelayShowChildren;
                }
            }), m((_ = e((b = function(t) {
                function e() {
                    for (var e, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                    return e = t.call.apply(t, [ this ].concat(s)) || this, i(e, "enterDirection", _, o(e)), 
                    i(e, "easingType", w, o(e)), i(e, "moveDistRate", I, o(e)), i(e, "delayTime", R, o(e)), 
                    i(e, "animTime", x, o(e)), i(e, "isOpacityAnim", C, o(e)), i(e, "isDelayShowChildren", A, o(e)), 
                    i(e, "delayShowChildrenTime", B, o(e)), e._delayTween = {
                        a: 0
                    }, e._initPos = l(), e._initScale = l(), e._cfg = [ "sineIn", "sineOut", "sineInOut", "backIn", "backOut", "backInOut" ], 
                    e._finishCb = null, e._cbTween = {
                        a: 0
                    }, e._childrenRecs = [], e._toPos = l(), e._toScale = l(), e._uiOpacityCmp = null, 
                    e._opacity = {
                        opacity: 255
                    }, e;
                }
                n(e, t);
                var s = e.prototype;
                return s.onLoad = function() {
                    this.init(), this.recordChildren(!0);
                }, s.init = function() {
                    this._initPos.set(this.node.position), this._initScale.set(this.node.scale);
                }, s.recordChildren = function(t) {
                    if (void 0 === t && (t = !1), this._childrenRecs = [], this.isDelayShowChildren) for (var e = 0; e < this.node.children.length; e++) {
                        var n = this.node.children[e];
                        this._childrenRecs.push({
                            isActive: n.active,
                            node: n
                        }), t && (n.active = !1);
                    }
                }, s.seDelayTime = function(t) {
                    this.delayTime = t;
                }, s.onEnable = function() {
                    this.showAnim();
                }, s.onDisable = function() {
                    this.recordChildren(), u.stopAllByTarget(this._cbTween), u.stopAllByTarget(this._toPos), 
                    u.stopAllByTarget(this._toScale), u.stopAllByTarget(this._delayTween), u.stopAllByTarget(this._opacity);
                }, s.setFinishAnim = function(t) {
                    this._finishCb = t;
                }, s.showAnim = function() {
                    var t = this;
                    if (u.stopAllByTarget(this._cbTween), u.stopAllByTarget(this._toPos), u.stopAllByTarget(this._toScale), 
                    this.enterDirection != L.None) {
                        var e = this.node.getComponent(c);
                        e ? (e.enabled = !0, e.updateAlignment(), e.enabled = !1, this._toPos.set(this.node.position)) : this._toPos.set(this._initPos);
                        var n = this.node.getComponent(h);
                        switch (this.enterDirection) {
                          case L.Top:
                            this.topAnim(n);
                            break;

                          case L.Bottom:
                            this.bottomAnim(n);
                            break;

                          case L.Left:
                            this.leftAnim(n);
                            break;

                          case L.Right:
                            this.rightAnim(n);
                            break;

                          case L.Center_zoomIn:
                            this.centerZoomOutAnim(n);
                            break;

                          case L.Center_zoomOut:
                            this.centerZoomInAnim(n);
                        }
                    }
                    this.isOpacityAnim && this.opacityAnim(), this._finishCb && d(this._cbTween).delay(this.delayTime + this.animTime).call(function() {
                        t._finishCb && t._finishCb(), t._finishCb = null;
                    }).start(), u.stopAllByTarget(this._delayTween), this.isDelayShowChildren && d(this._delayTween).delay(this.delayShowChildrenTime).call(function() {
                        for (var e = 0; e < t._childrenRecs.length; e++) {
                            var n = t._childrenRecs[e];
                            n.node.active = n.isActive;
                        }
                    }).start();
                }, s.showAnimFinished = function() {
                    var t = this.node.getComponent("UIStayAnimations");
                    t && t.enabled && t.showAnim && t.showAnim();
                }, s.topAnim = function(t) {
                    var e = this, n = this._toPos.y;
                    this._toPos.y += t.height * this.moveDistRate, this.node.setPosition(this._toPos);
                    var i = this._cfg[this.easingType];
                    d(this._toPos).delay(this.delayTime).to(this.animTime, {
                        y: n
                    }, {
                        easing: i,
                        onUpdate: function() {
                            e.node.setPosition(e._toPos);
                        }
                    }).call(function() {
                        e.showAnimFinished();
                    }).start();
                }, s.bottomAnim = function(t) {
                    var e = this, n = this._toPos.y;
                    this._toPos.y -= t.height * this.moveDistRate, this.node.setPosition(this._toPos);
                    var i = this._cfg[this.easingType];
                    d(this._toPos).delay(this.delayTime).to(this.animTime, {
                        y: n
                    }, {
                        easing: i,
                        onUpdate: function() {
                            e.node.setPosition(e._toPos);
                        }
                    }).call(function() {
                        e.showAnimFinished();
                    }).start();
                }, s.leftAnim = function(t) {
                    var e = this, n = this._toPos.x;
                    this._toPos.x -= t.width * this.moveDistRate, this.node.setPosition(this._toPos);
                    var i = this._cfg[this.easingType];
                    d(this._toPos).delay(this.delayTime).to(this.animTime, {
                        x: n
                    }, {
                        easing: i,
                        onUpdate: function() {
                            e.node.setPosition(e._toPos);
                        }
                    }).call(function() {
                        e.showAnimFinished();
                    }).start();
                }, s.rightAnim = function(t) {
                    var e = this, n = this._toPos.x;
                    this._toPos.x += t.width * this.moveDistRate, this.node.setPosition(this._toPos);
                    var i = this._cfg[this.easingType];
                    d(this._toPos).delay(this.delayTime).to(this.animTime, {
                        x: n
                    }, {
                        easing: i,
                        onUpdate: function() {
                            e.node.setPosition(e._toPos);
                        }
                    }).call(function() {
                        e.showAnimFinished();
                    }).start();
                }, s.centerZoomOutAnim = function(t) {
                    var e = this;
                    this._toScale.set(0, 0, 0), this.node.setScale(this._toScale);
                    var n = this._cfg[this.easingType];
                    d(this._toScale).delay(this.delayTime).to(this.animTime, {
                        x: 1,
                        y: 1,
                        z: 1
                    }, {
                        easing: n,
                        onUpdate: function() {
                            e.node.setScale(e._toScale);
                        }
                    }).call(function() {
                        e.showAnimFinished();
                    }).start();
                }, s.centerZoomInAnim = function(t) {
                    var e = this;
                    this._toScale.set(this.moveDistRate, this.moveDistRate, this.moveDistRate), this.node.setScale(this._toScale);
                    var n = this._cfg[this.easingType];
                    d(this._toScale).delay(this.delayTime).to(this.animTime, {
                        x: 1,
                        y: 1,
                        z: 1
                    }, {
                        easing: n,
                        onUpdate: function() {
                            e.node.setScale(e._toScale);
                        }
                    }).call(function() {
                        e.showAnimFinished();
                    }).start();
                }, s.opacityAnim = function() {
                    var t = this;
                    this._uiOpacityCmp || (this._uiOpacityCmp = this.node.getComponent(f), this._uiOpacityCmp || (this._uiOpacityCmp = this.node.addComponent(f))), 
                    u.stopAllByTarget(this._opacity), this._uiOpacityCmp && (this._opacity.opacity = 0, 
                    this._uiOpacityCmp.opacity = 0, d(this._opacity).delay(this.delayTime).to(this.animTime, {
                        opacity: 255
                    }, {
                        onUpdate: function() {
                            t._uiOpacityCmp.opacity = t._opacity.opacity;
                        }
                    }).start());
                }, e;
            }(p)).prototype, "enterDirection", [ v ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return L.None;
                }
            }), w = e(b.prototype, "easingType", [ g ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return E.BackInOut;
                }
            }), I = e(b.prototype, "moveDistRate", [ y ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1.5;
                }
            }), R = e(b.prototype, "delayTime", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), x = e(b.prototype, "animTime", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5;
                }
            }), C = e(b.prototype, "isOpacityAnim", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), A = e(b.prototype, "isDelayShowChildren", [ M ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), B = e(b.prototype, "delayShowChildrenTime", [ S ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), P = b)) || P)), s._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/UIEnum.ts", [ "cc" ], function(t) {
    var e;
    return {
        setters: [ function(t) {
            e = t.cclegacy;
        } ],
        execute: function() {
            var n;
            t("UIEnum", void 0), e._RF.push({}, "98fb3gAWKdP2ZXS4V+UNq5C", "UIEnum", void 0), 
            function(t) {
                t.HomeUI = "HomeUI", t.PlayerAssetsUI = "PlayerAssetsUI", t.LevelInfoUI = "LevelInfoUI", 
                t.LevelController = "LevelController", t.WinUI = "WinUI", t.LoseUI = "LoseUI", t.FreeGoldUI = "FreeGoldUI", 
                t.TurntableUI = "TurntableUI", t.AwardUI = "AwardUI", t.SignUI = "SignUI", t.SettingUI = "SettingUI", 
                t.ResurgenceUI = "ResurgenceUI", t.PrivacyUI = "PrivacyUI", t.TipUI = "TipUI", t.MappingUI = "MappingUI", 
                t.ShopUI = "ShopUI", t.OnlineAwardUI = "OnlineAwardUI", t.UnlockPopUI = "UnlockPopUI", 
                t.FakeLevelAdUI = "FakeLevelAdUI", t.CustomAdUI = "CustomAdUI", t.FinishAwardBoxUI = "FinishAwardBoxUI";
            }(n || (n = t("UIEnum", {}))), e._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/UISystem.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./BasicSystem.ts", "./BasicUI.ts", "./EventManager.ts", "./EventTypes.ts", "./ColorLog.ts", "./GlobalPool.ts", "./Loader.ts" ], function(t) {
    var e, n, i, o, s, a, r, l, u, c, h, d;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy, i = t._decorator, o = t.Prefab, s = t.instantiate;
        }, function(t) {
            a = t.BasicSystem;
        }, function(t) {
            r = t.BasicUI;
        }, function(t) {
            l = t.default;
        }, function(t) {
            u = t.EventTypes;
        }, function(t) {
            c = t.clog;
        }, function(t) {
            h = t.default;
        }, function(t) {
            d = t.default;
        } ],
        execute: function() {
            var f, p;
            n._RF.push({}, "6af9bu1yYNB5KR3nRrNZvaz", "UISystem", void 0);
            var m = i.ccclass;
            i.property, t("UISystem", m("UISystem")(((p = function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                return e(n, t), n.init = function(t) {
                    this.isInit || (this.isInit = !0, this.uiLayer = t, this.uiRecs = {}, this.activeUIQueue = [], 
                    this.loadUIBound());
                }, n.showUI = function(t, e) {
                    var n = this;
                    this.loadUI(t, function(i) {
                        n.uiRecs[t].cmp.show(e), c.log("show UI:", t), l.emit(u.GameEvents.UIChanged);
                    });
                }, n.hideUI = function(t, e) {
                    this.uiRecs[t] && (this.uiRecs[t].cmp.hide(e), c.warn("hide UI:", t), l.emit(u.GameEvents.UIChanged));
                }, n.loadUIBound = function() {
                    var t = this;
                    d.loadBundle(this.uiBound, function() {
                        t.loadUICustomPerfabs(function() {
                            t.isInitFinished = !0;
                        });
                    });
                }, n.loadUICustomPerfabs = function(t) {
                    d.loadBundleDir(this.uiBound, this.uiCustomPerfabsUrl, function(e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            h.createPool(i.data.name, i);
                        }
                        t && t();
                    }, o, !0);
                }, n.loadUI = function(t, e) {
                    var n = this;
                    this.uiRecs[t] ? e && e(this.uiRecs[t].node) : d.loadBundleRes(this.uiBound, t + "/" + t, function(i) {
                        if (i) {
                            var o = s(i);
                            o.active = !1;
                            var a = o.getComponent(r), l = n.uiLayer.getChildByName(t);
                            if (!l) return void console.error("UILayer 子节点中不存在:" + t);
                            o.parent = l, n.uiRecs[t] = {
                                cmp: a,
                                node: o
                            }, e && e(o);
                        } else console.error("要显示的UI:" + t + "不存在");
                    }, o, !0);
                }, n;
            }(a)).uiLayer = void 0, p.uiRecs = void 0, p.uiBound = "UI", p.activeUIQueue = void 0, 
            p.uiCustomPerfabsUrl = "Assets/CustomPerfabs", f = p)) || f), n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/VIVOSDK.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./SDK.ts" ], function(t) {
    var e, n, i;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy;
        }, function(t) {
            i = t.default;
        } ],
        execute: function() {
            n._RF.push({}, "c1983FQEnFHZIO2FyXHYy/I", "VIVOSDK", void 0), t("VIVOSDK", function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                e(n, t);
                var i = n.prototype;
                return i.onEvents = function() {
                    t.prototype.onEvents.call(this);
                }, i.setAdCfg = function() {}, i.showBanner = function() {
                    console.log("showBanner"), uniSdk.showCustomAd(0, function(t) {
                        console.warn("#showCustomAd: " + t), t || uniSdk.showBanner();
                    });
                }, i.onExitApp = function() {
                    console.log("退出游戏"), window.qg && window.qg.exitApplication({});
                }, n;
            }(i)), n._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/WXSDK.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts", "./EventTypes.ts", "./AudioSystem.ts", "./StorageSystem.ts", "./SDK.ts" ], function(t) {
    var e, n, i, o, s, a, r;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            n = t.cclegacy;
        }, function(t) {
            i = t.default;
        }, function(t) {
            o = t.EventTypes;
        }, function(t) {
            s = t.AudioSystem;
        }, function(t) {
            a = t.StorageSystem;
        }, function(t) {
            r = t.default;
        } ],
        execute: function() {
            n._RF.push({}, "59fcbfUr2RKHKl+oAHSwlSO", "WXSDK", void 0), t("WXSDK", function(t) {
                function n() {
                    return t.apply(this, arguments) || this;
                }
                e(n, t);
                var r = n.prototype;
                return r.onEvents = function() {
                    t.prototype.onEvents.call(this), i.on(o.GameEvents.GameRun, this.onGameRun, this), 
                    i.on(o.GameEvents.GameOver, this.onGameOver, this);
                }, r.setAdCfg = function() {
                    this.adConfig.app_key = "hbreodlvkyqwtslv", this.adConfig.adBannerIdList = [ "adunit-54330508d48d3e28", "adunit-acb20dfa27f6f92c", "adunit-cb5819b2c5cf6b4b" ], 
                    this.adConfig.adVideoIdList = [ "adunit-b0e7eddf4e5df691", "adunit-27b5b53348173c59", "adunit-68c40bc2f8286d8f", "adunit-c2dcadc77dfcfd3e" ], 
                    this.adConfig.adInterstitialId = "adunit-37b2d7b671e454be", this.adConfig.shareInfoArr = [ {
                        title: "一起来挑战吧!",
                        img: ""
                    } ], this.adConfig.adCustomIdList = [ "adunit-4c51dbb4aada6db3", "adunit-ad540b2f0e4179da", "adunit-ad540b2f0e4179da", "adunit-bb24d5c8c74ae3c5", "adunit-b44d8750878ef6ad", "adunit-b44d8750878ef6ad", "adunit-9ea2c7f045a97b37" ], 
                    uniSdk.AdPlat.instance.setBannerMaxShowTimes(10), this.adConfig.isExportWxGameAd = !0;
                }, r.showInterstitial = function(t, e) {
                    console.log("showInterstitial"), uniSdk.showInterstitial(function(e) {
                        e ? (console.log("插屏广告显示成功"), t && t.success && t.success()) : (console.log("插屏广告显示失败， 这里处理失败的逻辑"), 
                        t && t.fail && t.fail());
                    }, function() {
                        console.log("插屏广告被用户关闭， 这里处理广告关闭后的逻辑"), t && t.close && t.close();
                    }, this);
                }, r.showCustomAd = function(t, e) {
                    console.log("showCustomAd:", t), uniSdk.showCustomAd(t, function(t) {
                        t ? (console.log("原生模板广告显示成功"), e && e.success && e.success()) : (console.log("原生模板广告显示失败 "), 
                        e && e.fail && e.fail());
                    }, function() {
                        e && e.close && e.close(), console.log("原生模板广告被用户关闭 ");
                    }, this);
                }, r.showRewardedVideo = function(t, e) {
                    void 0 === e && (e = 0);
                    var n = null, a = null, r = null;
                    "object" == _typeof2(t) ? (n = t.success, a = t.fail, r = t.cancel) : n = t, i.emit(o.GameEvents.GamePause), 
                    s.pauseBGM(), console.warn("观看视频中"), uniSdk.showRewardedVideo(e, function(t) {
                        1 == t ? (console.log("激励视频已观看完毕 "), n && n(), i.emit(o.GameEvents.GameResume), 
                        s.resumeBGM()) : 0 == t ? (console.log("激励视频未观看完毕 "), r && r(), i.emit(o.GameEvents.GameResume), 
                        s.resumeBGM()) : (console.log("激励视频加载失败 "), a && a(), i.emit(o.GameEvents.GameResume), 
                        s.resumeBGM());
                    }, this);
                }, r.onGameRun = function() {
                    var t = a.getData().levelAssets;
                    this.reportAldStageStart(t.curLv);
                }, r.onGameOver = function(t) {
                    var e = a.getData().levelAssets;
                    t ? this.reportAldStageEnd(e.curLv) : this.reportAldStageFail(e.curLv);
                }, n;
            }(r)), n._RF.pop();
        }
    };
}), mid = "virtual:///prerequisite-imports/main", cid = "chunks:///_virtual/main", 
System.register(mid, [ cid ], function(t, e) {
    return {
        setters: [ function(e) {
            var n = {};
            for (var i in e) "default" !== i && "__esModule" !== i && (n[i] = e[i]);
            t(n);
        } ],
        execute: function() {}
    };
});