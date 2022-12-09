var e = require("@babel/runtime/helpers/typeof");

!function e(t, n, r) {
    function o(a, u) {
        if (!n[a]) {
            if (!t[a]) {
                var c = "function" == typeof require && require;
                if (!u && c) return c(a, !0);
                if (i) return i(a, !0);
                var l = new Error("Cannot find module '" + a + "'");
                throw l.code = "MODULE_NOT_FOUND", l;
            }
            var s = n[a] = {
                exports: {}
            };
            t[a][0].call(s.exports, function(e) {
                return o(t[a][1][e] || e);
            }, s, s.exports, e, t, n, r);
        }
        return n[a].exports;
    }
    for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
    return o;
}({
    1: [ function(e, t, n) {
        function r(e) {
            this.options = e || {
                locator: {}
            };
        }
        function o() {
            this.cdata = !1;
        }
        function i(e, t) {
            t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
        }
        function a(e) {
            if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
        }
        function u(e, t, n) {
            return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e;
        }
        function c(e, t) {
            e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
        }
        r.prototype.parseFromString = function(e, t) {
            var n = this.options, r = new s(), i = n.domBuilder || new o(), u = n.errorHandler, c = n.locator, f = n.xmlns || {}, d = /\/x?html?$/.test(t), p = d ? l.entityMap : {
                lt: "<",
                gt: ">",
                amp: "&",
                quot: '"',
                apos: "'"
            };
            return c && i.setDocumentLocator(c), r.errorHandler = function(e, t, n) {
                if (!e) {
                    if (t instanceof o) return t;
                    e = t;
                }
                var r = {}, i = e instanceof Function;
                function u(t) {
                    var o = e[t];
                    !o && i && (o = 2 == e.length ? function(n) {
                        e(t, n);
                    } : e), r[t] = o && function(e) {
                        o("[xmldom " + t + "]\t" + e + a(n));
                    } || function() {};
                }
                return n = n || {}, u("warning"), u("error"), u("fatalError"), r;
            }(u, i, c), r.domBuilder = n.domBuilder || i, d && (f[""] = "http://www.w3.org/1999/xhtml"), 
            f.xml = f.xml || "http://www.w3.org/XML/1998/namespace", e ? r.parse(e, f, p) : r.errorHandler.error("invalid doc source"), 
            i.doc;
        }, o.prototype = {
            startDocument: function() {
                this.doc = new f().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
            },
            startElement: function(e, t, n, r) {
                var o = this.doc, a = o.createElementNS(e, n || t), u = r.length;
                c(this, a), this.currentElement = a, this.locator && i(this.locator, a);
                for (var l = 0; l < u; l++) {
                    e = r.getURI(l);
                    var s = r.getValue(l), f = (n = r.getQName(l), o.createAttributeNS(e, n));
                    this.locator && i(r.getLocator(l), f), f.value = f.nodeValue = s, a.setAttributeNode(f);
                }
            },
            endElement: function(e, t, n) {
                var r = this.currentElement;
                r.tagName, this.currentElement = r.parentNode;
            },
            startPrefixMapping: function(e, t) {},
            endPrefixMapping: function(e) {},
            processingInstruction: function(e, t) {
                var n = this.doc.createProcessingInstruction(e, t);
                this.locator && i(this.locator, n), c(this, n);
            },
            ignorableWhitespace: function(e, t, n) {},
            characters: function(e, t, n) {
                if (e = u.apply(this, arguments)) {
                    if (this.cdata) var r = this.doc.createCDATASection(e); else r = this.doc.createTextNode(e);
                    this.currentElement ? this.currentElement.appendChild(r) : /^\s*$/.test(e) && this.doc.appendChild(r), 
                    this.locator && i(this.locator, r);
                }
            },
            skippedEntity: function(e) {},
            endDocument: function() {
                this.doc.normalize();
            },
            setDocumentLocator: function(e) {
                (this.locator = e) && (e.lineNumber = 0);
            },
            comment: function(e, t, n) {
                e = u.apply(this, arguments);
                var r = this.doc.createComment(e);
                this.locator && i(this.locator, r), c(this, r);
            },
            startCDATA: function() {
                this.cdata = !0;
            },
            endCDATA: function() {
                this.cdata = !1;
            },
            startDTD: function(e, t, n) {
                var r = this.doc.implementation;
                if (r && r.createDocumentType) {
                    var o = r.createDocumentType(e, t, n);
                    this.locator && i(this.locator, o), c(this, o);
                }
            },
            warning: function(e) {
                console.warn("[xmldom warning]\t" + e, a(this.locator));
            },
            error: function(e) {
                console.error("[xmldom error]\t" + e, a(this.locator));
            },
            fatalError: function(e) {
                throw console.error("[xmldom fatalError]\t" + e, a(this.locator)), e;
            }
        }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(e) {
            o.prototype[e] = function() {
                return null;
            };
        });
        var l = e("./entities"), s = e("./sax").XMLReader, f = n.DOMImplementation = e("./dom").DOMImplementation;
        n.XMLSerializer = e("./dom").XMLSerializer, n.DOMParser = r, window.DOMParser = r;
    }, {
        "./dom": 2,
        "./entities": 3,
        "./sax": 4
    } ],
    2: [ function(t, n, r) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
            })(t);
        }
        function i(e, t) {
            for (var n in e) t[n] = e[n];
        }
        function a(e, t) {
            var n = e.prototype;
            if (!(n instanceof t)) {
                var r = function() {};
                for (var o in r.prototype = t.prototype, r = new r(), n) r[o] = n[o];
                e.prototype = n = r;
            }
            n.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), 
            n.constructor = e);
        }
        var u = {}, c = u.ELEMENT_NODE = 1, l = u.ATTRIBUTE_NODE = 2, s = u.TEXT_NODE = 3, f = u.CDATA_SECTION_NODE = 4, d = u.ENTITY_REFERENCE_NODE = 5, p = u.ENTITY_NODE = 6, E = u.PROCESSING_INSTRUCTION_NODE = 7, h = u.COMMENT_NODE = 8, m = u.DOCUMENT_NODE = 9, _ = u.DOCUMENT_TYPE_NODE = 10, T = u.DOCUMENT_FRAGMENT_NODE = 11, y = u.NOTATION_NODE = 12, v = {}, b = {}, g = (v.INDEX_SIZE_ERR = (b[1] = "Index size error", 
        1), v.DOMSTRING_SIZE_ERR = (b[2] = "DOMString size error", 2), v.HIERARCHY_REQUEST_ERR = (b[3] = "Hierarchy request error", 
        3)), N = (v.WRONG_DOCUMENT_ERR = (b[4] = "Wrong document", 4), v.INVALID_CHARACTER_ERR = (b[5] = "Invalid character", 
        5), v.NO_DATA_ALLOWED_ERR = (b[6] = "No data allowed", 6), v.NO_MODIFICATION_ALLOWED_ERR = (b[7] = "No modification allowed", 
        7), v.NOT_FOUND_ERR = (b[8] = "Not found", 8)), A = (v.NOT_SUPPORTED_ERR = (b[9] = "Not supported", 
        9), v.INUSE_ATTRIBUTE_ERR = (b[10] = "Attribute in use", 10));
        function w(e, t) {
            if (t instanceof Error) var n = t; else n = this, Error.call(this, b[e]), this.message = b[e], 
            Error.captureStackTrace && Error.captureStackTrace(this, w);
            return n.code = e, t && (this.message = this.message + ": " + t), n;
        }
        function R() {}
        function O(e, t) {
            this._node = e, this._refresh = t, S(this);
        }
        function S(e) {
            var t = e._node._inc || e._node.ownerDocument._inc;
            if (e._inc != t) {
                var n = e._refresh(e._node);
                for (var r in oe(e, "length", n.length), n) e[r] = n[r];
                e._inc = t;
            }
        }
        function I() {}
        function M(e, t) {
            for (var n = e.length; n--; ) if (e[n] === t) return n;
        }
        function C(e, t, n, r) {
            if (r ? t[M(t, r)] = n : t[t.length++] = n, e) {
                var o = (n.ownerElement = e).ownerDocument;
                o && (r && j(o, e, r), function(e, t, n) {
                    e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
                }(o, e, n));
            }
        }
        function P(e, t, n) {
            var r = M(t, n);
            if (!(0 <= r)) throw w(N, new Error(e.tagName + "@" + n));
            for (var o = t.length - 1; r < o; ) t[r] = t[++r];
            if (t.length = o, e) {
                var i = e.ownerDocument;
                i && (j(i, e, n), n.ownerElement = null);
            }
        }
        function L(e) {
            if (this._features = {}, e) for (var t in e) this._features = e[t];
        }
        function D() {}
        function x(e) {
            return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
        }
        function U(e, t) {
            if (t(e)) return !0;
            if (e = e.firstChild) do {
                if (U(e, t)) return !0;
            } while (e = e.nextSibling);
        }
        function F() {}
        function j(e, t, n) {
            e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
        }
        function B(e, t, n) {
            if (e && e._inc) {
                e._inc++;
                var r = t.childNodes;
                if (n) r[r.length++] = n; else {
                    for (var o = t.firstChild, i = 0; o; ) o = (r[i++] = o).nextSibling;
                    r.length = i;
                }
            }
        }
        function H(e, t) {
            var n = t.previousSibling, r = t.nextSibling;
            return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, 
            B(e.ownerDocument, e), t;
        }
        function k(e, t, n) {
            var r = t.parentNode;
            if (r && r.removeChild(t), t.nodeType === T) {
                var o = t.firstChild;
                if (null == o) return t;
                var i = t.lastChild;
            } else o = i = t;
            var a = n ? n.previousSibling : e.lastChild;
            for (o.previousSibling = a, i.nextSibling = n, a ? a.nextSibling = o : e.firstChild = o, 
            null == n ? e.lastChild = i : n.previousSibling = i; o.parentNode = e, o !== i && (o = o.nextSibling); ) ;
            return B(e.ownerDocument || e, e), t.nodeType == T && (t.firstChild = t.lastChild = null), 
            t;
        }
        function G() {
            this._nsMap = {};
        }
        function X() {}
        function V() {}
        function W() {}
        function q() {}
        function $() {}
        function Y() {}
        function K() {}
        function z() {}
        function Z() {}
        function Q() {}
        function J() {}
        function ee() {}
        function te(e, t) {
            var n = [], r = 9 == this.nodeType && this.documentElement || this, o = r.prefix, i = r.namespaceURI;
            if (i && null == o && null == (o = r.lookupPrefix(i))) var a = [ {
                namespace: i,
                prefix: null
            } ];
            return re(this, n, e, t, a), n.join("");
        }
        function ne(e, t, n) {
            var r = e.prefix || "", o = e.namespaceURI;
            if (!r && !o) return !1;
            if ("xml" === r && "http://www.w3.org/XML/1998/namespace" === o || "http://www.w3.org/2000/xmlns/" == o) return !1;
            for (var i = n.length; i--; ) {
                var a = n[i];
                if (a.prefix == r) return a.namespace != o;
            }
            return !0;
        }
        function re(e, t, n, r, o) {
            if (r) {
                if (!(e = r(e))) return;
                if ("string" == typeof e) return void t.push(e);
            }
            switch (e.nodeType) {
              case c:
                o = o || [];
                var i = e.attributes, a = i.length, u = e.firstChild, p = e.tagName;
                n = "http://www.w3.org/1999/xhtml" === e.namespaceURI || n, t.push("<", p);
                for (var y = 0; y < a; y++) "xmlns" == (v = i.item(y)).prefix ? o.push({
                    prefix: v.localName,
                    namespace: v.value
                }) : "xmlns" == v.nodeName && o.push({
                    prefix: "",
                    namespace: v.value
                });
                for (y = 0; y < a; y++) {
                    var v;
                    if (ne(v = i.item(y), 0, o)) {
                        var b = v.prefix || "", g = v.namespaceURI, N = b ? " xmlns:" + b : " xmlns";
                        t.push(N, '="', g, '"'), o.push({
                            prefix: b,
                            namespace: g
                        });
                    }
                    re(v, t, n, r, o);
                }
                if (ne(e, 0, o) && (b = e.prefix || "", g = e.namespaceURI, N = b ? " xmlns:" + b : " xmlns", 
                t.push(N, '="', g, '"'), o.push({
                    prefix: b,
                    namespace: g
                })), u || n && !/^(?:meta|link|img|br|hr|input)$/i.test(p)) {
                    if (t.push(">"), n && /^script$/i.test(p)) for (;u; ) u.data ? t.push(u.data) : re(u, t, n, r, o), 
                    u = u.nextSibling; else for (;u; ) re(u, t, n, r, o), u = u.nextSibling;
                    t.push("</", p, ">");
                } else t.push("/>");
                return;

              case m:
              case T:
                for (u = e.firstChild; u; ) re(u, t, n, r, o), u = u.nextSibling;
                return;

              case l:
                return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, x), '"');

              case s:
                return t.push(e.data.replace(/[<&]/g, x));

              case f:
                return t.push("<![CDATA[", e.data, "]]>");

              case h:
                return t.push("\x3c!--", e.data, "--\x3e");

              case _:
                var A = e.publicId, w = e.systemId;
                if (t.push("<!DOCTYPE ", e.name), A) t.push(' PUBLIC "', A), w && "." != w && t.push('" "', w), 
                t.push('">'); else if (w && "." != w) t.push(' SYSTEM "', w, '">'); else {
                    var R = e.internalSubset;
                    R && t.push(" [", R, "]"), t.push(">");
                }
                return;

              case E:
                return t.push("<?", e.target, " ", e.data, "?>");

              case d:
                return t.push("&", e.nodeName, ";");

              default:
                t.push("??", e.nodeName);
            }
        }
        function oe(e, t, n) {
            e[t] = n;
        }
        v.INVALID_STATE_ERR = (b[11] = "Invalid state", 11), v.SYNTAX_ERR = (b[12] = "Syntax error", 
        12), v.INVALID_MODIFICATION_ERR = (b[13] = "Invalid modification", 13), v.NAMESPACE_ERR = (b[14] = "Invalid namespace", 
        14), v.INVALID_ACCESS_ERR = (b[15] = "Invalid access", 15), w.prototype = Error.prototype, 
        i(v, w), R.prototype = {
            length: 0,
            item: function(e) {
                return this[e] || null;
            },
            toString: function(e, t) {
                for (var n = [], r = 0; r < this.length; r++) re(this[r], n, e, t);
                return n.join("");
            }
        }, O.prototype.item = function(e) {
            return S(this), this[e];
        }, a(O, R), I.prototype = {
            length: 0,
            item: R.prototype.item,
            getNamedItem: function(e) {
                for (var t = this.length; t--; ) {
                    var n = this[t];
                    if (n.nodeName == e) return n;
                }
            },
            setNamedItem: function(e) {
                var t = e.ownerElement;
                if (t && t != this._ownerElement) throw new w(A);
                var n = this.getNamedItem(e.nodeName);
                return C(this._ownerElement, this, e, n), n;
            },
            setNamedItemNS: function(e) {
                var t, n = e.ownerElement;
                if (n && n != this._ownerElement) throw new w(A);
                return t = this.getNamedItemNS(e.namespaceURI, e.localName), C(this._ownerElement, this, e, t), 
                t;
            },
            removeNamedItem: function(e) {
                var t = this.getNamedItem(e);
                return P(this._ownerElement, this, t), t;
            },
            removeNamedItemNS: function(e, t) {
                var n = this.getNamedItemNS(e, t);
                return P(this._ownerElement, this, n), n;
            },
            getNamedItemNS: function(e, t) {
                for (var n = this.length; n--; ) {
                    var r = this[n];
                    if (r.localName == t && r.namespaceURI == e) return r;
                }
                return null;
            }
        }, L.prototype = {
            hasFeature: function(e, t) {
                var n = this._features[e.toLowerCase()];
                return !(!n || t && !(t in n));
            },
            createDocument: function(e, t, n) {
                var r = new F();
                if (r.implementation = this, r.childNodes = new R(), (r.doctype = n) && r.appendChild(n), 
                t) {
                    var o = r.createElementNS(e, t);
                    r.appendChild(o);
                }
                return r;
            },
            createDocumentType: function(e, t, n) {
                var r = new Y();
                return r.name = e, r.nodeName = e, r.publicId = t, r.systemId = n, r;
            }
        }, D.prototype = {
            firstChild: null,
            lastChild: null,
            previousSibling: null,
            nextSibling: null,
            attributes: null,
            parentNode: null,
            childNodes: null,
            ownerDocument: null,
            nodeValue: null,
            namespaceURI: null,
            prefix: null,
            localName: null,
            insertBefore: function(e, t) {
                return k(this, e, t);
            },
            replaceChild: function(e, t) {
                this.insertBefore(e, t), t && this.removeChild(t);
            },
            removeChild: function(e) {
                return H(this, e);
            },
            appendChild: function(e) {
                return this.insertBefore(e, null);
            },
            hasChildNodes: function() {
                return null != this.firstChild;
            },
            cloneNode: function(e) {
                return function e(t, n, r) {
                    var i = new n.constructor();
                    for (var a in n) {
                        var u = n[a];
                        "object" != o(u) && u != i[a] && (i[a] = u);
                    }
                    switch (n.childNodes && (i.childNodes = new R()), i.ownerDocument = t, i.nodeType) {
                      case c:
                        var s = n.attributes, f = i.attributes = new I(), d = s.length;
                        f._ownerElement = i;
                        for (var p = 0; p < d; p++) i.setAttributeNode(e(t, s.item(p), !0));
                        break;

                      case l:
                        r = !0;
                    }
                    if (r) for (var E = n.firstChild; E; ) i.appendChild(e(t, E, r)), E = E.nextSibling;
                    return i;
                }(this.ownerDocument || this, this, e);
            },
            normalize: function() {
                for (var e = this.firstChild; e; ) {
                    var t = e.nextSibling;
                    t && t.nodeType == s && e.nodeType == s ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), 
                    e = t);
                }
            },
            isSupported: function(e, t) {
                return this.ownerDocument.implementation.hasFeature(e, t);
            },
            hasAttributes: function() {
                return 0 < this.attributes.length;
            },
            lookupPrefix: function(e) {
                for (var t = this; t; ) {
                    var n = t._nsMap;
                    if (n) for (var r in n) if (n[r] == e) return r;
                    t = t.nodeType == l ? t.ownerDocument : t.parentNode;
                }
                return null;
            },
            lookupNamespaceURI: function(e) {
                for (var t = this; t; ) {
                    var n = t._nsMap;
                    if (n && e in n) return n[e];
                    t = t.nodeType == l ? t.ownerDocument : t.parentNode;
                }
                return null;
            },
            isDefaultNamespace: function(e) {
                return null == this.lookupPrefix(e);
            }
        }, i(u, D), i(u, D.prototype), F.prototype = {
            nodeName: "#document",
            nodeType: m,
            doctype: null,
            documentElement: null,
            _inc: 1,
            insertBefore: function(e, t) {
                if (e.nodeType != T) return null == this.documentElement && e.nodeType == c && (this.documentElement = e), 
                k(this, e, t), e.ownerDocument = this, e;
                for (var n = e.firstChild; n; ) {
                    var r = n.nextSibling;
                    this.insertBefore(n, t), n = r;
                }
                return e;
            },
            removeChild: function(e) {
                return this.documentElement == e && (this.documentElement = null), H(this, e);
            },
            importNode: function(e, t) {
                return function e(t, n, r) {
                    var o;
                    switch (n.nodeType) {
                      case c:
                        (o = n.cloneNode(!1)).ownerDocument = t;

                      case T:
                        break;

                      case l:
                        r = !0;
                    }
                    if ((o = o || n.cloneNode(!1)).ownerDocument = t, o.parentNode = null, r) for (var i = n.firstChild; i; ) o.appendChild(e(t, i, r)), 
                    i = i.nextSibling;
                    return o;
                }(this, e, t);
            },
            getElementById: function(e) {
                var t = null;
                return U(this.documentElement, function(n) {
                    if (n.nodeType == c && n.getAttribute("id") == e) return t = n, !0;
                }), t;
            },
            createElement: function(e) {
                var t = new G();
                return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new R(), 
                (t.attributes = new I())._ownerElement = t;
            },
            createDocumentFragment: function() {
                var e = new Q();
                return e.ownerDocument = this, e.childNodes = new R(), e;
            },
            createTextNode: function(e) {
                var t = new W();
                return t.ownerDocument = this, t.appendData(e), t;
            },
            createComment: function(e) {
                var t = new q();
                return t.ownerDocument = this, t.appendData(e), t;
            },
            createCDATASection: function(e) {
                var t = new $();
                return t.ownerDocument = this, t.appendData(e), t;
            },
            createProcessingInstruction: function(e, t) {
                var n = new J();
                return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, 
                n;
            },
            createAttribute: function(e) {
                var t = new X();
                return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, 
                t;
            },
            createEntityReference: function(e) {
                var t = new Z();
                return t.ownerDocument = this, t.nodeName = e, t;
            },
            createElementNS: function(e, t) {
                var n = new G(), r = t.split(":"), o = n.attributes = new I();
                return n.childNodes = new R(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, 
                n.namespaceURI = e, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, 
                o._ownerElement = n;
            },
            createAttributeNS: function(e, t) {
                var n = new X(), r = t.split(":");
                return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 
                2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
            }
        }, a(F, D), F.prototype.getElementsByTagName = (G.prototype = {
            nodeType: c,
            hasAttribute: function(e) {
                return null != this.getAttributeNode(e);
            },
            getAttribute: function(e) {
                var t = this.getAttributeNode(e);
                return t && t.value || "";
            },
            getAttributeNode: function(e) {
                return this.attributes.getNamedItem(e);
            },
            setAttribute: function(e, t) {
                var n = this.ownerDocument.createAttribute(e);
                n.value = n.nodeValue = "" + t, this.setAttributeNode(n);
            },
            removeAttribute: function(e) {
                var t = this.getAttributeNode(e);
                t && this.removeAttributeNode(t);
            },
            appendChild: function(e) {
                return e.nodeType === T ? this.insertBefore(e, null) : function(e, t) {
                    var n = t.parentNode;
                    if (n) {
                        var r = e.lastChild;
                        n.removeChild(t), r = e.lastChild;
                    }
                    return r = e.lastChild, t.parentNode = e, t.previousSibling = r, t.nextSibling = null, 
                    r ? r.nextSibling = t : e.firstChild = t, e.lastChild = t, B(e.ownerDocument, e, t), 
                    t;
                }(this, e);
            },
            setAttributeNode: function(e) {
                return this.attributes.setNamedItem(e);
            },
            setAttributeNodeNS: function(e) {
                return this.attributes.setNamedItemNS(e);
            },
            removeAttributeNode: function(e) {
                return this.attributes.removeNamedItem(e.nodeName);
            },
            removeAttributeNS: function(e, t) {
                var n = this.getAttributeNodeNS(e, t);
                n && this.removeAttributeNode(n);
            },
            hasAttributeNS: function(e, t) {
                return null != this.getAttributeNodeNS(e, t);
            },
            getAttributeNS: function(e, t) {
                var n = this.getAttributeNodeNS(e, t);
                return n && n.value || "";
            },
            setAttributeNS: function(e, t, n) {
                var r = this.ownerDocument.createAttributeNS(e, t);
                r.value = r.nodeValue = "" + n, this.setAttributeNode(r);
            },
            getAttributeNodeNS: function(e, t) {
                return this.attributes.getNamedItemNS(e, t);
            },
            getElementsByTagName: function(e) {
                return new O(this, function(t) {
                    var n = [];
                    return U(t, function(r) {
                        r === t || r.nodeType != c || "*" !== e && r.tagName != e || n.push(r);
                    }), n;
                });
            },
            getElementsByTagNameNS: function(e, t) {
                return new O(this, function(n) {
                    var r = [];
                    return U(n, function(o) {
                        o === n || o.nodeType !== c || "*" !== e && o.namespaceURI !== e || "*" !== t && o.localName != t || r.push(o);
                    }), r;
                });
            }
        }).getElementsByTagName, F.prototype.getElementsByTagNameNS = G.prototype.getElementsByTagNameNS, 
        a(G, D), X.prototype.nodeType = l, a(X, D), V.prototype = {
            data: "",
            substringData: function(e, t) {
                return this.data.substring(e, e + t);
            },
            appendData: function(e) {
                e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
            },
            insertData: function(e, t) {
                this.replaceData(e, 0, t);
            },
            appendChild: function(e) {
                throw new Error(b[g]);
            },
            deleteData: function(e, t) {
                this.replaceData(e, t, "");
            },
            replaceData: function(e, t, n) {
                n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, 
                this.length = n.length;
            }
        }, a(V, D), W.prototype = {
            nodeName: "#text",
            nodeType: s,
            splitText: function(e) {
                var t = this.data, n = t.substring(e);
                t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
                var r = this.ownerDocument.createTextNode(n);
                return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
            }
        }, a(W, V), q.prototype = {
            nodeName: "#comment",
            nodeType: h
        }, a(q, V), $.prototype = {
            nodeName: "#cdata-section",
            nodeType: f
        }, a($, V), Y.prototype.nodeType = _, a(Y, D), K.prototype.nodeType = y, a(K, D), 
        z.prototype.nodeType = p, a(z, D), Z.prototype.nodeType = d, a(Z, D), Q.prototype.nodeName = "#document-fragment", 
        Q.prototype.nodeType = T, a(Q, D), J.prototype.nodeType = E, a(J, D), ee.prototype.serializeToString = function(e, t, n) {
            return te.call(e, t, n);
        }, D.prototype.toString = te;
        try {
            Object.defineProperty && (Object.defineProperty(O.prototype, "length", {
                get: function() {
                    return S(this), this.$$length;
                }
            }), Object.defineProperty(D.prototype, "textContent", {
                get: function() {
                    return function e(t) {
                        switch (t.nodeType) {
                          case c:
                          case T:
                            var n = [];
                            for (t = t.firstChild; t; ) 7 !== t.nodeType && 8 !== t.nodeType && n.push(e(t)), 
                            t = t.nextSibling;
                            return n.join("");

                          default:
                            return t.nodeValue;
                        }
                    }(this);
                },
                set: function(e) {
                    switch (this.nodeType) {
                      case c:
                      case T:
                        for (;this.firstChild; ) this.removeChild(this.firstChild);
                        (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                        break;

                      default:
                        this.data = e, this.value = e, this.nodeValue = e;
                    }
                }
            }), oe = function(e, t, n) {
                e["$$" + t] = n;
            });
        } catch (t) {}
        r.DOMImplementation = L, r.XMLSerializer = ee;
    }, {} ],
    3: [ function(e, t, n) {
        n.entityMap = {
            lt: "<",
            gt: ">",
            amp: "&",
            quot: '"',
            apos: "'",
            Agrave: "À",
            Aacute: "Á",
            Acirc: "Â",
            Atilde: "Ã",
            Auml: "Ä",
            Aring: "Å",
            AElig: "Æ",
            Ccedil: "Ç",
            Egrave: "È",
            Eacute: "É",
            Ecirc: "Ê",
            Euml: "Ë",
            Igrave: "Ì",
            Iacute: "Í",
            Icirc: "Î",
            Iuml: "Ï",
            ETH: "Ð",
            Ntilde: "Ñ",
            Ograve: "Ò",
            Oacute: "Ó",
            Ocirc: "Ô",
            Otilde: "Õ",
            Ouml: "Ö",
            Oslash: "Ø",
            Ugrave: "Ù",
            Uacute: "Ú",
            Ucirc: "Û",
            Uuml: "Ü",
            Yacute: "Ý",
            THORN: "Þ",
            szlig: "ß",
            agrave: "à",
            aacute: "á",
            acirc: "â",
            atilde: "ã",
            auml: "ä",
            aring: "å",
            aelig: "æ",
            ccedil: "ç",
            egrave: "è",
            eacute: "é",
            ecirc: "ê",
            euml: "ë",
            igrave: "ì",
            iacute: "í",
            icirc: "î",
            iuml: "ï",
            eth: "ð",
            ntilde: "ñ",
            ograve: "ò",
            oacute: "ó",
            ocirc: "ô",
            otilde: "õ",
            ouml: "ö",
            oslash: "ø",
            ugrave: "ù",
            uacute: "ú",
            ucirc: "û",
            uuml: "ü",
            yacute: "ý",
            thorn: "þ",
            yuml: "ÿ",
            nbsp: " ",
            iexcl: "¡",
            cent: "¢",
            pound: "£",
            curren: "¤",
            yen: "¥",
            brvbar: "¦",
            sect: "§",
            uml: "¨",
            copy: "©",
            ordf: "ª",
            laquo: "«",
            not: "¬",
            shy: "­­",
            reg: "®",
            macr: "¯",
            deg: "°",
            plusmn: "±",
            sup2: "²",
            sup3: "³",
            acute: "´",
            micro: "µ",
            para: "¶",
            middot: "·",
            cedil: "¸",
            sup1: "¹",
            ordm: "º",
            raquo: "»",
            frac14: "¼",
            frac12: "½",
            frac34: "¾",
            iquest: "¿",
            times: "×",
            divide: "÷",
            forall: "∀",
            part: "∂",
            exist: "∃",
            empty: "∅",
            nabla: "∇",
            isin: "∈",
            notin: "∉",
            ni: "∋",
            prod: "∏",
            sum: "∑",
            minus: "−",
            lowast: "∗",
            radic: "√",
            prop: "∝",
            infin: "∞",
            ang: "∠",
            and: "∧",
            or: "∨",
            cap: "∩",
            cup: "∪",
            int: "∫",
            there4: "∴",
            sim: "∼",
            cong: "≅",
            asymp: "≈",
            ne: "≠",
            equiv: "≡",
            le: "≤",
            ge: "≥",
            sub: "⊂",
            sup: "⊃",
            nsub: "⊄",
            sube: "⊆",
            supe: "⊇",
            oplus: "⊕",
            otimes: "⊗",
            perp: "⊥",
            sdot: "⋅",
            Alpha: "Α",
            Beta: "Β",
            Gamma: "Γ",
            Delta: "Δ",
            Epsilon: "Ε",
            Zeta: "Ζ",
            Eta: "Η",
            Theta: "Θ",
            Iota: "Ι",
            Kappa: "Κ",
            Lambda: "Λ",
            Mu: "Μ",
            Nu: "Ν",
            Xi: "Ξ",
            Omicron: "Ο",
            Pi: "Π",
            Rho: "Ρ",
            Sigma: "Σ",
            Tau: "Τ",
            Upsilon: "Υ",
            Phi: "Φ",
            Chi: "Χ",
            Psi: "Ψ",
            Omega: "Ω",
            alpha: "α",
            beta: "β",
            gamma: "γ",
            delta: "δ",
            epsilon: "ε",
            zeta: "ζ",
            eta: "η",
            theta: "θ",
            iota: "ι",
            kappa: "κ",
            lambda: "λ",
            mu: "μ",
            nu: "ν",
            xi: "ξ",
            omicron: "ο",
            pi: "π",
            rho: "ρ",
            sigmaf: "ς",
            sigma: "σ",
            tau: "τ",
            upsilon: "υ",
            phi: "φ",
            chi: "χ",
            psi: "ψ",
            omega: "ω",
            thetasym: "ϑ",
            upsih: "ϒ",
            piv: "ϖ",
            OElig: "Œ",
            oelig: "œ",
            Scaron: "Š",
            scaron: "š",
            Yuml: "Ÿ",
            fnof: "ƒ",
            circ: "ˆ",
            tilde: "˜",
            ensp: " ",
            emsp: " ",
            thinsp: " ",
            zwnj: "‌",
            zwj: "‍",
            lrm: "‎",
            rlm: "‏",
            ndash: "–",
            mdash: "—",
            lsquo: "‘",
            rsquo: "’",
            sbquo: "‚",
            ldquo: "“",
            rdquo: "”",
            bdquo: "„",
            dagger: "†",
            Dagger: "‡",
            bull: "•",
            hellip: "…",
            permil: "‰",
            prime: "′",
            Prime: "″",
            lsaquo: "‹",
            rsaquo: "›",
            oline: "‾",
            euro: "€",
            trade: "™",
            larr: "←",
            uarr: "↑",
            rarr: "→",
            darr: "↓",
            harr: "↔",
            crarr: "↵",
            lceil: "⌈",
            rceil: "⌉",
            lfloor: "⌊",
            rfloor: "⌋",
            loz: "◊",
            spades: "♠",
            clubs: "♣",
            hearts: "♥",
            diams: "♦"
        };
    }, {} ],
    4: [ function(e, t, n) {
        var r = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, o = new RegExp("[\\-\\.0-9" + r.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), i = new RegExp("^" + r.source + o.source + "*(?::" + r.source + o.source + "*)?$");
        function a() {}
        function u(e, t) {
            return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
        }
        function c(e, t, n, r, o, i) {
            for (var a, u = ++t, c = 0; ;) {
                var l = e.charAt(u);
                switch (l) {
                  case "=":
                    if (1 === c) a = e.slice(t, u), c = 3; else {
                        if (2 !== c) throw new Error("attribute equal must after attrName");
                        c = 3;
                    }
                    break;

                  case "'":
                  case '"':
                    if (3 === c || 1 === c) {
                        if (1 === c && (i.warning('attribute value must after "="'), a = e.slice(t, u)), 
                        t = u + 1, !(0 < (u = e.indexOf(l, t)))) throw new Error("attribute value no end '" + l + "' match");
                        s = e.slice(t, u).replace(/&#?\w+;/g, o), n.add(a, s, t - 1), c = 5;
                    } else {
                        if (4 != c) throw new Error('attribute value must after "="');
                        s = e.slice(t, u).replace(/&#?\w+;/g, o), n.add(a, s, t), i.warning('attribute "' + a + '" missed start quot(' + l + ")!!"), 
                        t = u + 1, c = 5;
                    }
                    break;

                  case "/":
                    switch (c) {
                      case 0:
                        n.setTagName(e.slice(t, u));

                      case 5:
                      case 6:
                      case 7:
                        c = 7, n.closed = !0;

                      case 4:
                      case 1:
                      case 2:
                        break;

                      default:
                        throw new Error("attribute invalid close char('/')");
                    }
                    break;

                  case "":
                    return i.error("unexpected end of input"), 0 == c && n.setTagName(e.slice(t, u)), 
                    u;

                  case ">":
                    switch (c) {
                      case 0:
                        n.setTagName(e.slice(t, u));

                      case 5:
                      case 6:
                      case 7:
                        break;

                      case 4:
                      case 1:
                        "/" === (s = e.slice(t, u)).slice(-1) && (n.closed = !0, s = s.slice(0, -1));

                      case 2:
                        2 === c && (s = a), 4 == c ? (i.warning('attribute "' + s + '" missed quot(")!!'), 
                        n.add(a, s.replace(/&#?\w+;/g, o), t)) : ("http://www.w3.org/1999/xhtml" === r[""] && s.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + s + '" missed value!! "' + s + '" instead!!'), 
                        n.add(s, s, t));
                        break;

                      case 3:
                        throw new Error("attribute value missed!!");
                    }
                    return u;

                  case "":
                    l = " ";

                  default:
                    if (l <= " ") switch (c) {
                      case 0:
                        n.setTagName(e.slice(t, u)), c = 6;
                        break;

                      case 1:
                        a = e.slice(t, u), c = 2;
                        break;

                      case 4:
                        var s = e.slice(t, u).replace(/&#?\w+;/g, o);
                        i.warning('attribute "' + s + '" missed quot(")!!'), n.add(a, s, t);

                      case 5:
                        c = 6;
                    } else switch (c) {
                      case 2:
                        n.tagName, "http://www.w3.org/1999/xhtml" === r[""] && a.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + a + '" missed value!! "' + a + '" instead2!!'), 
                        n.add(a, a, t), t = u, c = 1;
                        break;

                      case 5:
                        i.warning('attribute space is required"' + a + '"!!');

                      case 6:
                        c = 1, t = u;
                        break;

                      case 3:
                        c = 4, t = u;
                        break;

                      case 7:
                        throw new Error("elements closed character '/' and '>' must be connected to");
                    }
                }
                u++;
            }
        }
        function l(e, t, n) {
            for (var r = e.tagName, o = null, i = e.length; i--; ) {
                var a = e[i], u = a.qName, c = a.value;
                if (0 < (p = u.indexOf(":"))) var l = a.prefix = u.slice(0, p), s = u.slice(p + 1), f = "xmlns" === l && s; else l = null, 
                f = "xmlns" === (s = u) && "";
                a.localName = s, !1 !== f && (null == o && (o = {}, d(n, n = {})), n[f] = o[f] = c, 
                a.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(f, c));
            }
            for (i = e.length; i--; ) (l = (a = e[i]).prefix) && ("xml" === l && (a.uri = "http://www.w3.org/XML/1998/namespace"), 
            "xmlns" !== l && (a.uri = n[l || ""]));
            var p;
            s = 0 < (p = r.indexOf(":")) ? (l = e.prefix = r.slice(0, p), e.localName = r.slice(p + 1)) : (l = null, 
            e.localName = r);
            var E = e.uri = n[l || ""];
            if (t.startElement(E, s, r, e), !e.closed) return e.currentNSMap = n, e.localNSMap = o, 
            !0;
            if (t.endElement(E, s, r), o) for (l in o) t.endPrefixMapping(l);
        }
        function s(e, t, n, r, o) {
            if (/^(?:script|textarea)$/i.test(n)) {
                var i = e.indexOf("</" + n + ">", t), a = e.substring(t + 1, i);
                if (/[&<]/.test(a)) return /^script$/i.test(n) || (a = a.replace(/&#?\w+;/g, r)), 
                o.characters(a, 0, a.length), i;
            }
            return t + 1;
        }
        function f(e, t, n, r) {
            var o = r[n];
            return null == o && ((o = e.lastIndexOf("</" + n + ">")) < t && (o = e.lastIndexOf("</" + n)), 
            r[n] = o), o < t;
        }
        function d(e, t) {
            for (var n in e) t[n] = e[n];
        }
        function p(e, t, n, r) {
            switch (e.charAt(t + 2)) {
              case "-":
                return "-" !== e.charAt(t + 3) ? -1 : t < (o = e.indexOf("--\x3e", t + 4)) ? (n.comment(e, t + 4, o - t - 4), 
                o + 3) : (r.error("Unclosed comment"), -1);

              default:
                if ("CDATA[" == e.substr(t + 3, 6)) {
                    var o = e.indexOf("]]>", t + 9);
                    return n.startCDATA(), n.characters(e, t + 9, o - t - 9), n.endCDATA(), o + 3;
                }
                var i = function(e, t) {
                    var n, r = [], o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                    for (o.lastIndex = t, o.exec(e); n = o.exec(e); ) if (r.push(n), n[1]) return r;
                }(e, t), a = i.length;
                if (1 < a && /!doctype/i.test(i[0][0])) {
                    var u = i[1][0], c = 3 < a && /^public$/i.test(i[2][0]) && i[3][0], l = 4 < a && i[4][0], s = i[a - 1];
                    return n.startDTD(u, c && c.replace(/^(['"])(.*?)\1$/, "$2"), l && l.replace(/^(['"])(.*?)\1$/, "$2")), 
                    n.endDTD(), s.index + s[0].length;
                }
            }
            return -1;
        }
        function E(e, t, n) {
            var r = e.indexOf("?>", t);
            if (r) {
                var o = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
                return o ? (o[0].length, n.processingInstruction(o[1], o[2]), r + 2) : -1;
            }
            return -1;
        }
        function h(e) {}
        a.prototype = {
            parse: function(e, t, n) {
                var r = this.domBuilder;
                r.startDocument(), d(t, t = {}), function(e, t, n, r, o) {
                    function i(e) {
                        var t = e.slice(1, -1);
                        return t in n ? n[t] : "#" === t.charAt(0) ? function(e) {
                            if (65535 < e) {
                                var t = 55296 + ((e -= 65536) >> 10), n = 56320 + (1023 & e);
                                return String.fromCharCode(t, n);
                            }
                            return String.fromCharCode(e);
                        }(parseInt(t.substr(1).replace("x", "0x"))) : (o.error("entity not found:" + e), 
                        e);
                    }
                    function a(t) {
                        if (g < t) {
                            var n = e.substring(g, t).replace(/&#?\w+;/g, i);
                            y && d(g), r.characters(n, 0, t - g), g = t;
                        }
                    }
                    function d(t, n) {
                        for (;_ <= t && (n = T.exec(e)); ) m = n.index, _ = m + n[0].length, y.lineNumber++;
                        y.columnNumber = t - m + 1;
                    }
                    for (var m = 0, _ = 0, T = /.*(?:\r\n?|\n)|.*$/g, y = r.locator, v = [ {
                        currentNSMap: t
                    } ], b = {}, g = 0; ;) {
                        try {
                            var N = e.indexOf("<", g);
                            if (N < 0) {
                                if (!e.substr(g).match(/^\s*$/)) {
                                    var A = r.doc, w = A.createTextNode(e.substr(g));
                                    A.appendChild(w), r.currentElement = w;
                                }
                                return;
                            }
                            switch (g < N && a(N), e.charAt(N + 1)) {
                              case "/":
                                var R = e.indexOf(">", N + 3), O = e.substring(N + 2, R), S = v.pop();
                                R < 0 ? (O = e.substring(N + 2).replace(/[\s<].*/, ""), o.error("end tag name: " + O + " is not complete:" + S.tagName), 
                                R = N + 1 + O.length) : O.match(/\s</) && (O = O.replace(/[\s<].*/, ""), o.error("end tag name: " + O + " maybe not complete"), 
                                R = N + 1 + O.length);
                                var I = S.localNSMap, M = S.tagName == O;
                                if (M || S.tagName && S.tagName.toLowerCase() == O.toLowerCase()) {
                                    if (r.endElement(S.uri, S.localName, O), I) for (var C in I) r.endPrefixMapping(C);
                                    M || o.fatalError("end tag name: " + O + " is not match the current start tagName:" + S.tagName);
                                } else v.push(S);
                                R++;
                                break;

                              case "?":
                                y && d(N), R = E(e, N, r);
                                break;

                              case "!":
                                y && d(N), R = p(e, N, r, o);
                                break;

                              default:
                                y && d(N);
                                var P = new h(), L = v[v.length - 1].currentNSMap, D = (R = c(e, N, P, L, i, o), 
                                P.length);
                                if (!P.closed && f(e, R, P.tagName, b) && (P.closed = !0, n.nbsp || o.warning("unclosed xml attribute")), 
                                y && D) {
                                    for (var x = u(y, {}), U = 0; U < D; U++) {
                                        var F = P[U];
                                        d(F.offset), F.locator = u(y, {});
                                    }
                                    r.locator = x, l(P, r, L) && v.push(P), r.locator = y;
                                } else l(P, r, L) && v.push(P);
                                "http://www.w3.org/1999/xhtml" !== P.uri || P.closed ? R++ : R = s(e, R, P.tagName, i, r);
                            }
                        } catch (t) {
                            o.error("element parse error: " + t), R = -1;
                        }
                        g < R ? g = R : a(Math.max(N, g) + 1);
                    }
                }(e, t, n, r, this.errorHandler), r.endDocument();
            }
        }, h.prototype = {
            setTagName: function(e) {
                if (!i.test(e)) throw new Error("invalid tagName:" + e);
                this.tagName = e;
            },
            add: function(e, t, n) {
                if (!i.test(e)) throw new Error("invalid attribute:" + e);
                this[this.length++] = {
                    qName: e,
                    value: t,
                    offset: n
                };
            },
            length: 0,
            getLocalName: function(e) {
                return this[e].localName;
            },
            getLocator: function(e) {
                return this[e].locator;
            },
            getQName: function(e) {
                return this[e].qName;
            },
            getURI: function(e) {
                return this[e].uri;
            },
            getValue: function(e) {
                return this[e].value;
            }
        }, n.XMLReader = a;
    }, {} ],
    5: [ function(t, n, r) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
            })(t);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var i, a = (i = t("./HTMLAudioElement")) && i.__esModule ? i : {
            default: i
        };
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function c(e, t, n) {
            return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var r = function(e, t) {
                    for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)); ) ;
                    return e;
                }(e, t);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get ? o.get.call(n) : o.value;
                }
            })(e, t, n || e);
        }
        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function s(e, t) {
            return (s = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        var f = 1, d = {}, p = function() {
            function e(t) {
                var n;
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), (n = function(e, t) {
                    return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
                        if (void 0 !== e) return e;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }(e) : t;
                }(this, l(e).call(this)))._$sn = f++, n.HAVE_NOTHING = 0, n.HAVE_METADATA = 1, n.HAVE_CURRENT_DATA = 2, 
                n.HAVE_FUTURE_DATA = 3, n.HAVE_ENOUGH_DATA = 4, n.readyState = 0;
                var r = wx.createInnerAudioContext();
                return d[n._$sn] = r, n._canplayEvents = [ "load", "loadend", "canplay", "canplaythrough", "loadedmetadata" ], 
                r.onCanplay(function() {
                    n._loaded = !0, n.readyState = n.HAVE_CURRENT_DATA, n._canplayEvents.forEach(function(e) {
                        n.dispatchEvent({
                            type: e
                        });
                    });
                }), r.onPlay(function() {
                    n._paused = d[n._$sn].paused, n.dispatchEvent({
                        type: "play"
                    });
                }), r.onPause(function() {
                    n._paused = d[n._$sn].paused, n.dispatchEvent({
                        type: "pause"
                    });
                }), r.onEnded(function() {
                    n._paused = d[n._$sn].paused, !1 === d[n._$sn].loop && n.dispatchEvent({
                        type: "ended"
                    }), n.readyState = 4;
                }), r.onError(function() {
                    n._paused = d[n._$sn].paused, n.dispatchEvent({
                        type: "error"
                    });
                }), t ? n.src = t : n._src = "", n._loop = r.loop, n._autoplay = r.autoplay, n._paused = r.paused, 
                n._volume = r.volume, n._muted = !1, n;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && s(e, t);
            }(e, a.default), function(e, t, n) {
                t && u(e.prototype, t);
            }(e, [ {
                key: "addEventListener",
                value: function(t, n, r) {
                    var o = 2 < arguments.length && void 0 !== r ? r : {};
                    c(l(e.prototype), "addEventListener", this).call(this, t, n, o), t = String(t).toLowerCase(), 
                    this._loaded && -1 !== this._canplayEvents.indexOf(t) && this.dispatchEvent({
                        type: t
                    });
                }
            }, {
                key: "load",
                value: function() {}
            }, {
                key: "play",
                value: function() {
                    d[this._$sn].play();
                }
            }, {
                key: "resume",
                value: function() {
                    d[this._$sn].resume();
                }
            }, {
                key: "pause",
                value: function() {
                    d[this._$sn].pause();
                }
            }, {
                key: "stop",
                value: function() {
                    d[this._$sn].stop();
                }
            }, {
                key: "destroy",
                value: function() {
                    d[this._$sn].destroy();
                }
            }, {
                key: "canPlayType",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : "";
                    return "string" != typeof t ? "" : -1 < t.indexOf("audio/mpeg") || t.indexOf("audio/mp4") ? "probably" : "";
                }
            }, {
                key: "cloneNode",
                value: function() {
                    var t = new e();
                    return t.loop = this.loop, t.autoplay = this.autoplay, t.src = this.src, t;
                }
            }, {
                key: "currentTime",
                get: function() {
                    return d[this._$sn].currentTime;
                },
                set: function(e) {
                    d[this._$sn].seek(e);
                }
            }, {
                key: "duration",
                get: function() {
                    return d[this._$sn].duration;
                }
            }, {
                key: "src",
                get: function() {
                    return this._src;
                },
                set: function(e) {
                    this._src = e, this._loaded = !1, this.readyState = this.HAVE_NOTHING, d[this._$sn].src = e;
                }
            }, {
                key: "loop",
                get: function() {
                    return this._loop;
                },
                set: function(e) {
                    this._loop = e, d[this._$sn].loop = e;
                }
            }, {
                key: "autoplay",
                get: function() {
                    return this.autoplay;
                },
                set: function(e) {
                    this._autoplay = e, d[this._$sn].autoplay = e;
                }
            }, {
                key: "paused",
                get: function() {
                    return this._paused;
                }
            }, {
                key: "volume",
                get: function() {
                    return this._volume;
                },
                set: function(e) {
                    this._volume = e, this._muted || (d[this._$sn].volume = e);
                }
            }, {
                key: "muted",
                get: function() {
                    return this._muted;
                },
                set: function(e) {
                    this._muted = e, d[this._$sn].volume = e ? 0 : this._volume;
                }
            } ]), e;
        }();
        r.default = p;
    }, {
        "./HTMLAudioElement": 13
    } ],
    6: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function() {
            var e = wx.createCanvas();
            return e.type = "canvas", e.getContext, e.getBoundingClientRect = function() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            }, e.style = {
                top: "0px",
                left: "0px",
                width: r.innerWidth + "px",
                height: r.innerHeight + "px"
            }, e.addEventListener = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                document.addEventListener(e, t, n);
            }, e.removeEventListener = function(e, t) {
                document.removeEventListener(e, t);
            }, e.dispatchEvent = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                console.log("canvas.dispatchEvent", e.type, e);
            }, Object.defineProperty(e, "clientWidth", {
                enumerable: !0,
                get: function() {
                    return r.innerWidth;
                }
            }), Object.defineProperty(e, "clientHeight", {
                enumerable: !0,
                get: function() {
                    return r.innerHeight;
                }
            }), e;
        };
        var r = e("./WindowProperties");
    }, {
        "./WindowProperties": 24
    } ],
    7: [ function(t, n, r) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
            })(t);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var i, a = (i = t("./Node")) && i.__esModule ? i : {
            default: i
        };
        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function c(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var f = function() {
            function e() {
                var t;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), s(c(t = function(e, t) {
                    return !t || "object" !== o(t) && "function" != typeof t ? c(e) : t;
                }(this, u(e).call(this))), "className", ""), s(c(t), "children", []), t;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t);
            }(e, a.default), e;
        }();
        r.default = f;
    }, {
        "./Node": 21
    } ],
    8: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, n.default = function e() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e);
        };
    }, {} ],
    9: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = e("../util/index.js");
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function i(e) {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, i), o(this, "touches", []), o(this, "targetTouches", []), o(this, "changedTouches", []), 
            o(this, "preventDefault", r.noop), o(this, "stopPropagation", r.noop), this.type = e, 
            this.target = window.canvas, this.currentTarget = window.canvas;
        }
        function a(e) {
            return function(t) {
                var n = new i(e);
                n.touches = t.touches, n.targetTouches = Array.prototype.slice.call(t.touches), 
                n.changedTouches = t.changedTouches, n.timeStamp = t.timeStamp, document.dispatchEvent(n);
            };
        }
        n.default = i, wx.onTouchStart(a("touchstart")), wx.onTouchMove(a("touchmove")), 
        wx.onTouchEnd(a("touchend")), wx.onTouchCancel(a("touchcancel"));
    }, {
        "../util/index.js": 31
    } ],
    10: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.defineProperty(n, "TouchEvent", {
            enumerable: !0,
            get: function() {
                return r.default;
            }
        }), Object.defineProperty(n, "MouseEvent", {
            enumerable: !0,
            get: function() {
                return o.default;
            }
        });
        var r = i(e("./TouchEvent")), o = i(e("./MouseEvent"));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
    }, {
        "./MouseEvent": 8,
        "./TouchEvent": 9
    } ],
    11: [ function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = new WeakMap(), i = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), o.set(this, {});
            }
            return function(e, t, n) {
                t && r(e.prototype, t);
            }(e, [ {
                key: "addEventListener",
                value: function(e, t, n) {
                    var r = 2 < arguments.length && void 0 !== n ? n : {}, i = o.get(this);
                    i || (i = {}, o.set(this, i)), i[e] || (i[e] = []), i[e].push(t), r.capture, r.once, 
                    r.passive;
                }
            }, {
                key: "removeEventListener",
                value: function(e, t) {
                    var n = o.get(this);
                    if (n) {
                        var r = n[e];
                        if (r && 0 < r.length) for (var i = r.length; i--; ) if (r[i] === t) {
                            r.splice(i, 1);
                            break;
                        }
                    }
                }
            }, {
                key: "dispatchEvent",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {}, n = o.get(this)[t.type];
                    if (n) for (var r = 0; r < n.length; r++) n[r](t);
                }
            } ]), e;
        }();
        n.default = i;
    }, {} ],
    12: [ function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e);
            }
            return function(e, t, n) {
                t && r(e.prototype, t);
            }(e, [ {
                key: "construct",
                value: function() {}
            } ]), e;
        }();
        n.default = o;
    }, {} ],
    13: [ function(t, n, r) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
            })(t);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var i, a = (i = t("./HTMLMediaElement")) && i.__esModule ? i : {
            default: i
        };
        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function c(e, t) {
            return (c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        var l = function() {
            function e() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), function(e, t) {
                    return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
                        if (void 0 !== e) return e;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }(e) : t;
                }(this, u(e).call(this, "audio"));
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
            }(e, a.default), e;
        }();
        r.default = l;
    }, {
        "./HTMLMediaElement": 17
    } ],
    14: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r, o = (r = e("./Canvas")) && r.__esModule ? r : {
            default: r
        };
        GameGlobal.screencanvas = GameGlobal.screencanvas || new o.default();
        var i = GameGlobal.screencanvas.constructor;
        n.default = i;
    }, {
        "./Canvas": 6
    } ],
    15: [ function(t, n, r) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
            })(t);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var i, a = (i = t("./Element")) && i.__esModule ? i : {
            default: i
        }, u = t("./util/index.js"), c = t("./WindowProperties");
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function s(e) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function f(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var E = function() {
            function e() {
                var t, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), p(f(t = function(e, t) {
                    return !t || "object" !== o(t) && "function" != typeof t ? f(e) : t;
                }(this, s(e).call(this))), "className", ""), p(f(t), "childern", []), p(f(t), "style", {
                    width: "".concat(c.innerWidth, "px"),
                    height: "".concat(c.innerHeight, "px")
                }), p(f(t), "insertBefore", u.noop), p(f(t), "innerHTML", ""), t.tagName = n.toUpperCase(), 
                t;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t);
            }(e, a.default), function(e, t, n) {
                t && l(e.prototype, t);
            }(e, [ {
                key: "setAttribute",
                value: function(e, t) {
                    this[e] = t;
                }
            }, {
                key: "getAttribute",
                value: function(e) {
                    return this[e];
                }
            }, {
                key: "getBoundingClientRect",
                value: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: c.innerWidth,
                        height: c.innerHeight
                    };
                }
            }, {
                key: "focus",
                value: function() {}
            }, {
                key: "clientWidth",
                get: function() {
                    var e = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
                    return Number.isNaN(e) ? 0 : e;
                }
            }, {
                key: "clientHeight",
                get: function() {
                    var e = parseInt(this.style.fontSize, 10);
                    return Number.isNaN(e) ? 0 : e;
                }
            } ]), e;
        }();
        r.default = E;
    }, {
        "./Element": 7,
        "./WindowProperties": 24,
        "./util/index.js": 31
    } ],
    16: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = wx.createImage().constructor;
        n.default = r;
    }, {} ],
    17: [ function(t, n, r) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
            })(t);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var i, a = (i = t("./HTMLElement")) && i.__esModule ? i : {
            default: i
        };
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function c(e) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        var s = function() {
            function e(t) {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), function(e, t) {
                    return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
                        if (void 0 !== e) return e;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }(e) : t;
                }(this, c(e).call(this, t));
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t);
            }(e, a.default), function(e, t, n) {
                t && u(e.prototype, t);
            }(e, [ {
                key: "addTextTrack",
                value: function() {}
            }, {
                key: "captureStream",
                value: function() {}
            }, {
                key: "fastSeek",
                value: function() {}
            }, {
                key: "load",
                value: function() {}
            }, {
                key: "pause",
                value: function() {}
            }, {
                key: "play",
                value: function() {}
            } ]), e;
        }();
        r.default = s;
    }, {
        "./HTMLElement": 15
    } ],
    18: [ function(t, n, r) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
            })(t);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var i, a = (i = t("./HTMLMediaElement")) && i.__esModule ? i : {
            default: i
        };
        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function c(e, t) {
            return (c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        var l = function() {
            function e() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), function(e, t) {
                    return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
                        if (void 0 !== e) return e;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }(e) : t;
                }(this, u(e).call(this, "video"));
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
            }(e, a.default), e;
        }();
        r.default = l;
    }, {
        "./HTMLMediaElement": 17
    } ],
    19: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function() {
            var e = wx.createImage();
            return e.premultiplyAlpha = !1, e;
        };
    }, {} ],
    20: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, n.default = function e() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e);
        };
    }, {} ],
    21: [ function(t, n, r) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
            })(t);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var i, a = (i = t("./EventTarget.js")) && i.__esModule ? i : {
            default: i
        };
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function c(e) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function l(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function s(e, t) {
            return (s = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        var f = function() {
            function e() {
                var t;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                }(l(t = function(e, t) {
                    return !t || "object" !== o(t) && "function" != typeof t ? l(e) : t;
                }(this, c(e).call(this))), "childNodes", []), t;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && s(e, t);
            }(e, a.default), function(e, t, n) {
                t && u(e.prototype, t);
            }(e, [ {
                key: "appendChild",
                value: function(e) {
                    this.childNodes.push(e);
                }
            }, {
                key: "cloneNode",
                value: function() {
                    var e = Object.create(this);
                    return Object.assign(e, this), e;
                }
            }, {
                key: "removeChild",
                value: function(e) {
                    var t = this.childNodes.findIndex(function(t) {
                        return t === e;
                    });
                    return -1 < t ? this.childNodes.splice(t, 1) : null;
                }
            } ]), e;
        }();
        r.default = f;
    }, {
        "./EventTarget.js": 11
    } ],
    22: [ function(e, t, n) {
        function r() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, r);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, (n.default = r).ACTIVE_ATTRIBUTES = 35721, r.ACTIVE_TEXTURE = 34016, 
        r.ACTIVE_UNIFORMS = 35718, r.ALIASED_LINE_WIDTH_RANGE = 33902, r.ALIASED_POINT_SIZE_RANGE = 33901, 
        r.ALPHA = 6406, r.ALPHA_BITS = 3413, r.ALWAYS = 519, r.ARRAY_BUFFER = 34962, r.ARRAY_BUFFER_BINDING = 34964, 
        r.ATTACHED_SHADERS = 35717, r.BACK = 1029, r.BLEND = 3042, r.BLEND_COLOR = 32773, 
        r.BLEND_DST_ALPHA = 32970, r.BLEND_DST_RGB = 32968, r.BLEND_EQUATION = 32777, r.BLEND_EQUATION_ALPHA = 34877, 
        r.BLEND_EQUATION_RGB = 32777, r.BLEND_SRC_ALPHA = 32971, r.BLEND_SRC_RGB = 32969, 
        r.BLUE_BITS = 3412, r.BOOL = 35670, r.BOOL_VEC2 = 35671, r.BOOL_VEC3 = 35672, r.BOOL_VEC4 = 35673, 
        r.BROWSER_DEFAULT_WEBGL = 37444, r.BUFFER_SIZE = 34660, r.BUFFER_USAGE = 34661, 
        r.BYTE = 5120, r.CCW = 2305, r.CLAMP_TO_EDGE = 33071, r.COLOR_ATTACHMENT0 = 36064, 
        r.COLOR_BUFFER_BIT = 16384, r.COLOR_CLEAR_VALUE = 3106, r.COLOR_WRITEMASK = 3107, 
        r.COMPILE_STATUS = 35713, r.COMPRESSED_TEXTURE_FORMATS = 34467, r.CONSTANT_ALPHA = 32771, 
        r.CONSTANT_COLOR = 32769, r.CONTEXT_LOST_WEBGL = 37442, r.CULL_FACE = 2884, r.CULL_FACE_MODE = 2885, 
        r.CURRENT_PROGRAM = 35725, r.CURRENT_VERTEX_ATTRIB = 34342, r.CW = 2304, r.DECR = 7683, 
        r.DECR_WRAP = 34056, r.DELETE_STATUS = 35712, r.DEPTH_ATTACHMENT = 36096, r.DEPTH_BITS = 3414, 
        r.DEPTH_BUFFER_BIT = 256, r.DEPTH_CLEAR_VALUE = 2931, r.DEPTH_COMPONENT = 6402, 
        r.DEPTH_COMPONENT16 = 33189, r.DEPTH_FUNC = 2932, r.DEPTH_RANGE = 2928, r.DEPTH_STENCIL = 34041, 
        r.DEPTH_STENCIL_ATTACHMENT = 33306, r.DEPTH_TEST = 2929, r.DEPTH_WRITEMASK = 2930, 
        r.DITHER = 3024, r.DONT_CARE = 4352, r.DST_ALPHA = 772, r.DST_COLOR = 774, r.DYNAMIC_DRAW = 35048, 
        r.ELEMENT_ARRAY_BUFFER = 34963, r.ELEMENT_ARRAY_BUFFER_BINDING = 34965, r.EQUAL = 514, 
        r.FASTEST = 4353, r.FLOAT = 5126, r.FLOAT_MAT2 = 35674, r.FLOAT_MAT3 = 35675, r.FLOAT_MAT4 = 35676, 
        r.FLOAT_VEC2 = 35664, r.FLOAT_VEC3 = 35665, r.FLOAT_VEC4 = 35666, r.FRAGMENT_SHADER = 35632, 
        r.FRAMEBUFFER = 36160, r.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, r.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048, 
        r.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, r.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050, 
        r.FRAMEBUFFER_BINDING = 36006, r.FRAMEBUFFER_COMPLETE = 36053, r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, 
        r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, 
        r.FRAMEBUFFER_UNSUPPORTED = 36061, r.FRONT = 1028, r.FRONT_AND_BACK = 1032, r.FRONT_FACE = 2886, 
        r.FUNC_ADD = 32774, r.FUNC_REVERSE_SUBTRACT = 32779, r.FUNC_SUBTRACT = 32778, r.GENERATE_MIPMAP_HINT = 33170, 
        r.GEQUAL = 518, r.GREATER = 516, r.GREEN_BITS = 3411, r.HIGH_FLOAT = 36338, r.HIGH_INT = 36341, 
        r.IMPLEMENTATION_COLOR_READ_FORMAT = 35739, r.IMPLEMENTATION_COLOR_READ_TYPE = 35738, 
        r.INCR = 7682, r.INCR_WRAP = 34055, r.INT = 5124, r.INT_VEC2 = 35667, r.INT_VEC3 = 35668, 
        r.INT_VEC4 = 35669, r.INVALID_ENUM = 1280, r.INVALID_FRAMEBUFFER_OPERATION = 1286, 
        r.INVALID_OPERATION = 1282, r.INVALID_VALUE = 1281, r.INVERT = 5386, r.KEEP = 7680, 
        r.LEQUAL = 515, r.LESS = 513, r.LINEAR = 9729, r.LINEAR_MIPMAP_LINEAR = 9987, r.LINEAR_MIPMAP_NEAREST = 9985, 
        r.LINES = 1, r.LINE_LOOP = 2, r.LINE_STRIP = 3, r.LINE_WIDTH = 2849, r.LINK_STATUS = 35714, 
        r.LOW_FLOAT = 36336, r.LOW_INT = 36339, r.LUMINANCE = 6409, r.LUMINANCE_ALPHA = 6410, 
        r.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, r.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, 
        r.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, r.MAX_RENDERBUFFER_SIZE = 34024, r.MAX_TEXTURE_IMAGE_UNITS = 34930, 
        r.MAX_TEXTURE_SIZE = 3379, r.MAX_VARYING_VECTORS = 36348, r.MAX_VERTEX_ATTRIBS = 34921, 
        r.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660, r.MAX_VERTEX_UNIFORM_VECTORS = 36347, 
        r.MAX_VIEWPORT_DIMS = 3386, r.MEDIUM_FLOAT = 36337, r.MEDIUM_INT = 36340, r.MIRRORED_REPEAT = 33648, 
        r.NEAREST = 9728, r.NEAREST_MIPMAP_LINEAR = 9986, r.NEAREST_MIPMAP_NEAREST = 9984, 
        r.NEVER = 512, r.NICEST = 4354, r.NONE = 0, r.NOTEQUAL = 517, r.NO_ERROR = 0, r.ONE = 1, 
        r.ONE_MINUS_CONSTANT_ALPHA = 32772, r.ONE_MINUS_CONSTANT_COLOR = 32770, r.ONE_MINUS_DST_ALPHA = 773, 
        r.ONE_MINUS_DST_COLOR = 775, r.ONE_MINUS_SRC_ALPHA = 771, r.ONE_MINUS_SRC_COLOR = 769, 
        r.OUT_OF_MEMORY = 1285, r.PACK_ALIGNMENT = 3333, r.POINTS = 0, r.POLYGON_OFFSET_FACTOR = 32824, 
        r.POLYGON_OFFSET_FILL = 32823, r.POLYGON_OFFSET_UNITS = 10752, r.RED_BITS = 3410, 
        r.RENDERBUFFER = 36161, r.RENDERBUFFER_ALPHA_SIZE = 36179, r.RENDERBUFFER_BINDING = 36007, 
        r.RENDERBUFFER_BLUE_SIZE = 36178, r.RENDERBUFFER_DEPTH_SIZE = 36180, r.RENDERBUFFER_GREEN_SIZE = 36177, 
        r.RENDERBUFFER_HEIGHT = 36163, r.RENDERBUFFER_INTERNAL_FORMAT = 36164, r.RENDERBUFFER_RED_SIZE = 36176, 
        r.RENDERBUFFER_STENCIL_SIZE = 36181, r.RENDERBUFFER_WIDTH = 36162, r.RENDERER = 7937, 
        r.REPEAT = 10497, r.REPLACE = 7681, r.RGB = 6407, r.RGB5_A1 = 32855, r.RGB565 = 36194, 
        r.RGBA = 6408, r.RGBA4 = 32854, r.SAMPLER_2D = 35678, r.SAMPLER_CUBE = 35680, r.SAMPLES = 32937, 
        r.SAMPLE_ALPHA_TO_COVERAGE = 32926, r.SAMPLE_BUFFERS = 32936, r.SAMPLE_COVERAGE = 32928, 
        r.SAMPLE_COVERAGE_INVERT = 32939, r.SAMPLE_COVERAGE_VALUE = 32938, r.SCISSOR_BOX = 3088, 
        r.SCISSOR_TEST = 3089, r.SHADER_TYPE = 35663, r.SHADING_LANGUAGE_VERSION = 35724, 
        r.SHORT = 5122, r.SRC_ALPHA = 770, r.SRC_ALPHA_SATURATE = 776, r.SRC_COLOR = 768, 
        r.STATIC_DRAW = 35044, r.STENCIL_ATTACHMENT = 36128, r.STENCIL_BACK_FAIL = 34817, 
        r.STENCIL_BACK_FUNC = 34816, r.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, r.STENCIL_BACK_PASS_DEPTH_PASS = 34819, 
        r.STENCIL_BACK_REF = 36003, r.STENCIL_BACK_VALUE_MASK = 36004, r.STENCIL_BACK_WRITEMASK = 36005, 
        r.STENCIL_BITS = 3415, r.STENCIL_BUFFER_BIT = 1024, r.STENCIL_CLEAR_VALUE = 2961, 
        r.STENCIL_FAIL = 2964, r.STENCIL_FUNC = 2962, r.STENCIL_INDEX8 = 36168, r.STENCIL_PASS_DEPTH_FAIL = 2965, 
        r.STENCIL_PASS_DEPTH_PASS = 2966, r.STENCIL_REF = 2967, r.STENCIL_TEST = 2960, r.STENCIL_VALUE_MASK = 2963, 
        r.STENCIL_WRITEMASK = 2968, r.STREAM_DRAW = 35040, r.SUBPIXEL_BITS = 3408, r.TEXTURE = 5890, 
        r.TEXTURE0 = 33984, r.TEXTURE1 = 33985, r.TEXTURE2 = 33986, r.TEXTURE3 = 33987, 
        r.TEXTURE4 = 33988, r.TEXTURE5 = 33989, r.TEXTURE6 = 33990, r.TEXTURE7 = 33991, 
        r.TEXTURE8 = 33992, r.TEXTURE9 = 33993, r.TEXTURE10 = 33994, r.TEXTURE11 = 33995, 
        r.TEXTURE12 = 33996, r.TEXTURE13 = 33997, r.TEXTURE14 = 33998, r.TEXTURE15 = 33999, 
        r.TEXTURE16 = 34e3, r.TEXTURE17 = 34001, r.TEXTURE18 = 34002, r.TEXTURE19 = 34003, 
        r.TEXTURE20 = 34004, r.TEXTURE21 = 34005, r.TEXTURE22 = 34006, r.TEXTURE23 = 34007, 
        r.TEXTURE24 = 34008, r.TEXTURE25 = 34009, r.TEXTURE26 = 34010, r.TEXTURE27 = 34011, 
        r.TEXTURE28 = 34012, r.TEXTURE29 = 34013, r.TEXTURE30 = 34014, r.TEXTURE31 = 34015, 
        r.TEXTURE_2D = 3553, r.TEXTURE_BINDING_2D = 32873, r.TEXTURE_BINDING_CUBE_MAP = 34068, 
        r.TEXTURE_CUBE_MAP = 34067, r.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070, r.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, 
        r.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, r.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, r.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, 
        r.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073, r.TEXTURE_MAG_FILTER = 10240, r.TEXTURE_MIN_FILTER = 10241, 
        r.TEXTURE_WRAP_S = 10242, r.TEXTURE_WRAP_T = 10243, r.TRIANGLES = 4, r.TRIANGLE_FAN = 6, 
        r.TRIANGLE_STRIP = 5, r.UNPACK_ALIGNMENT = 3317, r.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443, 
        r.UNPACK_FLIP_Y_WEBGL = 37440, r.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, r.UNSIGNED_BYTE = 5121, 
        r.UNSIGNED_INT = 5125, r.UNSIGNED_SHORT = 5123, r.UNSIGNED_SHORT_4_4_4_4 = 32819, 
        r.UNSIGNED_SHORT_5_5_5_1 = 32820, r.UNSIGNED_SHORT_5_6_5 = 33635, r.VALIDATE_STATUS = 35715, 
        r.VENDOR = 7936, r.VERSION = 7938, r.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975, 
        r.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, r.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922, 
        r.VERTEX_ATTRIB_ARRAY_POINTER = 34373, r.VERTEX_ATTRIB_ARRAY_SIZE = 34339, r.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, 
        r.VERTEX_ATTRIB_ARRAY_TYPE = 34341, r.VERTEX_SHADER = 35633, r.VIEWPORT = 2978, 
        r.ZERO = 0;
    }, {} ],
    23: [ function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = new WeakMap(), a = function() {
            function e(t) {
                var n = this, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                if (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), o(this, "binaryType", ""), o(this, "bufferedAmount", 0), o(this, "extensions", ""), 
                o(this, "onclose", null), o(this, "onerror", null), o(this, "onmessage", null), 
                o(this, "onopen", null), o(this, "protocol", ""), o(this, "readyState", 3), "string" != typeof t || !/(^ws:\/\/)|(^wss:\/\/)/.test(t)) throw new TypeError("Failed to construct 'WebSocket': The URL '".concat(t, "' is invalid"));
                this.url = t, this.readyState = e.CONNECTING;
                var a = wx.connectSocket({
                    url: t,
                    protocols: Array.isArray(r) ? r : [ r ],
                    tcpNoDelay: !0
                });
                return i.set(this, a), a.onClose(function(t) {
                    n.readyState = e.CLOSED, "function" == typeof n.onclose && n.onclose(t);
                }), a.onMessage(function(e) {
                    "function" == typeof n.onmessage && n.onmessage(e);
                }), a.onOpen(function() {
                    n.readyState = e.OPEN, "function" == typeof n.onopen && n.onopen();
                }), a.onError(function(e) {
                    "function" == typeof n.onerror && n.onerror(new Error(e.errMsg));
                }), this;
            }
            return function(e, t, n) {
                t && r(e.prototype, t);
            }(e, [ {
                key: "close",
                value: function(t, n) {
                    this.readyState = e.CLOSING, i.get(this).close({
                        code: t,
                        reason: n
                    });
                }
            }, {
                key: "send",
                value: function(e) {
                    if (!("string" == typeof e || e instanceof ArrayBuffer || ArrayBuffer.isView(e))) throw new TypeError("Failed to send message: The data ".concat(e, " is invalid"));
                    i.get(this).send({
                        data: e
                    });
                }
            } ]), e;
        }();
        o(n.default = a, "CONNECTING", 0), o(a, "OPEN", 1), o(a, "CLOSING", 2), o(a, "CLOSED", 3);
    }, {} ],
    24: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.ontouchend = n.ontouchmove = n.ontouchstart = n.performance = n.screen = n.devicePixelRatio = n.innerHeight = n.innerWidth = void 0;
        var r = wx.getSystemInfoSync(), o = r.screenWidth, i = r.screenHeight, a = r.devicePixelRatio;
        n.devicePixelRatio = a;
        var u = o, c = i, l = {
            width: o,
            height: i,
            availWidth: n.innerWidth = u,
            availHeight: n.innerHeight = c,
            availLeft: 0,
            availTop: 0
        };
        n.screen = l;
        var s = {
            now: Date.now
        };
        n.performance = s, n.ontouchstart = null, n.ontouchmove = null, n.ontouchend = null;
    }, {} ],
    25: [ function(t, n, r) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
            })(t);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var i, a = (i = t("./EventTarget.js")) && i.__esModule ? i : {
            default: i
        };
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function c(e) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        function l(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function s(e, t) {
            return (s = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var d = new WeakMap(), p = new WeakMap(), E = new WeakMap(), h = new WeakMap(), m = new WeakMap();
        function _(e) {
            if ("function" == typeof this["on".concat(e)]) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                this["on".concat(e)].apply(this, n);
            }
        }
        function T(e) {
            this.readyState = e, _.call(this, "readystatechange");
        }
        var y = function() {
            function e() {
                var t;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), f(l(t = function(e, t) {
                    return !t || "object" !== o(t) && "function" != typeof t ? l(e) : t;
                }(this, c(e).call(this))), "timeout", 0), f(l(t), "onabort", null), f(l(t), "onerror", null), 
                f(l(t), "onload", null), f(l(t), "onloadstart", null), f(l(t), "onprogress", null), 
                f(l(t), "ontimeout", null), f(l(t), "onloadend", null), f(l(t), "onreadystatechange", null), 
                f(l(t), "readyState", 0), f(l(t), "response", null), f(l(t), "responseText", null), 
                f(l(t), "responseType", ""), f(l(t), "responseXML", null), f(l(t), "status", 0), 
                f(l(t), "statusText", ""), f(l(t), "upload", {}), f(l(t), "withCredentials", !1), 
                E.set(l(t), {
                    "content-type": "application/x-www-form-urlencoded"
                }), h.set(l(t), {}), t;
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && s(e, t);
            }(e, a.default), function(e, t, n) {
                t && u(e.prototype, t);
            }(e, [ {
                key: "abort",
                value: function() {
                    var e = m.get(this);
                    e && e.abort();
                }
            }, {
                key: "getAllResponseHeaders",
                value: function() {
                    var e = h.get(this);
                    return Object.keys(e).map(function(t) {
                        return "".concat(t, ": ").concat(e[t]);
                    }).join("\n");
                }
            }, {
                key: "getResponseHeader",
                value: function(e) {
                    return h.get(this)[e];
                }
            }, {
                key: "open",
                value: function(t, n) {
                    p.set(this, t), d.set(this, n), T.call(this, e.OPENED);
                }
            }, {
                key: "overrideMimeType",
                value: function() {}
            }, {
                key: "send",
                value: function(t) {
                    var n = this, r = 0 < arguments.length && void 0 !== t ? t : "";
                    if (this.readyState !== e.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
                    var o = wx.request({
                        data: r,
                        url: d.get(this),
                        method: p.get(this),
                        header: E.get(this),
                        dataType: "other",
                        responseType: "arraybuffer" === this.responseType ? "arraybuffer" : "text",
                        timeout: this.timeout || void 0,
                        success: function(t) {
                            var r = t.data, o = t.statusCode, i = t.header;
                            switch (n.status = o, h.set(n, i), _.call(n, "loadstart"), T.call(n, e.HEADERS_RECEIVED), 
                            T.call(n, e.LOADING), n.responseType) {
                              case "json":
                                n.responseText = r;
                                try {
                                    n.response = JSON.parse(r);
                                } catch (t) {
                                    n.response = null;
                                }
                                break;

                              case "":
                              case "text":
                                n.responseText = n.response = r;
                                break;

                              case "arraybuffer":
                                n.response = r, n.responseText = "";
                                for (var a = new Uint8Array(r), u = a.byteLength, c = 0; c < u; c++) n.responseText += String.fromCharCode(a[c]);
                                break;

                              default:
                                n.response = null;
                            }
                            T.call(n, e.DONE), _.call(n, "load"), _.call(n, "loadend");
                        },
                        fail: function(e) {
                            var t = e.errMsg;
                            -1 !== t.indexOf("abort") ? _.call(n, "abort") : -1 !== t.indexOf("timeout") ? _.call(n, "timeout") : _.call(n, "error", t), 
                            _.call(n, "loadend");
                        }
                    });
                    m.set(this, o);
                }
            }, {
                key: "setRequestHeader",
                value: function(e, t) {
                    var n = E.get(this);
                    n[e] = t, E.set(this, n);
                }
            }, {
                key: "addEventListener",
                value: function(e, t) {
                    if ("function" == typeof t) {
                        var n = this;
                        this["on" + e] = function(e) {
                            t.call(n, e);
                        };
                    }
                }
            } ]), e;
        }();
        f(r.default = y, "UNSEND", 0), f(y, "OPENED", 1), f(y, "HEADERS_RECEIVED", 2), f(y, "LOADING", 3), 
        f(y, "DONE", 4);
    }, {
        "./EventTarget.js": 11
    } ],
    26: [ function(t, n, r) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
            })(t);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var i = function(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== o(e) && "function" != typeof e) return {
                default: e
            };
            var t = function() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return function() {
                    return e;
                }, e;
            }();
            if (t && t.has(e)) return t.get(e);
            var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i];
            }
            return n.default = e, t && t.set(e, n), n;
        }(t("./window")), a = f(t("./HTMLElement")), u = f(t("./HTMLVideoElement")), c = f(t("./Image")), l = f(t("./Audio")), s = f(t("./Canvas"));
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        t("./EventIniter/index.js");
        var d = {}, p = {
            readyState: "complete",
            visibilityState: "visible",
            documentElement: i,
            hidden: !1,
            style: {},
            location: i.location,
            ontouchstart: null,
            ontouchmove: null,
            ontouchend: null,
            head: new a.default("head"),
            body: new a.default("body"),
            createElement: function(e) {
                return "canvas" === e ? new s.default() : "audio" === e ? new l.default() : "img" === e ? new c.default() : "video" === e ? new u.default() : new a.default(e);
            },
            createElementNS: function(e, t) {
                return this.createElement(t);
            },
            getElementById: function(e) {
                return e === i.canvas.id ? i.canvas : null;
            },
            getElementsByTagName: function(e) {
                return "head" === e ? [ p.head ] : "body" === e ? [ p.body ] : "canvas" === e ? [ i.canvas ] : [];
            },
            getElementsByName: function(e) {
                return "head" === e ? [ p.head ] : "body" === e ? [ p.body ] : "canvas" === e ? [ i.canvas ] : [];
            },
            querySelector: function(e) {
                return "head" === e ? p.head : "body" === e ? p.body : "canvas" === e || e === "#".concat(i.canvas.id) ? i.canvas : null;
            },
            querySelectorAll: function(e) {
                return "head" === e ? [ p.head ] : "body" === e ? [ p.body ] : "canvas" === e ? [ i.canvas ] : [];
            },
            addEventListener: function(e, t) {
                d[e] || (d[e] = []), d[e].push(t);
            },
            removeEventListener: function(e, t) {
                var n = d[e];
                if (n && 0 < n.length) for (var r = n.length; r--; ) if (n[r] === t) {
                    n.splice(r, 1);
                    break;
                }
            },
            dispatchEvent: function(e) {
                var t = d[e.type];
                if (t) for (var n = 0; n < t.length; n++) t[n](e);
            }
        }, E = p;
        r.default = E;
    }, {
        "./Audio": 5,
        "./Canvas": 6,
        "./EventIniter/index.js": 10,
        "./HTMLElement": 15,
        "./HTMLVideoElement": 18,
        "./Image": 19,
        "./window": 32
    } ],
    27: [ function(t, n, r) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
            })(t);
        }
        var i, a = function(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== o(e) && "function" != typeof e) return {
                default: e
            };
            var t = function() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap();
                return function() {
                    return e;
                }, e;
            }();
            if (t && t.has(e)) return t.get(e);
            var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
                var a = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i];
            }
            return n.default = e, t && t.set(e, n), n;
        }(t("./window")), u = (i = t("./document")) && i.__esModule ? i : {
            default: i
        };
        var c = GameGlobal;
        GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, function() {
            a.document = u.default, a.addEventListener = function(e, t) {
                a.document.addEventListener(e, t);
            }, a.removeEventListener = function(e, t) {
                a.document.removeEventListener(e, t);
            }, a.dispatchEvent = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                console.log("window.dispatchEvent", e.type, e);
            };
            var e = wx.getSystemInfoSync().platform;
            if ("undefined" == typeof __devtoolssubcontext && "devtools" === e) {
                for (var t in a) {
                    var n = Object.getOwnPropertyDescriptor(c, t);
                    n && !0 !== n.configurable || Object.defineProperty(window, t, {
                        value: a[t]
                    });
                }
                for (var r in a.document) {
                    var o = Object.getOwnPropertyDescriptor(c.document, r);
                    o && !0 !== o.configurable || Object.defineProperty(c.document, r, {
                        value: a.document[r]
                    });
                }
                window.parent = window;
            } else {
                for (var i in a) c[i] = a[i];
                c.window = a, window = c, window.top = window.parent = window;
            }
        }()), c.WebAssembly = c.WXWebAssembly, t("../../../../common/xmldom/dom-parser"), 
        t("../unify");
    }, {
        "../../../../common/xmldom/dom-parser": 1,
        "../unify": 33,
        "./document": 26,
        "./window": 32
    } ],
    28: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = {
            get length() {
                return wx.getStorageInfoSync().keys.length;
            },
            key: function(e) {
                return wx.getStorageInfoSync().keys[e];
            },
            getItem: function(e) {
                return wx.getStorageSync(e);
            },
            setItem: function(e, t) {
                return wx.setStorageSync(e, t);
            },
            removeItem: function(e) {
                wx.removeStorageSync(e);
            },
            clear: function() {
                wx.clearStorageSync();
            }
        };
        n.default = r;
    }, {} ],
    29: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        n.default = {
            href: "game.js",
            protocol: "",
            reload: function() {}
        };
    }, {} ],
    30: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = e("./util/index.js"), o = wx.getSystemInfoSync();
        console.log(o);
        var i = o.system, a = o.platform, u = o.language, c = o.version, l = -1 !== i.toLowerCase().indexOf("android") ? "Android; CPU ".concat(i) : "iPhone; CPU iPhone OS ".concat(i, " like Mac OS X"), s = "Mozilla/5.0 (".concat(l, ") AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/").concat(c, " MiniGame NetType/WIFI Language/").concat(u), f = {
            platform: a,
            language: u,
            appVersion: "5.0 (".concat(l, ") AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"),
            userAgent: s,
            onLine: !0,
            geolocation: {
                getCurrentPosition: r.noop,
                watchPosition: r.noop,
                clearWatch: r.noop
            }
        };
        wx.onNetworkStatusChange && wx.onNetworkStatusChange(function(e) {
            f.onLine = e.isConnected;
        });
        var d = f;
        n.default = d;
    }, {
        "./util/index.js": 31
    } ],
    31: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.noop = function() {};
    }, {} ],
    32: [ function(e, t, n) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = {
            canvas: !0,
            setTimeout: !0,
            setInterval: !0,
            clearTimeout: !0,
            clearInterval: !0,
            requestAnimationFrame: !0,
            cancelAnimationFrame: !0,
            navigator: !0,
            XMLHttpRequest: !0,
            WebSocket: !0,
            Image: !0,
            ImageBitmap: !0,
            Audio: !0,
            FileReader: !0,
            HTMLElement: !0,
            HTMLImageElement: !0,
            HTMLCanvasElement: !0,
            HTMLMediaElement: !0,
            HTMLAudioElement: !0,
            HTMLVideoElement: !0,
            WebGLRenderingContext: !0,
            TouchEvent: !0,
            MouseEvent: !0,
            DeviceMotionEvent: !0,
            localStorage: !0,
            location: !0
        };
        Object.defineProperty(n, "navigator", {
            enumerable: !0,
            get: function() {
                return i.default;
            }
        }), Object.defineProperty(n, "XMLHttpRequest", {
            enumerable: !0,
            get: function() {
                return a.default;
            }
        }), Object.defineProperty(n, "WebSocket", {
            enumerable: !0,
            get: function() {
                return u.default;
            }
        }), Object.defineProperty(n, "Image", {
            enumerable: !0,
            get: function() {
                return c.default;
            }
        }), Object.defineProperty(n, "ImageBitmap", {
            enumerable: !0,
            get: function() {
                return l.default;
            }
        }), Object.defineProperty(n, "Audio", {
            enumerable: !0,
            get: function() {
                return s.default;
            }
        }), Object.defineProperty(n, "FileReader", {
            enumerable: !0,
            get: function() {
                return f.default;
            }
        }), Object.defineProperty(n, "HTMLElement", {
            enumerable: !0,
            get: function() {
                return d.default;
            }
        }), Object.defineProperty(n, "HTMLImageElement", {
            enumerable: !0,
            get: function() {
                return p.default;
            }
        }), Object.defineProperty(n, "HTMLCanvasElement", {
            enumerable: !0,
            get: function() {
                return E.default;
            }
        }), Object.defineProperty(n, "HTMLMediaElement", {
            enumerable: !0,
            get: function() {
                return h.default;
            }
        }), Object.defineProperty(n, "HTMLAudioElement", {
            enumerable: !0,
            get: function() {
                return m.default;
            }
        }), Object.defineProperty(n, "HTMLVideoElement", {
            enumerable: !0,
            get: function() {
                return _.default;
            }
        }), Object.defineProperty(n, "WebGLRenderingContext", {
            enumerable: !0,
            get: function() {
                return T.default;
            }
        }), Object.defineProperty(n, "TouchEvent", {
            enumerable: !0,
            get: function() {
                return y.TouchEvent;
            }
        }), Object.defineProperty(n, "MouseEvent", {
            enumerable: !0,
            get: function() {
                return y.MouseEvent;
            }
        }), Object.defineProperty(n, "DeviceMotionEvent", {
            enumerable: !0,
            get: function() {
                return y.DeviceMotionEvent;
            }
        }), Object.defineProperty(n, "localStorage", {
            enumerable: !0,
            get: function() {
                return v.default;
            }
        }), Object.defineProperty(n, "location", {
            enumerable: !0,
            get: function() {
                return b.default;
            }
        }), n.cancelAnimationFrame = n.requestAnimationFrame = n.clearInterval = n.clearTimeout = n.setInterval = n.setTimeout = n.canvas = void 0;
        var o = N(e("./Canvas")), i = N(e("./navigator")), a = N(e("./XMLHttpRequest")), u = N(e("./WebSocket")), c = N(e("./Image")), l = N(e("./ImageBitmap")), s = N(e("./Audio")), f = N(e("./FileReader")), d = N(e("./HTMLElement")), p = N(e("./HTMLImageElement")), E = N(e("./HTMLCanvasElement")), h = N(e("./HTMLMediaElement")), m = N(e("./HTMLAudioElement")), _ = N(e("./HTMLVideoElement")), T = N(e("./WebGLRenderingContext")), y = e("./EventIniter/index.js"), v = N(e("./localStorage")), b = N(e("./location")), g = e("./WindowProperties");
        function N(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.keys(g).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || Object.defineProperty(n, e, {
                enumerable: !0,
                get: function() {
                    return g[e];
                }
            }));
        }), GameGlobal.screencanvas = GameGlobal.screencanvas || new o.default();
        var A = GameGlobal.screencanvas;
        n.canvas = A;
        var w = GameGlobal, R = w.setTimeout, O = w.setInterval, S = w.clearTimeout, I = w.clearInterval, M = w.requestAnimationFrame, C = w.cancelAnimationFrame;
        n.cancelAnimationFrame = C, n.requestAnimationFrame = M, n.clearInterval = I, n.clearTimeout = S, 
        n.setInterval = O, n.setTimeout = R;
    }, {
        "./Audio": 5,
        "./Canvas": 6,
        "./EventIniter/index.js": 10,
        "./FileReader": 12,
        "./HTMLAudioElement": 13,
        "./HTMLCanvasElement": 14,
        "./HTMLElement": 15,
        "./HTMLImageElement": 16,
        "./HTMLMediaElement": 17,
        "./HTMLVideoElement": 18,
        "./Image": 19,
        "./ImageBitmap": 20,
        "./WebGLRenderingContext": 22,
        "./WebSocket": 23,
        "./WindowProperties": 24,
        "./XMLHttpRequest": 25,
        "./localStorage": 28,
        "./location": 29,
        "./navigator": 30
    } ],
    33: [ function(e, t, n) {
        var r = e("./utils");
        if (window.__globalAdapter = window.__globalAdapter || {}, window.__globalAdapter) {
            var o = window.__globalAdapter, i = wx.getSystemInfoSync(), a = i.windowWidth, u = i.windowHeight < a;
            o.isSubContext = void 0 === wx.getOpenDataContext, o.isDevTool = "devtools" === i.platform, 
            r.cloneMethod(o, wx, "getSystemInfoSync"), r.cloneMethod(o, wx, "onTouchStart"), 
            r.cloneMethod(o, wx, "onTouchMove"), r.cloneMethod(o, wx, "onTouchEnd"), r.cloneMethod(o, wx, "onTouchCancel"), 
            r.cloneMethod(o, wx, "createInnerAudioContext"), r.cloneMethod(o, wx, "onAudioInterruptionEnd"), 
            r.cloneMethod(o, wx, "onAudioInterruptionBegin"), r.cloneMethod(o, wx, "createVideo"), 
            r.cloneMethod(o, wx, "setPreferredFramesPerSecond"), r.cloneMethod(o, wx, "showKeyboard"), 
            r.cloneMethod(o, wx, "hideKeyboard"), r.cloneMethod(o, wx, "updateKeyboard"), r.cloneMethod(o, wx, "onKeyboardInput"), 
            r.cloneMethod(o, wx, "onKeyboardConfirm"), r.cloneMethod(o, wx, "onKeyboardComplete"), 
            r.cloneMethod(o, wx, "offKeyboardInput"), r.cloneMethod(o, wx, "offKeyboardConfirm"), 
            r.cloneMethod(o, wx, "offKeyboardComplete"), r.cloneMethod(o, wx, "getOpenDataContext"), 
            r.cloneMethod(o, wx, "onMessage"), r.cloneMethod(o, wx, "loadSubpackage"), r.cloneMethod(o, wx, "getSharedCanvas"), 
            r.cloneMethod(o, wx, "loadFont"), r.cloneMethod(o, wx, "onShow"), r.cloneMethod(o, wx, "onHide"), 
            r.cloneMethod(o, wx, "onError"), r.cloneMethod(o, wx, "offError");
            var c = !1, l = 1;
            wx.onDeviceOrientationChange && wx.onDeviceOrientationChange(function(e) {
                "landscape" === e.value ? l = 1 : "landscapeReverse" === e.value && (l = -1);
            }), Object.assign(o, {
                startAccelerometer: function(e) {
                    c ? wx.startAccelerometer && wx.startAccelerometer({
                        fail: function(e) {
                            console.error("start accelerometer failed", e);
                        }
                    }) : (c = !0, wx.onAccelerometerChange && wx.onAccelerometerChange(function(t) {
                        var n = {}, r = t.x, o = t.y;
                        if (u) {
                            var i = r;
                            r = -o, o = i;
                        }
                        n.x = r * l, n.y = o * l, n.z = t.z, e && e(n);
                    }));
                },
                stopAccelerometer: function() {
                    wx.stopAccelerometer && wx.stopAccelerometer({
                        fail: function(e) {
                            console.error("stop accelerometer failed", e);
                        }
                    });
                }
            });
        }
    }, {
        "./utils": 34
    } ],
    34: [ function(e, t, n) {
        t.exports = {
            cloneMethod: function(e, t, n, r) {
                t[n] && (e[r = r || n] = t[n].bind(t));
            }
        };
    }, {} ]
}, {}, [ 27 ]);