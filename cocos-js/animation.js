require("../@babel/runtime/helpers/Objectentries");

var t = require("../@babel/runtime/helpers/typeof");

System.register([ "./bits-9eb0404f.js", "./buffer-barrier-a0dabeda.js", "./scene-asset-2d5f3dde.js", "./math-base-ade794fa.js", "./pipeline-state-manager-cdb8e36b.js", "./deprecated-9ab165be.js", "./touch-1fa80d2f.js", "./skeletal-animation-utils-407890d2.js", "./animation-component-eb311dcd.js" ], function(e) {
    var n, i, r, a, o, s, u, l, c, h, f, p, d, _, g, v, m, y, b, T, S, E, w, A, N, k, C, M, R, O, I, x, P, L, z, U, F, B, D, W, V, G, H, j, q, X, Q, Z, Y, J, $, K, tt, et, nt, it, rt, at, ot, st, ut, lt, ct, ht, ft, pt, dt, _t, gt, vt, mt, yt, bt;
    return {
        setters: [ function(t) {
            n = t.F, i = t.G, r = t.A, a = t.H, o = t.I, s = t.f, u = t.w, l = t.ai, c = t.i, 
            h = t.P, f = t.Z, p = t.aq, d = t.ar, _ = t.ae, g = t.as, v = t.O, m = t.m, y = t.d, 
            b = t.ab, T = t.l, S = t.ak;
        }, function(t) {
            E = t.T;
        }, function(t) {
            w = t.a$, A = t.b$, N = t.b1, k = t.aN, C = t.M, M = t.J, R = t.I, O = t.aM, I = t.c0, 
            x = t.c1, P = t.Z, L = t.a2, z = t.b0, U = t.b7, F = t.bR, B = t.bU, D = t.aI, W = t.aF, 
            V = t.c2;
            var n = {};
            n.bezier = t.c3, n.bezierByTime = t.c4, n.easing = t.c2, e(n);
        }, function(t) {
            G = t.i, H = t.V, j = t.a, q = t.Q;
        }, function(t) {
            X = t.d;
        }, function(t) {
            Q = t.k, Z = t.j;
        }, function() {}, function(t) {
            Y = t.b, J = t.d, $ = t.a;
            var n = {};
            n.getPathFromRoot = t.c, n.getWorldTransformUntilRoot = t.g, e(n);
        }, function(t) {
            K = t.C, tt = t.A, et = t.c, nt = t.a, it = t.T, rt = t.b, at = t.d, ot = t.R, st = t.V, 
            ut = t.Q, lt = t.e, ct = t.S, ht = t.O, ft = t.i, pt = t.f, dt = t.H, _t = t.g, 
            gt = t.h, vt = t.j, mt = t.k, yt = t.l, bt = t.m;
            var n = {};
            n.AnimCurve = t.p, n.Animation = t.n, n.AnimationClip = t.b, n.AnimationComponent = t.n, 
            n.AnimationState = t.A, n.EventInfo = t.E, n.RatioSampler = t.o, n.computeRatioByType = t.q, 
            n.sampleAnimationCurve = t.s, e(n);
        } ],
        execute: function() {
            w(K + "EmbeddedPlayer")((Nt = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "begin", St, o(e)), 
                    a(e, "end", Et, o(e)), a(e, "reconciledSpeed", wt, o(e)), a(e, "playable", At, o(e)), 
                    e;
                }
                return n(e, t), e;
            }(A), St = i((Tt = Nt).prototype, "begin", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Et = i(Tt.prototype, "end", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), wt = i(Tt.prototype, "reconciledSpeed", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), At = i(Tt.prototype, "playable", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Tt));
            var Tt, St, Et, wt, At, Nt, kt, Ct, Mt, Rt, Ot, It, xt, Pt, Lt, zt, Ut, Ft, Bt, Dt, Wt, Vt, Gt, Ht, jt, qt, Xt, Qt, Zt, Yt, Jt, $t, Kt, te, ee = function() {}, ne = function() {
                function t(t) {
                    this._randomAccess = t;
                }
                return t.prototype.setTime = function() {}, r(t, [ {
                    key: "randomAccess",
                    get: function() {
                        return this._randomAccess;
                    }
                } ]), t;
            }(), ie = (w(K + "EmbeddedAnimationClipPlayable")((Rt = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "path", Ct, o(e)), 
                    a(e, "clip", Mt, o(e)), e;
                }
                return n(e, t), e.prototype.instantiate = function(t) {
                    var e = this.clip, n = this.path;
                    if (!e) return null;
                    var i = t.getChildByPath(n);
                    if (!i) return s(3938, n, t.getPathInHierarchy(), e.name), null;
                    var r = new tt(e);
                    return r.initialize(i), new ie(r);
                }, e;
            }(ee), Ct = i((kt = Rt).prototype, "path", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Mt = i(kt.prototype, "clip", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), kt)), function(t) {
                function e(e) {
                    var n;
                    return (n = t.call(this, !0) || this)._animationState = void 0, n._animationState = e, 
                    n;
                }
                n(e, t);
                var i = e.prototype;
                return i.destroy = function() {
                    this._animationState.destroy();
                }, i.play = function() {
                    this._animationState.play();
                }, i.pause = function() {
                    this._animationState.pause();
                }, i.stop = function() {
                    this._animationState.stop();
                }, i.setSpeed = function(t) {
                    this._animationState.speed = t;
                }, i.setTime = function(t) {
                    this._animationState.time = t;
                }, e;
            }(ne)), re = (w(K + "EmbeddedParticleSystemPlayable")((xt = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "path", It, o(e)), 
                    e;
                }
                return n(e, t), e.prototype.instantiate = function(t) {
                    var e = t.getChildByPath(this.path);
                    if (!e) return u("Hierarchy path " + this.path + " does not exists."), null;
                    var n = l("cc.ParticleSystem");
                    if (!n) return u("Particle system is required for embedded particle system player."), 
                    null;
                    var i = e.getComponent(n);
                    return i ? new re(i) : (u(this.path + " does not includes a particle system component."), 
                    null);
                }, e;
            }(ee), It = i((Ot = xt).prototype, "path", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Ot)), function(t) {
                function e(e) {
                    var n;
                    return (n = t.call(this, !1) || this)._particleSystem = void 0, n._particleSystem = e, 
                    n;
                }
                n(e, t);
                var i = e.prototype;
                return i.destroy = function() {}, i.play = function() {
                    this._particleSystem.play();
                }, i.pause = function() {
                    this._particleSystem.stopEmitting();
                }, i.stop = function() {
                    this._particleSystem.stopEmitting();
                }, i.setSpeed = function(t) {
                    this._particleSystem.simulationSpeed = t;
                }, e;
            }(ne)), ae = (w(K + "RealArrayTrack")((zt = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "_channels", Lt, o(e)), 
                    e;
                }
                n(e, t);
                var i = e.prototype;
                return i.channels = function() {
                    return this._channels;
                }, i[et] = function() {
                    return new ae(this._channels.map(function(t) {
                        return t.curve;
                    }));
                }, r(e, [ {
                    key: "elementCount",
                    get: function() {
                        return this._channels.length;
                    },
                    set: function(t) {
                        var e = this._channels.length;
                        if (t < e) this._channels.splice(t); else if (t > e) {
                            var n;
                            (n = this._channels).push.apply(n, Array.from({
                                length: t - e
                            }, function() {
                                return new nt(new k());
                            }));
                        }
                    }
                } ]), e;
            }(it), Lt = i((Pt = zt).prototype, "_channels", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Pt)), function() {
                function t(t) {
                    this._curves = t, this._result = new Array(t.length).fill(0);
                }
                return t.prototype.evaluate = function(t) {
                    for (var e = this._result, n = e.length, i = 0; i < n; ++i) e[i] = this._curves[i].evaluate(t);
                    return this._result;
                }, t;
            }()), oe = w("cc.animation.UniformProxyFactory")((Vt = function() {
                function t(t, e) {
                    a(this, "passIndex", Bt, this), a(this, "uniformName", Dt, this), a(this, "channelIndex", Wt, this), 
                    this.passIndex = e || 0, this.uniformName = t || "";
                }
                return t.prototype.forTarget = function(t) {
                    var e = t.passes[this.passIndex], n = e.getHandle(this.uniformName);
                    if (!n) throw new Error('Material "' + t.name + '" has no uniform "' + this.uniformName + '"');
                    if (C.getTypeFromHandle(n) < E.SAMPLER1D) {
                        var i = void 0 === this.channelIndex ? n : e.getHandle(this.uniformName, this.channelIndex, E.FLOAT);
                        if (!i) throw new Error('Uniform "' + this.uniformName + " (in material " + t.name + ") has no channel " + this.channelIndex + '"');
                        return function(t, e) {
                            for (var n, i = c(t.shaderInfo.blocks); !(n = i()).done; ) for (var r, a = n.value, o = c(a.members); !(r = o()).done; ) {
                                var s = r.value;
                                if (s.name === e) return s.count > 1;
                            }
                            return !1;
                        }(e, this.uniformName) ? {
                            set: function(t) {
                                e.setUniformArray(i, t);
                            }
                        } : {
                            set: function(t) {
                                e.setUniform(i, t);
                            }
                        };
                    }
                    var r = C.getBindingFromHandle(n), a = e.properties[this.uniformName], o = a && a.value ? "" + a.value + M(a.type) : R(a.type), s = O.get(o);
                    return s || (u("Illegal texture default value: " + o + "."), s = O.get("default-texture")), 
                    {
                        set: function(t) {
                            t || (t = s);
                            var n = t.getGFXTexture();
                            n && n.width && n.height && (e.bindTexture(r, n), t instanceof I && e.bindSampler(r, X.gfxDevice.getSampler(t.getSamplerInfo())));
                        }
                    };
                }, t;
            }(), Bt = i((Ft = Vt).prototype, "passIndex", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Dt = i(Ft.prototype, "uniformName", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Wt = i(Ft.prototype, "channelIndex", [ x ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {}
            }), Ut = Ft)) || Ut, se = w("cc.animation.MorphWeightValueProxy")((Xt = function() {
                function t() {
                    a(this, "subMeshIndex", jt, this), a(this, "shapeIndex", qt, this);
                }
                return t.prototype.forTarget = function(t) {
                    var e = this;
                    return {
                        set: function(n) {
                            t.setWeight(n, e.subMeshIndex, e.shapeIndex);
                        }
                    };
                }, t;
            }(), jt = i((Ht = Xt).prototype, "subMeshIndex", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), qt = i(Ht.prototype, "shapeIndex", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Gt = Ht)) || Gt, ue = w("cc.animation.MorphWeightsValueProxy")((Jt = function() {
                function t() {
                    a(this, "subMeshIndex", Yt, this);
                }
                return t.prototype.forTarget = function(t) {
                    var e = this;
                    return {
                        set: function(n) {
                            t.setWeights(n, e.subMeshIndex);
                        }
                    };
                }, t;
            }(), Yt = i((Zt = Jt).prototype, "subMeshIndex", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Qt = Zt)) || Qt, le = w("cc.animation.MorphWeightsAllValueProxy")($t = function() {
                function t() {}
                return t.prototype.forTarget = function(t) {
                    return {
                        set: function(e) {
                            for (var n, i, r = null !== (n = null === (i = t.mesh) || void 0 === i ? void 0 : i.struct.primitives.length) && void 0 !== n ? n : 0, a = 0; a < r; ++a) t.setWeights(e, a);
                        }
                    };
                }, t;
            }()) || $t, ce = Symbol("[[Owner]]");
            function he(t, e) {
                h(t[ce] === e);
            }
            !function(t) {
                t[t.FLOAT = 0] = "FLOAT", t[t.BOOLEAN = 1] = "BOOLEAN", t[t.TRIGGER = 2] = "TRIGGER", 
                t[t.INTEGER = 3] = "INTEGER";
            }(Kt || (Kt = {})), function(t) {
                t[t.AFTER_CONSUMED = 0] = "AFTER_CONSUMED", t[t.NEXT_FRAME_OR_AFTER_CONSUMED = 1] = "NEXT_FRAME_OR_AFTER_CONSUMED";
            }(te || (te = {}));
            var fe, pe, de, _e, ge, ve, me, ye, be, Te, Se, Ee, we, Ae, Ne, ke = function() {
                function t(t, e) {
                    this.type = void 0, this.resetMode = te.AFTER_CONSUMED, this._value = void 0, this._refs = [], 
                    this.type = t, this._value = e;
                }
                return t.prototype.bind = function(t, e) {
                    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
                    return this._refs.push({
                        fn: t,
                        thisArg: e,
                        args: i
                    }), this._value;
                }, r(t, [ {
                    key: "value",
                    get: function() {
                        return this._value;
                    },
                    set: function(t) {
                        this._value = t;
                        for (var e, n = c(this._refs); !(e = n()).done; ) {
                            var i = e.value, r = i.fn, a = i.thisArg, o = i.args;
                            r.call.apply(r, [ a, t ].concat(o));
                        }
                    }
                } ]), t;
            }(), Ce = function(t) {
                function e(e) {
                    var n;
                    return (n = t.call(this, e + " transition is invalid") || this).name = "TransitionRejectError", 
                    n;
                }
                return n(e, t), e;
            }(f(Error)), Me = function(t) {
                function e(e) {
                    return t.call(this, "Graph variable " + e + " is not defined") || this;
                }
                return n(e, t), e;
            }(f(Error)), Re = function(e) {
                function i(n, i, r) {
                    return e.call(this, "Expect graph variable " + n + " to have type '" + i + "' instead of received '" + (null != r ? r : t(r)) + "'") || this;
                }
                return n(i, e), i;
            }(f(Error)), Oe = Symbol("[[createEval]]"), Ie = Symbol("[[Outgoing transitions]]"), xe = Symbol("[[Incoming transitions]]"), Pe = w("cc.animation.State")((_e = function(t) {
                function e() {
                    var e;
                    return e = t.call(this) || this, a(e, "name", de, o(e)), e[Ie] = [], e[xe] = [], 
                    e;
                }
                return n(e, t), e;
            }(A), de = i((pe = _e).prototype, "name", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), fe = pe)) || fe, Le = w(K + "InteractiveState")((ye = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "_components", me, o(e)), 
                    e;
                }
                n(e, t);
                var i = e.prototype;
                return i.addComponent = function(t) {
                    var e = new t();
                    return this._components.push(e), e;
                }, i.removeComponent = function(t) {
                    p(this._components, t);
                }, i.instantiateComponents = function() {
                    return this._components.map(function(t) {
                        return P(t);
                    });
                }, r(e, [ {
                    key: "components",
                    get: function() {
                        return this._components;
                    }
                } ]), e;
            }(Pe), me = i((ve = ye).prototype, "_components", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), ge = ve)) || ge, ze = w("cc.animation.Motion")((Ne = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "motion", Se, o(e)), 
                    a(e, "speed", Ee, o(e)), a(e, "speedMultiplier", we, o(e)), a(e, "speedMultiplierEnabled", Ae, o(e)), 
                    e;
                }
                return n(e, t), e.prototype.clone = function() {
                    var t, n, i = new e();
                    return i.motion = null !== (t = null === (n = this.motion) || void 0 === n ? void 0 : n.clone()) && void 0 !== t ? t : null, 
                    i.speed = this.speed, i.speedMultiplier = this.speedMultiplier, i.speedMultiplierEnabled = this.speedMultiplierEnabled, 
                    i;
                }, e;
            }(Le), Se = i((Te = Ne).prototype, "motion", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ee = i(Te.prototype, "speed", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), we = i(Te.prototype, "speedMultiplier", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Ae = i(Te.prototype, "speedMultiplierEnabled", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), be = Te)) || be;
            function Ue(t, e, n) {
                if (d(t, e), d(t, n), e === n) return t;
                var i = t[e];
                if (e < n) for (var r = e + 1; r <= n; ++r) t[r - 1] = t[r]; else for (var a = e; a !== n; --a) t[a] = t[a - 1];
                return t[n] = i, t;
            }
            var Fe, Be, De, We, Ve, Ge, He, je, qe, Xe, Qe, Ze, Ye, Je, $e, Ke, tn, en, nn, rn, an, on, sn, un, ln, cn, hn, fn, pn, dn, _n, gn, vn, mn, yn, bn, Tn, Sn, En, wn, An, Nn, kn, Cn, Mn, Rn, On, In, xn, Pn, Ln, zn, Un, Fn, Bn, Dn, Wn, Vn = Symbol("[[OnAfterDeserialized]]"), Gn = w(K + "Transition")((Ge = function(t) {
                function e(e, n, i) {
                    var r;
                    return r = t.call(this) || this, a(r, "from", De, o(r)), a(r, "to", We, o(r)), a(r, "conditions", Ve, o(r)), 
                    r[ce] = void 0, r.from = e, r.to = n, i && (r.conditions = i), r;
                }
                return n(e, t), e;
            }(A), De = i((Be = Ge).prototype, "from", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), We = i(Be.prototype, "to", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ve = i(Be.prototype, "conditions", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Fe = Be)) || Fe;
            !function(t) {
                t[t.NONE = 0] = "NONE", t[t.CURRENT_STATE = 1] = "CURRENT_STATE", t[t.NEXT_STATE = 2] = "NEXT_STATE", 
                t[t.CURRENT_STATE_THEN_NEXT_STATE = 3] = "CURRENT_STATE_THEN_NEXT_STATE", t[t.NEXT_STATE_THEN_CURRENT_STATE = 4] = "NEXT_STATE_THEN_CURRENT_STATE";
            }(Wn || (Wn = {}));
            var Hn, jn = w(K + "AnimationTransition")((Ke = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "duration", qe, o(e)), 
                    a(e, "relativeDuration", Xe, o(e)), a(e, "exitConditionEnabled", Qe, o(e)), a(e, "destinationStart", Ze, o(e)), 
                    a(e, "relativeDestinationStart", Ye, o(e)), a(e, "interruptionSource", Je, o(e)), 
                    a(e, "_exitCondition", $e, o(e)), e;
                }
                return n(e, t), r(e, [ {
                    key: "exitCondition",
                    get: function() {
                        return this._exitCondition;
                    },
                    set: function(t) {
                        this._exitCondition = t;
                    }
                }, {
                    key: "interruptible",
                    get: function() {
                        return this.interruptionSource !== Wn.NONE;
                    },
                    set: function(t) {
                        this.interruptionSource = t ? Wn.CURRENT_STATE_THEN_NEXT_STATE : Wn.NONE;
                    }
                } ]), e;
            }(Gn), qe = i((je = Ke).prototype, "duration", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .3;
                }
            }), Xe = i(je.prototype, "relativeDuration", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Qe = i(je.prototype, "exitConditionEnabled", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), Ze = i(je.prototype, "destinationStart", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Ye = i(je.prototype, "relativeDestinationStart", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), Je = i(je.prototype, "interruptionSource", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Wn.NONE;
                }
            }), $e = i(je.prototype, "_exitCondition", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), He = je)) || He, qn = w(K + "EmptyState")(tn = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return n(e, t), e;
            }(Pe)) || tn, Xn = w(K + "EmptyStateTransition")((sn = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "duration", rn, o(e)), 
                    a(e, "destinationStart", an, o(e)), a(e, "relativeDestinationStart", on, o(e)), 
                    e;
                }
                return n(e, t), e;
            }(Gn), rn = i((nn = sn).prototype, "duration", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .3;
                }
            }), an = i(nn.prototype, "destinationStart", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), on = i(nn.prototype, "relativeDestinationStart", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), en = nn)) || en, Qn = w("cc.animation.StateMachine")((_n = function(t) {
                n(i, t);
                var e = i.prototype;
                function i() {
                    var e;
                    return e = t.call(this) || this, a(e, "_states", cn, o(e)), a(e, "_transitions", hn, o(e)), 
                    a(e, "_entryState", fn, o(e)), a(e, "_exitState", pn, o(e)), a(e, "_anyState", dn, o(e)), 
                    e._entryState = e._addState(new Pe()), e._entryState.name = "Entry", e._exitState = e._addState(new Pe()), 
                    e._exitState.name = "Exit", e._anyState = e._addState(new Pe()), e._anyState.name = "Any", 
                    e;
                }
                return e.__callOnAfterDeserializeRecursive = function() {
                    this[Vn]();
                    for (var t = this._states.length, e = 0; e < t; ++e) {
                        var n = this._states[e];
                        n instanceof Zn && n.stateMachine.__callOnAfterDeserializeRecursive();
                    }
                }, e[Vn] = function() {
                    this._states.forEach(function() {}), this._transitions.forEach(function(t) {
                        t.from[Ie].push(t), t.to[xe].push(t);
                    });
                }, e[Oe] = function() {
                    throw new Error("Method not implemented.");
                }, e.states = function() {
                    return this._states;
                }, e.transitions = function() {
                    return this._transitions;
                }, e.getTransitionsBetween = function(t, e) {
                    return he(t, this), he(e, this), t[Ie].filter(function(t) {
                        return t.to === e;
                    });
                }, e.getOutgoings = function(t) {
                    return he(t, this), t[Ie];
                }, e.getIncomings = function(t) {
                    return he(t, this), t[xe];
                }, e.addMotion = function() {
                    return this._addState(new ze());
                }, e.addSubStateMachine = function() {
                    return this._addState(new Zn());
                }, e.addEmpty = function() {
                    return this._addState(new qn());
                }, e.remove = function(t) {
                    he(t, this), t !== this.entryState && t !== this.exitState && t !== this.anyState && (this.eraseTransitionsIncludes(t), 
                    p(this._states, t));
                }, e.connect = function(t, e, n) {
                    if (he(t, this), he(e, this), e === this.entryState) throw new Ce("to-entry");
                    if (e === this.anyState) throw new Ce("to-any");
                    if (t === this.exitState) throw new Ce("from-exit");
                    var i = t instanceof ze || t === this._anyState ? new jn(t, e, n) : t instanceof qn ? new Xn(t, e, n) : new Gn(t, e, n);
                    return this._transitions.push(i), t[Ie].push(i), e[xe].push(i), i;
                }, e.disconnect = function(t, e) {
                    he(t, this), he(e, this);
                    for (var n = t[Ie], i = e[xe], r = this._transitions, a = n.filter(function(t) {
                        return t.to === e;
                    }), o = a.length, s = function(t) {
                        var e = a[t];
                        p(n, e), h(p(r, e)), _(g(i, function(t) {
                            return t === e;
                        }));
                    }, u = 0; u < o; ++u) s(u);
                }, e.removeTransition = function(t) {
                    h(p(this._transitions, t)), _(g(t.from[Ie], function(e) {
                        return e === t;
                    })), _(g(t.to[xe], function(e) {
                        return e === t;
                    }));
                }, e.eraseOutgoings = function(t) {
                    var e = this;
                    he(t, this);
                    for (var n = t[Ie], i = function(t) {
                        var i = n[t], r = i.to;
                        h(p(e._transitions, i)), _(g(r[xe], function(t) {
                            return t === i;
                        }));
                    }, r = 0; r < n.length; ++r) i(r);
                    n.length = 0;
                }, e.eraseIncomings = function(t) {
                    var e = this;
                    he(t, this);
                    for (var n = t[xe], i = function(t) {
                        var i = n[t], r = i.from;
                        h(p(e._transitions, i)), _(g(r[Ie], function(t) {
                            return t === i;
                        }));
                    }, r = 0; r < n.length; ++r) i(r);
                    n.length = 0;
                }, e.eraseTransitionsIncludes = function(t) {
                    this.eraseIncomings(t), this.eraseOutgoings(t);
                }, e.adjustTransitionPriority = function(t, e) {
                    var n = t.from;
                    if (0 !== e) {
                        var i = n[Ie], r = i.indexOf(t), a = G(r + e, 0, i.length - 1), o = this._transitions, s = o.indexOf(t);
                        if (a > r) for (var u = r + 1; u <= a; ++u) {
                            var l = i[u], c = o.indexOf(l);
                            o[s] = l, s = c;
                        } else if (r > a) for (var h = r - 1; h >= a; --h) {
                            var f = i[h], p = o.indexOf(f);
                            o[s] = f, s = p;
                        }
                        o[s] = t, Ue(i, r, a);
                    }
                }, e.clone = function() {
                    for (var t, e = new i(), n = new Map(), r = c(this._states); !(t = r()).done; ) {
                        var a = t.value;
                        switch (a) {
                          case this._entryState:
                            n.set(a, e._entryState);
                            break;

                          case this._exitState:
                            n.set(a, e._exitState);
                            break;

                          case this._anyState:
                            n.set(a, e._anyState);
                            break;

                          default:
                            if (a instanceof ze || a instanceof Zn) {
                                var o = a.clone();
                                e._addState(o), n.set(a, o);
                            }
                        }
                    }
                    for (var s, u = c(this._transitions); !(s = u()).done; ) {
                        var l = s.value, h = n.get(l.from), f = n.get(l.to), p = e.connect(h, f);
                        p.conditions = l.conditions.map(function(t) {
                            return t.clone();
                        }), p instanceof jn && (p.duration = l.duration, p.exitConditionEnabled = l.exitConditionEnabled, 
                        p.exitCondition = l.exitCondition);
                    }
                    return e;
                }, e._addState = function(t) {
                    return this._states.push(t), t;
                }, r(i, [ {
                    key: "entryState",
                    get: function() {
                        return this._entryState;
                    }
                }, {
                    key: "exitState",
                    get: function() {
                        return this._exitState;
                    }
                }, {
                    key: "anyState",
                    get: function() {
                        return this._anyState;
                    }
                } ]), i;
            }(A), cn = i((ln = _n).prototype, "_states", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), hn = i(ln.prototype, "_transitions", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), fn = i(ln.prototype, "_entryState", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), pn = i(ln.prototype, "_exitState", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), dn = i(ln.prototype, "_anyState", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), un = ln)) || un, Zn = w("cc.animation.SubStateMachine")((yn = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "_stateMachine", mn, o(e)), 
                    e;
                }
                return n(e, t), e.prototype.clone = function() {
                    var t = new e();
                    return t._stateMachine = this._stateMachine.clone(), t;
                }, r(e, [ {
                    key: "stateMachine",
                    get: function() {
                        return this._stateMachine;
                    }
                } ]), e;
            }(Le), mn = i((vn = yn).prototype, "_stateMachine", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new Qn();
                }
            }), gn = vn)) || gn, Yn = w("cc.animation.Layer")((Nn = function() {
                function t() {
                    this[ce] = void 0, a(this, "_stateMachine", Sn, this), a(this, "name", En, this), 
                    a(this, "weight", wn, this), a(this, "mask", An, this), this._stateMachine = new Qn();
                }
                return r(t, [ {
                    key: "stateMachine",
                    get: function() {
                        return this._stateMachine;
                    }
                } ]), t;
            }(), Sn = i((Tn = Nn).prototype, "_stateMachine", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), En = i(Tn.prototype, "name", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), wn = i(Tn.prototype, "weight", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), An = i(Tn.prototype, "mask", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), bn = Tn)) || bn;
            !function(t) {
                t[t.override = 0] = "override", t[t.additive = 1] = "additive";
            }(Hn || (Hn = {})), h(0 == (0 | te.AFTER_CONSUMED << 1));
            var Jn, $n, Kn, ti, ei, ni = w("cc.animation.PlainVariable")((On = function() {
                function t(t) {
                    if (a(this, "_type", Mn, this), a(this, "_value", Rn, this), void 0 !== t) switch (this._type = t, 
                    t) {
                      default:
                        break;

                      case Kt.FLOAT:
                      case Kt.INTEGER:
                        this._value = 0;
                        break;

                      case Kt.BOOLEAN:
                        this._value = !1;
                    }
                }
                return r(t, [ {
                    key: "type",
                    get: function() {
                        return this._type;
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this._value;
                    },
                    set: function(t) {
                        this._value = t;
                    }
                } ]), t;
            }(), Mn = i((Cn = On).prototype, "_type", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Kt.FLOAT;
                }
            }), Rn = i(Cn.prototype, "_value", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), kn = Cn)) || kn, ii = w("cc.animation.TriggerVariable")((Ln = function() {
                function t() {
                    a(this, "_flags", Pn, this);
                }
                return r(t, [ {
                    key: "type",
                    get: function() {
                        return Kt.TRIGGER;
                    }
                }, {
                    key: "value",
                    get: function() {
                        return !!((1 & this._flags) >> 0);
                    },
                    set: function(t) {
                        t ? this._flags |= 1 : this._flags &= -2;
                    }
                }, {
                    key: "resetMode",
                    get: function() {
                        return (6 & this._flags) >> 1;
                    },
                    set: function(t) {
                        this._flags &= -7, this._flags |= t << 1;
                    }
                } ]), t;
            }(), Pn = i((xn = Ln).prototype, "_flags", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), In = xn)) || In, ri = w("cc.animation.AnimationGraph")((Dn = function(t) {
                function e() {
                    var e;
                    return e = t.call(this) || this, a(e, "_layers", Fn, o(e)), a(e, "_variables", Bn, o(e)), 
                    e;
                }
                n(e, t);
                var i = e.prototype;
                return i.onLoaded = function() {
                    for (var t = this._layers, e = t.length, n = 0; n < e; ++n) t[n].stateMachine.__callOnAfterDeserializeRecursive();
                }, i.addLayer = function() {
                    var t = new Yn();
                    return this._layers.push(t), t;
                }, i.removeLayer = function(t) {
                    v.removeAt(this._layers, t);
                }, i.moveLayer = function(t, e) {
                    Ue(this._layers, t, e);
                }, i.addBoolean = function(t, e) {
                    void 0 === e && (e = !1);
                    var n = new ni(Kt.BOOLEAN);
                    n.value = e, this._variables[t] = n;
                }, i.addFloat = function(t, e) {
                    void 0 === e && (e = 0);
                    var n = new ni(Kt.FLOAT);
                    n.value = e, this._variables[t] = n;
                }, i.addInteger = function(t, e) {
                    void 0 === e && (e = 0);
                    var n = new ni(Kt.INTEGER);
                    n.value = e, this._variables[t] = n;
                }, i.addTrigger = function(t, e, n) {
                    void 0 === e && (e = !1), void 0 === n && (n = te.AFTER_CONSUMED);
                    var i = new ii();
                    i.resetMode = n, i.value = e, this._variables[t] = i;
                }, i.removeVariable = function(t) {
                    delete this._variables[t];
                }, i.getVariable = function(t) {
                    return this._variables[t];
                }, i.renameVariable = function(t, e) {
                    var n = this._variables;
                    t in n && (e in n || (this._variables = Object.entries(n).reduce(function(n, i) {
                        var r = i[0], a = i[1];
                        return n[r === t ? e : r] = a, n;
                    }, {})));
                }, r(e, [ {
                    key: "layers",
                    get: function() {
                        return this._layers;
                    }
                }, {
                    key: "variables",
                    get: function() {
                        return Object.entries(this._variables);
                    }
                } ]), e;
            }(L), Fn = i((Un = Dn).prototype, "_layers", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Bn = i(Un.prototype, "_variables", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return {};
                }
            }), zn = Un)) || zn, ai = si, oi = si;
            function si() {}
            Jn = w("cc.animation.ClipMotion"), $n = z(rt), Jn((ei = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "clip", ti, o(e)), 
                    e;
                }
                n(e, t);
                var i = e.prototype;
                return i[Oe] = function(t) {
                    return this.clip ? new Ni(t, this.clip) : null;
                }, i.clone = function() {
                    var t = new e();
                    return t.clip = this.clip, t;
                }, e;
            }(A), ti = i((Kn = ei).prototype, "clip", [ $n ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Kn));
            var ui, li, ci, hi, fi, pi, di, _i, gi, vi, mi, yi, bi, Ti, Si, Ei, wi, Ai, Ni = function() {
                function t(t, e) {
                    this.duration = e.duration / e.speed, this._state = new tt(e), this._state.initialize(t.node, t.blendBuffer, t.mask);
                }
                var e = t.prototype;
                return e.getClipStatuses = function(t) {
                    var e = this, n = !1;
                    return {
                        next: function() {
                            return n ? {
                                done: !0,
                                value: void 0
                            } : (n = !0, {
                                done: !1,
                                value: {
                                    __DEBUG_ID__: e.__DEBUG__ID__,
                                    clip: e._state.clip,
                                    weight: t
                                }
                            });
                        }
                    };
                }, e.sample = function(t, e) {
                    if (0 !== e) {
                        var n = this._state.duration * t;
                        this._state.time = n, this._state.weight = e, this._state.sample(), this._state.weight = 0;
                    }
                }, r(t, [ {
                    key: "progress",
                    get: function() {
                        return this._state.time / this.duration;
                    }
                } ]), t;
            }(), ki = w(K + "BindableNumber")((fi = function() {
                function t(t) {
                    void 0 === t && (t = 0), a(this, "variable", ci, this), a(this, "value", hi, this), 
                    this.value = t;
                }
                return t.prototype.clone = function() {
                    var e = new t();
                    return e.value = this.value, e.variable = this.variable, e;
                }, t;
            }(), ci = i((li = fi).prototype, "variable", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), hi = i(li.prototype, "value", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), ui = li)) || ui, Ci = w(K + "BindableBoolean")((vi = function() {
                function t(t) {
                    void 0 === t && (t = !1), a(this, "variable", _i, this), a(this, "value", gi, this), 
                    this.value = t;
                }
                return t.prototype.clone = function() {
                    var e = new t();
                    return e.value = this.value, e.variable = this.variable, e;
                }, t;
            }(), _i = i((di = vi).prototype, "variable", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), gi = i(di.prototype, "value", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1;
                }
            }), pi = di)) || pi;
            function Mi(t, e, n, i, r) {
                var a = e.variable, o = e.value;
                if (!a) return o;
                var s = t.getVar(a);
                if (!Oi(s, a)) return o;
                if (s.type !== n) throw new Re(a, "number");
                for (var u = arguments.length, l = new Array(u > 5 ? u - 5 : 0), c = 5; c < u; c++) l[c - 5] = arguments[c];
                var h = s.bind.apply(s, [ i, r ].concat(l));
                return h;
            }
            function Ri(t, e, n, i, r) {
                var a = e.variable, o = e.value;
                if (!a) return o;
                var s = t.getVar(a);
                if (!Oi(s, a)) return o;
                if (n !== Kt.FLOAT && n !== Kt.INTEGER) throw new Re(a, "number or integer");
                for (var u = arguments.length, l = new Array(u > 5 ? u - 5 : 0), c = 5; c < u; c++) l[c - 5] = arguments[c];
                var h = s.bind.apply(s, [ i, r ].concat(l));
                return h;
            }
            function Oi(t, e) {
                if (t) return !0;
                throw new Me(e);
            }
            var Ii, xi, Pi, Li, zi, Ui, Fi, Bi, Di, Wi, Vi, Gi = w(K + "AnimationBlendItem")((Ti = function() {
                function t() {
                    a(this, "motion", bi, this);
                }
                var e = t.prototype;
                return e.clone = function() {
                    var e = new t();
                    return this._assign(e), e;
                }, e._assign = function(t) {
                    var e, n;
                    return t.motion = null !== (e = null === (n = this.motion) || void 0 === n ? void 0 : n.clone()) && void 0 !== e ? e : null, 
                    t;
                }, t;
            }(), bi = i((yi = Ti).prototype, "motion", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), mi = yi)) || mi, Hi = w(K + "AnimationBlend")((Ai = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "name", wi, o(e)), 
                    e;
                }
                return n(e, t), e;
            }(A), wi = i((Ei = Ai).prototype, "name", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Si = Ei)) || Si, ji = function() {
                function t(t, e, n, i) {
                    this._childEvaluators = n.map(function(e) {
                        var n, i;
                        return null !== (n = null === (i = e.motion) || void 0 === i ? void 0 : i[Oe](t)) && void 0 !== n ? n : null;
                    }), this._weights = new Array(this._childEvaluators.length).fill(0), this._inputs = [].concat(i);
                }
                var e = t.prototype;
                return e.getChildWeight = function(t) {
                    return this._weights[t];
                }, e.getChildMotionEval = function(t) {
                    return this._childEvaluators[t];
                }, e.getClipStatuses = function(t) {
                    var e, n = this._childEvaluators, i = this._weights, r = n.length, a = 0;
                    return {
                        next: function() {
                            for (;;) {
                                if (e) {
                                    var o = e.next();
                                    if (!o.done) return o;
                                }
                                if (a >= r) return {
                                    done: !0,
                                    value: void 0
                                };
                                var s = n[a];
                                e = null == s ? void 0 : s.getClipStatuses(t * i[a]), ++a;
                            }
                        }
                    };
                }, e.sample = function(t, e) {
                    for (var n = 0; n < this._childEvaluators.length; ++n) {
                        var i;
                        null === (i = this._childEvaluators[n]) || void 0 === i || i.sample(t, e * this._weights[n]);
                    }
                }, e.setInput = function(t, e) {
                    this._inputs[e] = t, this.doEval();
                }, e.doEval = function() {
                    this.eval(this._weights, this._inputs);
                }, e.eval = function() {}, r(t, [ {
                    key: "childCount",
                    get: function() {
                        return this._weights.length;
                    }
                }, {
                    key: "duration",
                    get: function() {
                        for (var t = 0, e = 0; e < this._childEvaluators.length; ++e) {
                            var n, i;
                            t += (null !== (n = null === (i = this._childEvaluators[e]) || void 0 === i ? void 0 : i.duration) && void 0 !== n ? n : 0) * this._weights[e];
                        }
                        return t;
                    }
                } ]), t;
            }(), qi = w(K + "AnimationBlend1DItem")((Li = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "threshold", Pi, o(e)), 
                    e;
                }
                n(e, t);
                var i = e.prototype;
                return i.clone = function() {
                    var t = new e();
                    return this._assign(t), t;
                }, i._assign = function(e) {
                    return t.prototype._assign.call(this, e), e.threshold = this.threshold, e;
                }, e;
            }(Gi), Pi = i((xi = Li).prototype, "threshold", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), Ii = xi)) || Ii, Xi = (w("cc.animation.AnimationBlend1D")((Di = Bi = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "_items", Ui, o(e)), 
                    a(e, "param", Fi, o(e)), e;
                }
                n(e, t);
                var i = e.prototype;
                return i.clone = function() {
                    var t = new e();
                    return t._items = this._items.map(function(t) {
                        return t.clone();
                    }), t.param = this.param.clone(), t;
                }, i[Oe] = function(t) {
                    var e = new Xi(t, this, this._items, this._items.map(function(t) {
                        return t.threshold;
                    }), 0), n = Mi(t, this.param, Kt.FLOAT, e.setInput, e, 0);
                    return e.setInput(n, 0), e;
                }, r(e, [ {
                    key: "items",
                    get: function() {
                        return this._items;
                    },
                    set: function(t) {
                        this._items = Array.from(t).sort(function(t, e) {
                            return t.threshold - e.threshold;
                        });
                    }
                } ]), e;
            }(Hi), Bi.Item = qi, Ui = i((zi = Di).prototype, "_items", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Fi = i(zi.prototype, "param", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new ki();
                }
            }), zi)), function(t) {
                function e(e, n, i, r, a) {
                    var o;
                    return (o = t.call(this, e, n, i, [ a ]) || this)._thresholds = r, o.doEval(), o;
                }
                return n(e, t), e.prototype.eval = function(t, e) {
                    var n = e[0];
                    !function(t, e, n) {
                        if (t.fill(0), 0 === e.length) ; else if (n <= e[0]) t[0] = 1; else if (n >= e[e.length - 1]) t[t.length - 1] = 1; else {
                            for (var i = 0, r = 1; r < e.length; ++r) if (e[r] > n) {
                                i = r;
                                break;
                            }
                            var a = e[i - 1], o = e[i], s = o - a;
                            t[i - 1] = (o - n) / s, t[i] = (n - a) / s;
                        }
                    }(t, this._thresholds, n);
                }, e;
            }(ji)), Qi = (Wi = new H(), Vi = {
                wA: 0,
                wB: 0
            }, function(t, e, n) {
                if (h(t.length === e.length), 0 !== e.length) if (1 !== e.length) if (H.strictEquals(n, H.ZERO)) {
                    var i = e.findIndex(function(t) {
                        return H.strictEquals(t, H.ZERO);
                    });
                    i >= 0 ? t[i] = 1 : t.fill(1 / e.length);
                } else {
                    for (var r = -1, a = -1, o = -1, s = Number.NEGATIVE_INFINITY, u = Number.NEGATIVE_INFINITY, l = n.x, c = n.y, f = 0; f < e.length; ++f) {
                        var p = e[f];
                        if (H.equals(p, H.ZERO)) o = f; else {
                            var d = H.normalize(Wi, p), _ = H.dot(d, n);
                            d.x * c - d.y * l > 0 ? _ >= u && (u = _, r = f) : _ >= s && (s = _, a = f);
                        }
                    }
                    var g = 0;
                    if (r < 0 || a < 0) g = 1; else {
                        var v = (A = e[r], N = e[a], k = n, C = Vi, (M = H.cross(A, N)) ? (C.wA = H.cross(k, N) / M, 
                        C.wB = H.cross(k, A) / -M) : (C.wA = 0, C.wB = 0), C), m = v.wA, y = v.wB, b = 0, T = 0, S = m + y;
                        S > 1 ? (b = m / S, T = y / S) : S < 0 ? (b = 0, T = 0, g = 1) : (b = m, T = y, 
                        g = 1 - S), t[r] = b, t[a] = T;
                    }
                    if (g > 0) if (o >= 0) t[o] = g; else for (var E = g / t.length, w = 0; w < t.length; ++w) t[w] += E;
                } else t[0] = 1;
                var A, N, k, C, M;
            });
            function Zi(t, e, n, i) {
                t.fill(0);
                for (var r = new H(0, 0), a = new H(0, 0), o = 0, s = e.length, u = 0; u < s; ++u) {
                    for (var l = Number.MAX_VALUE, c = !1, h = 0; h < s; ++h) if (u !== h) {
                        i(e[u], e[h], n, r, a);
                        var f = 1 - H.dot(r, a) / H.lengthSqr(a);
                        if (f < 0) {
                            c = !0;
                            break;
                        }
                        l = Math.min(l, f);
                    }
                    c || (t[u] = l, o += l);
                }
                o > 0 && t.forEach(function(e, n) {
                    return t[n] = e / o;
                });
            }
            var Yi, Ji, $i, Ki, tr, er, nr, ir, rr, ar, or, sr, ur, lr, cr, hr, fr, pr, dr = function(t, e, n, i, r) {
                H.subtract(i, n, t), H.subtract(r, e, t);
            }, _r = (Yi = new j(0, 0, 0), Ji = new j(0, 0, 0), $i = new j(0, 0, 0), Ki = new j(0, 0, 0), 
            tr = new j(0, 0, 0), er = new j(0, 0, 0), function(t, e, n, i, r) {
                var a = 0, o = 0, s = 2;
                j.set($i, n.x, n.y, 0), H.equals(t, H.ZERO) ? (a = H.angle(n, e), o = 0, s = 1) : H.equals(e, H.ZERO) ? (o = a = H.angle(n, t), 
                s = 1) : (a = H.angle(t, e)) <= 0 ? o = 0 : H.equals(n, H.ZERO) ? o = a : (j.set(Ki, t.x, t.y, 0), 
                j.set(tr, e.x, e.y, 0), j.set(er, n.x, n.y, 0), j.cross(Yi, Ki, tr), j.projectOnPlane($i, er, Yi), 
                o = j.angle(Ki, $i), a < .99 * Math.PI && j.dot(j.cross(Ji, Ki, $i), Yi) < 0 && (o = -o));
                var u = H.len(t), l = H.len(e), c = (l + u) / 2;
                H.set(r, (l - u) / c, a * s), H.set(i, (j.len($i) - u) / c, o * s);
            });
            !function(t) {
                t[t.SIMPLE_DIRECTIONAL = 0] = "SIMPLE_DIRECTIONAL", t[t.FREEFORM_CARTESIAN = 1] = "FREEFORM_CARTESIAN", 
                t[t.FREEFORM_DIRECTIONAL = 2] = "FREEFORM_DIRECTIONAL";
            }(pr || (pr = {})), m(pr);
            var gr, vr, mr, yr, br, Tr, Sr, Er, wr, Ar, Nr, kr, Cr, Mr, Rr, Or, Ir, xr, Pr, Lr, zr, Ur, Fr, Br, Dr, Wr, Vr, Gr, Hr, jr, qr, Xr = w(K + "AnimationBlend2DItem")((ar = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "threshold", rr, o(e)), 
                    e;
                }
                n(e, t);
                var i = e.prototype;
                return i.clone = function() {
                    var t = new e();
                    return this._assign(t), t;
                }, i._assign = function(e) {
                    return t.prototype._assign.call(this, e), H.copy(e.threshold, this.threshold), e;
                }, e;
            }(Gi), rr = i((ir = ar).prototype, "threshold", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new H();
                }
            }), nr = ir)) || nr, Qr = (w("cc.animation.AnimationBlend2D")((fr = hr = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "algorithm", sr, o(e)), 
                    a(e, "_items", ur, o(e)), a(e, "paramX", lr, o(e)), a(e, "paramY", cr, o(e)), e;
                }
                n(e, t);
                var i = e.prototype;
                return i.clone = function() {
                    var t = new e();
                    return t._items = this._items.map(function(t) {
                        var e;
                        return null !== (e = null == t ? void 0 : t.clone()) && void 0 !== e ? e : null;
                    }), t.paramX = this.paramX.clone(), t.paramY = this.paramY.clone(), t;
                }, i[Oe] = function(t) {
                    var e = new Qr(t, this, this._items, this._items.map(function(t) {
                        return t.threshold;
                    }), this.algorithm, [ 0, 0 ]), n = Mi(t, this.paramX, Kt.FLOAT, e.setInput, e, 0), i = Mi(t, this.paramY, Kt.FLOAT, e.setInput, e, 1);
                    return e.setInput(n, 0), e.setInput(i, 1), e;
                }, r(e, [ {
                    key: "items",
                    get: function() {
                        return this._items;
                    },
                    set: function(t) {
                        this._items = Array.from(t);
                    }
                } ]), e;
            }(Hi), hr.Algorithm = pr, hr.Item = Xr, sr = i((or = fr).prototype, "algorithm", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return pr.SIMPLE_DIRECTIONAL;
                }
            }), ur = i(or.prototype, "_items", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), lr = i(or.prototype, "paramX", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new ki();
                }
            }), cr = i(or.prototype, "paramY", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new ki();
                }
            }), or)), function(t) {
                function e(e, n, i, r, a, o) {
                    var s;
                    return (s = t.call(this, e, n, i, o) || this)._thresholds = void 0, s._algorithm = void 0, 
                    s._value = new H(), s._thresholds = r, s._algorithm = a, s.doEval(), s;
                }
                return n(e, t), e.prototype.eval = function(t, e) {
                    var n = e[0], i = e[1];
                    switch (H.set(this._value, n, i), t.fill(0), this._algorithm) {
                      case pr.SIMPLE_DIRECTIONAL:
                        Qi(t, this._thresholds, this._value);
                        break;

                      case pr.FREEFORM_CARTESIAN:
                        !function(t, e, n) {
                            Zi(t, e, n, dr);
                        }(t, this._thresholds, this._value);
                        break;

                      case pr.FREEFORM_DIRECTIONAL:
                        !function(t, e, n) {
                            Zi(t, e, n, _r);
                        }(t, this._thresholds, this._value);
                    }
                }, e;
            }(ji)), Zr = w(K + "AnimationBlendDirectItem")((yr = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "weight", mr, o(e)), 
                    e;
                }
                n(e, t);
                var i = e.prototype;
                return i.clone = function() {
                    var t = new e();
                    return this._assign(t), t;
                }, i._assign = function(e) {
                    return t.prototype._assign.call(this, e), e.weight = this.weight, e;
                }, e;
            }(Gi), mr = i((vr = yr).prototype, "weight", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0;
                }
            }), gr = vr)) || gr, Yr = (w("cc.animation.AnimationBlendDirect")((Er = Sr = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "_items", Tr, o(e)), 
                    e;
                }
                n(e, t);
                var i = e.prototype;
                return i.clone = function() {
                    var t = new e();
                    return t._items = this._items.map(function(t) {
                        var e;
                        return null !== (e = null == t ? void 0 : t.clone()) && void 0 !== e ? e : null;
                    }), t;
                }, i[Oe] = function(t) {
                    return new Yr(t, this, this._items, this._items.map(function(t) {
                        return t.weight;
                    }));
                }, r(e, [ {
                    key: "items",
                    get: function() {
                        return this._items;
                    },
                    set: function(t) {
                        this._items = Array.from(t);
                    }
                } ]), e;
            }(Hi), Sr.Item = Zr, Tr = i((br = Er).prototype, "_items", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), br)), function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this).doEval(), e;
                }
                return n(e, t), e.prototype.eval = function(t, e) {
                    for (var n = t.length, i = 0; i < n; ++i) t[i] = e[i];
                }, e;
            }(ji)), Jr = (w(K + "AnimationMask")((Nr = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "_jointMasks", Ar, o(e)), 
                    e;
                }
                n(e, t);
                var i = e.prototype;
                return i.addJoint = function(t, e) {
                    this.removeJoint(t);
                    var n = new Jr();
                    n.path = t, n.enabled = e, this._jointMasks.push(n);
                }, i.removeJoint = function(t) {
                    g(this._jointMasks, function(e) {
                        return e.path === t;
                    });
                }, i.clear = function() {
                    this._jointMasks.length = 0;
                }, i.filterDisabledNodes = function(t) {
                    for (var e = this._jointMasks, n = e.length, i = new Set(), r = 0; r < n; ++r) {
                        var a = e[r], o = a.path;
                        if (!a.enabled) {
                            var s = t.getChildByPath(o);
                            s && i.add(s);
                        }
                    }
                    return i;
                }, r(e, [ {
                    key: "joints",
                    get: function() {
                        return this._jointMasks;
                    },
                    set: function(t) {
                        this.clear();
                        for (var e, n = c(t); !(e = n()).done; ) {
                            var i = e.value;
                            this.addJoint(i.path, i.enabled);
                        }
                    }
                } ]), e;
            }(L), Ar = i((wr = Nr).prototype, "_jointMasks", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), i(wr.prototype, "joints", [ U ], Object.getOwnPropertyDescriptor(wr.prototype, "joints"), wr.prototype), 
            wr)), w("cc.JointMask")((Mr = i((Cr = function() {
                a(this, "path", Mr, this), a(this, "enabled", Rr, this);
            }).prototype, "path", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Rr = i(Cr.prototype, "enabled", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), kr = Cr)) || kr);
            !function(t) {
                t[t.EQUAL_TO = 0] = "EQUAL_TO", t[t.NOT_EQUAL_TO = 1] = "NOT_EQUAL_TO", t[t.LESS_THAN = 2] = "LESS_THAN", 
                t[t.LESS_THAN_OR_EQUAL_TO = 3] = "LESS_THAN_OR_EQUAL_TO", t[t.GREATER_THAN = 4] = "GREATER_THAN", 
                t[t.GREATER_THAN_OR_EQUAL_TO = 5] = "GREATER_THAN_OR_EQUAL_TO";
            }(qr || (qr = {})), w(K + "BinaryCondition")((zr = Lr = function() {
                function t() {
                    a(this, "operator", Ir, this), a(this, "lhs", xr, this), a(this, "rhs", Pr, this);
                }
                var e = t.prototype;
                return e.clone = function() {
                    var e = new t();
                    return e.operator = this.operator, e.lhs = this.lhs.clone(), e.rhs = this.rhs.clone(), 
                    e;
                }, e[Oe] = function(t) {
                    var e = this.operator, n = this.lhs, i = this.rhs, r = new Kr(e, 0, 0), a = Ri(t, n, Kt.FLOAT, r.setLhs, r), o = Ri(t, i, Kt.FLOAT, r.setRhs, r);
                    return r.reset(a, o), r;
                }, t;
            }(), Lr.Operator = qr, Ir = i((Or = zr).prototype, "operator", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return qr.EQUAL_TO;
                }
            }), xr = i(Or.prototype, "lhs", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new ki();
                }
            }), Pr = i(Or.prototype, "rhs", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new ki();
                }
            }), Or));
            var $r, Kr = function() {
                function t(t, e, n) {
                    this._operator = t, this._lhs = e, this._rhs = n, this._eval();
                }
                var e = t.prototype;
                return e.reset = function(t, e) {
                    this._lhs = t, this._rhs = e, this._eval();
                }, e.setLhs = function(t) {
                    this._lhs = t, this._eval();
                }, e.setRhs = function(t) {
                    this._rhs = t, this._eval();
                }, e.eval = function() {
                    return this._result;
                }, e._eval = function() {
                    var t = this._lhs, e = this._rhs;
                    switch (this._operator) {
                      default:
                      case qr.EQUAL_TO:
                        this._result = t === e;
                        break;

                      case qr.NOT_EQUAL_TO:
                        this._result = t !== e;
                        break;

                      case qr.LESS_THAN:
                        this._result = t < e;
                        break;

                      case qr.LESS_THAN_OR_EQUAL_TO:
                        this._result = t <= e;
                        break;

                      case qr.GREATER_THAN:
                        this._result = t > e;
                        break;

                      case qr.GREATER_THAN_OR_EQUAL_TO:
                        this._result = t >= e;
                    }
                }, t;
            }();
            !function(t) {
                t[t.TRUTHY = 0] = "TRUTHY", t[t.FALSY = 1] = "FALSY";
            }($r || ($r = {})), w(K + "UnaryCondition")((Wr = Dr = function() {
                function t() {
                    a(this, "operator", Fr, this), a(this, "operand", Br, this);
                }
                var e = t.prototype;
                return e.clone = function() {
                    var e = new t();
                    return e.operator = this.operator, e.operand = this.operand.clone(), e;
                }, e[Oe] = function(t) {
                    var e = this.operator, n = this.operand, i = new ea(e, !1), r = Mi(t, n, Kt.BOOLEAN, i.setOperand, i);
                    return i.reset(r), i;
                }, t;
            }(), Dr.Operator = $r, Fr = i((Ur = Wr).prototype, "operator", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return $r.TRUTHY;
                }
            }), Br = i(Ur.prototype, "operand", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new Ci();
                }
            }), Ur));
            var ta, ea = function() {
                function t(t, e) {
                    this._operator = t, this._operand = e, this._eval();
                }
                var e = t.prototype;
                return e.reset = function(t) {
                    this.setOperand(t);
                }, e.setOperand = function(t) {
                    this._operand = t, this._eval();
                }, e.eval = function() {
                    return this._result;
                }, e._eval = function() {
                    var t = this._operand;
                    switch (this._operator) {
                      default:
                      case $r.TRUTHY:
                        this._result = !!t;
                        break;

                      case $r.FALSY:
                        this._result = !t;
                    }
                }, t;
            }(), na = w(K + "TriggerCondition")((jr = function() {
                function t() {
                    a(this, "trigger", Hr, this);
                }
                var e = t.prototype;
                return e.clone = function() {
                    var e = new t();
                    return e.trigger = this.trigger, e;
                }, e[Oe] = function(t) {
                    var e = new ia(!1), n = t.getVar(this.trigger);
                    return Oi(n, this.trigger) && (function(t, e) {
                        if (t !== Kt.TRIGGER) throw new Re(e, "trigger");
                    }(n.type, this.trigger), e.setTrigger(n.bind(e.setTrigger, e))), e;
                }, t;
            }(), Hr = i((Gr = jr).prototype, "trigger", [ N ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), Vr = Gr)) || Vr, ia = function() {
                function t(t) {
                    this._triggered = !1, this._triggered = t;
                }
                var e = t.prototype;
                return e.setTrigger = function(t) {
                    this._triggered = t;
                }, e.eval = function() {
                    return this._triggered;
                }, t;
            }(), ra = function() {
                function t() {
                    this._nodeBlendStates = new Map();
                }
                var e = t.prototype;
                return e.createWriter = function(t, e, n, i) {
                    var r = this.ref(t, e);
                    return new aa(t, e, r, n, i);
                }, e.destroyWriter = function(t) {
                    var e = t;
                    this.deRef(e.node, e.property);
                }, e.ref = function(t, e) {
                    var n = this._nodeBlendStates.get(t);
                    return n || (n = this.createNodeBlendState(), this._nodeBlendStates.set(t, n)), 
                    n.refProperty(t, e);
                }, e.deRef = function(t, e) {
                    var n = this._nodeBlendStates.get(t);
                    n && (n.deRefProperty(e), n.empty && this._nodeBlendStates.delete(t));
                }, e.apply = function() {
                    this._nodeBlendStates.forEach(function(t, e) {
                        t.apply(e);
                    });
                }, t;
            }(), aa = function() {
                function t(t, e, n, i, r) {
                    this._node = t, this._property = e, this._propertyBlendState = n, this._host = i, 
                    this._constants = r;
                }
                var e = t.prototype;
                return e.getValue = function() {
                    return this._node[this._property];
                }, e.setValue = function(t) {
                    var e = this._propertyBlendState, n = this._host.weight;
                    e.blend(t, n);
                }, r(t, [ {
                    key: "node",
                    get: function() {
                        return this._node;
                    }
                }, {
                    key: "property",
                    get: function() {
                        return this._property;
                    }
                } ]), t;
            }();
            !function(t) {
                t[t.POSITION = 1] = "POSITION", t[t.ROTATION = 2] = "ROTATION", t[t.SCALE = 4] = "SCALE", 
                t[t.EULER_ANGLES = 8] = "EULER_ANGLES";
            }(ta || (ta = {}));
            var oa, sa = ta.POSITION | ta.ROTATION | ta.SCALE | ta.EULER_ANGLES, ua = function() {
                function t() {
                    this.refCount = 0, this.accumulatedWeight = 0, this.result = new j();
                }
                var e = t.prototype;
                return e.blend = function(t, e) {
                    this.accumulatedWeight = va(this.result, this.result, this.accumulatedWeight, t, e);
                }, e.reset = function() {
                    this.accumulatedWeight = 0, j.zero(this.result);
                }, t;
            }(), la = function() {
                function t() {
                    this.refCount = 0, this.accumulatedWeight = 0, this.result = new q();
                }
                var e = t.prototype;
                return e.blend = function(t, e) {
                    this.accumulatedWeight = ma(this.result, this.result, this.accumulatedWeight, t, e);
                }, e.reset = function() {
                    this.accumulatedWeight = 0, q.identity(this.result);
                }, t;
            }(), ca = function() {
                function t() {
                    this._transformApplyFlags = 0, this._properties = {};
                }
                var e = t.prototype;
                return e.refProperty = function(t, e) {
                    var n, i, r, a = this._properties;
                    switch (e) {
                      default:
                      case "position":
                      case "scale":
                      case "eulerAngles":
                        r = null !== (n = a[e]) && void 0 !== n ? n : a[e] = this._createVec3BlendState(t[e]);
                        break;

                      case "rotation":
                        r = null !== (i = a[e]) && void 0 !== i ? i : a[e] = this._createQuatBlendState(t.rotation);
                    }
                    return ++r.refCount, r;
                }, e.deRefProperty = function(t) {
                    var e = this._properties, n = e[t];
                    n && (--n.refCount, n.refCount > 0 || delete e[t]);
                }, e.apply = function(t) {
                    var e, n, i, r = this._transformApplyFlags, a = this._properties, o = a.position, s = a.scale, u = a.rotation, l = a.eulerAngles;
                    r && (o && r & ta.POSITION && (e = o.result), s && r & ta.SCALE && (n = s.result), 
                    l && r & ta.EULER_ANGLES && (i = l.result), u && r & ta.ROTATION && (i = u.result), 
                    (i || e || n) && t.setRTS(i, e, n), this._transformApplyFlags = 0);
                }, r(t, [ {
                    key: "empty",
                    get: function() {
                        var t = this._properties;
                        return !(t.position || t.rotation || t.eulerAngles || t.scale);
                    }
                } ]), t;
            }(), ha = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                n(e, t);
                var i = e.prototype;
                return i.apply = function(e) {
                    var n = this._properties, i = n.position, r = n.scale, a = n.rotation, o = n.eulerAngles;
                    i && i.accumulatedWeight && (this._transformApplyFlags |= ta.POSITION, i.accumulatedWeight < 1 && i.blend(e.position, 1 - i.accumulatedWeight)), 
                    r && r.accumulatedWeight && (this._transformApplyFlags |= ta.SCALE, r.accumulatedWeight < 1 && r.blend(e.scale, 1 - r.accumulatedWeight)), 
                    o && o.accumulatedWeight && (this._transformApplyFlags |= ta.EULER_ANGLES, o.accumulatedWeight < 1 && o.blend(e.eulerAngles, 1 - o.accumulatedWeight)), 
                    a && a.accumulatedWeight && (this._transformApplyFlags |= ta.ROTATION, a.accumulatedWeight < 1 && a.blend(e.rotation, 1 - a.accumulatedWeight)), 
                    t.prototype.apply.call(this, e), null == i || i.reset(), null == r || r.reset(), 
                    null == a || a.reset(), null == o || o.reset();
                }, i._createVec3BlendState = function() {
                    return new ua();
                }, i._createQuatBlendState = function() {
                    return new la();
                }, e;
            }(ca), fa = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return n(e, t), e.prototype.createNodeBlendState = function() {
                    return new ha();
                }, e;
            }(ra), pa = function() {
                function t(t) {
                    this.refCount = 0, this.result = new j(), this._defaultValue = new j(), this._clipBlendResult = new j(), 
                    this._accumulatedWeight = 0, j.copy(this._defaultValue, t), j.copy(this.result, t);
                }
                var e = t.prototype;
                return e.blend = function(t, e) {
                    this._accumulatedWeight = va(this._clipBlendResult, this._clipBlendResult, this._accumulatedWeight, t, e);
                }, e.commitLayerChange = function(t) {
                    var e = this.result, n = this._clipBlendResult, i = this._accumulatedWeight;
                    i < 1 && this.blend(this._defaultValue, 1 - i), j.lerp(e, e, n, t), j.zero(this._clipBlendResult), 
                    this._accumulatedWeight = 0;
                }, e.reset = function() {
                    j.copy(this.result, this._defaultValue);
                }, t;
            }(), da = function() {
                function t(t) {
                    this.refCount = 0, this.result = new q(), this._defaultValue = new q(), this._clipBlendResult = new q(), 
                    this._accumulatedWeight = 0, q.copy(this._defaultValue, t), q.copy(this.result, t);
                }
                var e = t.prototype;
                return e.blend = function(t, e) {
                    this._accumulatedWeight = ma(this._clipBlendResult, this._clipBlendResult, this._accumulatedWeight, t, e);
                }, e.commitLayerChange = function(t) {
                    var e = this.result, n = this._clipBlendResult, i = this._accumulatedWeight;
                    i < 1 && this.blend(this._defaultValue, 1 - i), q.slerp(e, e, n, t), q.identity(this._clipBlendResult), 
                    this._accumulatedWeight = 0;
                }, e.reset = function() {
                    q.copy(this.result, this._defaultValue);
                }, t;
            }(), _a = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this)._layerMask = -1 >>> 0, 
                    e;
                }
                n(e, t);
                var i = e.prototype;
                return i.setLayerMask = function(t) {
                    this._layerMask &= ~(1 << t);
                }, i.commitLayerChanges = function(t, e) {
                    if (this._layerMask & 1 << t) {
                        var n = this._properties, i = n.position, r = n.scale, a = n.rotation, o = n.eulerAngles;
                        i && i.commitLayerChange(e), r && r.commitLayerChange(e), a && a.commitLayerChange(e), 
                        o && o.commitLayerChange(e);
                    }
                }, i.apply = function(e) {
                    this._transformApplyFlags = sa, t.prototype.apply.call(this, e);
                    var n = this._properties, i = n.position, r = n.scale, a = n.rotation, o = n.eulerAngles;
                    null == i || i.reset(), null == r || r.reset(), null == a || a.reset(), null == o || o.reset();
                }, i._createVec3BlendState = function(t) {
                    return new pa(t);
                }, i._createQuatBlendState = function(t) {
                    return new da(t);
                }, e;
            }(ca), ga = function(t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                n(e, t);
                var i = e.prototype;
                return i.setMask = function(t, e) {
                    this._nodeBlendStates.forEach(function(n, i) {
                        e.has(i) && n.setLayerMask(t);
                    });
                }, i.commitLayerChanges = function(t, e) {
                    this._nodeBlendStates.forEach(function(n) {
                        n.commitLayerChanges(t, e);
                    });
                }, i.createNodeBlendState = function() {
                    return new _a();
                }, e;
            }(ra);
            function va(t, e, n, i, r) {
                var a = n + r;
                if (1 !== r || n) {
                    if (a) {
                        var o = r / a;
                        j.lerp(t, t, i, o);
                    }
                } else j.copy(t, i);
                return a;
            }
            function ma(t, e, n, i, r) {
                var a = n + r;
                if (1 !== r || n) {
                    if (a) {
                        var o = r / a;
                        q.slerp(t, e, i, o);
                    }
                } else q.copy(t, i);
                return a;
            }
            var ya, ba = w(K + "StateMachineComponent")(oa = function() {
                function t() {}
                var e = t.prototype;
                return e.onMotionStateEnter = function() {}, e.onMotionStateExit = function() {}, 
                e.onMotionStateUpdate = function() {}, e.onStateMachineEnter = function() {}, e.onStateMachineExit = function() {}, 
                t;
            }()) || oa, Ta = function() {
                function t(t, e, n) {
                    var i = this;
                    this._blendBuffer = new ga(), this._currentTransitionCache = {
                        duration: 0,
                        time: 0
                    }, this._varInstances = {}, this._hasAutoTrigger = !1;
                    for (var r, a = c(t.variables); !(r = a()).done; ) {
                        var o = r.value, s = o[0], u = o[1], l = this._varInstances[s] = new ke(u.type, u.value);
                        if (u.type === Kt.TRIGGER) {
                            var h = u.resetMode;
                            l.resetMode = h, h === te.NEXT_FRAME_OR_AFTER_CONSUMED && (this._hasAutoTrigger = !0);
                        }
                    }
                    for (var f = {
                        controller: n,
                        blendBuffer: this._blendBuffer,
                        node: e,
                        getVar: function(t) {
                            return i._varInstances[t];
                        },
                        triggerResetFn: function(t) {
                            i.setValue(t, !1);
                        }
                    }, p = (this._layerEvaluations = t.layers.map(function(t) {
                        var e;
                        return new Sa(t, b({}, f, {
                            mask: null !== (e = t.mask) && void 0 !== e ? e : void 0
                        }));
                    })).length, d = 0; d < p; ++d) {
                        var _ = t.layers[d].mask;
                        if (_) {
                            var g = _.filterDisabledNodes(f.node);
                            this._blendBuffer.setMask(d, g);
                        }
                    }
                }
                var e = t.prototype;
                return e.update = function(t) {
                    for (var e = this._blendBuffer, n = this._layerEvaluations, i = n.length, r = 0; r < i; ++r) {
                        var a = n[r];
                        a.update(t), e.commitLayerChanges(r, a.weight * a.passthroughWeight);
                    }
                    if (this._hasAutoTrigger) {
                        var o = this._varInstances;
                        for (var s in o) {
                            var u = o[s];
                            u.type === Kt.TRIGGER && u.resetMode === te.NEXT_FRAME_OR_AFTER_CONSUMED && (u.value = !1);
                        }
                    }
                    this._blendBuffer.apply();
                }, e.getVariables = function() {
                    return Object.entries(this._varInstances);
                }, e.getCurrentStateStatus = function(t) {
                    return this._layerEvaluations[t].getCurrentStateStatus();
                }, e.getCurrentClipStatuses = function(t) {
                    return this._layerEvaluations[t].getCurrentClipStatuses();
                }, e.getCurrentTransition = function(t) {
                    var e = this._layerEvaluations, n = this._currentTransitionCache;
                    return e[t].getCurrentTransition(n) ? n : null;
                }, e.getNextStateStatus = function(t) {
                    return this._layerEvaluations[t].getNextStateStatus();
                }, e.getNextClipStatuses = function(t) {
                    return _(this.getCurrentTransition(t)), this._layerEvaluations[t].getNextClipStatuses();
                }, e.getValue = function(t) {
                    var e = this._varInstances[t];
                    return e ? e.value : void 0;
                }, e.setValue = function(t, e) {
                    var n = this._varInstances[t];
                    n && (n.value = e);
                }, e.getLayerWeight = function(t) {
                    return this._layerEvaluations[t].weight;
                }, e.setLayerWeight = function(t, e) {
                    this._layerEvaluations[t].weight = e;
                }, t;
            }(), Sa = function() {
                function t(t, e) {
                    this.passthroughWeight = 1, this._nodes = [], this._topLevelEntry = void 0, this._topLevelExit = void 0, 
                    this._currentNode = void 0, this._currentTransitionToNode = null, this._currentTransitionPath = [], 
                    this._transitionProgress = 0, this._fromWeight = 0, this._toWeight = 0, this._fromUpdated = !1, 
                    this._toUpdated = !1, this._transitionSnapshot = new Xa(), this.name = t.name, this._controller = e.controller, 
                    this.weight = t.weight;
                    var n = this._addStateMachine(t.stateMachine, null, b({}, e), t.name), i = n.entry, r = n.exit;
                    this._topLevelEntry = i, this._topLevelExit = r, this._currentNode = i, this._resetTrigger = e.triggerResetFn;
                }
                var e = t.prototype;
                return e.update = function(t) {
                    this.exited || (this._fromWeight = 1, this._toWeight = 0, this._eval(t), this._sample());
                }, e.getCurrentStateStatus = function() {
                    var t = this._currentNode;
                    return t.kind === wa.animation ? t.getFromPortStatus() : t.kind === wa.transitionSnapshot ? t.first.getFromPortStatus() : null;
                }, e.getCurrentClipStatuses = function() {
                    var t = this._currentNode;
                    return t.kind === wa.animation ? t.getClipStatuses(this._fromWeight) : t.kind === wa.transitionSnapshot ? t.first.getClipStatuses(this._fromWeight) : Na;
                }, e.getCurrentTransition = function(t) {
                    var e = this._currentTransitionPath;
                    if (0 !== e.length) {
                        if (e[e.length - 1].to.kind !== wa.animation) return !1;
                        var n = e[0], i = n.duration, r = n.normalizedDuration, a = t.duration = r ? i * (this._currentNode.kind === wa.animation ? this._currentNode.duration : this._currentNode.kind === wa.transitionSnapshot ? this._currentNode.first.duration : 0) : i;
                        return t.time = this._transitionProgress * a, !0;
                    }
                    return !1;
                }, e.getNextStateStatus = function() {
                    return h(this._currentTransitionToNode && this._currentTransitionToNode.kind !== wa.empty), 
                    this._currentTransitionToNode.getToPortStatus();
                }, e.getNextClipStatuses = function() {
                    var t, e = this._currentTransitionPath, n = e[e.length - 1].to;
                    return h(n.kind === wa.animation), null !== (t = n.getClipStatuses(this._toWeight)) && void 0 !== t ? t : Na;
                }, e._addStateMachine = function(t, e, n, i) {
                    for (var r, a, o, s = this, u = Array.from(t.states()), l = u.map(function(e) {
                        return e instanceof ze ? new Oa(e, n) : e === t.entryState ? r = new Ha(e, wa.entry, e.name) : e === t.exitState ? o = new Ha(e, wa.exit, e.name) : e === t.anyState ? a = new Ha(e, wa.any, e.name) : e instanceof qn ? new ja(e) : null;
                    }), h = {
                        components: null,
                        parent: e,
                        entry: r,
                        exit: o,
                        any: a
                    }, f = 0; f < u.length; ++f) {
                        var p = l[f];
                        p && (p.stateMachine = h);
                    }
                    for (var d = u.map(function(t) {
                        if (t instanceof Zn) {
                            var e = s._addStateMachine(t.stateMachine, h, n, i + "/" + t.name);
                            return e.components = new Ra(t), e;
                        }
                        return null;
                    }), _ = 0; _ < u.length; ++_) {
                        var g = u[_], v = t.getOutgoings(g), m = [], y = void 0;
                        y = g instanceof Zn ? d[_].exit : l[_];
                        for (var b, T = function() {
                            var t, e = b.value, i = e.to, r = u.findIndex(function(t) {
                                return t === e.to;
                            });
                            t = i instanceof Zn ? d[r].entry : l[r];
                            var a = {
                                conditions: e.conditions.map(function(t) {
                                    return t[Oe](n);
                                }),
                                to: t,
                                triggers: void 0,
                                duration: 0,
                                normalizedDuration: !1,
                                destinationStart: 0,
                                relativeDestinationStart: !1,
                                exitCondition: 0,
                                exitConditionEnabled: !1,
                                interruption: Wn.NONE
                            };
                            e instanceof jn ? (a.duration = e.duration, a.normalizedDuration = e.relativeDuration, 
                            a.exitConditionEnabled = e.exitConditionEnabled, a.exitCondition = e.exitCondition, 
                            a.destinationStart = e.destinationStart, a.relativeDestinationStart = e.relativeDestinationStart, 
                            a.interruption = e.interruptionSource) : e instanceof Xn && (a.duration = e.duration, 
                            a.destinationStart = e.destinationStart, a.relativeDestinationStart = e.relativeDestinationStart), 
                            a.conditions.forEach(function(t, n) {
                                var i, r = e.conditions[n];
                                r instanceof na && r.trigger && (null !== (i = a.triggers) && void 0 !== i ? i : a.triggers = []).push(r.trigger);
                            }), m.push(a);
                        }, S = c(v); !(b = S()).done; ) T();
                        y.outgoingTransitions = m;
                    }
                    return h;
                }, e._eval = function(t) {
                    if (h(!this.exited), oi("[Layer " + this.name + "]: UpdateStart " + t + "s"), this._continueDanglingTransition()) return 0;
                    for (var e = t, n = !0, i = 0; n || e > 0; ) {
                        if (n = !1, 100 === i) {
                            y(14e3, 100);
                            break;
                        }
                        if (++i, this._currentTransitionPath.length > 0) {
                            var r = this._detectInterruption(e, Ca);
                            if (r) {
                                if (e -= r.requires, this._interrupt(r)) break;
                                n = !0;
                                continue;
                            }
                            if (e -= this._updateCurrentTransition(e), this._currentNode.kind === wa.exit) break;
                            0 === this._currentTransitionPath.length && (n = !0);
                        } else {
                            var a = this._currentNode, o = this._matchCurrentNodeTransition(e);
                            if (o) {
                                var s = o.transition, u = o.requires;
                                if (ai("[SubStateMachine " + this.name + "]: CurrentNodeUpdate: " + a.name), e -= u, 
                                a.kind === wa.animation && (a.updateFromPort(u), this._fromUpdated = !0), this._switchTo(s)) break;
                                n = !0;
                            } else ai("[SubStateMachine " + this.name + "]: CurrentNodeUpdate: " + a.name), 
                            a.kind === wa.animation ? (a.updateFromPort(e), this._fromUpdated = !0, e = 0) : e = 0;
                        }
                    }
                    return ai("[SubStateMachine " + this.name + "]: UpdateEnd"), this._fromUpdated && this._currentNode.kind === wa.animation && (this._fromUpdated = !1, 
                    this._currentNode.triggerFromPortUpdate(this._controller)), this._currentTransitionToNode && this._toUpdated && this._currentTransitionToNode.kind === wa.animation && (this._toUpdated = !1, 
                    this._currentTransitionToNode.triggerToPortUpdate(this._controller)), e;
                }, e._sample = function() {
                    var t = this._currentNode, e = this._currentTransitionToNode, n = this._fromWeight, i = this._toWeight;
                    t.kind === wa.empty ? (this.passthroughWeight = i, e && e.kind === wa.animation && e.sampleToPort(1)) : e && e.kind === wa.empty ? (this.passthroughWeight = n, 
                    this._sampleSource(1)) : (this.passthroughWeight = 1, this._sampleSource(n), e && e.kind === wa.animation && e.sampleToPort(i));
                }, e._sampleSource = function(t) {
                    var e = this._currentNode;
                    e.kind === wa.animation ? e.sampleFromPort(t) : e.kind === wa.transitionSnapshot && e.sample(t);
                }, e._matchCurrentNodeTransition = function(t) {
                    var e = this._currentNode, n = ka.reset();
                    return this._matchTransition(e, e, t, null, n), n.hasZeroCost() || e.kind === wa.animation && (this._matchAnyScoped(e, t, n), 
                    n.hasZeroCost()) || n.isValid() ? n : null;
                }, e._matchAnyScoped = function(t, e, n) {
                    for (var i = !1, r = t.stateMachine; null !== r && (this._matchTransition(r.any, t, e, null, n) && (i = !0), 
                    !n.hasZeroCost()); r = r.parent) ;
                    return i;
                }, e._matchTransition = function(t, e, n, i, r) {
                    h(t === e || t.kind === wa.any);
                    for (var a = t.outgoingTransitions, o = a.length, s = !1, u = 0; u < o; ++u) {
                        var l = a[u];
                        if (l !== i) {
                            var c = l.conditions, f = c.length;
                            if (0 === f) {
                                if (t.kind === wa.entry || t.kind === wa.exit) {
                                    r.set(l, 0), s = !0;
                                    break;
                                }
                                if (!l.exitConditionEnabled) continue;
                            }
                            var p = 0;
                            if (e.kind === wa.animation && l.exitConditionEnabled) {
                                var d = e.duration * l.exitCondition;
                                if ((p = Math.max(d - e.fromPortTime, 0)) > n || p >= r.requires) continue;
                            }
                            for (var _ = !0, g = 0; g < f; ++g) if (!c[g].eval()) {
                                _ = !1;
                                break;
                            }
                            if (_) {
                                if (0 === p) {
                                    r.set(l, 0), s = !0;
                                    break;
                                }
                                h(p <= r.requires), r.set(l, p), s = !0;
                            }
                        }
                    }
                    return s;
                }, e._switchTo = function(t) {
                    var e = this._currentTransitionPath;
                    this._consumeTransition(t), e.push(t);
                    var n = this._matchTransitionPathUntilMotion();
                    return !n || (this._doTransitionToMotion(n), !1);
                }, e._continueDanglingTransition = function() {
                    var t = this._currentTransitionPath, e = t.length;
                    if (0 === e) return !1;
                    var n = t[e - 1].to;
                    if (n.kind !== wa.animation && n.kind !== wa.empty) {
                        var i = this._matchTransitionPathUntilMotion();
                        return !i || (this._doTransitionToMotion(i), !1);
                    }
                    return !1;
                }, e._matchTransitionPathUntilMotion = function() {
                    for (var t = this._currentTransitionPath, e = t[t.length - 1].to; e.kind !== wa.animation && e.kind !== wa.empty; ) {
                        var n = ka.reset();
                        if (this._matchTransition(e, e, 0, null, n), !n.transition) break;
                        var i = n.transition;
                        this._consumeTransition(i), t.push(i), e = i.to;
                    }
                    return e.kind === wa.animation || e.kind === wa.empty ? e : null;
                }, e._consumeTransition = function(t) {
                    var e = t.to;
                    e.kind === wa.entry && this._callEnterMethods(e);
                }, e._resetTriggersAlongThePath = function() {
                    for (var t = this._currentTransitionPath, e = t.length, n = 0; n < e; ++n) {
                        var i = t[n];
                        this._resetTriggersOnTransition(i);
                    }
                }, e._doTransitionToMotion = function(t) {
                    var e = this._currentTransitionPath;
                    if (h(0 !== e.length), this._resetTriggersAlongThePath(), this._transitionProgress = 0, 
                    this._currentTransitionToNode = t, this._toUpdated = !1, t.kind === wa.animation) {
                        var n = e[0], i = n.destinationStart, r = n.relativeDestinationStart ? i : 0 === t.duration ? 0 : i / t.duration;
                        t.resetToPort(r);
                    }
                    this._callEnterMethods(t);
                }, e._updateCurrentTransition = function(t) {
                    var e, n = this._currentTransitionPath, i = this._currentTransitionToNode;
                    _(n.length > 0);
                    var r = n[0], a = r.duration, o = r.normalizedDuration, s = this._currentNode, u = i, l = 0, c = 0;
                    if (a <= 0) l = 0, c = 1; else {
                        h(s.kind === wa.animation || s.kind === wa.empty || s.kind === wa.transitionSnapshot);
                        var f = this._transitionProgress, p = s.kind === wa.empty ? a : o ? a * (s.kind === wa.animation ? s.duration : s.first.duration) : a, d = f * p, g = p - d;
                        l = Math.min(g, t), c = this._transitionProgress = (d + l) / p;
                    }
                    var v = null !== (e = null == u ? void 0 : u.name) && void 0 !== e ? e : "<Empty>";
                    this._fromWeight = 1 - c, this._toWeight = c;
                    var m = 0 !== l, y = 1 === c;
                    return s.kind === wa.animation && m && (oi("Update " + s.name), s.updateFromPort(l), 
                    this._fromUpdated = !0), u.kind === wa.animation && m && (oi("Update " + u.name), 
                    u.updateToPort(l), this._toUpdated = !0), y && (ai("[SubStateMachine " + this.name + "]: Transition finished:  " + s.name + " -> " + v + "."), 
                    this._finishCurrentTransition()), l;
                }, e._finishCurrentTransition = function() {
                    var t = this._currentTransitionPath, e = this._currentTransitionToNode;
                    _(t.length > 0);
                    var n = this._currentNode, i = e;
                    this._callExitMethods(n);
                    for (var r = this._currentTransitionPath, a = r.length, o = 0; o < a; ++o) {
                        var s = r[o].to;
                        s.kind === wa.exit && this._callExitMethods(s);
                    }
                    this._fromUpdated = this._toUpdated, this._toUpdated = !1, this._dropCurrentTransition(), 
                    this._currentNode = i, n.kind === wa.transitionSnapshot && n.clear();
                }, e._dropCurrentTransition = function() {
                    var t = this._currentTransitionToNode;
                    t.kind === wa.animation && t.finishTransition(), this._currentTransitionToNode = null, 
                    this._currentTransitionPath.length = 0, this._fromWeight = 1, this._toWeight = 0;
                }, e._detectInterruption = function(t, e) {
                    var n = this._currentTransitionPath, i = this._currentNode, r = this._currentTransitionToNode;
                    if (i.kind !== wa.animation && i.kind !== wa.transitionSnapshot) return null;
                    if (!r || r.kind !== wa.animation) return null;
                    h(0 !== n.length);
                    var a = n[0], o = a.interruption;
                    if (o === Wn.NONE) return null;
                    var s = ka.reset(), u = null, l = i.kind === wa.animation ? i : i.first, c = this._matchAnyScoped(l, t, s);
                    c && (u = l), s.hasZeroCost();
                    var f = o === Wn.CURRENT_STATE || o === Wn.CURRENT_STATE_THEN_NEXT_STATE ? Ea(i) : r;
                    (c = this._matchTransition(f, f, t, a, s)) && (u = f), s.hasZeroCost();
                    var p = o === Wn.NEXT_STATE_THEN_CURRENT_STATE ? Ea(i) : o === Wn.CURRENT_STATE_THEN_NEXT_STATE ? r : null;
                    return p && ((c = this._matchTransition(p, p, t, a, s)) && (u = p), s.hasZeroCost()), 
                    ka.transition ? e.set(u, ka.transition, ka.requires) : null;
                }, e._interrupt = function(t) {
                    var e = t.from, n = t.transition, i = t.requires, r = this._currentNode;
                    if (h(r.kind === wa.animation || r.kind === wa.transitionSnapshot), r.kind === wa.animation) {
                        r.updateFromPort(i), this._fromUpdated = !0;
                        var a = this._transitionSnapshot;
                        h(a.empty), a.enqueue(r, 1);
                    }
                    return this._takeCurrentTransitionSnapshot(e), this._dropCurrentTransition(), this._currentNode = this._transitionSnapshot, 
                    this._switchTo(n);
                }, e._takeCurrentTransitionSnapshot = function(t) {
                    var e = this._currentTransitionPath, n = this._currentTransitionToNode, i = this._transitionSnapshot;
                    h(0 !== e.length), h(n && n.kind === wa.animation);
                    var r = e[0], a = r.duration, o = r.normalizedDuration, s = t, u = 0;
                    if (a <= 0) u = 1; else {
                        var l = this._transitionProgress, c = o ? a * s.duration : a;
                        u = l * c / c;
                    }
                    i.enqueue(n, u);
                }, e._resetTriggersOnTransition = function(t) {
                    var e = t.triggers;
                    if (e) for (var n = e.length, i = 0; i < n; ++i) {
                        var r = e[i];
                        this._resetTrigger(r);
                    }
                }, e._resetTrigger = function(t) {
                    (0, this._triggerReset)(t);
                }, e._callEnterMethods = function(t) {
                    var e, n = this._controller;
                    switch (t.kind) {
                      default:
                        break;

                      case wa.animation:
                        t.components.callMotionStateEnterMethods(n, t.getToPortStatus());
                        break;

                      case wa.entry:
                        null === (e = t.stateMachine.components) || void 0 === e || e.callStateMachineEnterMethods(n);
                    }
                }, e._callExitMethods = function(t) {
                    var e, n = this._controller;
                    switch (t.kind) {
                      default:
                        break;

                      case wa.animation:
                        t.components.callMotionStateExitMethods(n, t.getFromPortStatus());
                        break;

                      case wa.exit:
                        null === (e = t.stateMachine.components) || void 0 === e || e.callStateMachineExitMethods(n);
                    }
                }, r(t, [ {
                    key: "exited",
                    get: function() {
                        return this._currentNode === this._topLevelExit;
                    }
                } ]), t;
            }();
            function Ea(t) {
                return t.kind === wa.animation ? t : t.first;
            }
            var wa, Aa = Object.freeze({
                next: function() {
                    return {
                        done: !0,
                        value: void 0
                    };
                }
            }), Na = Object.freeze(((ya = {})[Symbol.iterator] = function() {
                return Aa;
            }, ya)), ka = new (function() {
                function t() {
                    this.transition = null, this.requires = 1 / 0;
                }
                var e = t.prototype;
                return e.hasZeroCost = function() {
                    return 0 === this.requires;
                }, e.isValid = function() {
                    return null !== this.transition;
                }, e.set = function(t, e) {
                    return this.transition = t, this.requires = e, this;
                }, e.reset = function() {
                    return this.requires = 1 / 0, this.transition = null, this;
                }, t;
            }())(), Ca = new (function() {
                function t() {
                    this.transition = null, this.requires = 0, this.from = null;
                }
                return t.prototype.set = function(t, e, n) {
                    return this.from = t, this.transition = e, this.requires = n, this;
                }, t;
            }())();
            !function(t) {
                t[t.entry = 0] = "entry", t[t.exit = 1] = "exit", t[t.any = 2] = "any", t[t.animation = 3] = "animation", 
                t[t.empty = 4] = "empty", t[t.transitionSnapshot = 5] = "transitionSnapshot";
            }(wa || (wa = {}));
            var Ma = function(t) {
                this.name = void 0, this.outgoingTransitions = [], this.name = t.name;
            }, Ra = function() {
                function t(t) {
                    this._components = t.instantiateComponents();
                }
                var e = t.prototype;
                return e.callMotionStateEnterMethods = function(t, e) {
                    this._callMotionStateCallbackIfNonDefault("onMotionStateEnter", t, e);
                }, e.callMotionStateUpdateMethods = function(t, e) {
                    this._callMotionStateCallbackIfNonDefault("onMotionStateUpdate", t, e);
                }, e.callMotionStateExitMethods = function(t, e) {
                    this._callMotionStateCallbackIfNonDefault("onMotionStateExit", t, e);
                }, e.callStateMachineEnterMethods = function(t) {
                    this._callStateMachineCallbackIfNonDefault("onStateMachineEnter", t);
                }, e.callStateMachineExitMethods = function(t) {
                    this._callStateMachineCallbackIfNonDefault("onStateMachineExit", t);
                }, e._callMotionStateCallbackIfNonDefault = function(t, e, n) {
                    for (var i = this._components, r = i.length, a = 0; a < r; ++a) {
                        var o = i[a];
                        o[t] !== ba.prototype[t] && o[t](e, n);
                    }
                }, e._callStateMachineCallbackIfNonDefault = function(t, e) {
                    for (var n = this._components, i = n.length, r = 0; r < i; ++r) {
                        var a = n[r];
                        a[t] !== ba.prototype[t] && a[t](e);
                    }
                }, t;
            }(), Oa = function(t) {
                function e(e, n) {
                    var i, r, a;
                    if ((a = t.call(this, e) || this).kind = wa.animation, a._source = null, a._baseSpeed = 1, 
                    a._speed = 1, a._fromPort = {
                        progress: 0,
                        statusCache: {
                            progress: 0
                        }
                    }, a._toPort = {
                        progress: 0,
                        statusCache: {
                            progress: 0
                        }
                    }, a._baseSpeed = e.speed, a._setSpeedMultiplier(1), e.speedMultiplierEnabled && e.speedMultiplier) {
                        var s = e.speedMultiplier, u = n.getVar(s);
                        if (Oi(u, s)) {
                            !function(t, e, n) {
                                if (t !== e) throw new Re(n, "number");
                            }(u.type, Kt.FLOAT, s), u.bind(a._setSpeedMultiplier, o(a));
                            var l = u.value;
                            a._setSpeedMultiplier(l);
                        }
                    }
                    var c = b({}, n), h = null !== (i = null === (r = e.motion) || void 0 === r ? void 0 : r[Oe](c)) && void 0 !== i ? i : null;
                    return h && Object.defineProperty(h, "__DEBUG_ID__", {
                        value: a.name
                    }), a._source = h, a.components = new Ra(e), a;
                }
                n(e, t);
                var i = e.prototype;
                return i.updateFromPort = function(t) {
                    this._fromPort.progress = Ia(this._fromPort.progress, this.duration, t * this._speed);
                }, i.updateToPort = function(t) {
                    this._toPort.progress = Ia(this._toPort.progress, this.duration, t * this._speed);
                }, i.triggerFromPortUpdate = function(t) {
                    this.components.callMotionStateUpdateMethods(t, this.getFromPortStatus());
                }, i.triggerToPortUpdate = function(t) {
                    this.components.callMotionStateUpdateMethods(t, this.getToPortStatus());
                }, i.getFromPortStatus = function() {
                    var t = this._fromPort.statusCache;
                    return t.progress = xa(this._fromPort.progress), t;
                }, i.getToPortStatus = function() {
                    var t = this._toPort.statusCache;
                    return t.progress = xa(this._toPort.progress), t;
                }, i.resetToPort = function(t) {
                    this._toPort.progress = t;
                }, i.finishTransition = function() {
                    this._fromPort.progress = this._toPort.progress;
                }, i.sampleFromPort = function(t) {
                    var e;
                    null === (e = this._source) || void 0 === e || e.sample(this._fromPort.progress, t);
                }, i.sampleToPort = function(t) {
                    var e;
                    null === (e = this._source) || void 0 === e || e.sample(this._toPort.progress, t);
                }, i.getClipStatuses = function(t) {
                    var e, n = this._source;
                    return n ? ((e = {})[Symbol.iterator] = function() {
                        return n.getClipStatuses(t);
                    }, e) : Na;
                }, i._setSpeedMultiplier = function(t) {
                    this._speed = this._baseSpeed * t;
                }, r(e, [ {
                    key: "duration",
                    get: function() {
                        var t, e;
                        return null !== (t = null === (e = this._source) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0;
                    }
                }, {
                    key: "fromPortTime",
                    get: function() {
                        return this._fromPort.progress * this.duration;
                    }
                } ]), e;
            }(Ma);
            function Ia(t, e, n) {
                return 0 === e ? 0 : t + n / e;
            }
            function xa(t) {
                var e = t - Math.trunc(t);
                return e >= 0 ? e : 1 + e;
            }
            var Pa, La, za, Ua, Fa, Ba, Da, Wa, Va, Ga, Ha = function(t) {
                function e(e, n) {
                    var i;
                    return (i = t.call(this, e) || this).kind = void 0, i.kind = n, i;
                }
                return n(e, t), e;
            }(Ma), ja = function(t) {
                function e(e) {
                    var n;
                    return (n = t.call(this, e) || this).kind = wa.empty, n;
                }
                return n(e, t), e;
            }(Ma), qa = function(t, e) {
                this.motion = t, this.weight = e;
            }, Xa = function(t) {
                function e() {
                    var e;
                    return (e = t.call(this, {
                        name: "[[TransitionSnapshotEval]]"
                    }) || this).kind = wa.transitionSnapshot, e._queue = [], e;
                }
                n(e, t);
                var i = e.prototype;
                return i.sample = function(t) {
                    for (var e = this._queue, n = e.length, i = 0; i < n; ++i) {
                        var r = e[i], a = r.motion, o = r.weight;
                        a.sampleFromPort(o * t);
                    }
                }, i.clear = function() {
                    this._queue.length = 0;
                }, i.enqueue = function(t, e) {
                    for (var n = this._queue, i = n.length, r = 1 - e, a = 0; a < i; ++a) n[a].weight *= r;
                    n.push(new qa(t, e));
                }, r(e, [ {
                    key: "empty",
                    get: function() {
                        return 0 === this._queue.length;
                    }
                }, {
                    key: "first",
                    get: function() {
                        var t = this._queue;
                        return h(t.length > 0), t[0].motion;
                    }
                } ]), e;
            }(Ma), Qa = (Pa = w("cc.animation.AnimationController"), La = B(), za = F(ri), Pa(Ua = La((Da = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [ this ].concat(i)) || this, a(e, "graph", Ba, o(e)), 
                    e._graphEval = null, e;
                }
                n(e, t);
                var i = e.prototype;
                return i.__preload = function() {
                    this.graph && (this._graphEval = new Ta(this.graph, this.node, this));
                }, i.update = function(t) {
                    var e;
                    null === (e = this._graphEval) || void 0 === e || e.update(t);
                }, i.getVariables = function() {
                    return this._graphEval.getVariables();
                }, i.setValue = function(t, e) {
                    this._graphEval.setValue(t, e);
                }, i.getValue = function(t) {
                    return this._graphEval.getValue(t);
                }, i.getCurrentStateStatus = function(t) {
                    return this._graphEval.getCurrentStateStatus(t);
                }, i.getCurrentClipStatuses = function(t) {
                    return this._graphEval.getCurrentClipStatuses(t);
                }, i.getCurrentTransition = function(t) {
                    return this._graphEval.getCurrentTransition(t);
                }, i.getNextStateStatus = function(t) {
                    return this._graphEval.getNextStateStatus(t);
                }, i.getNextClipStatuses = function(t) {
                    return this._graphEval.getNextClipStatuses(t);
                }, i.getLayerWeight = function(t) {
                    return this._graphEval.getLayerWeight(t);
                }, i.setLayerWeight = function(t, e) {
                    return this._graphEval.setLayerWeight(t, e);
                }, e;
            }(D), Ba = i((Fa = Da).prototype, "graph", [ za ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), Ua = Fa)) || Ua) || Ua);
            e("animation", Object.freeze({
                __proto__: null,
                UniformProxyFactory: oe,
                MorphWeightValueProxy: se,
                MorphWeightsValueProxy: ue,
                MorphWeightsAllValueProxy: le,
                Track: it,
                TrackPath: at,
                RealTrack: ot,
                VectorTrack: st,
                QuatTrack: ut,
                ColorTrack: lt,
                SizeTrack: ct,
                ObjectTrack: ht,
                isPropertyPath: ft,
                isCustomPath: pt,
                HierarchyPath: dt,
                ComponentPath: _t,
                CubicSplineVec2Value: gt,
                CubicSplineVec3Value: vt,
                CubicSplineVec4Value: mt,
                CubicSplineQuatValue: yt,
                CubicSplineNumberValue: bt,
                AnimationController: Qa,
                get VariableType() {
                    return Kt;
                },
                StateMachineComponent: ba
            }));
            var Za = e("AnimationManager", w((Ga = Va = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return (e = t.call.apply(t, [ this ].concat(i)) || this)._anims = new S([]), e._crossFades = new S([]), 
                    e._delayEvents = [], e._blendStateBuffer = new fa(), e._sockets = [], e;
                }
                n(e, t);
                var i = e.prototype;
                return i.addCrossFade = function(t) {
                    -1 === this._crossFades.array.indexOf(t) && this._crossFades.push(t);
                }, i.removeCrossFade = function(t) {
                    var e = this._crossFades.array.indexOf(t);
                    e >= 0 ? this._crossFades.fastRemoveAt(e) : s(3907);
                }, i.update = function(t) {
                    var e = this._delayEvents, n = this._crossFades, i = this._sockets, r = n.array;
                    for (n.i = 0; n.i < r.length; ++n.i) r[n.i].update(t);
                    var a = this._anims, o = a.array;
                    for (a.i = 0; a.i < o.length; ++a.i) {
                        var s = o[a.i];
                        s.isMotionless || s.update(t);
                    }
                    this._blendStateBuffer.apply();
                    for (var u = T.director.getTotalFrames(), l = 0, c = i.length; l < c; l++) {
                        var h = i[l], f = h.target, p = h.transform;
                        f.matrix = Y(p, u);
                    }
                    for (var d = 0, _ = e.length; d < _; d++) {
                        var g = e[d];
                        g.fn.apply(g.thisArg, g.args);
                    }
                    e.length = 0;
                }, i.destruct = function() {}, i.addAnimation = function(t) {
                    -1 === this._anims.array.indexOf(t) && this._anims.push(t);
                }, i.removeAnimation = function(t) {
                    var e = this._anims.array.indexOf(t);
                    e >= 0 ? this._anims.fastRemoveAt(e) : s(3907);
                }, i.pushDelayEvent = function(t, e, n) {
                    this._delayEvents.push({
                        fn: t,
                        thisArg: e,
                        args: n
                    });
                }, i.addSockets = function(t, e) {
                    for (var n = this, i = function(i) {
                        var r = e[i];
                        if (n._sockets.find(function(t) {
                            return t.target === r.target;
                        })) return "continue";
                        var a = t.getChildByPath(r.path), o = r.target && a && $(a, t);
                        o && n._sockets.push({
                            target: r.target,
                            transform: o
                        });
                    }, r = 0; r < e.length; ++r) i(r);
                }, i.removeSockets = function(t, e) {
                    for (var n = 0; n < e.length; ++n) for (var i = e[n], r = 0; r < this._sockets.length; ++r) {
                        var a = this._sockets[r];
                        if (a.target === i.target) {
                            J(a.transform.node), this._sockets[r] = this._sockets[this._sockets.length - 1], 
                            this._sockets.length--;
                            break;
                        }
                    }
                }, r(e, [ {
                    key: "blendState",
                    get: function() {
                        return this._blendStateBuffer;
                    }
                } ]), e;
            }(W), Va.ID = "animation", Wa = Ga)) || Wa);
            Q.on(Z.EVENT_INIT, function() {
                var t = new Za();
                Q.registerSystem(Za.ID, t, W.Priority.HIGH);
            }), T.AnimationManager = Za, T.easing = V;
        }
    };
});