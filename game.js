function e() {
    globalThis.__wxRequire = require, require("./web-adapter");
    var e = require("./first-screen");
    if (require("src/polyfills.bundle.js"), require("src/system.bundle.js"), require("utils/ald-game.js"), 
    canvas) {
        var n = canvas.width, t = canvas.height;
        screen.width < screen.height ? canvas.width > canvas.height && (n = canvas.height, 
        t = canvas.width) : canvas.width < canvas.height && (n = canvas.height, t = canvas.width), 
        canvas.width = n, canvas.height = t;
    }
    canvas && window.devicePixelRatio >= 2 && (canvas.width *= 2, canvas.height *= 2);
    var r = require("src/import-map.js").default;
    System.warmup({
        importMap: r,
        importMapUrl: "src/import-map.js",
        defaultHandler: function(e) {
            require("." + e);
        },
        handlers: {
            "plugin:": function(e) {
                requirePlugin(e);
            },
            "project:": function(e) {
                require(e);
            }
        }
    }), e.start("default", "default", "false").then(function() {
        return System.import("./application.js");
    }).then(function(n) {
        return e.setProgress(.2).then(function() {
            return Promise.resolve(n);
        });
    }).then(function(e) {
        return new (0, e.Application)();
    }).then(function(n) {
        return e.setProgress(.4).then(function() {
            return Promise.resolve(n);
        });
    }).then(function(n) {
        return function(n) {
            return System.import("cc").then(function(n) {
                return e.setProgress(.6).then(function() {
                    return Promise.resolve(n);
                });
            }).then(function(e) {
                return require("./engine-adapter"), n.init(e);
            }).then(function() {
                return e.end().then(function() {
                    return n.start();
                });
            });
        }(n);
    }).catch(function(e) {
        console.error(e);
    });
}

"android" === wx.getSystemInfoSync().platform.toLocaleLowerCase() ? GameGlobal.requestAnimationFrame(e) : e();