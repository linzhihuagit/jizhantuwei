System.register([ "./bits-9eb0404f.js", "./buffer-barrier-a0dabeda.js", "./scene-asset-2d5f3dde.js", "./math-base-ade794fa.js", "./index-78e49547.js", "./pipeline-state-manager-cdb8e36b.js", "./deprecated-9ab165be.js", "./deprecated-2db19af6.js", "./touch-1fa80d2f.js", "./game-ebaec569.js", "./mesh-421cf7ca.js", "./mesh-renderer-ae57b48a.js", "./skeleton-a4109268.js", "./skeletal-animation-utils-407890d2.js", "./deprecated-dbf97cf5.js", "./animation-component-eb311dcd.js" ], function(t) {
    var e, i, n, o, a, s, r, u, c, l, h, d, f, p, m, k, _, v, S, g, A, b, y, B, j, C, w, I, P, T;
    return {
        setters: [ function(t) {
            e = t.l, i = t.F, n = t.G, o = t.L, a = t.i, s = t.P, r = t.A, u = t.H, c = t.I;
        }, function() {}, function(t) {
            l = t.a$, h = t.b0, d = t.ao, f = t.bS, p = t.b1, m = t.b7, k = t.bT, _ = t.bX, 
            v = t.bU, S = t.bP;
        }, function(t) {
            g = t.e, A = t.a, b = t.Q;
        }, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function(e) {
            y = e.S, B = e.g, t("SkelAnimDataHub", e.S);
        }, function(t) {
            j = t.J, C = t.c, w = t.S;
        }, function(t) {
            I = t.A, P = t.r, T = t.n;
        } ],
        execute: function() {
            var x = function() {
                function t(t) {
                    this.jointTexturePool = void 0, this.jointAnimationInfo = void 0, this.jointTexturePool = new j(t), 
                    this.jointAnimationInfo = new C(t);
                }
                var e = t.prototype;
                return e.releaseSkeleton = function(t) {
                    this.jointTexturePool.releaseSkeleton(t);
                }, e.releaseAnimationClip = function(t) {
                    this.jointTexturePool.releaseAnimationClip(t);
                }, e.clear = function() {
                    this.jointTexturePool.clear(), this.jointAnimationInfo.clear();
                }, t;
            }();
            e.internal.DataPoolManager = x;
            var O, D, M, U, E, z, R, L, N, F, q, H, G, J, Q, W, X, $, K, V, Y = new g(), Z = new g(), tt = t("SkeletalAnimationState", function(t) {
                function n(i, n) {
                    var o;
                    return void 0 === n && (n = ""), (o = t.call(this, i, n) || this)._frames = 1, o._bakedDuration = 0, 
                    o._animInfo = null, o._sockets = [], o._animInfoMgr = void 0, o._parent = null, 
                    o._curvesInited = !1, o._animInfoMgr = e.director.root.dataPoolManager.jointAnimationInfo, 
                    o;
                }
                i(n, t);
                var o = n.prototype;
                return o.initialize = function(e) {
                    if (!this._curveLoaded) {
                        this._parent = e.getComponent("cc.SkeletalAnimation");
                        var i = this._parent.useBakedAnimation;
                        this._doNotCreateEval = i, t.prototype.initialize.call(this, e), this._curvesInited = !i;
                        var n = y.getOrExtract(this.clip), o = n.frames, a = n.samples;
                        this._frames = o - 1, this._animInfo = this._animInfoMgr.getData(e.uuid), this._bakedDuration = this._frames / a, 
                        this.setUseBaked(i);
                    }
                }, o.setUseBaked = function(e) {
                    e ? (this._sampleCurves = this._sampleCurvesBaked, this.duration = this._bakedDuration) : (this._sampleCurves = t.prototype._sampleCurves, 
                    this.duration = this.clip.duration, this._curvesInited || (this._curveLoaded = !1, 
                    t.prototype.initialize.call(this, this._targetNode), this._curvesInited = !0));
                }, o.rebuildSocketCurves = function(t) {
                    if (this._sockets.length = 0, this._targetNode) for (var e = this._targetNode, i = 0; i < t.length; ++i) {
                        var n = t[i], o = e.getChildByPath(n.path);
                        if (n.target) {
                            for (var a = y.getOrExtract(this.clip), s = n.path, r = a.joints[s], u = o, c = void 0; !r; ) {
                                var l = s.lastIndexOf("/");
                                if (s = s.substring(0, l), r = a.joints[s], u && (c || (c = g.identity(Z)), g.fromRTS(Y, u.rotation, u.position, u.scale), 
                                g.multiply(c, Y, c), u = u.parent), l < 0) break;
                            }
                            for (var h = r && r.transforms, d = a.frames, f = [], p = 0; p < d; p++) {
                                var m;
                                m = h && c ? g.multiply(Y, h[p], c) : h ? h[p] : c || new g();
                                var k = {
                                    pos: new A(),
                                    rot: new b(),
                                    scale: new A()
                                };
                                g.toRTS(m, k.rot, k.pos, k.scale), f.push(k);
                            }
                            this._sockets.push({
                                target: n.target,
                                frames: f
                            });
                        }
                    }
                }, o._sampleCurvesBaked = function(t) {
                    var e = t / this.duration, i = this._animInfo, n = this.clip;
                    i.currentClip !== n && (this._animInfoMgr.switchClip(this._animInfo, n), this._parent.getUsers().forEach(function(t) {
                        t.uploadAnimation(n);
                    }));
                    var o = e * this._frames + .5 | 0;
                    if (o !== i.data[0]) {
                        i.data[0] = o, i.dirty = !0;
                        for (var a = 0; a < this._sockets.length; ++a) {
                            var s = this._sockets[a], r = s.target, u = s.frames[o], c = u.pos, l = u.rot, h = u.scale;
                            r.setRTS(l, c, h);
                        }
                    }
                }, n;
            }(I)), et = t("Socket", (O = l("cc.SkeletalAnimation.Socket"), D = h(d), O((E = n((U = function(t, e) {
                void 0 === t && (t = ""), void 0 === e && (e = null), u(this, "path", E, this), 
                u(this, "target", z, this), this.path = t, this.target = e;
            }).prototype, "path", [ p, m ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "";
                }
            }), z = n(U.prototype, "target", [ D ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null;
                }
            }), M = U)) || M));
            o.setClassAlias(et, "cc.SkeletalAnimationComponent.Socket");
            var it = new g(), nt = new g();
            function ot(t, e, i) {
                void 0 === e && (e = ""), void 0 === i && (i = []);
                for (var n = 0; n < t.children.length; n++) {
                    var o = t.children[n];
                    if (o) {
                        var a = e ? e + "/" + o.name : o.name;
                        i.push(a), ot(o, a, i);
                    }
                }
                return i;
            }
            var at, st = (R = l("cc.SkeletalAnimation"), L = k(), N = _(99), F = v(), q = h([ et ]), 
            H = S(), G = S(), J = h([ et ]), at = R(Q = L(Q = N(Q = f(Q = F((V = K = function(t) {
                function n() {
                    for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                    return e = t.call.apply(t, [ this ].concat(n)) || this, u(e, "_useBakedAnimation", X, c(e)), 
                    u(e, "_sockets", $, c(e)), e._users = new Set(), e._currentBakedState = null, e;
                }
                i(n, t);
                var o = n.prototype;
                return o.onLoad = function() {
                    t.prototype.onLoad.call(this);
                    for (var e = this.node.getComponentsInChildren(w), i = 0; i < e.length; ++i) {
                        var n = e[i];
                        n.skinningRoot === this.node && this.notifySkinnedMeshAdded(n);
                    }
                }, o.onDestroy = function() {
                    t.prototype.onDestroy.call(this), e.director.root.dataPoolManager.jointAnimationInfo.destroy(this.node.uuid), 
                    P().removeSockets(this.node, this._sockets), this._removeAllUsers();
                }, o.onEnable = function() {
                    var e;
                    t.prototype.onEnable.call(this), null === (e = this._currentBakedState) || void 0 === e || e.resume();
                }, o.onDisable = function() {
                    var e;
                    t.prototype.onDisable.call(this), null === (e = this._currentBakedState) || void 0 === e || e.pause();
                }, o.start = function() {
                    this.sockets = this._sockets, this.useBakedAnimation = this._useBakedAnimation, 
                    t.prototype.start.call(this);
                }, o.pause = function() {
                    var e;
                    this._useBakedAnimation ? null === (e = this._currentBakedState) || void 0 === e || e.pause() : t.prototype.pause.call(this);
                }, o.resume = function() {
                    var e;
                    this._useBakedAnimation ? null === (e = this._currentBakedState) || void 0 === e || e.resume() : t.prototype.resume.call(this);
                }, o.stop = function() {
                    this._useBakedAnimation ? this._currentBakedState && (this._currentBakedState.stop(), 
                    this._currentBakedState = null) : t.prototype.stop.call(this);
                }, o.querySockets = function() {
                    var t = this._defaultClip && Object.keys(y.getOrExtract(this._defaultClip).joints).sort().reduce(function(t, e) {
                        return e.startsWith(t[t.length - 1]) || t.push(e), t;
                    }, []) || [];
                    if (!t.length) return [ "please specify a valid default animation clip first" ];
                    for (var e = [], i = 0; i < t.length; i++) {
                        var n = t[i], o = this.node.getChildByPath(n);
                        o && (e.push(n), ot(o, n, e));
                    }
                    return e;
                }, o.rebuildSocketAnimations = function() {
                    for (var t, e = a(this._sockets); !(t = e()).done; ) {
                        var i = t.value, n = this.node.getChildByPath(i.path), o = i.target;
                        n && o && (o.name = i.path.substring(i.path.lastIndexOf("/") + 1) + " Socket", o.parent = this.node, 
                        B(n, this.node, it), g.fromRTS(nt, o.rotation, o.position, o.scale), g.equals(nt, it) || (o.matrix = it));
                    }
                    for (var s = 0, r = Object.keys(this._nameToState); s < r.length; s++) {
                        var u = r[s];
                        this._nameToState[u].rebuildSocketCurves(this._sockets);
                    }
                }, o.createSocket = function(t) {
                    var e = this._sockets.find(function(e) {
                        return e.path === t;
                    });
                    if (e) return e.target;
                    if (!this.node.getChildByPath(t)) return console.warn("illegal socket path"), null;
                    var i = new d();
                    return i.parent = this.node, this._sockets.push(new et(t, i)), this.rebuildSocketAnimations(), 
                    i;
                }, o.notifySkinnedMeshAdded = function(t) {
                    var e = this._useBakedAnimation, i = t.associatedAnimation;
                    if (i && i._users.delete(t), t.associatedAnimation = this, t.setUseBakedAnimation(e, !0), 
                    e) {
                        var n = this._currentBakedState;
                        n && t.uploadAnimation(n.clip);
                    }
                    this._users.add(t);
                }, o.notifySkinnedMeshRemoved = function(t) {
                    s(t.associatedAnimation === this || null === t.associatedAnimation), t.setUseBakedAnimation(!1), 
                    t.associatedAnimation = null, this._users.delete(t);
                }, o.getUsers = function() {
                    return this._users;
                }, o._createState = function(t, e) {
                    return new tt(t, e);
                }, o._doCreateState = function(e, i) {
                    var n = t.prototype._doCreateState.call(this, e, i);
                    return n.rebuildSocketCurves(this._sockets), n;
                }, o.doPlayOrCrossFade = function(e, i) {
                    if (this._useBakedAnimation) {
                        this._currentBakedState && this._currentBakedState.stop();
                        var n = e;
                        this._currentBakedState = n, n.play();
                    } else t.prototype.doPlayOrCrossFade.call(this, e, i);
                }, o._removeAllUsers = function() {
                    var t = this;
                    Array.from(this._users).forEach(function(e) {
                        t.notifySkinnedMeshRemoved(e);
                    });
                }, r(n, [ {
                    key: "sockets",
                    get: function() {
                        return this._sockets;
                    },
                    set: function(t) {
                        if (!this._useBakedAnimation) {
                            var e = P();
                            e.removeSockets(this.node, this._sockets), e.addSockets(this.node, t);
                        }
                        this._sockets = t, this.rebuildSocketAnimations();
                    }
                }, {
                    key: "useBakedAnimation",
                    get: function() {
                        return this._useBakedAnimation;
                    },
                    set: function(t) {
                        for (var e in this._useBakedAnimation = t, this._nameToState) this._nameToState[e].setUseBaked(t);
                        this._users.forEach(function(e) {
                            e.setUseBakedAnimation(t);
                        }), this._useBakedAnimation ? P().removeSockets(this.node, this._sockets) : (P().addSockets(this.node, this._sockets), 
                        this._currentBakedState = null);
                    }
                } ]), n;
            }(T), K.Socket = et, n((W = V).prototype, "sockets", [ q, H ], Object.getOwnPropertyDescriptor(W.prototype, "sockets"), W.prototype), 
            n(W.prototype, "useBakedAnimation", [ G ], Object.getOwnPropertyDescriptor(W.prototype, "useBakedAnimation"), W.prototype), 
            X = n(W.prototype, "_useBakedAnimation", [ p ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0;
                }
            }), $ = n(W.prototype, "_sockets", [ J ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [];
                }
            }), Q = W)) || Q) || Q) || Q) || Q) || Q, t({
                SkeletalAnimation: at,
                SkeletalAnimationComponent: at
            }), at);
            e.SkeletalAnimationComponent = st, o.setClassAlias(st, "cc.SkeletalAnimationComponent");
        }
    };
});