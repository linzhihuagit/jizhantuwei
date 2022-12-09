System.register([], function(t, e) {
    var n;
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return {
        setters: [],
        execute: function() {
            t("Application", function() {
                function t() {
                    !function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, t), this.settingsPath = "src/settings.json", this.showFPS = !1;
                }
                var e, s, o;
                return e = t, (s = [ {
                    key: "init",
                    value: function(t) {
                        (n = t).game.onPostBaseInitDelegate.add(this.onPostInitBase.bind(this)), n.game.onPostSubsystemInitDelegate.add(this.onPostSystemInit.bind(this));
                    }
                }, {
                    key: "onPostInitBase",
                    value: function() {}
                }, {
                    key: "onPostSystemInit",
                    value: function() {}
                }, {
                    key: "start",
                    value: function() {
                        return n.game.init({
                            debugMode: n.DebugMode.ERROR,
                            settingsPath: this.settingsPath,
                            overrideSettings: {
                                profiling: {
                                    showFPS: this.showFPS
                                }
                            }
                        }).then(function() {
                            return n.game.run();
                        });
                    }
                } ]) && i(e.prototype, s), o && i(e, o), t;
            }());
        }
    };
});