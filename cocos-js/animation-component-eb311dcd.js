require("../@babel/runtime/helpers/Arrayincludes");

var t = require("../@babel/runtime/helpers/typeof");

System.register([ "./bits-9eb0404f.js", "./buffer-barrier-a0dabeda.js", "./scene-asset-2d5f3dde.js", "./math-base-ade794fa.js", "./pipeline-state-manager-cdb8e36b.js", "./deprecated-9ab165be.js", "./skeletal-animation-utils-407890d2.js" ], function(e) {
    var n, i, r, a, s, o, u, h, l, c, f, p, _, d, v, m, y, g, b, w, T, E, A, P, S, k, C, I, x, O, N, M, L, z, R, F, D, V, U, B, H, W, Q, j, q, K, G, Y, X, J, Z, $, tt, et, nt, it, rt, at, st, ot;
    return {
        setters: [ function(t) {
            n = t.x, i = t.A, r = t.l, a = t.m, s = t.F, o = t.t, u = t.P, h = t.d, l = t.G, 
            c = t.H, f = t.L, p = t.f, _ = t.i, d = t.I, v = t.V, m = t.O, y = t.aq, g = t.J, 
            b = t.at;
        }, function(t) {
            w = t.bm, T = t.br;
        }, function(t) {
            E = t.c5, A = t.c6, P = t.c7, S = t.a$, k = t.ao, C = t.b1, I = t.c8, x = t.aN, 
            O = t.aR, N = t.aT, M = t.c2, L = t.c4, z = t.c9, R = t.ca, F = t.cb, D = t.aO, 
            V = t.aQ, U = t.aS, B = t.a2, H = t.b0, W = t.bS, Q = t.bT, j = t.bX, q = t.bU, 
            K = t.bP, G = t.aI;
        }, function(t) {
            Y = t.Q, X = t.V, J = t.a, Z = t.c, $ = t.C, tt = t.S, et = t.l, nt = t.i, it = t.e, 
            rt = t.h, at = t.j;
        }, function() {}, function() {}, function(t) {
            st = t.S, ot = t.B;
        } ],
        execute: function() {
            e({
                f: function(t, e) {
                    return t instanceof e;
                },
                i: Et,
                q: Xe,
                r: pt,
                s: Ye
            });
            var ut, ht = e("C", "cc.animation."), lt = e("c", Symbol("CreateEval")), ct = function() {
                function t() {
                    this._isPlaying = !1, this._isPaused = !1, this._stepOnce = !1;
                }
                var e = t.prototype;
                return e.play = function() {
                    this._isPlaying ? this._isPaused ? (this._isPaused = !1, this.onResume()) : this.onError(n(3912)) : (this._isPlaying = !0, 
                    this.onPlay());
                }, e.stop = function() {
                    this._isPlaying && (this._isPlaying = !1, this.onStop(), this._isPaused = !1);
                }, e.pause = function() {
                    this._isPlaying && !this._isPaused && (this._isPaused = !0, this.onPause());
                }, e.resume = function() {
                    this._isPlaying && this._isPaused && (this._isPaused = !1, this.onResume());
                }, e.step = function() {
                    this.pause(), this._stepOnce = !0, this._isPlaying || this.play();
                }, e.update = function() {}, e.onPlay = function() {}, e.onPause = function() {}, 
                e.onResume = function() {}, e.onStop = function() {}, e.onError = function() {}, 
                i(t, [ {
                    key: "isPlaying",
                    get: function() {
                        return this._isPlaying;
                    }
                }, {
                    key: "isPaused",
                    get: function() {
                        return this._isPaused;
                    }
                }, {
                    key: "isMotionless",
                    get: function() {
                        return !this.isPlaying || this.isPaused;
                    }
                } ]), t;
            }(), ft = function() {
                function t(t) {
                    this.weight = 0, this._pose = void 0, this._blendStateWriters = [], this._pose = t;
                }
                var e = t.prototype;
                return e.destroy = function() {
                    for (var t = 0; t < this._blendStateWriters.length; ++t) this._pose.destroyWriter(this._blendStateWriters[t]);
                    this._blendStateWriters.length = 0;
                }, e.createPoseWriter = function(t, e, n) {
                    var i = this._pose.createWriter(t, e, this, n);
                    return this._blendStateWriters.push(i), i;
                }, t;
            }();
            function pt() {
                return r.director.getAnimationManager();
            }
            !function(t) {
                t.PLAY = "play", t.STOP = "stop", t.PAUSE = "pause", t.RESUME = "resume", t.LASTFRAME = "lastframe", 
                t.FINISHED = "finished";
            }(ut || (ut = {})), a(ut);
            var _t, dt, vt, mt, yt, gt, bt, wt, Tt = e("A", function(t) {
                function e(e, n) {
                    var i;
                    return void 0 === n && (n = ""), (i = t.call(this) || this).duration = 1, i.time = 0, 
                    i.frameRate = 0, i._targetNode = null, i._curveLoaded = !1, i._clip = void 0, i._speed = 1, 
                    i._useSimpleProcess = !1, i._target = null, i._wrapMode = P.Normal, i._repeatCount = 1, 
                    i._delay = 0, i._delayTime = 0, i._currentFramePlayed = !1, i._name = void 0, i._lastIterations = NaN, 
                    i._lastWrapInfo = null, i._wrappedInfo = new A(), i._allowLastFrame = !1, i._blendStateWriterHost = {
                        weight: 0
                    }, i._playbackDuration = 0, i._invDuration = 1, i._poseOutput = null, i._weight = 1, 
                    i._clipEval = void 0, i._clipEventEval = void 0, i._clipEmbeddedPlayerEval = void 0, 
                    i._doNotCreateEval = !1, i._clip = e, i._name = n || e && e.name, i._playbackRange = {
                        min: 0,
                        max: e.duration
                    }, i._playbackDuration = e.duration, e.duration || o("Clip " + e.name + " has zero duration."), 
                    i;
                }
                s(e, t);
                var n = e.prototype;
                return n.initialize = function(t, e, n) {
                    if (!this._curveLoaded) {
                        this._curveLoaded = !0, this._poseOutput && (this._poseOutput.destroy(), this._poseOutput = null), 
                        this._clipEval && (this._clipEval = void 0), this._clipEventEval && (this._clipEventEval = void 0), 
                        this._clipEmbeddedPlayerEval && (this._clipEmbeddedPlayerEval.destroy(), this._clipEmbeddedPlayerEval = void 0), 
                        this._targetNode = t;
                        var i = this._clip;
                        if (this.duration = i.duration, this._invDuration = 1 / this.duration, this._speed = i.speed, 
                        this.wrapMode = i.wrapMode, this.frameRate = i.sample, this._playbackRange.min = 0, 
                        this._playbackRange.max = i.duration, this._playbackDuration = i.duration, (this.wrapMode & E.Loop) === E.Loop ? this.repeatCount = 1 / 0 : this.repeatCount = 1, 
                        !this._doNotCreateEval) {
                            var r, a, s, o = null !== (r = null != e ? e : null === (a = pt()) || void 0 === a ? void 0 : a.blendState) && void 0 !== r ? r : null;
                            o && (this._poseOutput = new ft(o)), this._clipEval = i.createEvaluator({
                                target: t,
                                pose: null !== (s = this._poseOutput) && void 0 !== s ? s : void 0,
                                mask: n
                            });
                        }
                        i.containsAnyEvent() && (this._clipEventEval = i.createEventEvaluator(this._targetNode)), 
                        i.containsAnyEmbeddedPlayer() && (this._clipEmbeddedPlayerEval = i.createEmbeddedPlayerEvaluator(this._targetNode), 
                        this._clipEmbeddedPlayerEval.notifyHostSpeedChanged(this._speed));
                    }
                }, n.destroy = function() {
                    this.isMotionless || pt().removeAnimation(this), this._poseOutput && (this._poseOutput.destroy(), 
                    this._poseOutput = null), this._clipEval = void 0;
                }, n.emit = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    pt().pushDelayEvent(this._emit, this, e);
                }, n.on = function(t, e, n) {
                    return this._target && this._target.isValid ? this._target.on(t, e, n) : null;
                }, n.once = function(t, e, n) {
                    return this._target && this._target.isValid ? this._target.once(t, e, n) : null;
                }, n.off = function(t, e, n) {
                    this._target && this._target.isValid && this._target.off(t, e, n);
                }, n.allowLastFrameEvent = function(t) {
                    this._allowLastFrame = t;
                }, n._setEventTarget = function(t) {
                    this._target = t;
                }, n.setTime = function(t) {
                    this._currentFramePlayed = !1, this.time = t || 0;
                    var e, n = this.getWrappedInfo(t, this._wrappedInfo);
                    null === (e = this._clipEventEval) || void 0 === e || e.ignore(n.ratio, n.direction);
                }, n.update = function(t) {
                    this._delayTime > 0 && (this._delayTime -= t, this._delayTime > 0) || (this._currentFramePlayed ? this.time += t * this._speed : this._currentFramePlayed = !0, 
                    this._process());
                }, n.sample = function() {
                    var t = this.getWrappedInfo(this.time, this._wrappedInfo);
                    return this._sampleCurves(t.time), this._sampleEvents(t), this._sampleEmbeddedPlayers(t), 
                    t;
                }, n.onPlay = function() {
                    var t;
                    this.setTime(this._getPlaybackStart()), this._delayTime = this._delay, this._onReplayOrResume(), 
                    this.emit(ut.PLAY, this), null === (t = this._clipEmbeddedPlayerEval) || void 0 === t || t.notifyHostPlay(this.current);
                }, n.onStop = function() {
                    var t;
                    this.isPaused || this._onPauseOrStop(), this.emit(ut.STOP, this), null === (t = this._clipEmbeddedPlayerEval) || void 0 === t || t.notifyHostStop();
                }, n.onResume = function() {
                    var t;
                    this._onReplayOrResume(), this.emit(ut.RESUME, this), null === (t = this._clipEmbeddedPlayerEval) || void 0 === t || t.notifyHostPlay(this.current);
                }, n.onPause = function() {
                    var t;
                    this._onPauseOrStop(), this.emit(ut.PAUSE, this), null === (t = this._clipEmbeddedPlayerEval) || void 0 === t || t.notifyHostPause(this.current);
                }, n._sampleCurves = function(t) {
                    var e = this._poseOutput, n = this._clipEval;
                    e && (e.weight = this.weight), n && n.evaluate(t);
                }, n._process = function() {
                    this._useSimpleProcess ? this.simpleProcess() : this.process();
                }, n.process = function() {
                    var t, e = this.sample();
                    this._allowLastFrame && (t = this._lastWrapInfo ? this._lastWrapInfo : this._lastWrapInfo = new A(e), 
                    this.repeatCount > 1 && (0 | e.iterations) > (0 | t.iterations) && this.emit(ut.LASTFRAME, this), 
                    t.set(e)), e.stopped && (this.stop(), this.emit(ut.FINISHED, this));
                }, n.simpleProcess = function() {
                    var t = this._playbackRange.min, e = this._playbackDuration, n = 0, i = 0;
                    if (0 !== e && ((n = this.time % e) < 0 && (n += e), i = (t + n) * this._invDuration), 
                    this._sampleCurves(t + n), this._clipEventEval || this._clipEmbeddedPlayerEval) {
                        var r = this.getWrappedInfo(this.time, this._wrappedInfo);
                        this._sampleEvents(r), this._sampleEmbeddedPlayers(r);
                    }
                    this._allowLastFrame && (Number.isNaN(this._lastIterations) && (this._lastIterations = i), 
                    (this.time > 0 && this._lastIterations > i || this.time < 0 && this._lastIterations < i) && this.emit(ut.LASTFRAME, this), 
                    this._lastIterations = i);
                }, n._needReverse = function(t) {
                    var e = this.wrapMode, n = !1;
                    return (e & E.PingPong) === E.PingPong && (t - (0 | t) == 0 && t > 0 && (t -= 1), 
                    1 & t && (n = !n)), (e & E.Reverse) === E.Reverse && (n = !n), n;
                }, n.getWrappedInfo = function(t, e) {
                    e = e || new A();
                    var n = this._playbackRange.min, i = this._playbackDuration, r = this.repeatCount;
                    if (0 === i) return e.time = 0, e.ratio = 0, e.direction = 1, e.stopped = !!Number.isFinite(r), 
                    e.iterations = 0, e;
                    var a = !1, s = (t -= n) > 0 ? t / i : -t / i;
                    if (s >= r) {
                        s = r, a = !0;
                        var o = r - (0 | r);
                        0 === o && (o = 1), t = o * i * (t > 0 ? 1 : -1);
                    }
                    if (t > i) {
                        var u = t % i;
                        t = 0 === u ? i : u;
                    } else t < 0 && 0 != (t %= i) && (t += i);
                    var h = !1, l = this._wrapMode & E.ShouldWrap;
                    l && (h = this._needReverse(s));
                    var c = h ? -1 : 1;
                    return this.speed < 0 && (c *= -1), l && h && (t = i - t), e.time = n + t, e.ratio = e.time / this.duration, 
                    e.direction = c, e.stopped = a, e.iterations = s, e;
                }, n._getPlaybackStart = function() {
                    return this._playbackRange.min;
                }, n._sampleEvents = function(t) {
                    var e;
                    null === (e = this._clipEventEval) || void 0 === e || e.sample(t.ratio, t.direction, t.iterations);
                }, n._sampleEmbeddedPlayers = function(t) {
                    var e;
                    null === (e = this._clipEmbeddedPlayerEval) || void 0 === e || e.evaluate(t.time, Math.trunc(t.iterations));
                }, n._emit = function(t, e) {
                    this._target && this._target.isValid && this._target.emit(t, t, e);
                }, n._onReplayOrResume = function() {
                    pt().addAnimation(this);
                }, n._onPauseOrStop = function() {
                    pt().removeAnimation(this);
                }, i(e, [ {
                    key: "clip",
                    get: function() {
                        return this._clip;
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name;
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this.duration;
                    }
                }, {
                    key: "wrapMode",
                    get: function() {
                        return this._wrapMode;
                    },
                    set: function(t) {
                        var e;
                        this._wrapMode = t, this.time = 0, t & E.Loop ? this.repeatCount = 1 / 0 : this.repeatCount = 1, 
                        null === (e = this._clipEventEval) || void 0 === e || e.setWrapMode(t);
                    }
                }, {
                    key: "repeatCount",
                    get: function() {
                        return this._repeatCount;
                    },
                    set: function(t) {
                        this._repeatCount = t;
                        var e = this._wrapMode & E.ShouldWrap, n = (this.wrapMode & E.Reverse) === E.Reverse;
                        this._useSimpleProcess = t === 1 / 0 && !e && !n;
                    }
                }, {
                    key: "delay",
                    get: function() {
                        return this._delay;
                    },
                    set: function(t) {
                        this._delayTime = this._delay = t;
                    }
                }, {
                    key: "playbackRange",
                    get: function() {
                        return this._playbackRange;
                    },
                    set: function(t) {
                        u(t.max > t.min), this._playbackRange.min = Math.max(t.min, 0), this._playbackRange.max = Math.min(t.max, this.duration), 
                        this._playbackDuration = this._playbackRange.max - this._playbackRange.min, this.setTime(0);
                    }
                }, {
                    key: "speed",
                    get: function() {
                        return this._speed;
                    },
                    set: function(t) {
                        var e;
                        this._speed = t, null === (e = this._clipEmbeddedPlayerEval) || void 0 === e || e.notifyHostSpeedChanged(t);
                    }
                }, {
                    key: "current",
                    get: function() {
                        return this.getWrappedInfo(this.time).time;
                    }
                }, {
                    key: "ratio",
                    get: function() {
                        return 0 === this.duration ? 0 : this.current / this.duration;
                    }
                }, {
                    key: "weight",
                    get: function() {
                        return this._weight;
                    },
                    set: function(t) {
                        this._weight = t, this._poseOutput && (this._poseOutput.weight = t);
                    }
                }, {
                    key: "curveLoaded",
                    get: function() {
                        return this._curveLoaded;
                    }
                } ]), e;
            }(ct));
            function Et(t) {
                return "string" == typeof t || "number" == typeof t;
            }
            r.AnimationState = Tt;
            var At, Pt, St, kt, Ct, It, xt, Ot, Nt, Mt, Lt, zt, Rt, Ft, Dt, Vt, Ut, Bt, Ht, Wt, Qt, jt, qt, Kt, Gt, Yt, Xt, Jt, Zt = e("H", S("cc.animation.HierarchyPath")((mt = function() {
                function t(t) {
                    c(this, "path", vt, this), this.path = t || "";
                }
                return t.prototype.get = function(t) {
                    return t instanceof k ? t.getChildByPath(this.path) || (h(3926, t.name, this.path), 
                    null) : (h(3925), null);
                }, t;
            }(), vt = l((dt = mt).prototype, "path", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), _t = dt)) || _t), $t = e("g", S("cc.animation.ComponentPath")((wt = function() {
                function t(t) {
                    c(this, "component", bt, this), this.component = t || "";
                }
                return t.prototype.get = function(t) {
                    return t instanceof k ? t.getComponent(this.component) || (h(3928, t.name, this.component), 
                    null) : (h(3927), null);
                }, t;
            }(), bt = l((gt = wt).prototype, "component", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), yt = gt)) || yt), te = Symbol("NormalizedFollow"), ee = Symbol("ConvertAsTrsPath"), ne = Symbol("TrackBinding"), ie = e("d", S(ht + "TrackPath")((kt = function() {
                function t() {
                    c(this, "_paths", St, this);
                }
                var e = t.prototype;
                return e.toProperty = function(t) {
                    return this._paths.push(t), this;
                }, e.toElement = function(t) {
                    return this._paths.push(t), this;
                }, e.toHierarchy = function(t) {
                    return this._paths.push(new Zt(t)), this;
                }, e.toComponent = function(t) {
                    var e = new $t("string" == typeof t ? t : f.getClassName(t));
                    return this._paths.push(e), this;
                }, e.toCustomized = function(t) {
                    return this._paths.push(t), this;
                }, e.append = function() {
                    for (var t, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    var r = (t = this._paths).concat.apply(t, n.map(function(t) {
                        return t._paths;
                    }));
                    return this._paths = r, this;
                }, e.isPropertyAt = function(t) {
                    return "string" == typeof this._paths[t];
                }, e.parsePropertyAt = function(t) {
                    return this._paths[t];
                }, e.isElementAt = function(t) {
                    return "number" == typeof this._paths[t];
                }, e.parseElementAt = function(t) {
                    return this._paths[t];
                }, e.isHierarchyAt = function(t) {
                    return this._paths[t] instanceof Zt;
                }, e.parseHierarchyAt = function(t) {
                    return u(this.isHierarchyAt(t)), this._paths[t].path;
                }, e.isComponentAt = function(t) {
                    return this._paths[t] instanceof $t;
                }, e.parseComponentAt = function(t) {
                    return u(this.isComponentAt(t)), this._paths[t].component;
                }, e.slice = function(e, n) {
                    var i = new t();
                    return i._paths = this._paths.slice(e, n), i;
                }, e.trace = function(t, e, n) {
                    var i, r;
                    return null !== (i = e) && void 0 !== i || (e = 0), null !== (r = n) && void 0 !== r || (n = this._paths.length), 
                    this[te](t, e, n);
                }, e[ee] = function() {
                    for (var t, e = this._paths, n = e.length, i = 0, r = ""; i < n; ++i) {
                        var a = e[i];
                        if (!(a instanceof Zt)) break;
                        a.path && (r ? r += "/" + a.path : r = a.path);
                    }
                    if (i === n) return null;
                    if (i !== n - 1) return null;
                    switch (e[i]) {
                      case "position":
                      case "scale":
                      case "rotation":
                      case "eulerAngles":
                        t = e[i];
                        break;

                      default:
                        return null;
                    }
                    return {
                        node: r,
                        property: t
                    };
                }, e[te] = function(t, e, n) {
                    for (var i = this._paths, r = t, a = e; a < n; ++a) {
                        var s = i[a];
                        if (Et(s)) {
                            if (!(s in r)) return h(3929, s), null;
                            r = r[s];
                        } else r = s.get(r);
                        if (null === r) break;
                    }
                    return r;
                }, i(t, [ {
                    key: "length",
                    get: function() {
                        return this._paths.length;
                    }
                } ]), t;
            }(), St = l((Pt = kt).prototype, "_paths", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), At = Pt)) || At), re = S(ht + "TrackBinding")(Ct = I((Mt = Nt = function() {
                function t() {
                    c(this, "path", xt, this), c(this, "proxy", Ot, this);
                }
                var e = t.prototype;
                return e.parseTrsPath = function() {
                    return this.proxy ? null : this.path[ee]();
                }, e.createRuntimeBinding = function(t, e, n) {
                    var i = this.path, r = this.proxy, a = i.length, s = a - 1;
                    if (0 === a || !i.isPropertyAt(s) && !i.isElementAt(s) || r) {
                        if (r) {
                            var o = i[te](t, 0, a);
                            if (null === o) return null;
                            var u = r.forTarget(o), h = {
                                setValue: function(t) {
                                    u.set(t);
                                }
                            }, l = u.get;
                            return l && (h.getValue = function() {
                                return l.call(u);
                            }), h;
                        }
                        return p(3921), null;
                    }
                    var c, f, _ = i.isPropertyAt(s) ? i.parsePropertyAt(s) : i.parseElementAt(s), d = i[te](t, 0, a - 1);
                    return null === d ? null : e && d instanceof k && ("position" === (f = _) || "rotation" === f || "scale" === f || "eulerAngles" === f) ? e.createPoseWriter(d, _, n) : (c = function(t) {
                        d[_] = t;
                    }, {
                        target: d,
                        setValue: c,
                        getValue: function() {
                            return d[_];
                        }
                    });
                }, e.isMaskedOff = function(t) {
                    var e = this.parseTrsPath();
                    if (!e) return !1;
                    for (var n = t.joints[Symbol.iterator](), i = n.next(); !i.done; i = n.next()) {
                        var r = i.value;
                        if (r.path === e.node) return !r.enabled;
                    }
                    return !1;
                }, t;
            }(), Nt._animationFunctions = new WeakMap(), xt = l((It = Mt).prototype, "path", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new ie();
                }
            }), Ot = l(It.prototype, "proxy", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ct = It)) || Ct) || Ct, ae = e("T", S(ht + "Track")((Ft = function() {
                function t() {
                    c(this, "_binding", Rt, this);
                }
                var e = t.prototype;
                return e.channels = function() {
                    return [];
                }, e.range = function() {
                    for (var t, e = {
                        min: 1 / 0,
                        max: -1 / 0
                    }, n = _(this.channels()); !(t = n()).done; ) {
                        var i = t.value;
                        e.min = Math.min(e.min, i.curve.rangeMin), e.max = Math.max(e.max, i.curve.rangeMax);
                    }
                    return e;
                }, i(t, [ {
                    key: "path",
                    get: function() {
                        return this._binding.path;
                    },
                    set: function(t) {
                        this._binding.path = t;
                    }
                }, {
                    key: "proxy",
                    get: function() {
                        return this._binding.proxy;
                    },
                    set: function(t) {
                        this._binding.proxy = t;
                    }
                }, {
                    key: ne,
                    get: function() {
                        return this._binding;
                    }
                } ]), t;
            }(), Rt = l((zt = Ft).prototype, "_binding", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new re();
                }
            }), Lt = zt)) || Lt), se = e("a", S(ht + "Channel")((Bt = function() {
                function t(t) {
                    this.name = "", c(this, "_curve", Ut, this), this._curve = t;
                }
                return i(t, [ {
                    key: "curve",
                    get: function() {
                        return this._curve;
                    }
                } ]), t;
            }(), Ut = l((Vt = Bt).prototype, "_curve", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Dt = Vt)) || Dt), oe = S(ht + "SingleChannelTrack")((jt = function(t) {
                function e() {
                    var e;
                    return e = t.call(this) || this, c(e, "_channel", Qt, d(e)), e._channel = new se(e.createCurve()), 
                    e;
                }
                s(e, t);
                var n = e.prototype;
                return n.channels = function() {
                    return [ this._channel ];
                }, n.createCurve = function() {
                    throw new Error("Not impl");
                }, n[lt] = function() {
                    var t = this._channel.curve;
                    return new ue(t);
                }, i(e, [ {
                    key: "channel",
                    get: function() {
                        return this._channel;
                    }
                } ]), e;
            }(ae), Qt = l((Wt = jt).prototype, "_channel", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ht = Wt)) || Ht, ue = function() {
                function t(t) {
                    this._curve = t;
                }
                return t.prototype.evaluate = function(t) {
                    return this._curve.evaluate(t);
                }, t;
            }();
            function he(t, e, n, i) {
                var r, a, s, o, u, h, f = new e(), p = new e(), _ = new e(), d = S(t)((h = function() {
                    function t(t, n, i) {
                        c(this, "dataPoint", s, this), c(this, "inTangent", o, this), c(this, "outTangent", u, this), 
                        this.dataPoint = t || new e(), this.inTangent = n || new e(), this.outTangent = i || new e();
                    }
                    var r = t.prototype;
                    return r.lerp = function(t, e, r) {
                        var a = this.dataPoint, s = t.dataPoint;
                        p = n(p, this.inTangent, r), _ = n(_, t.outTangent, r);
                        var o = e * e * e, u = e * e, h = o - 2 * u + e, l = -2 * o + 3 * u, c = o - u;
                        return f = n(f, a, 2 * o - 3 * u + 1), f = i(f, f, p, h), f = i(f, f, s, l), f = i(f, f, _, c);
                    }, r.getNoLerp = function() {
                        return this.dataPoint;
                    }, t;
                }(), s = l((a = h).prototype, "dataPoint", [ C ], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return new e();
                    }
                }), o = l(a.prototype, "inTangent", [ C ], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return new e();
                    }
                }), u = l(a.prototype, "outTangent", [ C ], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return new e();
                    }
                }), r = a)) || r;
                if (e === Y) {
                    var v = d.prototype.lerp;
                    d.prototype.lerp = function(t, e, n) {
                        var i = v.call(this, t, e, n);
                        return Y.normalize(i, i), i;
                    };
                }
                return d;
            }
            var le, ce, fe, pe, _e, de, ve = e("h", he("cc.CubicSplineVec2Value", X, X.multiplyScalar, X.scaleAndAdd)), me = e("j", he("cc.CubicSplineVec3Value", J, J.multiplyScalar, J.scaleAndAdd)), ye = e("k", he("cc.CubicSplineVec4Value", Z, Z.multiplyScalar, Z.scaleAndAdd)), ge = e("l", he("cc.CubicSplineQuatValue", Y, Y.multiplyScalar, Y.scaleAndAdd)), be = e("m", S("cc.CubicSplineNumberValue")((Jt = function() {
                function t(t, e, n) {
                    c(this, "dataPoint", Gt, this), c(this, "inTangent", Yt, this), c(this, "outTangent", Xt, this), 
                    this.dataPoint = t, this.inTangent = e, this.outTangent = n;
                }
                var e = t.prototype;
                return e.lerp = function(t, e, n) {
                    var i = this.dataPoint, r = t.dataPoint, a = e * e * e, s = e * e;
                    return i * (2 * a - 3 * s + 1) + this.outTangent * n * (a - 2 * s + e) + r * (-2 * a + 3 * s) + t.inTangent * n * (a - s);
                }, e.getNoLerp = function() {
                    return this.dataPoint;
                }, t;
            }(), Gt = l((Kt = Jt).prototype, "dataPoint", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Yt = l(Kt.prototype, "inTangent", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Xt = l(Kt.prototype, "outTangent", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), qt = Kt)) || qt), we = e("R", S(ht + "RealTrack")(le = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return s(e, t), e.prototype.createCurve = function() {
                    return new x();
                }, e;
            }(oe)) || le);
            function Te(t) {
                return 0 === t.keyFramesCount ? void 0 : t;
            }
            var Ee, Ae, Pe, Se, ke, Ce, Ie, xe, Oe, Ne, Me = [ "X", "Y", "Z", "W" ], Le = e("V", S(ht + "VectorTrack")((de = function(t) {
                function e() {
                    var e;
                    e = t.call(this) || this, c(e, "_channels", pe, d(e)), c(e, "_nComponents", _e, d(e)), 
                    e._channels = new Array(4);
                    for (var n = 0; n < e._channels.length; ++n) {
                        var i = new se(new x());
                        i.name = Me[n], e._channels[n] = i;
                    }
                    return e;
                }
                s(e, t);
                var n = e.prototype;
                return n.channels = function() {
                    return this._channels;
                }, n[lt] = function() {
                    switch (this._nComponents) {
                      default:
                      case 2:
                        return new ze(Te(this._channels[0].curve), Te(this._channels[1].curve));

                      case 3:
                        return new Re(Te(this._channels[0].curve), Te(this._channels[1].curve), Te(this._channels[2].curve));

                      case 4:
                        return new Fe(Te(this._channels[0].curve), Te(this._channels[1].curve), Te(this._channels[2].curve), Te(this._channels[3].curve));
                    }
                }, i(e, [ {
                    key: "componentsCount",
                    get: function() {
                        return this._nComponents;
                    },
                    set: function(t) {
                        this._nComponents = t;
                    }
                } ]), e;
            }(ae), pe = l((fe = de).prototype, "_channels", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), _e = l(fe.prototype, "_nComponents", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 4;
                }
            }), ce = fe)) || ce), ze = function() {
                function t(t, e) {
                    this._result = new X(), this._x = t, this._y = e;
                }
                return t.prototype.evaluate = function(t, e) {
                    return this._x && this._y || !e.getValue || X.copy(this._result, e.getValue()), 
                    this._x && (this._result.x = this._x.evaluate(t)), this._y && (this._result.y = this._y.evaluate(t)), 
                    this._result;
                }, t;
            }(), Re = function() {
                function t(t, e, n) {
                    this._result = new J(), this._x = t, this._y = e, this._z = n;
                }
                return t.prototype.evaluate = function(t, e) {
                    return this._x && this._y && this._z || !e.getValue || J.copy(this._result, e.getValue()), 
                    this._x && (this._result.x = this._x.evaluate(t)), this._y && (this._result.y = this._y.evaluate(t)), 
                    this._z && (this._result.z = this._z.evaluate(t)), this._result;
                }, t;
            }(), Fe = function() {
                function t(t, e, n, i) {
                    this._result = new Z(), this._x = t, this._y = e, this._z = n, this._w = i;
                }
                return t.prototype.evaluate = function(t, e) {
                    return this._x && this._y && this._z && this._w || !e.getValue || Z.copy(this._result, e.getValue()), 
                    this._x && (this._result.x = this._x.evaluate(t)), this._y && (this._result.y = this._y.evaluate(t)), 
                    this._z && (this._result.z = this._z.evaluate(t)), this._w && (this._result.w = this._w.evaluate(t)), 
                    this._result;
                }, t;
            }(), De = e("Q", S(ht + "QuatTrack")(Ee = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                s(e, t);
                var n = e.prototype;
                return n.createCurve = function() {
                    return new O();
                }, n[lt] = function() {
                    return new Ve(this.channels()[0].curve);
                }, e;
            }(oe)) || Ee), Ve = function() {
                function t(t) {
                    this._result = new Y(), this._curve = t;
                }
                return t.prototype.evaluate = function(t) {
                    return this._curve.evaluate(t, this._result), this._result;
                }, t;
            }(), Ue = [ "Red", "Green", "Blue", "Alpha" ], Be = e("e", S(ht + "ColorTrack")((ke = function(t) {
                function e() {
                    var e;
                    e = t.call(this) || this, c(e, "_channels", Se, d(e)), e._channels = new Array(4);
                    for (var n = 0; n < e._channels.length; ++n) {
                        var i = new se(new x());
                        i.name = Ue[n], e._channels[n] = i;
                    }
                    return e;
                }
                s(e, t);
                var n = e.prototype;
                return n.channels = function() {
                    return this._channels;
                }, n[lt] = function() {
                    return new He(Te(this._channels[0].curve), Te(this._channels[1].curve), Te(this._channels[2].curve), Te(this._channels[3].curve));
                }, e;
            }(ae), Se = l((Pe = ke).prototype, "_channels", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ae = Pe)) || Ae), He = function() {
                function t(t, e, n, i) {
                    this._result = new $(), this._x = t, this._y = e, this._z = n, this._w = i;
                }
                return t.prototype.evaluate = function(t, e) {
                    return this._x && this._y && this._z && this._w || !e.getValue || $.copy(this._result, e.getValue()), 
                    this._x && (this._result.r = this._x.evaluate(t)), this._y && (this._result.g = this._y.evaluate(t)), 
                    this._z && (this._result.b = this._z.evaluate(t)), this._w && (this._result.a = this._w.evaluate(t)), 
                    this._result;
                }, t;
            }(), We = [ "Width", "Height" ], Qe = e("S", S(ht + "SizeTrack")((Oe = function(t) {
                function e() {
                    var e;
                    e = t.call(this) || this, c(e, "_channels", xe, d(e)), e._channels = new Array(2);
                    for (var n = 0; n < e._channels.length; ++n) {
                        var i = new se(new x());
                        i.name = We[n], e._channels[n] = i;
                    }
                    return e;
                }
                s(e, t);
                var n = e.prototype;
                return n.channels = function() {
                    return this._channels;
                }, n[lt] = function() {
                    return new je(Te(this._channels[0].curve), Te(this._channels[1].curve));
                }, e;
            }(ae), xe = l((Ie = Oe).prototype, "_channels", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ce = Ie)) || Ce), je = function() {
                function t(t, e) {
                    this._result = new tt(), this._width = t, this._height = e;
                }
                return t.prototype.evaluate = function(t, e) {
                    if ((!this._width || !this._height) && e.getValue) {
                        var n = e.getValue();
                        this._result.x = n.x, this._result.y = n.y;
                    }
                    return this._width && (this._result.width = this._width.evaluate(t)), this._height && (this._result.height = this._height.evaluate(t)), 
                    this._result;
                }, t;
            }(), qe = e("O", S(ht + "ObjectTrack")(Ne = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return s(e, t), e.prototype.createCurve = function() {
                    return new N();
                }, e;
            }(oe)) || Ne), Ke = e("o", function() {
                function t(t) {
                    var e, n;
                    this.ratios = void 0, this._findRatio = void 0, this.ratios = t;
                    for (var i = !0, r = 1, a = t.length; r < a; r++) if (e = t[r] - t[r - 1], 1 === r) n = e; else if (Math.abs(e - n) > 1e-6) {
                        i = !1;
                        break;
                    }
                    this._findRatio = i ? Je : z;
                }
                return t.prototype.sample = function(t) {
                    return this._findRatio(this.ratios, t);
                }, t;
            }());
            r.RatioSampler = Ke;
            var Ge = e("p", function() {
                function t(e, n) {
                    this.types = void 0, this.type = null, this._values = [], this._lerp = void 0, this._duration = void 0, 
                    this._array = void 0, this._duration = n, this._values = e.values;
                    var i = function(e) {
                        return "string" == typeof e ? e : Array.isArray(e) ? e[0] === e[1] && e[2] === e[3] ? t.Linear : t.Bezier(e) : t.Linear;
                    };
                    if (void 0 !== e.easingMethod) this.type = i(e.easingMethod); else if (Array.isArray(e.easingMethods)) this.types = e.easingMethods.map(i); else if (void 0 !== e.easingMethods) {
                        this.types = new Array(this._values.length).fill(null);
                        for (var r = 0, a = Object.keys(e.easingMethods); r < a.length; r++) {
                            var s = a[r];
                            this.types[s] = i(e.easingMethods[s]);
                        }
                    } else this.type = null;
                    var o = e.values[0];
                    (void 0 === e.interpolate || e.interpolate) && (this._lerp = on(o)), void 0 !== e._arrayLength && (this._array = new Array(e._arrayLength));
                }
                t.Bezier = function(t) {
                    return t;
                };
                var e = t.prototype;
                return e.hasLerp = function() {
                    return !!this._lerp;
                }, e.valueAt = function(t) {
                    if (void 0 === this._array) {
                        var e = this._values[t];
                        return e && e.getNoLerp ? e.getNoLerp() : e;
                    }
                    for (var n = 0; n < this._array.length; ++n) this._array[n] = this._values[this._array.length * t + n];
                    return this._array;
                }, e.valueBetween = function(t, e, n, i, r) {
                    if (this._lerp) {
                        var a = this.types ? this.types[e] : this.type, s = r - n, o = (t - n) / s;
                        if (a && (o = Xe(o, a)), void 0 === this._array) {
                            var u = this._values[e], h = this._values[i];
                            return this._lerp(u, h, o, s * this._duration);
                        }
                        for (var l = 0; l < this._array.length; ++l) {
                            var c = this._values[this._array.length * e + l], f = this._values[this._array.length * i + l];
                            this._array[l] = this._lerp(c, f, o, s * this._duration);
                        }
                        return this._array;
                    }
                    if (void 0 === this._array) return this.valueAt(e);
                    for (var p = 0; p < this._array.length; ++p) this._array[p] = this._values[this._array.length * e + p];
                    return this._array;
                }, e.empty = function() {
                    return 0 === this._values.length;
                }, e.constant = function() {
                    return 1 === this._values.length;
                }, t;
            }());
            function Ye(t, e, n) {
                var i = e.sample(n);
                if (i < 0) if ((i = ~i) <= 0) i = 0; else {
                    if (!(i >= e.ratios.length)) return t.valueBetween(n, i - 1, e.ratios[i - 1], i, e.ratios[i]);
                    i = e.ratios.length - 1;
                }
                return t.valueAt(i);
            }
            function Xe(t, e) {
                if ("string" == typeof e) {
                    var n = M[e];
                    n ? t = n(t) : p(3906, e);
                } else Array.isArray(e) && (t = L(e, t));
                return t;
            }
            function Je(t, e) {
                var n = t.length - 1;
                if (0 === n) return 0;
                var i = t[0];
                if (e < i) return 0;
                var r = t[n];
                if (e > r) return n;
                var a = (e = (e - i) / (r - i)) / (1 / n), s = 0 | a, o = 1e-6;
                return a - s < o ? s : s + 1 - a < o ? s + 1 : ~(s + 1);
            }
            Ge.Linear = null, r.AnimCurve = Ge, e("E", function() {
                function t() {
                    this.events = [];
                }
                return t.prototype.add = function(t, e) {
                    this.events.push({
                        func: t || "",
                        params: e || []
                    });
                }, t;
            }()), r.sampleAnimationCurve = Ye;
            var Ze, $e, tn, en, nn, rn, an, sn, on = function() {
                function e(t, e, n, i) {
                    return t.lerp(e, n, i);
                }
                return function(n) {
                    if (null !== n) {
                        if ("number" == typeof n) return et;
                        if ("object" == t(n) && n.constructor) {
                            if (n instanceof Y) return i = new Y(), function(t, e, n) {
                                return Y.slerp(i, t, e, n);
                            };
                            if (n instanceof v) return function(t) {
                                var e = new t();
                                return function(n, i, r) {
                                    return t.lerp(e, n, i, r), e;
                                };
                            }(n.constructor);
                            if (n.constructor === Number) return et;
                            if (R(n)) return e;
                        }
                        var i;
                    }
                };
            }(), un = S(ht + "UntypedTrackChannel")((en = function(t) {
                function e() {
                    var e;
                    return e = t.call(this, new x()) || this, c(e, "property", tn, d(e)), e;
                }
                return s(e, t), e;
            }(se), tn = l(($e = en).prototype, "property", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Ze = $e)) || Ze, hn = S(ht + "UntypedTrack")((sn = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, c(e, "_channels", an, d(e)), 
                    e;
                }
                s(e, t);
                var i = e.prototype;
                return i.channels = function() {
                    return this._channels;
                }, i[lt] = function(t) {
                    var e = this;
                    if (!t.getValue) throw new Error(n(3930));
                    var i = function(t) {
                        var n;
                        return null === (n = e._channels.find(function(e) {
                            return e.property === t;
                        })) || void 0 === n ? void 0 : n.curve;
                    }, r = t.getValue();
                    switch (!0) {
                      default:
                        throw new Error(n(3931));

                      case r instanceof X:
                        return new ze(i("x"), i("y"));

                      case r instanceof J:
                        return new Re(i("x"), i("y"), i("z"));

                      case r instanceof Z:
                        return new Fe(i("x"), i("y"), i("z"), i("w"));

                      case r instanceof $:
                        return new He(i("r"), i("g"), i("b"), i("a"));

                      case r instanceof tt:
                        return new je(i("width"), i("height"));
                    }
                }, i.addChannel = function(t) {
                    var e = new un();
                    return e.property = t, this._channels.push(e), e;
                }, i.upgrade = function(t) {
                    var e = this, n = function(t, n) {
                        var i = e.channels().find(function(e) {
                            return e.property === t;
                        });
                        i && (n.name = i.name, n.curve.assignSorted(Array.from(i.curve.times()), Array.from(i.curve.values())));
                    }, i = t(this.path, this.proxy);
                    switch (i) {
                      default:
                        break;

                      case "vec2":
                      case "vec3":
                      case "vec4":
                        var r = new Le();
                        r.path = this.path, r.proxy = this.proxy, r.componentsCount = "vec2" === i ? 2 : "vec3" === i ? 3 : 4;
                        var a = r.channels(), s = a[0], o = a[1], u = a[2], h = a[3];
                        switch (i) {
                          case "vec4":
                            n("w", h);

                          case "vec3":
                            n("z", u);

                          default:
                          case "vec2":
                            n("x", s), n("y", o);
                        }
                        return r;

                      case "color":
                        var l = new Be(), c = l.channels(), f = c[0], p = c[1], _ = c[2], d = c[3];
                        return n("r", f), n("g", p), n("b", _), n("a", d), n("x", f), n("y", p), n("z", _), 
                        n("w", d), l;

                      case "size":
                    }
                    return null;
                }, e;
            }(ae), an = l((rn = sn).prototype, "_channels", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), nn = rn)) || nn, ln = function() {
                function e(t) {
                    this._keys = [], this._curves = [], this._commonTargets = [], this._ratioSamplers = [], 
                    this._runtimeCurves = void 0, this._data = null, this._duration = void 0, this._duration = t;
                }
                var n = e.prototype;
                return n.getPropertyCurves = function() {
                    return this._runtimeCurves || this._createPropertyCurves(), this._runtimeCurves;
                }, n.toTracks = function() {
                    for (var e, n = [], i = this.keys, r = this.curves, a = this.commonTargets, s = function(t, e, n) {
                        for (var i, r = new ie(), a = _(e); !(i = a()).done; ) {
                            var s = i.value;
                            "string" == typeof s ? r.toProperty(s) : "number" == typeof s ? r.toElement(s) : s instanceof Zt ? r.toHierarchy(s.path) : s instanceof $t ? r.toComponent(s.component) : r.toCustomized(s);
                        }
                        t.path = r, t.proxy = n;
                    }, o = a.map(function(t) {
                        var e = new hn();
                        return s(e, t.modifiers, t.valueAdapter), n.push(e), e;
                    }), l = function() {
                        var r, a = e.value, l = a.data, c = l.values;
                        if (0 === c.length) return "continue";
                        var f = l.keys < 0 ? [ 0 ] : i[l.keys], p = c[0], _ = null === (r = l.interpolate) || void 0 === r || r;
                        u("number" != typeof l._arrayLength || "number" == typeof p);
                        var d = new fn(l, f.length), v = function(t) {
                            s(t, a.modifiers, a.valueAdapter);
                        }, m = void 0;
                        if ("number" == typeof a.commonTarget) {
                            if (!c.every(function(t) {
                                return "number" == typeof t;
                            })) return h(3932), "continue";
                            if (a.valueAdapter || 1 !== a.modifiers.length || "string" != typeof a.modifiers[0]) return h(3933), 
                            "continue";
                            var y = a.modifiers[0], g = o[a.commonTarget].addChannel(y).curve;
                            m = g;
                        }
                        !function() {
                            if ("number" == typeof p) {
                                if (!c.every(function(t) {
                                    return "number" == typeof t;
                                })) return void h(3934);
                                var e;
                                if (m) e = m; else {
                                    var i = new we();
                                    v(i), n.push(i), e = i.channel.curve;
                                }
                                var r = _ ? D.LINEAR : D.CONSTANT;
                                return e.assignSorted(f, c.map(function(t) {
                                    return {
                                        value: t,
                                        interpolationMode: r
                                    };
                                })), void d.convert(e);
                            }
                            if ("object" == t(p)) switch (!0) {
                              default:
                                break;

                              case cn(c, X):
                              case cn(c, J):
                              case cn(c, Z):
                                var a = p instanceof X ? 2 : p instanceof J ? 3 : 4, s = new Le();
                                v(s), s.componentsCount = a;
                                var o = s.channels(), u = o[0].curve, l = o[1].curve, y = o[2].curve, g = o[3].curve, b = _ ? D.LINEAR : D.CONSTANT, w = function(t) {
                                    return {
                                        value: t,
                                        interpolationMode: b
                                    };
                                };
                                switch (a) {
                                  case 4:
                                    g.assignSorted(f, c.map(function(t) {
                                        return w(t.w);
                                    })), d.convert(g);

                                  case 3:
                                    y.assignSorted(f, c.map(function(t) {
                                        return w(t.z);
                                    })), d.convert(y);

                                  default:
                                    u.assignSorted(f, c.map(function(t) {
                                        return w(t.x);
                                    })), d.convert(u), l.assignSorted(f, c.map(function(t) {
                                        return w(t.y);
                                    })), d.convert(l);
                                }
                                return void n.push(s);

                              case cn(c, Y):
                                var T = new De();
                                v(T);
                                var E = _ ? U.SLERP : U.CONSTANT;
                                return T.channel.curve.assignSorted(f, c.map(function(t) {
                                    return {
                                        value: Y.clone(t),
                                        interpolationMode: E
                                    };
                                })), d.convertQuatCurve(T.channel.curve), void n.push(T);

                              case cn(c, $):
                                var A = new Be();
                                v(A);
                                var P = A.channels(), S = P[0].curve, k = P[1].curve, C = P[2].curve, I = P[3].curve, x = _ ? D.LINEAR : D.CONSTANT, O = function(t) {
                                    return {
                                        value: t,
                                        interpolationMode: x
                                    };
                                };
                                return S.assignSorted(f, c.map(function(t) {
                                    return O(t.r);
                                })), d.convert(S), k.assignSorted(f, c.map(function(t) {
                                    return O(t.g);
                                })), d.convert(k), C.assignSorted(f, c.map(function(t) {
                                    return O(t.b);
                                })), d.convert(C), I.assignSorted(f, c.map(function(t) {
                                    return O(t.a);
                                })), d.convert(I), void n.push(A);

                              case cn(c, tt):
                                var N = new Qe();
                                v(N);
                                var M = N.channels(), L = M[0].curve, z = M[1].curve, R = _ ? D.LINEAR : D.CONSTANT, F = function(t) {
                                    return {
                                        value: t,
                                        interpolationMode: R
                                    };
                                };
                                return L.assignSorted(f, c.map(function(t) {
                                    return F(t.width);
                                })), d.convert(L), z.assignSorted(f, c.map(function(t) {
                                    return F(t.height);
                                })), d.convert(z), void n.push(N);

                              case cn(c, be):
                                var V = new we();
                                v(V);
                                var B = _ ? D.CUBIC : D.CONSTANT;
                                return V.channel.curve.assignSorted(f, c.map(function(t) {
                                    return {
                                        value: t.dataPoint,
                                        leftTangent: t.inTangent,
                                        rightTangent: t.outTangent,
                                        interpolationMode: B
                                    };
                                })), void n.push(V);

                              case cn(c, ve):
                              case cn(c, me):
                              case cn(c, ye):
                                var H = p instanceof ve ? 2 : p instanceof me ? 3 : 4, W = new Le();
                                v(W), W.componentsCount = H;
                                var Q = W.channels(), j = Q[0], q = Q[1], K = Q[2], G = Q[3], et = _ ? D.LINEAR : D.CONSTANT, nt = function(t, e, n) {
                                    return {
                                        value: t,
                                        leftTangent: e,
                                        rightTangent: n,
                                        interpolationMode: et
                                    };
                                };
                                switch (H) {
                                  case 4:
                                    G.curve.assignSorted(f, c.map(function(t) {
                                        return nt(t.dataPoint.w, t.inTangent.w, t.outTangent.w);
                                    }));

                                  case 3:
                                    K.curve.assignSorted(f, c.map(function(t) {
                                        return nt(t.dataPoint.z, t.inTangent.z, t.outTangent.z);
                                    }));

                                  default:
                                    j.curve.assignSorted(f, c.map(function(t) {
                                        return nt(t.dataPoint.y, t.inTangent.y, t.outTangent.y);
                                    })), q.curve.assignSorted(f, c.map(function(t) {
                                        return nt(t.dataPoint.x, t.inTangent.x, t.outTangent.x);
                                    }));
                                }
                                return void n.push(W);

                              case c.every(function(t) {
                                    return t instanceof ge;
                                }):
                                h(3935);
                            }
                            var it = new qe();
                            v(it), it.channel.curve.assignSorted(f, c), n.push(it);
                        }();
                    }, c = _(r); !(e = c()).done; ) l();
                    return n;
                }, n._createPropertyCurves = function() {
                    var t = this;
                    this._ratioSamplers = this._keys.map(function(e) {
                        return new Ke(e.map(function(e) {
                            return e / t._duration;
                        }));
                    }), this._runtimeCurves = this._curves.map(function(e) {
                        return {
                            curve: new Ge(e.data, t._duration),
                            modifiers: e.modifiers,
                            valueAdapter: e.valueAdapter,
                            sampler: t._ratioSamplers[e.data.keys],
                            commonTarget: e.commonTarget
                        };
                    });
                }, i(e, [ {
                    key: "keys",
                    get: function() {
                        return this._keys;
                    },
                    set: function(t) {
                        this._keys = t;
                    }
                }, {
                    key: "curves",
                    get: function() {
                        return this._curves;
                    },
                    set: function(t) {
                        this._curves = t, delete this._runtimeCurves;
                    }
                }, {
                    key: "commonTargets",
                    get: function() {
                        return this._commonTargets;
                    },
                    set: function(t) {
                        this._commonTargets = t;
                    }
                }, {
                    key: "data",
                    get: function() {
                        return this._data;
                    }
                } ]), e;
            }();
            function cn(t, e) {
                return t.every(function(t) {
                    return t instanceof e;
                });
            }
            var fn = function() {
                function t(t, e) {
                    this._easingMethods = void 0;
                    var n = t.easingMethods;
                    Array.isArray(n) ? 0 === n.length && 0 !== e ? this._easingMethods = new Array(e).fill(null) : this._easingMethods = n : this._easingMethods = void 0 === n ? new Array(e).fill(t.easingMethod) : Array.from({
                        length: e
                    }, function(t, e) {
                        var i;
                        return null !== (i = n[e]) && void 0 !== i ? i : null;
                    });
                }
                var e = t.prototype;
                return e.convert = function(t) {
                    var e, n, i, r, a, s, o, h, l, c, f, p, _, d, v, m, y, g, b, w, T, E = this._easingMethods;
                    if (E) {
                        var A = t.keyFramesCount;
                        if (!(t.keyFramesCount < 2)) {
                            Array.isArray(E) && u(A === E.length);
                            for (var P = A - 1, S = 0; S < P; ++S) {
                                var k = E[S];
                                k && (Array.isArray(k) ? (e = k, n = t.getKeyframeTime(S), i = t.getKeyframeValue(S), 
                                r = t.getKeyframeTime(S + 1), a = t.getKeyframeValue(S + 1), void 0, void 0, void 0, 
                                void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, 
                                void 0, void 0, void 0, void 0, o = e[0], h = e[1], l = e[2], c = e[3], f = i.value, 
                                m = (1 - l) * (p = 3 * (r - n)), y = (1 - c) * (_ = 3 * (a.value - f)), 1 / 3, g = (v = h * _) / (d = o * p), 
                                b = Math.sqrt(d * d + v * v) * (1 / 3), w = y / m, T = Math.sqrt(m * m + y * y) * (1 / 3), 
                                i.interpolationMode = D.CUBIC, i.tangentWeightMode = (s = i.tangentWeightMode) === V.NONE ? V.RIGHT : s === V.LEFT ? V.BOTH : s, 
                                i.rightTangent = g, i.rightTangentWeight = b, a.tangentWeightMode = function(t) {
                                    return t === V.NONE ? V.LEFT : t === V.RIGHT ? V.BOTH : t;
                                }(a.tangentWeightMode), a.leftTangent = w, a.leftTangentWeight = T) : pn(k, t, S));
                            }
                        }
                    }
                }, e.convertQuatCurve = function(t) {
                    var e = this._easingMethods;
                    if (e) {
                        var n = t.keyFramesCount;
                        if (!(t.keyFramesCount < 2)) {
                            Array.isArray(e) && u(n === e.length);
                            for (var i = n - 1, r = 0; r < i; ++r) {
                                var a = e[r];
                                a && (Array.isArray(a) ? t.getKeyframeValue(r).easingMethod = a.slice() : _n(a, t, r));
                            }
                        }
                    }
                }, i(t, [ {
                    key: "nil",
                    get: function() {
                        return !this._easingMethods || this._easingMethods.every(function(t) {
                            return null == t;
                        });
                    }
                } ]), t;
            }();
            function pn(t, e, n) {
                u(n !== e.keyFramesCount - 1);
                var i = e.getKeyframeValue(n), r = Qn[t];
                r === F.CONSTANT ? i.interpolationMode = D.CONSTANT : (i.interpolationMode = D.LINEAR, 
                i.easingMethod = r);
            }
            function _n(t, e, n) {
                u(n !== e.keyFramesCount - 1);
                var i = e.getKeyframeValue(n), r = Qn[t];
                i.easingMethod = r;
            }
            var dn, vn, mn, yn, gn, bn, wn, Tn, En, An, Pn, Sn, kn, Cn, In, xn, On, Nn, Mn, Ln, zn, Rn, Fn, Dn, Vn, Un, Bn, Hn, Wn, Qn = {
                constant: F.CONSTANT,
                linear: F.LINEAR,
                quadIn: F.QUAD_IN,
                quadOut: F.QUAD_OUT,
                quadInOut: F.QUAD_IN_OUT,
                quadOutIn: F.QUAD_OUT_IN,
                cubicIn: F.CUBIC_IN,
                cubicOut: F.CUBIC_OUT,
                cubicInOut: F.CUBIC_IN_OUT,
                cubicOutIn: F.CUBIC_OUT_IN,
                quartIn: F.QUART_IN,
                quartOut: F.QUART_OUT,
                quartInOut: F.QUART_IN_OUT,
                quartOutIn: F.QUART_OUT_IN,
                quintIn: F.QUINT_IN,
                quintOut: F.QUINT_OUT,
                quintInOut: F.QUINT_IN_OUT,
                quintOutIn: F.QUINT_OUT_IN,
                sineIn: F.SINE_IN,
                sineOut: F.SINE_OUT,
                sineInOut: F.SINE_IN_OUT,
                sineOutIn: F.SINE_OUT_IN,
                expoIn: F.EXPO_IN,
                expoOut: F.EXPO_OUT,
                expoInOut: F.EXPO_IN_OUT,
                expoOutIn: F.EXPO_OUT_IN,
                circIn: F.CIRC_IN,
                circOut: F.CIRC_OUT,
                circInOut: F.CIRC_IN_OUT,
                circOutIn: F.CIRC_OUT_IN,
                elasticIn: F.ELASTIC_IN,
                elasticOut: F.ELASTIC_OUT,
                elasticInOut: F.ELASTIC_IN_OUT,
                elasticOutIn: F.ELASTIC_OUT_IN,
                backIn: F.BACK_IN,
                backOut: F.BACK_OUT,
                backInOut: F.BACK_IN_OUT,
                backOutIn: F.BACK_OUT_IN,
                bounceIn: F.BOUNCE_IN,
                bounceOut: F.BOUNCE_OUT,
                bounceInOut: F.BOUNCE_IN_OUT,
                bounceOutIn: F.BOUNCE_OUT_IN,
                smooth: F.SMOOTH,
                fade: F.FADE
            };
            function jn() {
                throw new Error("split() only valid in Editor.");
            }
            S(ht + "ExoticAnimation")((mn = function() {
                function t() {
                    c(this, "_nodeAnimations", vn, this);
                }
                var e = t.prototype;
                return e.createEvaluator = function(t) {
                    return new ei(this._nodeAnimations, t);
                }, e.addNodeAnimation = function(t) {
                    var e = new qn(t);
                    return this._nodeAnimations.push(e), e;
                }, e.collectAnimatedJoints = function() {
                    return Array.from(new Set(this._nodeAnimations.map(function(t) {
                        return t.path;
                    })));
                }, e.split = function() {
                    return jn();
                }, e.toHashString = function() {
                    return this._nodeAnimations.map(function(t) {
                        return t.toHashString();
                    }).join("\n");
                }, t;
            }(), vn = l((dn = mn).prototype, "_nodeAnimations", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), dn));
            var qn = S(ht + "ExoticNodeAnimation")((An = function() {
                function t(t) {
                    c(this, "_path", bn, this), c(this, "_position", wn, this), c(this, "_rotation", Tn, this), 
                    c(this, "_scale", En, this), this._path = t;
                }
                var e = t.prototype;
                return e.createPosition = function(t, e) {
                    this._position = new Zn(t, new Xn(e));
                }, e.createRotation = function(t, e) {
                    this._rotation = new Zn(t, new Jn(e));
                }, e.createScale = function(t, e) {
                    this._scale = new Zn(t, new Xn(e));
                }, e.createEvaluator = function(t) {
                    return new ni(this._path, this._position, this._rotation, this._scale, t);
                }, e.split = function() {
                    return jn();
                }, e.toHashString = function() {
                    var t, e, n, i, r, a;
                    return this._path + "\n" + (null !== (t = null === (e = this._position) || void 0 === e ? void 0 : e.toHashString()) && void 0 !== t ? t : "") + (null !== (n = null === (i = this._scale) || void 0 === i ? void 0 : i.toHashString()) && void 0 !== n ? n : "") + (null !== (r = null === (a = this._rotation) || void 0 === a ? void 0 : a.toHashString()) && void 0 !== r ? r : "");
                }, i(t, [ {
                    key: "path",
                    get: function() {
                        return this._path;
                    }
                } ]), t;
            }(), bn = l((gn = An).prototype, "_path", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), wn = l(gn.prototype, "_position", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Tn = l(gn.prototype, "_rotation", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), En = l(gn.prototype, "_scale", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), yn = gn)) || yn;
            function Kn(t) {
                return t.toPrecision(2);
            }
            function Gn(t) {
                return t.map(Kn).join(" ");
            }
            var Yn = S(ht + "ExoticVectorLikeTrackValues")((In = function() {
                function t(t) {
                    c(this, "_values", kn, this), c(this, "_isQuantized", Cn, this), this._values = t, 
                    this._isQuantized = !1;
                }
                var e = t.prototype;
                return e.quantize = function(t) {
                    u(!this._isQuantized), this._values = function(t, e) {
                        var n = ri[e], i = 1 << n.BYTES_PER_ELEMENT, r = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY;
                        t.forEach(function(t) {
                            r = Math.min(t, r), a = Math.max(t, a);
                        });
                        var s = a - r, o = n.from(t, function(t) {
                            return (t - r) / s * i;
                        });
                        return new bi(ai(t), o, s, r);
                    }(this._values, t), this._isQuantized = !0;
                }, e.toHashString = function() {
                    var t = this._isQuantized, e = this._values;
                    return t + " " + (t ? e.toHashString() : Gn(e));
                }, i(t, [ {
                    key: "precision",
                    get: function() {
                        return this._isQuantized ? this._values.originalPrecision : ai(this._values);
                    }
                } ]), t;
            }(), kn = l((Sn = In).prototype, "_values", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Cn = l(Sn.prototype, "_isQuantized", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Pn = Sn)) || Pn, Xn = S(ht + "ExoticVec3TrackValues")(xn = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                s(e, t), e.imitate = function(t, n) {
                    var i = new e(t);
                    return n._isQuantized && i.quantize(n._values.quantizationType), i;
                };
                var n = e.prototype;
                return n.get = function(t, e) {
                    var n = this._values;
                    this._isQuantized ? Ei(n, t, e) : J.fromArray(e, n, 3 * t);
                }, n.lerp = function(t, e, n, i, r, a) {
                    var s = this._values;
                    this._isQuantized ? (Ei(s, t, i), Ei(s, e, r)) : (J.fromArray(i, s, 3 * t), J.fromArray(r, s, 3 * e)), 
                    J.lerp(a, i, r, n);
                }, e;
            }(Yn)) || xn, Jn = S(ht + "ExoticQuatTrackValues")(On = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                s(e, t), e.imitate = function(t, n) {
                    var i = new e(t);
                    return n._isQuantized && i.quantize(n._values.quantizationType), i;
                };
                var n = e.prototype;
                return n.get = function(t, e) {
                    var n = this._values;
                    this._isQuantized ? Ai(n, t, e) : Y.fromArray(e, n, 4 * t);
                }, n.lerp = function(t, e, n, i, r, a) {
                    var s = this._values;
                    this._isQuantized ? (Ai(s, t, i), Ai(s, e, r)) : (Y.fromArray(i, s, 4 * t), Y.fromArray(r, s, 4 * e)), 
                    Y.slerp(a, i, r, n);
                }, e;
            }(Yn)) || On, Zn = S(ht + "ExoticTrack")((Rn = function() {
                function t(t, e) {
                    c(this, "times", Ln, this), c(this, "values", zn, this), this.times = t, this.values = e;
                }
                return t.prototype.toHashString = function() {
                    var t = this.times, e = this.values;
                    return "times: " + Gn(t) + "; values: " + e.toHashString();
                }, t;
            }(), Ln = l((Mn = Rn).prototype, "times", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), zn = l(Mn.prototype, "values", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Nn = Mn)) || Nn;
            function $n(t, e) {
                t.length, u(0 !== t.length);
                var n = 0, i = 0, r = z(t, e);
                if (r >= 0) n = r; else {
                    var a = ~r, s = a - 1;
                    n = s;
                    var o = t[a], h = t[s];
                    i = (e - h) / (o - h);
                }
                return {
                    index: n,
                    ratio: i
                };
            }
            !function() {
                function t() {
                    this._reset();
                }
                var e = t.prototype;
                e.transformTime = function(t) {
                    return t - this._timeOffset;
                }, e.calculate = function(t, e, n) {
                    this._reset();
                    var i = t.length;
                    if (i) {
                        var r = t[0], a = t[i - 1], s = nt(e, r, a), o = nt(n, r, a);
                        this._timeOffset = s;
                        var h = function(t, e, n) {
                            var i = t.length;
                            u(n >= e && e >= t[0] && n <= t[i - 1]);
                            var r = $n(t, e), a = r.index, s = r.ratio, o = $n(t, n);
                            return {
                                fromIndex: a,
                                fromRatio: s,
                                toIndex: o.index,
                                toRatio: o.ratio
                            };
                        }(t, s, o), l = h.fromIndex, c = h.fromRatio, f = h.toIndex, p = h.toRatio, _ = !c, d = !p;
                        l !== f || c !== p ? (_ || (this.preLerpIndex = l, this.preLerpRatio = c), this.directKeyframesBegin = _ ? l : l + 1, 
                        this.directKeyframesEnd = f + 1, d || (this.postLerpIndex = f, this.postLerpRatio = p)) : _ ? (this.directKeyframesBegin = l, 
                        this.directKeyframesEnd = l + 1) : (this.preLerpIndex = l, this.preLerpRatio = c);
                    }
                }, e._reset = function() {
                    this.preLerpIndex = -1, this.preLerpRatio = 0, this.directKeyframesBegin = 0, this.directKeyframesEnd = 0, 
                    this.postLerpIndex = -1, this.postLerpRatio = 0, this._timeOffset = 0;
                }, i(t, [ {
                    key: "keyframesCount",
                    get: function() {
                        var t = this.preLerpIndex, e = this.directKeyframesBegin;
                        return 0 + (t < 0 ? 0 : 1) + (this.directKeyframesEnd - e) + (this.postLerpIndex < 0 ? 0 : 1);
                    }
                } ]);
            }();
            var ti, ei = function() {
                function t(t, e) {
                    this._nodeEvaluations = void 0, this._nodeEvaluations = t.map(function(t) {
                        return t.createEvaluator(e);
                    });
                }
                return t.prototype.evaluate = function(t) {
                    this._nodeEvaluations.forEach(function(e) {
                        e.evaluate(t);
                    });
                }, t;
            }(), ni = function() {
                function t(t, e, n, i, r) {
                    this._position = null, this._rotation = null, this._scale = null, e && (this._position = Ti(e.times, e.values, J, t, "position", r)), 
                    n && (this._rotation = Ti(n.times, n.values, Y, t, "rotation", r)), i && (this._scale = Ti(i.times, i.values, J, t, "scale", r));
                }
                return t.prototype.evaluate = function(t) {
                    if (this._position) {
                        var e = this._position.evaluator.evaluate(t);
                        this._position.runtimeBinding.setValue(e);
                    }
                    if (this._rotation) {
                        var n = this._rotation.evaluator.evaluate(t);
                        this._rotation.runtimeBinding.setValue(n);
                    }
                    if (this._scale) {
                        var i = this._scale.evaluator.evaluate(t);
                        this._scale.runtimeBinding.setValue(i);
                    }
                }, t;
            }(), ii = function() {
                function t(t, e, n) {
                    this._times = void 0, this._inputSampleResultCache = {
                        just: !1,
                        index: -1,
                        nextIndex: -1,
                        ratio: 0
                    }, this._values = void 0, this._prevValue = void 0, this._nextValue = void 0, this._resultValue = void 0, 
                    this._times = t, this._values = e, this._prevValue = new n(), this._nextValue = new n(), 
                    this._resultValue = new n();
                }
                return t.prototype.evaluate = function(t) {
                    var e = this._times, n = this._values, i = this._resultValue;
                    if (0 === e.length) return i;
                    var r = function(t, e, n) {
                        var i = t.length, r = t[0], a = t[i - 1];
                        if (e < r) n.just = !0, n.index = 0; else if (e > a) n.just = !0, n.index = i - 1; else {
                            var s = z(t, e);
                            if (s >= 0) n.just = !0, n.index = s; else {
                                var o = ~s, u = o - 1, h = t[u], l = t[o], c = (e - t[u]) / (l - h);
                                n.just = !1, n.index = u, n.nextIndex = o, n.ratio = c;
                            }
                        }
                        return n;
                    }(e, t, this._inputSampleResultCache);
                    return r.just ? n.get(r.index, i) : n.lerp(r.index, r.nextIndex, r.ratio, this._prevValue, this._nextValue, i), 
                    i;
                }, t;
            }(), ri = {
                uint8: Uint8Array,
                uint16: Uint16Array
            };
            function ai(t) {
                switch (t.BYTES_PER_ELEMENT) {
                  default:
                  case 4:
                    return ti.FLOAT_32;

                  case 8:
                    return ti.FLOAT_64;
                }
            }
            !function(t) {
                t[t.FLOAT_32 = 0] = "FLOAT_32", t[t.FLOAT_64 = 1] = "FLOAT_64";
            }(ti || (ti = {}));
            var si, oi, ui, hi, li, ci, fi, pi, _i, di, vi, mi, yi, gi, bi = S(ht + "QuantizedFloatArray")((Wn = function() {
                function t(t, e, n, i) {
                    void 0 === i && (i = 0), c(this, "originalPrecision", Vn, this), c(this, "min", Un, this), 
                    c(this, "extent", Bn, this), c(this, "values", Hn, this), this.originalPrecision = t, 
                    this.values = e, this.extent = n, this.min = i;
                }
                return t.prototype.toHashString = function() {
                    var t = this.originalPrecision, e = this.min, n = this.extent, i = this.values;
                    return t + " " + Kn(e) + " " + Kn(n) + " " + i.join(" ");
                }, i(t, [ {
                    key: "quantizationType",
                    get: function() {
                        switch (this.values.BYTES_PER_ELEMENT) {
                          default:
                          case 1:
                            return "uint8";

                          case 2:
                            return "uint16";
                        }
                    }
                } ]), t;
            }(), Vn = l((Dn = Wn).prototype, "originalPrecision", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Un = l(Dn.prototype, "min", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Bn = l(Dn.prototype, "extent", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Hn = l(Dn.prototype, "values", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Fn = Dn)) || Fn;
            function wi(t, e) {
                return t.values[e] / (1 << t.values.BYTES_PER_ELEMENT) * t.extent + t.min;
            }
            function Ti(t, e, n, i, r, a) {
                var s = new re();
                s.path = new ie().toHierarchy(i).toProperty(r);
                var o = a(s);
                return o ? {
                    runtimeBinding: o,
                    evaluator: new ii(t, e, n)
                } : null;
            }
            function Ei(t, e, n) {
                J.set(n, wi(t, 3 * e + 0), wi(t, 3 * e + 1), wi(t, 3 * e + 2));
            }
            function Ai(t, e, n) {
                Y.set(n, wi(t, 4 * e + 0), wi(t, 4 * e + 1), wi(t, 4 * e + 2), wi(t, 4 * e + 3));
            }
            var Pi = Symbol("SearchForRootBonePath"), Si = Symbol("ExoticAnimation"), ki = Symbol("[[EmbeddedPlayerCount]]"), Ci = Symbol("[[GetEmbeddedPlayers]]"), Ii = Symbol("[[AddEmbeddedPlayer]]"), xi = Symbol("[[RemoveEmbeddedPlayer]]"), Oi = Symbol("[[ClearEmbeddedPlayers]]"), Ni = e("b", S("cc.AnimationClip")((gi = yi = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, c(e, "sample", ui, d(e)), 
                    c(e, "speed", hi, d(e)), c(e, "wrapMode", li, d(e)), c(e, "enableTrsBlending", ci, d(e)), 
                    c(e, "_duration", fi, d(e)), c(e, "_hash", pi, d(e)), e.frameRate = 0, c(e, "_tracks", _i, d(e)), 
                    c(e, "_exoticAnimation", di, d(e)), e._legacyData = void 0, e._legacyDataDirty = !1, 
                    c(e, "_events", vi, d(e)), c(e, "_embeddedPlayers", mi, d(e)), e._runtimeEvents = {
                        ratios: [],
                        eventGroups: []
                    }, e;
                }
                s(e, t), e.createWithSpriteFrames = function(t, n) {
                    var i = new e();
                    i.sample = n || i.sample, i.duration = t.length / i.sample;
                    var r = 1 / i.sample, a = new qe();
                    return a.path = new ie().toComponent("cc.Sprite").toProperty("spriteFrame"), a.channels()[0].curve.assignSorted(t.map(function(t, e) {
                        return [ r * e, t ];
                    })), i.addTrack(a), i;
                };
                var n = e.prototype;
                return n.onLoaded = function() {
                    this.frameRate = this.sample, this.events = this._events;
                }, n.range = function() {
                    for (var t = {
                        min: 1 / 0,
                        max: -1 / 0
                    }, e = this._tracks, n = e.length, i = 0; i < n; ++i) {
                        var r = e[i].range();
                        t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max);
                    }
                    return t;
                }, n.getTrack = function(t) {
                    return this._tracks[t];
                }, n.addTrack = function(t) {
                    var e = this._tracks.length;
                    return this._tracks.push(t), e;
                }, n.removeTrack = function(t) {
                    this._tracks.splice(t, 1);
                }, n.clearTracks = function() {
                    this._tracks.length = 0;
                }, n.containsAnyEvent = function() {
                    return 0 !== this._events.length;
                }, n.createEventEvaluator = function(t) {
                    return new Bi(t, this._runtimeEvents.ratios, this._runtimeEvents.eventGroups, this.wrapMode);
                }, n.containsAnyEmbeddedPlayer = function() {
                    return 0 !== this._embeddedPlayers.length;
                }, n.createEmbeddedPlayerEvaluator = function(t) {
                    return new Mi(this._embeddedPlayers, t);
                }, n.createEvaluator = function(t) {
                    var e = this, n = t.target;
                    return this._createEvalWithBinder(n, function(i) {
                        if (!t.mask || !i.isMaskedOff(t.mask)) {
                            var r = i.createRuntimeBinding(n, e.enableTrsBlending ? t.pose : void 0, !1);
                            return null != r ? r : void 0;
                        }
                    }, t.rootMotion);
                }, n.destroy = function() {
                    var e;
                    return (null === (e = r.director.root) || void 0 === e ? void 0 : e.dataPoolManager) && r.director.root.dataPoolManager.releaseAnimationClip(this), 
                    st.destroy(this), t.prototype.destroy.call(this);
                }, n[ot] = function(t, e, n) {
                    for (var i = 1 / e, r = this._collectAnimatedJoints(), a = r.length, s = {}, o = 0; o < a; ++o) s[r[o]] = {
                        transforms: Array.from({
                            length: n
                        }, function() {
                            return new it();
                        })
                    };
                    var u = r.reduce(function(t, e) {
                        return t[e] = new Ri(), t;
                    }, {});
                    for (var h in u) {
                        var l = u[h], c = h.lastIndexOf("/");
                        if (c >= 0) {
                            var f = h.substring(0, c), p = u[f];
                            p && (l.parent = p);
                        }
                    }
                    for (var _ = this._createEvalWithBinder(void 0, function(t) {
                        var e = t.parseTrsPath();
                        if (e) {
                            var n = u[e.node];
                            if (n) return Ui(n, e.property);
                        }
                    }, void 0), d = 0; d < n; ++d) {
                        var v = t + i * d;
                        _.evaluate(v);
                        for (var m = 0; m < a; ++m) {
                            var y = r[m];
                            it.copy(s[y].transforms[d], u[y].globalTransform);
                        }
                        for (var g = 0; g < a; ++g) {
                            var b = r[g];
                            u[b].invalidate();
                        }
                    }
                    return {
                        samples: e,
                        frames: n,
                        joints: s
                    };
                }, n.upgradeUntypedTracks = function(t) {
                    for (var e = [], n = [], i = this._tracks, r = i.length, a = 0; a < r; ++a) {
                        var s = i[a];
                        if (s instanceof hn) {
                            var o = s.upgrade(t);
                            o && (e.push(o), n.push(s));
                        }
                    }
                    for (var u = n.length, h = 0; h < u; ++h) m.remove(i, n[h]);
                    i.push.apply(i, e);
                }, n[Pi] = function() {
                    return this._searchForRootBonePath();
                }, n.getPropertyCurves = function() {
                    return this._getLegacyData().getPropertyCurves();
                }, n.updateEventDatas = function() {
                    this.events = this._events;
                }, n.hasEvents = function() {
                    return 0 !== this.events.length;
                }, n.syncLegacyData = function() {
                    this._legacyData && (this._fromLegacy(this._legacyData), this._legacyData = void 0);
                }, n[Ci] = function() {
                    return this._embeddedPlayers;
                }, n[Ii] = function(t) {
                    this._embeddedPlayers.push(t);
                }, n[xi] = function(t) {
                    var e = this._embeddedPlayers.indexOf(t);
                    e >= 0 && this._embeddedPlayers.splice(e, 1);
                }, n[Oi] = function() {
                    this._embeddedPlayers.length = 0;
                }, n._createEvalWithBinder = function(t, e, n) {
                    this._legacyDataDirty && (this._legacyDataDirty = !1, this.syncLegacyData());
                    var i, r = [];
                    n && (i = this._createRootMotionEvaluation(t, n, r));
                    for (var a, s = [], o = this._tracks, u = o.length, h = 0; h < u; ++h) {
                        var l = o[h];
                        if (!r.includes(l) && !Array.from(l.channels()).every(function(t) {
                            return 0 === t.curve.keyFramesCount;
                        })) {
                            var c = e(l[ne]);
                            if (c) {
                                var f = l[lt](c);
                                s.push({
                                    binding: c,
                                    trackEval: f
                                });
                            }
                        }
                    }
                    return this._exoticAnimation && (a = this._exoticAnimation.createEvaluator(e)), 
                    new Li(s, a, i);
                }, n._createRootMotionEvaluation = function(t, e, n) {
                    if (t instanceof k) {
                        var i = this._searchForRootBonePath();
                        if (i) {
                            var r = t.getChildByPath(i);
                            if (r) {
                                for (var a = new zi(), s = [], o = this._tracks, u = o.length, l = 0; l < u; ++l) {
                                    var c = o[l], f = c[ne].parseTrsPath();
                                    if (f && f.node === i) {
                                        n.push(c);
                                        var _ = Ui(a, f.property);
                                        if (_) {
                                            var d = c[lt](_);
                                            s.push({
                                                binding: _,
                                                trackEval: d
                                            });
                                        }
                                    }
                                }
                                return new Di(r, this._duration, a, s);
                            }
                            h(3924);
                        } else h(3923);
                    } else p(3920);
                }, n._searchForRootBonePath = function() {
                    var t = this._tracks.map(function(t) {
                        var e = t[ne].parseTrsPath();
                        if (e) {
                            var n = e.node;
                            return {
                                path: n,
                                rank: n.split("/").length
                            };
                        }
                        return {
                            path: "",
                            rank: 0
                        };
                    });
                    t.sort(function(t, e) {
                        return t.rank - e.rank;
                    });
                    var e = t.findIndex(function(t) {
                        return 0 !== t.rank;
                    });
                    if (e < 0) return "";
                    for (var n = t.length, i = t[e], r = !0, a = e + 1; a < n; ++a) {
                        var s = t[a];
                        if (s.rank !== i.rank) break;
                        if (s.path !== i.path) {
                            r = !1;
                            break;
                        }
                    }
                    return r ? i.path : "";
                }, n._getLegacyData = function() {
                    return this._legacyData || (this._legacyData = this._toLegacy()), this._legacyData;
                }, n._toLegacy = function() {
                    var t = new ln(this._duration);
                    return t.keys = [], t.curves = [], t.commonTargets = [], t;
                }, n._fromLegacy = function(t) {
                    for (var e = t.toTracks(), n = e.length, i = 0; i < n; ++i) this.addTrack(e[i]);
                }, n._collectAnimatedJoints = function() {
                    for (var t = new Set(), e = this._tracks, n = e.length, i = 0; i < n; ++i) {
                        var r = e[i][ne].parseTrsPath();
                        r && t.add(r.node);
                    }
                    if (this._exoticAnimation) for (var a = this._exoticAnimation.collectAnimatedJoints(), s = a.length, o = 0; o < s; ++o) t.add(a[o]);
                    return Array.from(t);
                }, i(e, [ {
                    key: "duration",
                    get: function() {
                        return this._duration;
                    },
                    set: function(t) {
                        this._duration = t;
                    }
                }, {
                    key: "tracksCount",
                    get: function() {
                        return this._tracks.length;
                    }
                }, {
                    key: "tracks",
                    get: function() {
                        return this._tracks;
                    }
                }, {
                    key: "hash",
                    get: function() {
                        var t, e;
                        if (this._hash) return this._hash;
                        var n = "Exotic:" + (null !== (t = null === (e = this._exoticAnimation) || void 0 === e ? void 0 : e.toHashString()) && void 0 !== t ? t : "");
                        return this._hash = w(n, 666);
                    }
                }, {
                    key: "events",
                    get: function() {
                        return this._events;
                    },
                    set: function(t) {
                        var e = this;
                        this._events = t;
                        for (var n = [], i = [], r = this.events.sort(function(t, e) {
                            return t.frame - e.frame;
                        }), a = r.length, s = function(t) {
                            var a = r[t], s = a.frame / e._duration, o = n.findIndex(function(t) {
                                return t === s;
                            });
                            o < 0 && (o = n.length, n.push(s), i.push({
                                events: []
                            })), i[o].events.push({
                                functionName: a.func,
                                parameters: a.params
                            });
                        }, o = 0; o < a; ++o) s(o);
                        this._runtimeEvents = {
                            ratios: n,
                            eventGroups: i
                        };
                    }
                }, {
                    key: Si,
                    get: function() {
                        return this._exoticAnimation;
                    }
                }, {
                    key: Si,
                    set: function(t) {
                        this._exoticAnimation = t;
                    }
                }, {
                    key: "keys",
                    get: function() {
                        return this._getLegacyData().keys;
                    }
                }, {
                    key: "keys",
                    set: function(t) {
                        this._legacyDataDirty = !0, this._getLegacyData().keys = t;
                    }
                }, {
                    key: "curves",
                    get: function() {
                        return this._legacyDataDirty = !0, this._getLegacyData().curves;
                    }
                }, {
                    key: "curves",
                    set: function(t) {
                        this._getLegacyData().curves = t;
                    }
                }, {
                    key: "commonTargets",
                    get: function() {
                        return this._getLegacyData().commonTargets;
                    }
                }, {
                    key: "commonTargets",
                    set: function(t) {
                        this._legacyDataDirty = !0, this._getLegacyData().commonTargets = t;
                    }
                }, {
                    key: "data",
                    get: function() {
                        return this._getLegacyData().data;
                    }
                }, {
                    key: "eventGroups",
                    get: function() {
                        return this._runtimeEvents.eventGroups;
                    }
                }, {
                    key: ki,
                    get: function() {
                        return this._embeddedPlayers.length;
                    }
                } ]), e;
            }(B), yi.WrapMode = P, ui = l((oi = gi).prototype, "sample", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 60;
                }
            }), hi = l(oi.prototype, "speed", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), li = l(oi.prototype, "wrapMode", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return P.Normal;
                }
            }), ci = l(oi.prototype, "enableTrsBlending", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), fi = l(oi.prototype, "_duration", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), pi = l(oi.prototype, "_hash", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), _i = l(oi.prototype, "_tracks", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), di = l(oi.prototype, "_exoticAnimation", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), vi = l(oi.prototype, "_events", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), mi = l(oi.prototype, "_embeddedPlayers", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), si = oi)) || si);
            r.AnimationClip = Ni;
            var Mi = function() {
                function t(t, e) {
                    this._embeddedPlayers = t, this._embeddedPlayerEvaluationInfos = t.map(function(t) {
                        var n = t.playable;
                        if (!n) return null;
                        var i = n.instantiate(e);
                        return i ? {
                            instantiatedPlayer: i,
                            entered: !1,
                            hostPauseTime: 0,
                            lastIterations: 0
                        } : null;
                    });
                }
                var e = t.prototype;
                return e.destroy = function() {
                    for (var t = this._embeddedPlayerEvaluationInfos, e = t.length, n = 0; n < e; ++n) {
                        var i;
                        null === (i = t[n]) || void 0 === i || i.instantiatedPlayer.destroy();
                    }
                    this._embeddedPlayerEvaluationInfos.length = 0;
                }, e.evaluate = function(t, e) {
                    for (var n = this._embeddedPlayers, i = this._embeddedPlayerEvaluationInfos, r = n.length, a = 0; a < r; ++a) {
                        var s = i[a];
                        if (s) {
                            var o = s.entered, u = s.instantiatedPlayer, h = s.lastIterations, l = n[a], c = l.begin, f = l.end;
                            if (t >= c && t <= f ? o ? e !== h && (u.stop(), u.play(), s.entered = !0) : (u.play(), 
                            s.entered = !0) : o && (u.stop(), s.entered = !1), s.lastIterations = e, s.entered) {
                                var p = t - c;
                                s.instantiatedPlayer.setTime(p);
                            }
                        }
                    }
                }, e.notifyHostSpeedChanged = function(t) {
                    for (var e = this._embeddedPlayers, n = this._embeddedPlayerEvaluationInfos, i = e.length, r = 0; r < i; ++r) {
                        var a = n[r];
                        if (a) {
                            var s = a.instantiatedPlayer;
                            e[r].reconciledSpeed && s.setSpeed(t);
                        }
                    }
                }, e.notifyHostPlay = function(t) {
                    for (var e = this._embeddedPlayers, n = this._embeddedPlayerEvaluationInfos, i = e.length, r = 0; r < i; ++r) {
                        var a = n[r];
                        if (a) {
                            var s = e[r], o = s.begin, u = s.end, h = a.instantiatedPlayer;
                            if (a.entered) {
                                var l = a.hostPauseTime;
                                if (h.randomAccess || rt(l, t, 1e-5)) {
                                    var c = nt(t, o, u);
                                    h.play(), h.setTime(c - o);
                                } else h.stop();
                            }
                        }
                    }
                }, e.notifyHostPause = function(t) {
                    for (var e = this._embeddedPlayers, n = this._embeddedPlayerEvaluationInfos, i = e.length, r = 0; r < i; ++r) {
                        var a = n[r];
                        if (a) {
                            var s = a.instantiatedPlayer;
                            a.entered && (s.pause(), a.hostPauseTime = t);
                        }
                    }
                }, e.notifyHostStop = function() {
                    for (var t = this._embeddedPlayers, e = this._embeddedPlayerEvaluationInfos, n = t.length, i = 0; i < n; ++i) {
                        var r = e[i];
                        if (r) {
                            var a = r.instantiatedPlayer;
                            r.entered && (r.entered = !1, a.stop());
                        }
                    }
                }, t;
            }(), Li = function() {
                function t(t, e, n) {
                    this._exoticAnimationEvaluator = void 0, this._trackEvalStatues = [], this._rootMotionEvaluation = void 0, 
                    this._trackEvalStatues = t, this._exoticAnimationEvaluator = e, this._rootMotionEvaluation = n;
                }
                var e = t.prototype;
                return e.evaluate = function(t) {
                    for (var e = this._trackEvalStatues, n = this._exoticAnimationEvaluator, i = e.length, r = 0; r < i; ++r) {
                        var a = e[r], s = a.trackEval, o = a.binding, u = s.evaluate(t, o);
                        o.setValue(u);
                    }
                    n && n.evaluate(t);
                }, e.evaluateRootMotion = function(t, e) {
                    var n = this._rootMotionEvaluation;
                    n && n.evaluate(t, e);
                }, t;
            }(), zi = function() {
                function t() {
                    this.position = new J(), this.scale = new J(1, 1, 1), this.rotation = new Y(), this.eulerAngles = new J();
                }
                return t.prototype.getTransform = function(t) {
                    it.fromRTS(t, this.rotation, this.position, this.scale);
                }, t;
            }(), Ri = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).parent = null, e._dirty = !0, 
                    e._transform = new it(), e;
                }
                return s(e, t), e.prototype.invalidate = function() {
                    this._dirty = !0;
                }, i(e, [ {
                    key: "globalTransform",
                    get: function() {
                        var t = this._transform;
                        return this._dirty && (this._dirty = !1, it.fromRTS(t, this.rotation, this.position, this.scale), 
                        this.parent && it.multiply(t, this.parent.globalTransform, t)), this._transform;
                    }
                } ]), e;
            }(zi), Fi = new it(), Di = function() {
                function t(t, e, n, i) {
                    this._initialTransformCache = new it(), this._clipEndTransformCache = new it(), 
                    this._startTransformCache = new it(), this._endTransformCache = new it(), this._motionTransformCache = new it(), 
                    this._translationMotionCache = new J(), this._rotationMotionCache = new Y(), this._scaleMotionCache = new J(), 
                    this._rootBone = t, this._duration = e, this._boneTransform = n, this._trackEvalStatuses = i;
                }
                var e = t.prototype;
                return e.evaluate = function(t, e) {
                    var n = this._calcMotionTransform(t, e, this._motionTransformCache), i = this._translationMotionCache, r = this._rotationMotionCache, a = this._scaleMotionCache, s = this._rootBone;
                    it.toRTS(n, r, i, a), J.add(i, i, s.position), s.setPosition(i), Y.multiply(r, r, s.rotation), 
                    s.setRotation(r), J.multiply(a, a, s.scale), s.setScale(a);
                }, e._calcMotionTransform = function(t, e, n) {
                    var i = this._duration, r = i - t, a = this._evaluateAt(t, this._startTransformCache);
                    if (e < r) {
                        var s = this._evaluateAt(t + e, this._endTransformCache);
                        Vi(n, a, s);
                    } else {
                        it.identity(n);
                        var o = function(t, e) {
                            Vi(Fi, t, e), it.multiply(n, n, Fi);
                        }, u = e - r, h = Math.floor(u / i), l = u - h * i, c = this._evaluateAt(0, this._initialTransformCache), f = this._evaluateAt(i, this._clipEndTransformCache), p = this._evaluateAt(l, this._endTransformCache);
                        o(a, f), Vi(Fi, c, f);
                        for (var _ = 0; _ < h; ++_) it.multiply(n, n, Fi);
                        o(c, p);
                    }
                    return n;
                }, e._evaluateAt = function(t, e) {
                    for (var n = this._trackEvalStatuses, i = n.length, r = 0; r < i; ++r) {
                        var a = n[r], s = a.trackEval, o = a.binding, u = s.evaluate(t, o);
                        o.setValue(u);
                    }
                    return this._boneTransform.getTransform(e), e;
                }, t;
            }();
            function Vi(t, e, n) {
                it.invert(t, e), it.multiply(t, n, t);
            }
            function Ui(t, e) {
                switch (e) {
                  default:
                    return;

                  case "position":
                    return {
                        setValue: function(e) {
                            J.copy(t.position, e);
                        }
                    };

                  case "rotation":
                    return {
                        setValue: function(e) {
                            Y.copy(t.rotation, e);
                        }
                    };

                  case "scale":
                    return {
                        setValue: function(e) {
                            J.copy(t.scale, e);
                        }
                    };

                  case "eulerAngles":
                    return {
                        setValue: function(e) {
                            J.copy(t.eulerAngles, e);
                        }
                    };
                }
            }
            var Bi = function() {
                function t(t, e, n, i) {
                    this._lastFrameIndex = -1, this._lastIterations = 0, this._lastDirection = 0, this._ignoreIndex = -1, 
                    this._sampled = !1, this._targetNode = t, this._ratios = e, this._eventGroups = n, 
                    this._wrapMode = i;
                }
                var e = t.prototype;
                return e.setWrapMode = function(t) {
                    this._wrapMode = t;
                }, e.ignore = function(t, e) {
                    this._ignoreIndex = -1, this._sampled = !1;
                    var n = Wi(t, this._ratios);
                    n < 0 && (n = ~n - 1, e < 0 && (n += 1), this._ignoreIndex = n);
                }, e.sample = function(t, e, n) {
                    var i = this._eventGroups.length, r = Wi(t, this._ratios);
                    if (r < 0 && (r = ~r - 1, e < 0 && (r += 1)), this._ignoreIndex !== r && (this._ignoreIndex = -1), 
                    !this._sampled) return this._sampled = !0, this._doFire(r, !1), this._lastFrameIndex = r, 
                    this._lastIterations = n, void (this._lastDirection = e);
                    var a = this._wrapMode, s = Hi(n), o = Hi(this._lastIterations), u = this._lastFrameIndex, h = this._lastDirection, l = -1 !== o && s !== o;
                    if (u === r && l && 1 === i) this._doFire(0, !1); else if (u !== r || l) {
                        e = h;
                        do {
                            if (u !== r) {
                                if (-1 === e && 0 === u && r > 0 ? ((a & E.PingPong) === E.PingPong ? e *= -1 : u = i, 
                                o++) : 1 === e && u === i - 1 && r < i - 1 && ((a & E.PingPong) === E.PingPong ? e *= -1 : u = -1, 
                                o++), u === r) break;
                                if (o > s) break;
                            }
                            u += e, this._doFire(u, !0);
                        } while (u !== r && u > -1 && u < i);
                    }
                    this._lastFrameIndex = r, this._lastIterations = n, this._lastDirection = e;
                }, e._doFire = function(t, e) {
                    e ? pt().pushDelayEvent(this._checkAndFire, this, [ t ]) : this._checkAndFire(t);
                }, e._checkAndFire = function(t) {
                    if (this._targetNode && this._targetNode.isValid) {
                        var e = this._eventGroups;
                        if (!(t < 0 || t >= e.length || this._ignoreIndex === t)) for (var n = e[t], i = this._targetNode.components, r = n.events.length, a = 0; a < r; ++a) for (var s = n.events[a], o = s.functionName, u = i.length, h = 0; h < u; ++h) {
                            var l = i[h], c = l[o];
                            "function" == typeof c && c.apply(l, s.parameters);
                        }
                    }
                }, t;
            }();
            function Hi(t) {
                return t - (0 | t) == 0 && (t -= 1), 0 | t;
            }
            function Wi(t, e) {
                return z(e, t);
            }
            var Qi, ji, qi, Ki, Gi, Yi, Xi, Ji, Zi, $i, tr, er, nr, ir, rr, ar, sr, or = function(t) {
                function e(e) {
                    var n;
                    return (n = t.call(this) || this)._managedStates = [], n._fadings = [], n._scheduled = !1, 
                    n._scheduler = null != e ? e : pt(), n;
                }
                s(e, t);
                var n = e.prototype;
                return n.update = function(t) {
                    if (!this.isMotionless) {
                        var e = this._managedStates, n = this._fadings;
                        if (1 === e.length && 1 === n.length) {
                            var i = e[0].state;
                            i && (i.weight = 1);
                        } else this._calculateWeights(t);
                        1 === e.length && 1 === n.length && this._unscheduleThis();
                    }
                }, n.crossFade = function(t, e) {
                    var n;
                    0 === this._managedStates.length && (e = 0), 0 === e && this.clear();
                    var i = this._managedStates.find(function(e) {
                        return e.state === t;
                    });
                    i ? (null === (n = i.state) || void 0 === n ? void 0 : n.isMotionless) && i.state.play() : (i = {
                        state: t,
                        reference: 0
                    }, t && t.play(), this._managedStates.push(i)), ++i.reference, this._fadings.unshift({
                        easeDuration: e,
                        easeTime: 0,
                        target: i
                    }), this.isMotionless || this._scheduleThis();
                }, n.clear = function() {
                    for (var t = 0; t < this._managedStates.length; ++t) {
                        var e = this._managedStates[t].state;
                        e && e.stop();
                    }
                    this._managedStates.length = 0, this._fadings.length = 0;
                }, n.onPlay = function() {
                    t.prototype.onPlay.call(this), this._scheduleThis();
                }, n.onPause = function() {
                    t.prototype.onPause.call(this);
                    for (var e = 0; e < this._managedStates.length; ++e) {
                        var n = this._managedStates[e].state;
                        n && n.pause();
                    }
                    this._unscheduleThis();
                }, n.onResume = function() {
                    t.prototype.onResume.call(this);
                    for (var e = 0; e < this._managedStates.length; ++e) {
                        var n = this._managedStates[e].state;
                        n && n.resume();
                    }
                    this._scheduleThis();
                }, n.onStop = function() {
                    t.prototype.onStop.call(this), this.clear();
                }, n._calculateWeights = function(t) {
                    for (var e = this._managedStates, n = this._fadings, i = 0; i < e.length; ++i) {
                        var r = e[i].state;
                        r && (r.weight = 0);
                    }
                    for (var a = 1, s = n.length, o = 0; o < n.length; ++o) {
                        var u = n[o];
                        u.easeTime += t;
                        var h = 0 === u.easeDuration ? 1 : at(u.easeTime / u.easeDuration), l = h * a;
                        if (a *= 1 - h, u.target.state && (u.target.state.weight += l), u.easeTime >= u.easeDuration) {
                            s = o + 1, u.easeTime = u.easeDuration;
                            break;
                        }
                    }
                    if (s !== n.length) {
                        for (var c = s; c < n.length; ++c) {
                            var f = n[c];
                            --f.target.reference, f.target.reference <= 0 && (f.target.state && f.target.state.stop(), 
                            y(this._managedStates, f.target));
                        }
                        n.splice(s);
                    }
                }, n._scheduleThis = function() {
                    this._scheduled || (this._scheduler.addCrossFade(this), this._scheduled = !0);
                }, n._unscheduleThis = function() {
                    this._scheduled && (this._scheduler.removeCrossFade(this), this._scheduled = !1);
                }, e;
            }(ct), ur = e("n", (Qi = S("cc.Animation"), ji = Q(), qi = j(99), Ki = q(), Gi = H([ Ni ]), 
            Yi = K(), Xi = H(Ni), Ji = K(), Zi = K(), $i = H([ Ni ]), Qi(tr = ji(tr = qi(tr = W(tr = Ki((sr = ar = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, c(e, "playOnLoad", nr, d(e)), 
                    e._crossFade = new or(), e._nameToState = g(!0), c(e, "_clips", ir, d(e)), c(e, "_defaultClip", rr, d(e)), 
                    e._hasBeenPlayed = !1, e;
                }
                s(e, t);
                var n = e.prototype;
                return n.onLoad = function() {
                    for (var t in this.clips = this._clips, this._nameToState) this._nameToState[t].initialize(this.node);
                }, n.start = function() {
                    this.playOnLoad && !this._hasBeenPlayed && this._defaultClip && this.crossFade(this._defaultClip.name, 0);
                }, n.onEnable = function() {
                    this._crossFade.resume();
                }, n.onDisable = function() {
                    this._crossFade.pause();
                }, n.onDestroy = function() {
                    for (var t in this._crossFade.stop(), this._nameToState) this._nameToState[t].destroy();
                    this._nameToState = g(!0);
                }, n.play = function(t) {
                    if (this._hasBeenPlayed = !0, !t) {
                        if (!this._defaultClip) return;
                        t = this._defaultClip.name;
                    }
                    this.crossFade(t, 0);
                }, n.crossFade = function(t, e) {
                    void 0 === e && (e = .3), this._hasBeenPlayed = !0;
                    var n = this._nameToState[t];
                    n && this.doPlayOrCrossFade(n, e);
                }, n.pause = function() {
                    this._crossFade.pause();
                }, n.resume = function() {
                    this._crossFade.resume();
                }, n.stop = function() {
                    this._crossFade.stop();
                }, n.getState = function(t) {
                    var e = this._nameToState[t];
                    return e && !e.curveLoaded && e.initialize(this.node), e || null;
                }, n.createState = function(t, e) {
                    return e = e || t.name, this.removeState(e), this._doCreateState(t, e);
                }, n.removeState = function(t) {
                    var e = this._nameToState[t];
                    e && (e.allowLastFrameEvent(!1), e.stop(), delete this._nameToState[t]);
                }, n.addClip = function(t, e) {
                    return b(this._clips, t) || this._clips.push(t), this.createState(t, e);
                }, n.removeClip = function(t, e) {
                    var n;
                    for (var i in this._nameToState) {
                        var r = this._nameToState[i];
                        if (r.clip === t) {
                            n = r;
                            break;
                        }
                    }
                    if (t === this._defaultClip) {
                        if (!e) return void h(3902);
                        this._defaultClip = null;
                    }
                    if (n && n.isPlaying) {
                        if (!e) return void h(3903);
                        n.stop();
                    }
                    this._clips = this._clips.filter(function(e) {
                        return e !== t;
                    }), n && delete this._nameToState[n.name];
                }, n.on = function(e, n, i, r) {
                    var a = t.prototype.on.call(this, e, n, i, r);
                    return e === ut.LASTFRAME && this._syncAllowLastFrameEvent(), a;
                }, n.once = function(e, n, i) {
                    var r = t.prototype.once.call(this, e, n, i);
                    return e === ut.LASTFRAME && this._syncAllowLastFrameEvent(), r;
                }, n.off = function(e, n, i) {
                    t.prototype.off.call(this, e, n, i), e === ut.LASTFRAME && this._syncDisallowLastFrameEvent();
                }, n._createState = function(t, e) {
                    return new Tt(t, e);
                }, n._doCreateState = function(t, e) {
                    var n = this._createState(t, e);
                    return n._setEventTarget(this), n.allowLastFrameEvent(this.hasEventListener(ut.LASTFRAME)), 
                    this.node && n.initialize(this.node), this._nameToState[n.name] = n, n;
                }, n.doPlayOrCrossFade = function(t, e) {
                    this._crossFade.play(), this._crossFade.crossFade(t, e);
                }, n._removeStateOfAutomaticClip = function(t) {
                    for (var e in this._nameToState) {
                        var n = this._nameToState[e];
                        hr(t, n.clip) && (n.stop(), delete this._nameToState[e]);
                    }
                }, n._syncAllowLastFrameEvent = function() {
                    if (this.hasEventListener(ut.LASTFRAME)) for (var t in this._nameToState) this._nameToState[t].allowLastFrameEvent(!0);
                }, n._syncDisallowLastFrameEvent = function() {
                    if (!this.hasEventListener(ut.LASTFRAME)) for (var t in this._nameToState) this._nameToState[t].allowLastFrameEvent(!1);
                }, i(e, [ {
                    key: "clips",
                    get: function() {
                        return this._clips;
                    },
                    set: function(t) {
                        var e = this;
                        this._crossFade && this._crossFade.clear();
                        for (var n, i = _(this._clips); !(n = i()).done; ) {
                            var r = n.value;
                            r && this._removeStateOfAutomaticClip(r);
                        }
                        for (var a, s = _(t); !(a = s()).done; ) {
                            var o = a.value;
                            o && this.createState(o);
                        }
                        var u = t.find(function(t) {
                            return hr(t, e._defaultClip);
                        });
                        this._defaultClip = u || null, this._clips = t;
                    }
                }, {
                    key: "defaultClip",
                    get: function() {
                        return this._defaultClip;
                    },
                    set: function(t) {
                        this._defaultClip = t, t && (this._clips.findIndex(function(e) {
                            return hr(e, t);
                        }) >= 0 || (this._clips.push(t), this.createState(t)));
                    }
                } ]), e;
            }(T(G)), ar.EventType = ut, l((er = sr).prototype, "clips", [ Gi, Yi ], Object.getOwnPropertyDescriptor(er.prototype, "clips"), er.prototype), 
            l(er.prototype, "defaultClip", [ Xi, Ji ], Object.getOwnPropertyDescriptor(er.prototype, "defaultClip"), er.prototype), 
            nr = l(er.prototype, "playOnLoad", [ C, Zi ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), ir = l(er.prototype, "_clips", [ $i ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), rr = l(er.prototype, "_defaultClip", [ C ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), tr = er)) || tr) || tr) || tr) || tr) || tr));
            function hr(t, e) {
                return t === e || !!t && !!e && t._uuid === e._uuid && t._uuid;
            }
            r.Animation = ur, r.AnimationComponent = ur, f.setClassAlias(ur, "cc.AnimationComponent");
        }
    };
});