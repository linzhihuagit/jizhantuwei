var e = require("@babel/runtime/helpers/typeof");

!function e(t, n, i) {
    function a(r, c) {
        if (!n[r]) {
            if (!t[r]) {
                var s = "function" == typeof require && require;
                if (!c && s) return s(r, !0);
                if (o) return o(r, !0);
                var l = new Error("Cannot find module '" + r + "'");
                throw l.code = "MODULE_NOT_FOUND", l;
            }
            var u = n[r] = {
                exports: {}
            };
            t[r][0].call(u.exports, function(e) {
                return a(t[r][1][e] || e);
            }, u, u.exports, e, t, n, i);
        }
        return n[r].exports;
    }
    for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) a(i[r]);
    return a;
}({
    1: [ function(e, t, n) {
        var i = e("./cache-manager"), a = window.fsUtils, o = a.fs, r = a.downloadFile, c = a.readText, s = a.readArrayBuffer, l = a.readJson, u = a.loadSubpackage, d = a.getUserDataPath, f = a.exists, h = /^https?:\/\/.*/, p = cc.assetManager.downloader, m = cc.assetManager.parser, g = cc.assetManager.presets;
        p.maxConcurrency = 8, p.maxRequestsPerFrame = 64, g.scene.maxConcurrency = 10, g.scene.maxRequestsPerFrame = 64;
        var _ = {}, v = cc.sys;
        function y(t, n, i) {
            h.test(t) ? i && i(new Error("Can not load remote scripts")) : (e("../../../" + t), 
            i && i(null));
        }
        function b(e, t, n) {
            cc.AudioPlayer.load(e).then(function(t) {
                var i = {
                    player: t,
                    url: e,
                    duration: t.duration,
                    type: t.type
                };
                n(null, i);
            }).catch(function(e) {
                n(e);
            });
        }
        function w(e, t, n, a, o) {
            var c = function(e, t) {
                var n = !1, a = !1;
                if (e.startsWith(d())) n = !0; else if (h.test(e)) {
                    if (!t.reload) {
                        var o = i.cachedFiles.get(e);
                        if (o) a = !0, e = o.url; else {
                            var r = i.tempFiles.get(e);
                            r && (n = !0, e = r);
                        }
                    }
                } else n = !0;
                return {
                    url: e,
                    inLocal: n,
                    inCache: a
                };
            }(e, n);
            c.inLocal ? t(c.url, n, o) : c.inCache ? (i.updateLastTime(e), t(c.url, n, function(t, n) {
                t && i.removeCache(e), o(t, n);
            })) : r(e, null, n.header, a, function(a, r) {
                a ? o(a, null) : t(r, n, function(t, a) {
                    t || (i.tempFiles.add(e, r), i.cacheFile(e, r, n.cacheEnabled, n.__cacheBundleRoot__, !0)), 
                    o(t, a);
                });
            });
        }
        function F(e, t, n) {
            s(e, n);
        }
        function E(e, t, n) {
            c(e, n);
        }
        function x(e, t, n) {
            l(e, n);
        }
        function P(e, t, n) {
            w(e, x, t, t.onFileProgress, n);
        }
        function C(e, t, n) {
            w(e, F, t, t.onFileProgress, n);
        }
        function T(e, t, n) {
            n(null, __globalAdapter.loadFont(e) || "Arial");
        }
        function k(e, t, n) {
            f(e, function(t) {
                t ? n(null, e) : n(new Error("file ".concat(e, " does not exist!")));
            });
        }
        function S(e, t, n) {
            w(e, k, t, t.onFileProgress, n);
        }
        function M(e, t, n) {
            s(e, function(e, i) {
                if (e) return n(e);
                K(i, t, n);
            });
        }
        function D(e, t, n) {
            s(e, function(e, i) {
                if (e) return n(e);
                I(i, t, n);
            });
        }
        function A(e, t, n) {
            s(e, function(e, i) {
                if (e) return n(e);
                R(i, t, n);
            });
        }
        function O(e, t, n) {
            c(e, function(e, i) {
                if (e) return n(e);
                B(i, t, n);
            });
        }
        v.platform === v.Platform.BAIDU_MINI_GAME && (e = __baiduRequire);
        var K = m.parsePVRTex, I = m.parsePKMTex, R = m.parseASTCTex, B = m.parsePlist;
        p.downloadScript = y, m.parsePVRTex = M, m.parsePKMTex = D, m.parseASTCTex = A, 
        m.parsePlist = O, p.register({
            ".js": y,
            ".mp3": S,
            ".ogg": S,
            ".wav": S,
            ".m4a": S,
            ".png": S,
            ".jpg": S,
            ".bmp": S,
            ".jpeg": S,
            ".gif": S,
            ".ico": S,
            ".tiff": S,
            ".image": S,
            ".webp": S,
            ".pvr": S,
            ".pkm": S,
            ".astc": S,
            ".font": S,
            ".eot": S,
            ".ttf": S,
            ".woff": S,
            ".svg": S,
            ".ttc": S,
            ".ccon": function(e, t, n) {
                P(e, t, function(t, i) {
                    if (t) n(t); else {
                        var a = cc.internal.parseCCONJson(i);
                        Promise.all(a.chunks.map(function(t) {
                            return new Promise(function(n, i) {
                                C("".concat(cc.path.mainFileName(e)).concat(t), {}, function(e, t) {
                                    e ? i(e) : n(new Uint8Array(t));
                                });
                            });
                        })).then(function(e) {
                            var t = new cc.internal.CCON(a.document, e);
                            n(null, t);
                        }).catch(function(e) {
                            n(e);
                        });
                    }
                });
            },
            ".cconb": function(e, t, n) {
                C(e, t, function(e, t) {
                    if (e) n(e); else try {
                        var i = cc.internal.decodeCCONBinary(new Uint8Array(t));
                        n(null, i);
                    } catch (e) {
                        n(e);
                    }
                });
            },
            ".txt": S,
            ".xml": S,
            ".vsh": S,
            ".fsh": S,
            ".atlas": S,
            ".tmx": S,
            ".tsx": S,
            ".plist": S,
            ".fnt": S,
            ".json": P,
            ".ExportJson": S,
            ".binary": S,
            ".bin": S,
            ".dbbin": S,
            ".skel": S,
            ".mp4": S,
            ".avi": S,
            ".mov": S,
            ".mpg": S,
            ".mpeg": S,
            ".rm": S,
            ".rmvb": S,
            bundle: function(t, n, a) {
                var c = cc.path.basename(t), s = n.version || cc.assetManager.downloader.bundleVers[c], l = s ? s + "." : "";
                if (_[c]) {
                    var f = "subpackages/".concat(c, "/config.").concat(l, "json");
                    u(c, n.onFileProgress, function(e) {
                        e ? a(e, null) : P(f, n, function(e, t) {
                            t && (t.base = "subpackages/".concat(c, "/")), a(e, t);
                        });
                    });
                } else {
                    var m, g;
                    h.test(t) || t.startsWith(d()) ? (g = t, m = "src/bundle-scripts/".concat(c, "/index.").concat(l, "js"), 
                    i.makeBundleFolder(c)) : -1 !== p.remoteBundles.indexOf(c) ? (g = "".concat(p.remoteServerAddress, "remote/").concat(c), 
                    m = "src/bundle-scripts/".concat(c, "/index.").concat(l, "js"), i.makeBundleFolder(c)) : (g = "assets/".concat(c), 
                    m = "assets/".concat(c, "/index.").concat(l, "js")), e("./" + m), n.__cacheBundleRoot__ = c, 
                    P(f = "".concat(g, "/config.").concat(l, "json"), n, function(e, t) {
                        if (e) a && a(e); else if (t.isZip) {
                            var c = t.zipVersion;
                            !function(e, t, n) {
                                var a = i.cachedFiles.get(e);
                                a ? (i.updateLastTime(e), n && n(null, a.url)) : h.test(e) ? r(e, null, t.header, t.onFileProgress, function(a, o) {
                                    a ? n && n(a) : i.unzipAndCacheBundle(e, o, t.__cacheBundleRoot__, n);
                                }) : i.unzipAndCacheBundle(e, e, t.__cacheBundleRoot__, n);
                            }("".concat(g, "/res.").concat(c ? c + "." : "", "zip"), n, function(e, n) {
                                if (e) a && a(e); else {
                                    t.base = n + "/res/";
                                    var i = cc.sys;
                                    if (i.platform === i.Platform.ALIPAY_MINI_GAME && i.os === i.OS.ANDROID) {
                                        var r = n + "res/";
                                        o.accessSync({
                                            path: r
                                        }) && (t.base = r);
                                    }
                                    a && a(null, t);
                                }
                            });
                        } else t.base = g + "/", a && a(null, t);
                    });
                }
            },
            default: function(e, t, n) {
                w(e, E, t, t.onFileProgress, n);
            }
        }), m.register({
            ".png": p.downloadDomImage,
            ".jpg": p.downloadDomImage,
            ".bmp": p.downloadDomImage,
            ".jpeg": p.downloadDomImage,
            ".gif": p.downloadDomImage,
            ".ico": p.downloadDomImage,
            ".tiff": p.downloadDomImage,
            ".image": p.downloadDomImage,
            ".webp": p.downloadDomImage,
            ".pvr": M,
            ".pkm": D,
            ".astc": A,
            ".font": T,
            ".eot": T,
            ".ttf": T,
            ".woff": T,
            ".svg": T,
            ".ttc": T,
            ".mp3": b,
            ".ogg": b,
            ".wav": b,
            ".m4a": b,
            ".txt": E,
            ".xml": E,
            ".vsh": E,
            ".fsh": E,
            ".atlas": E,
            ".tmx": E,
            ".tsx": E,
            ".fnt": E,
            ".plist": O,
            ".binary": F,
            ".bin": F,
            ".dbbin": F,
            ".skel": F,
            ".ExportJson": x
        }), cc.assetManager.transformPipeline.append(function(e) {
            for (var t = e.output = e.input, n = 0, i = t.length; n < i; n++) {
                var a = t[n], o = a.options;
                if (a.config) o.__cacheBundleRoot__ = a.config.name; else {
                    if ("bundle" === a.ext) continue;
                    o.cacheEnabled = void 0 !== o.cacheEnabled && o.cacheEnabled;
                }
                ".cconb" === a.ext ? a.url = a.url.replace(a.ext, ".bin") : ".ccon" === a.ext && (a.url = a.url.replace(a.ext, ".json"));
            }
        });
        var U = cc.assetManager.init;
        cc.assetManager.init = function(e) {
            U.call(cc.assetManager, e);
            var t = cc.settings.querySettings("assets", "subpackages");
            t && t.forEach(function(e) {
                return _[e] = "subpackages/" + e;
            }), i.init();
        };
    }, {
        "./cache-manager": 3
    } ],
    2: [ function(e, t, n) {
        !function() {
            if (cc && cc.internal && cc.internal.EditBox) {
                var e = cc.internal.EditBox, t = cc.js, n = e.KeyboardReturnType, i = null, a = null;
                t.extend(o, e._EditBoxImpl), e._EditBoxImpl = o, Object.assign(o.prototype, {
                    init: function(e) {
                        e ? this._delegate = e : cc.error("EditBox init failed");
                    },
                    beginEditing: function() {
                        var e = this;
                        this._editing || this._ensureKeyboardHide(function() {
                            var t = e._delegate;
                            e._showKeyboard(), e._registerKeyboardEvent(), e._editing = !0, a = e, t._editBoxEditingDidBegan();
                        });
                    },
                    endEditing: function() {
                        this._hideKeyboard();
                        var e = this._eventListeners;
                        e.onKeyboardComplete && e.onKeyboardComplete();
                    },
                    _registerKeyboardEvent: function() {
                        var e = this, t = this._delegate, n = this._eventListeners;
                        n.onKeyboardInput = function(e) {
                            t._string !== e.value && t._editBoxTextChanged(e.value);
                        }, n.onKeyboardConfirm = function(n) {
                            t._editBoxEditingReturn();
                            var i = e._eventListeners;
                            i.onKeyboardComplete && i.onKeyboardComplete();
                        }, n.onKeyboardComplete = function() {
                            e._editing = !1, a = null, e._unregisterKeyboardEvent(), t._editBoxEditingDidEnded();
                        }, __globalAdapter.onKeyboardInput(n.onKeyboardInput), __globalAdapter.onKeyboardConfirm(n.onKeyboardConfirm), 
                        __globalAdapter.onKeyboardComplete(n.onKeyboardComplete);
                    },
                    _unregisterKeyboardEvent: function() {
                        var e = this._eventListeners;
                        e.onKeyboardInput && (__globalAdapter.offKeyboardInput(e.onKeyboardInput), e.onKeyboardInput = null), 
                        e.onKeyboardConfirm && (__globalAdapter.offKeyboardConfirm(e.onKeyboardConfirm), 
                        e.onKeyboardConfirm = null), e.onKeyboardComplete && (__globalAdapter.offKeyboardComplete(e.onKeyboardComplete), 
                        e.onKeyboardComplete = null);
                    },
                    _otherEditing: function() {
                        return !!a && a !== this && a._editing;
                    },
                    _ensureKeyboardHide: function(e) {
                        var t = this._otherEditing();
                        if (!t && !i) return e();
                        i && clearTimeout(i), t && a.endEditing(), i = setTimeout(function() {
                            i = null, e();
                        }, 600);
                    },
                    _showKeyboard: function() {
                        var t = this._delegate, i = t.inputMode === e.InputMode.ANY;
                        __globalAdapter.showKeyboard({
                            defaultValue: t.string,
                            maxLength: t.maxLength < 0 ? 65535 : t.maxLength,
                            multiple: i,
                            confirmHold: !1,
                            confirmType: function(e) {
                                switch (e) {
                                  case n.DEFAULT:
                                  case n.DONE:
                                    return "done";

                                  case n.SEND:
                                    return "send";

                                  case n.SEARCH:
                                    return "search";

                                  case n.GO:
                                    return "go";

                                  case n.NEXT:
                                    return "next";
                                }
                                return "done";
                            }(t.returnType),
                            success: function(e) {},
                            fail: function(e) {
                                cc.warn(e.errMsg);
                            }
                        });
                    },
                    _hideKeyboard: function() {
                        __globalAdapter.hideKeyboard({
                            success: function(e) {},
                            fail: function(e) {
                                cc.warn(e.errMsg);
                            }
                        });
                    }
                });
            }
            function o() {
                this._delegate = null, this._editing = !1, this._eventListeners = {
                    onKeyboardInput: null,
                    onKeyboardConfirm: null,
                    onKeyboardComplete: null
                };
            }
        }();
    }, {} ],
    3: [ function(e, t, n) {
        var i = window.fsUtils, a = i.getUserDataPath, o = i.readJsonSync, r = i.makeDirSync, c = i.writeFileSync, s = i.copyFile, l = i.downloadFile, u = i.deleteFile, d = i.rmdirSync, f = i.unzip, h = i.isOutOfStorage, p = !1, m = null, g = !1, _ = 0, v = /^https?:\/\/.*/, y = {
            cacheDir: "gamecaches",
            cachedFileName: "cacheList.json",
            cacheEnabled: !0,
            autoClear: !0,
            cacheInterval: 500,
            deleteInterval: 500,
            writeFileInterval: 2e3,
            outOfStorage: !1,
            tempFiles: null,
            cachedFiles: null,
            cacheQueue: {},
            version: "1.0",
            getCache: function(e) {
                return this.cachedFiles.has(e) ? this.cachedFiles.get(e).url : "";
            },
            getTemp: function(e) {
                return this.tempFiles.has(e) ? this.tempFiles.get(e) : "";
            },
            init: function() {
                this.cacheDir = a() + "/" + this.cacheDir;
                var e = this.cacheDir + "/" + this.cachedFileName, t = o(e);
                t instanceof Error || !t.version ? (t instanceof Error || d(this.cacheDir, !0), 
                this.cachedFiles = new cc.AssetManager.Cache(), r(this.cacheDir, !0), c(e, JSON.stringify({
                    files: this.cachedFiles._map,
                    version: this.version
                }), "utf8")) : this.cachedFiles = new cc.AssetManager.Cache(t.files), this.tempFiles = new cc.AssetManager.Cache();
            },
            updateLastTime: function(e) {
                this.cachedFiles.has(e) && (this.cachedFiles.get(e).lastTime = Date.now());
            },
            _write: function() {
                m = null, c(this.cacheDir + "/" + this.cachedFileName, JSON.stringify({
                    files: this.cachedFiles._map,
                    version: this.version
                }), "utf8");
            },
            writeCacheFile: function() {
                m = m || setTimeout(this._write.bind(this), this.writeFileInterval);
            },
            _cache: function() {
                p = !1;
                var e = this, t = "";
                for (var n in this.cacheQueue) {
                    t = n;
                    break;
                }
                if (t) {
                    var i = this.cacheQueue[t], a = i.srcUrl, o = i.isCopy, r = i.cacheBundleRoot, c = Date.now().toString(), u = "";
                    u = r ? "".concat(this.cacheDir, "/").concat(r, "/").concat(c).concat(_++).concat(cc.path.extname(t)) : "".concat(this.cacheDir, "/").concat(c).concat(_++).concat(cc.path.extname(t)), 
                    o ? s(a, u, d) : l(a, u, null, d);
                }
                function d(n) {
                    if (n) {
                        if (h(n.message)) return e.outOfStorage = !0, void (e.autoClear && e.clearLRU());
                    } else e.cachedFiles.add(t, {
                        bundle: r,
                        url: u,
                        lastTime: c
                    }), e.writeCacheFile();
                    delete e.cacheQueue[t], cc.js.isEmptyObject(e.cacheQueue) || p || (p = !0, setTimeout(e._cache.bind(e), e.cacheInterval));
                }
            },
            cacheFile: function(e, t, n, i, a) {
                !(n = void 0 !== n ? n : this.cacheEnabled) || this.cacheQueue[e] || this.cachedFiles.has(e) || (this.cacheQueue[e] = {
                    srcUrl: t,
                    cacheBundleRoot: i,
                    isCopy: a
                }, p || this.outOfStorage || (p = !0, setTimeout(this._cache.bind(this), this.cacheInterval)));
            },
            clearCache: function() {
                var e = this;
                d(this.cacheDir, !0), this.cachedFiles = new cc.AssetManager.Cache(), r(this.cacheDir, !0), 
                this.outOfStorage = !1, clearTimeout(m), this._write(), cc.assetManager.bundles.forEach(function(t) {
                    v.test(t.base) && e.makeBundleFolder(t.name);
                });
            },
            clearLRU: function() {
                if (!g) {
                    g = !0;
                    var e = [], t = this;
                    if (this.cachedFiles.forEach(function(n, i) {
                        t._isZipFile(i) && cc.assetManager.bundles.find(function(e) {
                            return -1 !== e.base.indexOf(n.url);
                        }) || e.push({
                            originUrl: i,
                            url: n.url,
                            lastTime: n.lastTime
                        });
                    }), e.sort(function(e, t) {
                        return e.lastTime - t.lastTime;
                    }), e.length = Math.floor(e.length / 3), 0 !== e.length) {
                        for (var n = 0, i = e.length; n < i; n++) this.cachedFiles.remove(e[n].originUrl);
                        clearTimeout(m), this._write(), setTimeout(function n() {
                            var i = e.pop();
                            t._isZipFile(i.originUrl) ? (d(i.url, !0), t._deleteFileCB()) : u(i.url, t._deleteFileCB.bind(t)), 
                            0 < e.length ? setTimeout(n, t.deleteInterval) : g = !1;
                        }, t.deleteInterval);
                    }
                }
            },
            removeCache: function(e) {
                if (this.cachedFiles.has(e)) {
                    var t = this.cachedFiles.remove(e).url;
                    clearTimeout(m), this._write(), this._isZipFile(e) ? (d(t, !0), this._deleteFileCB()) : u(t, this._deleteFileCB.bind(this));
                }
            },
            _deleteFileCB: function(e) {
                e || (this.outOfStorage = !1);
            },
            makeBundleFolder: function(e) {
                r(this.cacheDir + "/" + e, !0);
            },
            unzipAndCacheBundle: function(e, t, n, i) {
                var a = Date.now().toString(), o = "".concat(this.cacheDir, "/").concat(n, "/").concat(a).concat(_++), c = this;
                r(o, !0), f(t, o, function(t) {
                    if (t) return d(o, !0), h(t.message) && (c.outOfStorage = !0, c.autoClear && c.clearLRU()), 
                    void (i && i(t));
                    c.cachedFiles.add(e, {
                        bundle: n,
                        url: o,
                        lastTime: a
                    }), c.writeCacheFile(), i && i(null, o);
                });
            },
            _isZipFile: function(e) {
                return ".zip" === e.slice(-4);
            }
        };
        cc.assetManager.cacheManager = t.exports = y;
    }, {} ],
    4: [ function(e, t, n) {
        e("./Editbox"), e("./AssetManager"), e("./misc");
    }, {
        "./AssetManager": 1,
        "./Editbox": 2,
        "./misc": 5
    } ],
    5: [ function(e, t, n) {
        cc.macro.DOWNLOAD_MAX_CONCURRENT = 10;
    }, {} ],
    6: [ function(t, n, i) {
        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
            })(t);
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        function r(e) {
            return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function c(e, t) {
            return (c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        if (cc.internal.VideoPlayer) {
            var s = cc.internal.VideoPlayer.EventType, l = cc.Vec3, u = cc.mat4(), d = new l(), f = new l(), h = wx.getSystemInfoSync().pixelRatio;
            cc.internal.VideoPlayerImplManager.getImpl = function(e) {
                return new p(e);
            };
            var p = function() {
                function e(t) {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e), function(e, t) {
                        return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                            if (void 0 !== e) return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }(e) : t;
                    }(this, r(e).call(this, t));
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t);
                }(e, cc.internal.VideoPlayerImpl), function(e, t, n) {
                    t && o(e.prototype, t);
                }(e, [ {
                    key: "syncClip",
                    value: function(e) {
                        this.removeVideoPlayer(), e && this.createVideoPlayer(e._nativeAsset);
                    }
                }, {
                    key: "syncURL",
                    value: function(e) {
                        this.removeVideoPlayer(), e && this.createVideoPlayer(e);
                    }
                }, {
                    key: "onCanplay",
                    value: function() {
                        this._loaded || (this._loaded = !0, this.setVisible(this._visible), this.dispatchEvent(s.READY_TO_PLAY), 
                        this.delayedPlay());
                    }
                }, {
                    key: "_bindEvent",
                    value: function() {
                        var e = this._video, t = this;
                        e && (e.onPlay(function() {
                            t._video === e && (t._playing = !0, t.dispatchEvent(s.PLAYING));
                        }), e.onEnded(function() {
                            t._video === e && (t._playing = !1, t._currentTime = t._duration, t.dispatchEvent(s.COMPLETED));
                        }), e.onPause(function() {
                            t._video === e && (t._playing = !1, t.dispatchEvent(s.PAUSED));
                        }), e.onTimeUpdate(function(e) {
                            t._duration = e.duration, t._currentTime = e.position;
                        }));
                    }
                }, {
                    key: "_unbindEvent",
                    value: function() {
                        var e = this._video;
                        e && (e.offPlay(), e.offEnded(), e.offPause(), e.offTimeUpdate());
                    }
                }, {
                    key: "createVideoPlayer",
                    value: function(e) {
                        __globalAdapter.createVideo ? (this._video || (this._video = __globalAdapter.createVideo(), 
                        this._video.showCenterPlayBtn = !1, this._video.controls = !1, this._duration = 0, 
                        this._currentTime = 0, this._loaded = !1, this.setVisible(this._visible), this._bindEvent(), 
                        this._forceUpdate = !0), this.setURL(e), this._forceUpdate = !0) : console.warn("VideoPlayer not supported");
                    }
                }, {
                    key: "setURL",
                    value: function(e) {
                        var t = this._video;
                        if (t && t.src !== e) {
                            t.stop(), this._unbindEvent(), t.autoplay = !0, t.src = e, t.muted = !0;
                            var n = this;
                            this._loaded = !1, t.onPlay(function() {
                                t.offPlay(), n._bindEvent(), t.stop(), t.muted = !1, n._loaded = !0, n._playing = !1, 
                                n._currentTime = 0, n.dispatchEvent(s.READY_TO_PLAY), t.autoplay = !1;
                            });
                        }
                    }
                }, {
                    key: "removeVideoPlayer",
                    value: function() {
                        var e = this.video;
                        e && (e.stop(), e.destroy(), this._playing = !1, this._loaded = !1, this._loadedMeta = !1, 
                        this._ignorePause = !1, this._cachedCurrentTime = 0, this._video = null);
                    }
                }, {
                    key: "setVisible",
                    value: function(e) {
                        var t = this._video;
                        t && this._visible !== e && (t.width = e && this._actualWidth || 0, this._visible = e);
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration();
                    }
                }, {
                    key: "duration",
                    value: function() {
                        return this._duration;
                    }
                }, {
                    key: "syncPlaybackRate",
                    value: function(e) {
                        var t = this._video;
                        t && e !== t.playbackRate && (.5 === e | .8 === e | 1 === e | 1.25 === e | 1.5 === e ? t.playbackRate = e : console.warn("The platform does not support this PlaybackRate!"));
                    }
                }, {
                    key: "syncVolume",
                    value: function() {
                        console.warn("The platform does not support");
                    }
                }, {
                    key: "syncMute",
                    value: function(e) {
                        var t = this._video;
                        t && t.muted !== e && (t.muted = e);
                    }
                }, {
                    key: "syncLoop",
                    value: function(e) {
                        var t = this._video;
                        t && t.loop !== e && (t.loop = e);
                    }
                }, {
                    key: "syncStayOnBottom",
                    value: function() {
                        console.warn("The platform does not support");
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.video ? this.currentTime() : -1;
                    }
                }, {
                    key: "currentTime",
                    value: function() {
                        return this._currentTime;
                    }
                }, {
                    key: "seekTo",
                    value: function(e) {
                        var t = this._video;
                        t && this._loaded && t.seek(e);
                    }
                }, {
                    key: "disable",
                    value: function(e) {
                        this._video && (e || this._video.pause(), this.setVisible(!1), this._visible = !1);
                    }
                }, {
                    key: "enable",
                    value: function() {
                        this._video && (this.setVisible(!0), this._visible = !0);
                    }
                }, {
                    key: "canPlay",
                    value: function() {
                        this._video.play(), this.syncCurrentTime();
                    }
                }, {
                    key: "resume",
                    value: function() {
                        var e = this._video;
                        !this._playing && e && e.play();
                    }
                }, {
                    key: "pause",
                    value: function() {
                        var e = this._video;
                        this._playing && e && e.pause();
                    }
                }, {
                    key: "stop",
                    value: function() {
                        var e = this, t = this._video;
                        t && this._visible && t.stop().then(function(t) {
                            !t.errMsg || t.errMsg.includes("ok") ? (e._currentTime = 0, e._playing = !1, e.dispatchEvent(s.STOPPED)) : console.error("failed to stop video player");
                        });
                    }
                }, {
                    key: "canFullScreen",
                    value: function(e) {
                        this._video && this.setFullScreenEnabled(e);
                    }
                }, {
                    key: "setFullScreenEnabled",
                    value: function(e) {
                        var t = this._video;
                        t && this._fullScreenEnabled !== e && (e ? t.requestFullScreen() : t.exitFullScreen(), 
                        this._fullScreenEnabled = e);
                    }
                }, {
                    key: "syncKeepAspectRatio",
                    value: function(e) {
                        console.warn("On wechat game videoPlayer is always keep the aspect ratio");
                    }
                }, {
                    key: "syncMatrix",
                    value: function() {
                        if (this._video && this._component && this._uiTrans) {
                            var e = this.UICamera;
                            if (e) {
                                this._component.node.getWorldMatrix(u);
                                var t = this._uiTrans.contentSize, n = t.width, i = t.height;
                                if (this._forceUpdate || this._m00 !== u.m00 || this._m01 !== u.m01 || this._m04 !== u.m04 || this._m05 !== u.m05 || this._m12 !== u.m12 || this._m13 !== u.m13 || this._w !== n || this._h !== i) {
                                    this._m00 = u.m00, this._m01 = u.m01, this._m04 = u.m04, this._m05 = u.m05, this._m12 = u.m12, 
                                    this._m13 = u.m13, this._w = n, this._h = i, cc.game.canvas.width;
                                    var a = cc.game.canvas.height, o = this._uiTrans.anchorPoint;
                                    l.set(d, -o.x * this._w, (1 - o.y) * this._h, 0), l.set(f, (1 - o.x) * this._w, -o.y * this._h, 0), 
                                    l.transformMat4(d, d, u), l.transformMat4(f, f, u), e.worldToScreen(d, d), e.worldToScreen(f, f);
                                    var r = f.x - d.x, c = d.y - f.y;
                                    this._video.x = d.x / h, this._video.y = (a - d.y) / h, this._actualWidth = this._video.width = r / h, 
                                    this._video.height = c / h, this._forceUpdate = !1;
                                }
                            }
                        }
                    }
                } ]), e;
            }();
        }
    }, {} ],
    7: [ function(e, t, n) {
        e("../fs-utils"), e("../../../../common/engine/index"), e("./VideoPlayer"), e("./sprite-frame");
    }, {
        "../../../../common/engine/index": 4,
        "../fs-utils": 9,
        "./VideoPlayer": 6,
        "./sprite-frame": 8
    } ],
    8: [ function(e, t, n) {
        cc.SpriteFrame && (cc.SpriteFrame.prototype._checkPackable = function() {
            var e = cc.internal.dynamicAtlasManager;
            if (e) {
                var t = this._texture;
                if (t instanceof cc.Texture2D && !t.isCompressed) {
                    var n = this.width, i = this.height;
                    !t.image || n > e.maxFrameSize || i > e.maxFrameSize ? this._packable = !1 : t.image && t.image.getContext && (this._packable = !0);
                } else this._packable = !1;
            }
        });
    }, {} ],
    9: [ function(e, t, n) {
        var i = wx.getFileSystemManager ? wx.getFileSystemManager() : null, a = /the maximum size of the file storage/, o = {
            fs: i,
            isOutOfStorage: function(e) {
                return a.test(e);
            },
            getUserDataPath: function() {
                return wx.env.USER_DATA_PATH;
            },
            checkFsValid: function() {
                return !!i || (console.warn("can not get the file system!"), !1);
            },
            deleteFile: function(e, t) {
                i.unlink({
                    filePath: e,
                    success: function() {
                        t && t(null);
                    },
                    fail: function(n) {
                        console.warn("Delete file failed: path: ".concat(e, " message: ").concat(n.errMsg)), 
                        t && t(new Error(n.errMsg));
                    }
                });
            },
            downloadFile: function(e, t, n, i, a) {
                var r = {
                    url: e,
                    success: function(t) {
                        200 === t.statusCode ? a && a(null, t.tempFilePath || t.filePath) : (t.filePath && o.deleteFile(t.filePath), 
                        console.warn("Download file failed: path: ".concat(e, " message: ").concat(t.statusCode)), 
                        a && a(new Error(t.statusCode), null));
                    },
                    fail: function(t) {
                        console.warn("Download file failed: path: ".concat(e, " message: ").concat(t.errMsg)), 
                        a && a(new Error(t.errMsg), null);
                    }
                };
                t && (r.filePath = t), n && (r.header = n);
                var c = wx.downloadFile(r);
                i && c.onProgressUpdate(i);
            },
            saveFile: function(e, t, n) {
                wx.saveFile({
                    tempFilePath: e,
                    filePath: t,
                    success: function(e) {
                        n && n(null);
                    },
                    fail: function(t) {
                        console.warn("Save file failed: path: ".concat(e, " message: ").concat(t.errMsg)), 
                        n && n(new Error(t.errMsg));
                    }
                });
            },
            copyFile: function(e, t, n) {
                i.copyFile({
                    srcPath: e,
                    destPath: t,
                    success: function() {
                        n && n(null);
                    },
                    fail: function(t) {
                        console.warn("Copy file failed: path: ".concat(e, " message: ").concat(t.errMsg)), 
                        n && n(new Error(t.errMsg));
                    }
                });
            },
            writeFile: function(e, t, n, a) {
                i.writeFile({
                    filePath: e,
                    encoding: n,
                    data: t,
                    success: function() {
                        a && a(null);
                    },
                    fail: function(t) {
                        console.warn("Write file failed: path: ".concat(e, " message: ").concat(t.errMsg)), 
                        a && a(new Error(t.errMsg));
                    }
                });
            },
            writeFileSync: function(e, t, n) {
                try {
                    return i.writeFileSync(e, t, n), null;
                } catch (t) {
                    return console.warn("Write file failed: path: ".concat(e, " message: ").concat(t.message)), 
                    new Error(t.message);
                }
            },
            readFile: function(e, t, n) {
                i.readFile({
                    filePath: e,
                    encoding: t,
                    success: function(e) {
                        n && n(null, e.data);
                    },
                    fail: function(t) {
                        console.warn("Read file failed: path: ".concat(e, " message: ").concat(t.errMsg)), 
                        n && n(new Error(t.errMsg), null);
                    }
                });
            },
            readDir: function(e, t) {
                i.readdir({
                    dirPath: e,
                    success: function(e) {
                        t && t(null, e.files);
                    },
                    fail: function(n) {
                        console.warn("Read directory failed: path: ".concat(e, " message: ").concat(n.errMsg)), 
                        t && t(new Error(n.errMsg), null);
                    }
                });
            },
            readText: function(e, t) {
                o.readFile(e, "utf8", t);
            },
            readArrayBuffer: function(e, t) {
                o.readFile(e, "", t);
            },
            readJson: function(e, t) {
                o.readFile(e, "utf8", function(n, i) {
                    var a = null;
                    if (!n) try {
                        a = JSON.parse(i);
                    } catch (i) {
                        console.warn("Read json failed: path: ".concat(e, " message: ").concat(i.message)), 
                        n = new Error(i.message);
                    }
                    t && t(n, a);
                });
            },
            readJsonSync: function(e) {
                try {
                    var t = i.readFileSync(e, "utf8");
                    return JSON.parse(t);
                } catch (t) {
                    return console.warn("Read json failed: path: ".concat(e, " message: ").concat(t.message)), 
                    new Error(t.message);
                }
            },
            makeDirSync: function(e, t) {
                try {
                    return i.mkdirSync(e, t), null;
                } catch (t) {
                    return console.warn("Make directory failed: path: ".concat(e, " message: ").concat(t.message)), 
                    new Error(t.message);
                }
            },
            rmdirSync: function(e, t) {
                try {
                    i.rmdirSync(e, t);
                } catch (t) {
                    return console.warn("rm directory failed: path: ".concat(e, " message: ").concat(t.message)), 
                    new Error(t.message);
                }
            },
            exists: function(e, t) {
                i.access({
                    path: e,
                    success: function() {
                        t && t(!0);
                    },
                    fail: function() {
                        t && t(!1);
                    }
                });
            },
            loadSubpackage: function(e, t, n) {
                var i = wx.loadSubpackage({
                    name: e,
                    success: function() {
                        n && n();
                    },
                    fail: function(t) {
                        console.warn("Load Subpackage failed: path: ".concat(e, " message: ").concat(t.errMsg)), 
                        n && n(new Error("Failed to load subpackage ".concat(e, ": ").concat(t.errMsg)));
                    }
                });
                return t && i.onProgressUpdate(t), i;
            },
            unzip: function(e, t, n) {
                i.unzip({
                    zipFilePath: e,
                    targetPath: t,
                    success: function() {
                        n && n(null);
                    },
                    fail: function(t) {
                        console.warn("unzip failed: path: ".concat(e, " message: ").concat(t.errMsg)), n && n(new Error("unzip failed: " + t.errMsg));
                    }
                });
            }
        };
        window.fsUtils = t.exports = o;
    }, {} ]
}, {}, [ 7 ]);