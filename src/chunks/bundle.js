System.register([], function(e, t) {
    return {
        execute: function() {
            System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], function(e) {
                return {
                    execute: function() {
                        function t(e, t) {
                            for (var i = 0; i < t.length; i++) {
                                var r = t[i];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                                Object.defineProperty(e, r.key, r);
                            }
                        }
                        function i(t, r) {
                            return (i = e("setPrototypeOf", Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t, e;
                            }))(t, r);
                        }
                        e({
                            applyDecoratedDescriptor: function(e, t, i, r, n) {
                                var o = {};
                                return Object.keys(r).forEach(function(e) {
                                    o[e] = r[e];
                                }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), 
                                o = i.slice().reverse().reduce(function(i, r) {
                                    return r(e, t, i) || i;
                                }, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, 
                                o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), 
                                o = null), o;
                            },
                            assertThisInitialized: function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e;
                            },
                            createClass: function(e, i, r) {
                                return i && t(e.prototype, i), r && t(e, r), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), e;
                            },
                            inheritsLoose: function(e, t) {
                                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, i(e, t);
                            },
                            initializerDefineProperty: function(e, t, i, r) {
                                i && Object.defineProperty(e, t, {
                                    enumerable: i.enumerable,
                                    configurable: i.configurable,
                                    writable: i.writable,
                                    value: i.initializer ? i.initializer.call(r) : void 0
                                });
                            },
                            setPrototypeOf: i
                        });
                    }
                };
            });
        }
    };
});