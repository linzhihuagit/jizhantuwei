var t, e;

System.register("chunks:///_virtual/AutoPlayUIEffect.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc" ], function(t) {
    var e, r, i, o;
    return {
        setters: [ function(t) {
            e = t.inheritsLoose;
        }, function(t) {
            r = t.cclegacy, i = t._decorator, o = t.Component;
        } ],
        execute: function() {
            var c;
            r._RF.push({}, "59cc2GuKjJIt4c1heErKHJF", "AutoPlayUIEffect", void 0);
            var n = i.ccclass;
            i.property, t("AutoPlayUIEffect", n("AutoPlayUIEffect")(c = function(t) {
                function r() {
                    return t.apply(this, arguments) || this;
                }
                e(r, t);
                var i = r.prototype;
                return i.start = function() {}, i.update = function(t) {}, r;
            }(o)) || c), r._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/AutoShowParticle.ts", [ "./rollupPluginModLoBabelHelpers.js", "cc", "./BasicComponet.ts", "./GlobalTmpData.ts", "./GlobalPool.ts" ], function(t) {
    var e, r, i, o, c, n, s, a, u, l, p;
    return {
        setters: [ function(t) {
            e = t.applyDecoratedDescriptor, r = t.inheritsLoose, i = t.initializerDefineProperty, 
            o = t.assertThisInitialized;
        }, function(t) {
            c = t.cclegacy, n = t._decorator, s = t.v3, a = t.ParticleSystem;
        }, function(t) {
            u = t.BasicComponet;
        }, function(t) {
            l = t.GlobalTmpData;
        }, function(t) {
            p = t.default;
        } ],
        execute: function() {
            var f, h, y;
            c._RF.push({}, "91bf4TJ9uZGPqmIeZvSQCD2", "AutoShowParticle", void 0);
            var d = n.ccclass, P = n.property;
            t("AutoShowParticle", d("AutoShowParticle")((y = e((h = function(t) {
                function e() {
                    for (var e, r = arguments.length, c = new Array(r), n = 0; n < r; n++) c[n] = arguments[n];
                    return e = t.call.apply(t, [ this ].concat(c)) || this, i(e, "hideTime", y, o(e)), 
                    e.curt = 0, e.particle = null, e.particleArr = [], e.tmpPos = s(), e;
                }
                r(e, t);
                var c = e.prototype;
                return c.initSub = function() {
                    this.particle = this.node.getComponent(a), this.particleArr = this.node.getComponentsInChildren(a);
                }, c.setData = function(t) {
                    this.curt = 0, this.particle && this.particle.play(), this.particleArr && this.particleArr.forEach(function(t) {
                        t.play();
                    });
                }, c.reset = function() {
                    this.curt = 0, this.particle && this.particle.stop(), this.particleArr && this.particleArr.forEach(function(t) {
                        t.stop();
                    });
                }, c.update = function(t) {
                    this.curt += t, this.tmpPos.set(l.Player.wpos).add(l.Player.offset), this.node.setPosition(this.tmpPos), 
                    this.curt >= this.hideTime && (this.particle && this.particle.stop(), this.particleArr && this.particleArr.forEach(function(t) {
                        t.stop();
                    }), p.put(this.node));
                }, e;
            }(u)).prototype, "hideTime", [ P ], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1;
                }
            }), f = h)) || f), c._RF.pop();
        }
    };
}), System.register("chunks:///_virtual/Effect", [ "./AutoPlayUIEffect.ts", "./AutoShowParticle.ts" ], function() {
    return {
        setters: [ null, null ],
        execute: function() {}
    };
}), t = "virtual:///prerequisite-imports/Effect", e = "chunks:///_virtual/Effect", 
System.register(t, [ e ], function(t, e) {
    return {
        setters: [ function(e) {
            var r = {};
            for (var i in e) "default" !== i && "__esModule" !== i && (r[i] = e[i]);
            t(r);
        } ],
        execute: function() {}
    };
});