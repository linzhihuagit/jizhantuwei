var e, t;

System.register("chunks:///_virtual/internal", [], function() {
    return {
        execute: function() {}
    };
}), e = "virtual:///prerequisite-imports/internal", t = "chunks:///_virtual/internal", 
System.register(e, [ t ], function(e, t) {
    return {
        setters: [ function(t) {
            var r = {};
            for (var n in t) "default" !== n && "__esModule" !== n && (r[n] = t[n]);
            e(r);
        } ],
        execute: function() {}
    };
});