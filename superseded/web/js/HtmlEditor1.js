!function(a) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery)
}(function(a) {
    "function" !== typeof Array.prototype.reduce && (Array.prototype.reduce = function(a, b) {
        var c, d, e = this.length >>> 0, f = !1;
        for (1 < arguments.length && (d = b, f = !0), c = 0; e > c; ++c)
            this.hasOwnProperty(c) && (f ? d = a(d, this[c], c, this) : (d = this[c], f = !0));
        if (!f)
            throw new TypeError("Reduce of empty array with no initial value");
        return d
    }), "function" !== typeof Array.prototype.filter && (Array.prototype.filter = function(a) {
        if (void 0 === this || null === this)
            throw new TypeError;
        var b = Object(this), c = b.length >>> 0;
        if ("function" !== typeof a)
            throw new TypeError;
        for (var d = [], e = arguments.length >= 2 ? arguments[1] : void 0, f = 0; c > f; f++)
            if (f in b) {
                var g = b[f];
                a.call(e, g, f, b) && d.push(g)
            }
        return d
    });
    var b, c = "function" === typeof define && define.amd, d = function(b) {
        var c = "Comic Sans MS" === b ? "Courier New" : "Comic Sans MS", d = a("<div>").css({position: "absolute", left: "-9999px", top: "-9999px", fontSize: "200px"}).text("mmmmmmmmmwwwwwww").appendTo(document.body), e = d.css("fontFamily", c).width(), f = d.css("fontFamily", b + "," + c).width();
        return d.remove(), e !== f
    }, e = {isMac: navigator.appVersion.indexOf("Mac") > -1, isMSIE: navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("Trident") > -1, isFF: navigator.userAgent.indexOf("Firefox") > -1, jqueryVersion: parseFloat(a.fn.jquery), isSupportAmd: c, hasCodeMirror: c ? require.specified("CodeMirror") : !!window.CodeMirror, isFontInstalled: d, isW3CRangeSupport: !!document.createRange}, f = function() {
        var b = function(a) {
            return function(b) {
                return a === b
            }
        }, c = function(a, b) {
            return a === b
        }, d = function(a) {
            return function(b, c) {
                return b[a] === c[a]
            }
        }, e = function() {
            return!0
        }, f = function() {
            return!1
        }, g = function(a) {
            return function() {
                return!a.apply(a, arguments)
            }
        }, h = function(a, b) {
            return function(c) {
                return a(c) && b(c)
            }
        }, i = function(a) {
            return a
        }, j = 0, k = function(a) {
            var b = ++j + "";
            return a ? a + b : b
        }, l = function(b) {
            var c = a(document);
            return{top: b.top + c.scrollTop(), left: b.left + c.scrollLeft(), width: b.right - b.left, height: b.bottom - b.top}
        }, m = function(a) {
            var b = {};
            for (var c in a)
                a.hasOwnProperty(c) && (b[a[c]] = c);
            return b
        };
        return{eq: b, eq2: c, peq2: d, ok: e, fail: f, self: i, not: g, and: h, uniqueId: k, rect2bnd: l, invertObject: m}
    }(), g = function() {
        var b = function(a) {
            return a[0]
        }, c = function(a) {
            return a[a.length - 1]
        }, d = function(a) {
            return a.slice(0, a.length - 1)
        }, e = function(a) {
            return a.slice(1)
        }, g = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                if (b(e))
                    return e
            }
        }, h = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (!b(a[c]))
                    return!1;
            return!0
        }, i = function(b, c) {
            return-1 !== a.inArray(c, b)
        }, j = function(a, b) {
            return b = b || f.self, a.reduce(function(a, c) {
                return a + b(c)
            }, 0)
        }, k = function(a) {
            for (var b = [], c = -1, d = a.length; ++c < d; )
                b[c] = a[c];
            return b
        }, l = function(a, d) {
            if (!a.length)
                return[];
            var f = e(a);
            return f.reduce(function(a, b) {
                var e = c(a);
                return d(c(e), b) ? e[e.length] = b : a[a.length] = [b], a
            }, [[b(a)]])
        }, m = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++)
                a[c] && b.push(a[c]);
            return b
        }, n = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++)
                i(b, a[c]) || b.push(a[c]);
            return b
        };
        return{head: b, last: c, initial: d, tail: e, find: g, contains: i, all: h, sum: j, from: k, clusterBy: l, compact: m, unique: n}
    }(), h = String.fromCharCode(160), i = "﻿", j = function() {
        var b = function(b) {
            return b && a(b).hasClass("note-editable")
        }, c = function(b) {
            return b && a(b).hasClass("note-control-sizing")
        }, d = function(b) {
            var c;
            if (b.hasClass("note-air-editor")) {
                var d = g.last(b.attr("id").split("-"));
                return c = function(b) {
                    return function() {
                        return a(b + d)
                    }
                }, {editor: function() {
                        return b
                    }, editable: function() {
                        return b
                    }, popover: c("#note-popover-"), handle: c("#note-handle-"), dialog: c("#note-dialog-")}
            }
            return c = function(a) {
                return function() {
                    return b.find(a)
                }
            }, {editor: function() {
                    return b
                }, dropzone: c(".note-dropzone"), toolbar: c(".note-toolbar"), editable: c(".note-editable"), codable: c(".note-codable"), statusbar: c(".note-statusbar"), popover: c(".note-popover"), handle: c(".note-handle"), dialog: c(".note-dialog")}
        }, k = function(a) {
            return a = a.toUpperCase(), function(b) {
                return b && b.nodeName.toUpperCase() === a
            }
        }, l = function(a) {
            return a && 3 === a.nodeType
        }, m = function(a) {
            return a && /^BR|^IMG|^HR/.test(a.nodeName.toUpperCase())
        }, n = function(a) {
            return b(a) ? !1 : a && /^DIV|^P|^LI|^H[1-7]/.test(a.nodeName.toUpperCase())
        }, o = k("LI"), p = function(a) {
            return n(a) && !o(a)
        }, q = function(a) {
            return!u(a) && !r(a) && !n(a)
        }, r = function(a) {
            return a && /^UL|^OL/.test(a.nodeName.toUpperCase())
        }, s = function(a) {
            return a && /^TD|^TH/.test(a.nodeName.toUpperCase())
        }, t = k("BLOCKQUOTE"), u = function(a) {
            return s(a) || t(a) || b(a)
        }, v = k("A"), w = function(a) {
            return q(a) && !!D(a, n)
        }, x = function(a) {
            return q(a) && !D(a, n)
        }, y = k("BODY"), z = e.isMSIE ? "&nbsp;" : "<br>", A = function(a) {
            return l(a) ? a.nodeValue.length : a.childNodes.length
        }, B = function(a) {
            var b = A(a);
            return 0 === b ? !0 : j.isText(a) || 1 !== b || a.innerHTML !== z ? !1 : !0
        }, C = function(a) {
            m(a) || A(a) || (a.innerHTML = z)
        }, D = function(a, c) {
            for (; a; ) {
                if (c(a))
                    return a;
                if (b(a))
                    break;
                a = a.parentNode
            }
            return null
        }, E = function(a, c) {
            c = c || f.fail;
            var d = [];
            return D(a, function(a) {
                return b(a) || d.push(a), c(a)
            }), d
        }, F = function(a, b) {
            var c = E(a);
            return g.last(c.filter(b))
        }, G = function(b, c) {
            for (var d = E(b), e = c; e; e = e.parentNode)
                if (a.inArray(e, d) > -1)
                    return e;
            return null
        }, H = function(a, b) {
            b = b || f.fail;
            for (var c = []; a && !b(a); )
                c.push(a), a = a.previousSibling;
            return c
        }, I = function(a, b) {
            b = b || f.fail;
            for (var c = []; a && !b(a); )
                c.push(a), a = a.nextSibling;
            return c
        }, J = function(a, b) {
            var c = [];
            return b = b || f.ok, function d(e) {
                a !== e && b(e) && c.push(e);
                for (var f = 0, g = e.childNodes.length; g > f; f++)
                    d(e.childNodes[f])
            }(a), c
        }, K = function(b, c) {
            var d = b.parentNode, e = a("<" + c + ">")[0];
            return d.insertBefore(e, b), e.appendChild(b), e
        }, L = function(a, b) {
            var c = b.nextSibling, d = b.parentNode;
            return c ? d.insertBefore(a, c) : d.appendChild(a), a
        }, M = function(b, c) {
            return a.each(c, function(a, c) {
                b.appendChild(c)
            }), b
        }, N = function(a) {
            return 0 === a.offset
        }, O = function(a) {
            return a.offset === A(a.node)
        }, P = function(a) {
            return N(a) || O(a)
        }, Q = function(a, b) {
            for (; a && a !== b; ) {
                if (0 !== S(a))
                    return!1;
                a = a.parentNode
            }
            return!0
        }, R = function(a, b) {
            for (; a && a !== b; ) {
                if (S(a) !== A(a.parentNode) - 1)
                    return!1;
                a = a.parentNode
            }
            return!0
        }, S = function(a) {
            for (var b = 0; a = a.previousSibling; )
                b += 1;
            return b
        }, T = function(a) {
            return!!(a && a.childNodes && a.childNodes.length)
        }, U = function(a, c) {
            var d, e;
            if (0 === a.offset) {
                if (b(a.node))
                    return null;
                d = a.node.parentNode, e = S(a.node)
            } else
                T(a.node) ? (d = a.node.childNodes[a.offset - 1], e = A(d)) : (d = a.node, e = c ? 0 : a.offset - 1);
            return{node: d, offset: e}
        }, V = function(a, c) {
            var d, e;
            if (A(a.node) === a.offset) {
                if (b(a.node))
                    return null;
                d = a.node.parentNode, e = S(a.node) + 1
            } else
                T(a.node) ? (d = a.node.childNodes[a.offset], e = 0) : (d = a.node, e = c ? A(a.node) : a.offset + 1);
            return{node: d, offset: e}
        }, W = function(a, b) {
            return a.node === b.node && a.offset === b.offset
        }, X = function(a) {
            if (l(a.node) || !T(a.node) || B(a.node))
                return!0;
            var b = a.node.childNodes[a.offset - 1], c = a.node.childNodes[a.offset];
            return b && !m(b) || c && !m(c) ? !1 : !0
        }, Y = function(a, b) {
            for (; a; ) {
                if (b(a))
                    return a;
                a = U(a)
            }
            return null
        }, Z = function(a, b) {
            for (; a; ) {
                if (b(a))
                    return a;
                a = V(a)
            }
            return null
        }, $ = function(a, b, c, d) {
            for (var e = a; e && (c(e), !W(e, b)); ) {
                var f = d && a.node !== e.node && b.node !== e.node;
                e = V(e, f)
            }
        }, _ = function(b, c) {
            var d = E(c, f.eq(b));
            return a.map(d, S).reverse()
        }, ab = function(a, b) {
            for (var c = a, d = 0, e = b.length; e > d; d++)
                c = c.childNodes.length <= b[d] ? c.childNodes[c.childNodes.length - 1] : c.childNodes[b[d]];
            return c
        }, bb = function(a, b) {
            if (l(a.node))
                return N(a) ? a.node : O(a) ? a.node.nextSibling : a.node.splitText(a.offset);
            var c = a.node.childNodes[a.offset], d = L(a.node.cloneNode(!1), a.node);
            return M(d, I(c)), b || (C(a.node), C(d)), d
        }, cb = function(a, b, c) {
            var d = E(b.node, f.eq(a));
            return d.length ? 1 === d.length ? bb(b, c) : d.reduce(function(a, d) {
                var e = L(d.cloneNode(!1), d);
                return a === b.node && (a = bb(b, c)), M(e, I(a)), c || (C(d), C(e)), e
            }) : null
        }, db = function(a) {
            return document.createElement(a)
        }, eb = function(a) {
            return document.createTextNode(a)
        }, fb = function(a, b) {
            if (a && a.parentNode) {
                if (a.removeNode)
                    return a.removeNode(b);
                var c = a.parentNode;
                if (!b) {
                    var d, e, f = [];
                    for (d = 0, e = a.childNodes.length; e > d; d++)
                        f.push(a.childNodes[d]);
                    for (d = 0, e = f.length; e > d; d++)
                        c.insertBefore(f[d], a)
                }
                c.removeChild(a)
            }
        }, gb = function(a, c) {
            for (; a && !b(a) && c(a); ) {
                var d = a.parentNode;
                fb(a), a = d
            }
        }, hb = function(a, b) {
            if (a.nodeName.toUpperCase() === b.toUpperCase())
                return a;
            var c = db(b);
            return a.style.cssText && (c.style.cssText = a.style.cssText), M(c, g.from(a.childNodes)), L(c, a), fb(a), c
        }, ib = k("TEXTAREA"), jb = function(b, c) {
            var d = ib(b[0]) ? b.val() : b.html();
            if (c) {
                var e = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
                d = d.replace(e, function(a, b, c) {
                    c = c.toUpperCase();
                    var d = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(c) && !!b, e = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(c);
                    return a + (d || e ? "\n" : "")
                }), d = a.trim(d)
            }
            return d
        }, kb = function(a) {
            var b = a.val();
            return b.replace(/[\n\r]/g, "")
        };
        return{NBSP_CHAR: h, ZERO_WIDTH_NBSP_CHAR: i, blank: z, emptyPara: "<p>" + z + "</p>", isEditable: b, isControlSizing: c, buildLayoutInfo: d, isText: l, isPara: n, isPurePara: p, isInline: q, isBodyInline: x, isBody: y, isParaInline: w, isList: r, isTable: k("TABLE"), isCell: s, isBlockquote: t, isBodyContainer: u, isAnchor: v, isDiv: k("DIV"), isLi: o, isSpan: k("SPAN"), isB: k("B"), isU: k("U"), isS: k("S"), isI: k("I"), isImg: k("IMG"), isTextarea: ib, isEmpty: B, isEmptyAnchor: f.and(v, B), nodeLength: A, isLeftEdgePoint: N, isRightEdgePoint: O, isEdgePoint: P, isLeftEdgeOf: Q, isRightEdgeOf: R, prevPoint: U, nextPoint: V, isSamePoint: W, isVisiblePoint: X, prevPointUntil: Y, nextPointUntil: Z, walkPoint: $, ancestor: D, listAncestor: E, lastAncestor: F, listNext: I, listPrev: H, listDescendant: J, commonAncestor: G, wrap: K, insertAfter: L, appendChildNodes: M, position: S, hasChildren: T, makeOffsetPath: _, fromOffsetPath: ab, splitTree: cb, create: db, createText: eb, remove: fb, removeWhile: gb, replace: hb, html: jb, value: kb}
    }(), k = {version: "0.5.10", options: {width: null, height: null, minHeight: null, maxHeight: null, focus: !1, tabsize: 4, styleWithSpan: !0, disableLinkTarget: !1, disableDragAndDrop: !1, disableResizeEditor: !1, codemirror: {mode: "text/html", htmlMode: !0, lineNumbers: !0}, lang: "en-US", direction: null, toolbar: [["style", ["style"]], ["font", ["bold", "italic", "underline", "superscript", "subscript", "strikethrough", "clear"]], ["fontname", ["fontname"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["height", ["height"]], ["table", ["table"]], ["insert", ["link", "picture", "video", "hr"]], ["view", ["fullscreen", "codeview"]], ["help", ["help"]]], airMode: !1, airPopover: [["color", ["color"]], ["font", ["bold", "underline", "clear"]], ["para", ["ul", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture"]]], styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], defaultFontName: "Helvetica Neue", fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"], colors: [["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"], ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"], ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"], ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"], ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"], ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"], ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"], ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]], fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"], lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"], insertTableMaxSize: {col: 10, row: 10}, oninit: null, onfocus: null, onblur: null, onenter: null, onkeyup: null, onkeydown: null, onImageUpload: null, onImageUploadError: null, onToolbarClick: null, onCreateLink: function(a) {
                return-1 !== a.indexOf("@") && -1 === a.indexOf(":") ? a = "mailto:" + a : -1 === a.indexOf("://") && (a = "http://" + a), a
            }, keyMap: {pc: {ENTER: "insertParagraph", "CTRL+Z": "undo", "CTRL+Y": "redo", TAB: "tab", "SHIFT+TAB": "untab", "CTRL+B": "bold", "CTRL+I": "italic", "CTRL+U": "underline", "CTRL+SHIFT+S": "strikethrough", "CTRL+BACKSLASH": "removeFormat", "CTRL+SHIFT+L": "justifyLeft", "CTRL+SHIFT+E": "justifyCenter", "CTRL+SHIFT+R": "justifyRight", "CTRL+SHIFT+J": "justifyFull", "CTRL+SHIFT+NUM7": "insertUnorderedList", "CTRL+SHIFT+NUM8": "insertOrderedList", "CTRL+LEFTBRACKET": "outdent", "CTRL+RIGHTBRACKET": "indent", "CTRL+NUM0": "formatPara", "CTRL+NUM1": "formatH1", "CTRL+NUM2": "formatH2", "CTRL+NUM3": "formatH3", "CTRL+NUM4": "formatH4", "CTRL+NUM5": "formatH5", "CTRL+NUM6": "formatH6", "CTRL+ENTER": "insertHorizontalRule", "CTRL+K": "showLinkDialog"}, mac: {ENTER: "insertParagraph", "CMD+Z": "undo", "CMD+SHIFT+Z": "redo", TAB: "tab", "SHIFT+TAB": "untab", "CMD+B": "bold", "CMD+I": "italic", "CMD+U": "underline", "CMD+SHIFT+S": "strikethrough", "CMD+BACKSLASH": "removeFormat", "CMD+SHIFT+L": "justifyLeft", "CMD+SHIFT+E": "justifyCenter", "CMD+SHIFT+R": "justifyRight", "CMD+SHIFT+J": "justifyFull", "CMD+SHIFT+NUM7": "insertUnorderedList", "CMD+SHIFT+NUM8": "insertOrderedList", "CMD+LEFTBRACKET": "outdent", "CMD+RIGHTBRACKET": "indent", "CMD+NUM0": "formatPara", "CMD+NUM1": "formatH1", "CMD+NUM2": "formatH2", "CMD+NUM3": "formatH3", "CMD+NUM4": "formatH4", "CMD+NUM5": "formatH5", "CMD+NUM6": "formatH6", "CMD+ENTER": "insertHorizontalRule", "CMD+K": "showLinkDialog"}}}, lang: {"en-US": {font: {bold: "Bold", italic: "Italic", underline: "Underline", strikethrough: "Strikethrough", subscript: "Subscript", superscript: "Superscript", clear: "Remove Font Style", height: "Line Height", name: "Font Family", size: "Font Size"}, image: {image: "Picture", insert: "Insert Image", resizeFull: "Resize Full", resizeHalf: "Resize Half", resizeQuarter: "Resize Quarter", floatLeft: "Float Left", floatRight: "Float Right", floatNone: "Float None", shapeRounded: "Shape: Rounded", shapeCircle: "Shape: Circle", shapeThumbnail: "Shape: Thumbnail", shapeNone: "Shape: None", dragImageHere: "Drag an image here", selectFromFiles: "Select from files", url: "Image URL", remove: "Remove Image"}, link: {link: "Link", insert: "Insert Link", unlink: "Unlink", edit: "Edit", textToDisplay: "Text to display", url: "To what URL should this link go?", openInNewWindow: "Open in new window"}, video: {video: "Video", videoLink: "Video Link", insert: "Insert Video", url: "Video URL?", providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"}, table: {table: "Table"}, hr: {insert: "Insert Horizontal Rule"}, style: {style: "Style", normal: "Normal", blockquote: "Quote", pre: "Code", h1: "Header 1", h2: "Header 2", h3: "Header 3", h4: "Header 4", h5: "Header 5", h6: "Header 6"}, lists: {unordered: "Unordered list", ordered: "Ordered list"}, options: {help: "Help", fullscreen: "Full Screen", codeview: "Code View"}, paragraph: {paragraph: "Paragraph", outdent: "Outdent", indent: "Indent", left: "Align left", center: "Align center", right: "Align right", justify: "Justify full"}, color: {recent: "Recent Color", more: "More Color", background: "Background Color", foreground: "Foreground Color", transparent: "Transparent", setTransparent: "Set transparent", reset: "Reset", resetToDefault: "Reset to default"}, shortcut: {shortcuts: "Keyboard shortcuts", close: "Close", textFormatting: "Text formatting", action: "Action", paragraphFormatting: "Paragraph formatting", documentStyle: "Document Style"}, history: {undo: "Undo", redo: "Redo"}}}}, l = function() {
        var b = function(b) {
            return a.Deferred(function(c) {
                a.extend(new FileReader, {onload: function(a) {
                        var b = a.target.result;
                        c.resolve(b)
                    }, onerror: function() {
                        c.reject(this)
                    }}).readAsDataURL(b)
            }).promise()
        }, c = function(b, c) {
            return a.Deferred(function(d) {
                a("<img>").one("load", function() {
                    d.resolve(a(this))
                }).one("error abort", function() {
                    d.reject(a(this))
                }).css({display: "none"}).appendTo(document.body).attr("src", b).attr("data-filename", c)
            }).promise()
        };
        return{readFileAsDataURL: b, createImage: c}
    }(), m = {isEdit: function(a) {
            return g.contains([8, 9, 13, 32], a)
        }, nameFromCode: {8: "BACKSPACE", 9: "TAB", 13: "ENTER", 32: "SPACE", 48: "NUM0", 49: "NUM1", 50: "NUM2", 51: "NUM3", 52: "NUM4", 53: "NUM5", 54: "NUM6", 55: "NUM7", 56: "NUM8", 66: "B", 69: "E", 73: "I", 74: "J", 75: "K", 76: "L", 82: "R", 83: "S", 85: "U", 89: "Y", 90: "Z", 191: "SLASH", 219: "LEFTBRACKET", 220: "BACKSLASH", 221: "RIGHTBRACKET"}}, n = function() {
        var b = function(b, c) {
            if (e.jqueryVersion < 1.9) {
                var d = {};
                return a.each(c, function(a, c) {
                    d[c] = b.css(c)
                }), d
            }
            return b.css.call(b, c)
        };
        this.stylePara = function(b, c) {
            a.each(b.nodes(j.isPara, {includeAncestor: !0}), function(b, d) {
                a(d).css(c)
            })
        }, this.current = function(c, d) {
            var e = a(j.isText(c.sc) ? c.sc.parentNode : c.sc), f = ["font-family", "font-size", "text-align", "list-style-type", "line-height"], g = b(e, f) || {};
            if (g["font-size"] = parseInt(g["font-size"], 10), g["font-bold"] = document.queryCommandState("bold") ? "bold" : "normal", g["font-italic"] = document.queryCommandState("italic") ? "italic" : "normal", g["font-underline"] = document.queryCommandState("underline") ? "underline" : "normal", g["font-strikethrough"] = document.queryCommandState("strikeThrough") ? "strikethrough" : "normal", g["font-superscript"] = document.queryCommandState("superscript") ? "superscript" : "normal", g["font-subscript"] = document.queryCommandState("subscript") ? "subscript" : "normal", c.isOnList()) {
                var h = ["circle", "disc", "disc-leading-zero", "square"], i = a.inArray(g["list-style-type"], h) > -1;
                g["list-style"] = i ? "unordered" : "ordered"
            } else
                g["list-style"] = "none";
            var k = j.ancestor(c.sc, j.isPara);
            if (k && k.style["line-height"])
                g["line-height"] = k.style.lineHeight;
            else {
                var l = parseInt(g["line-height"], 10) / parseInt(g["font-size"], 10);
                g["line-height"] = l.toFixed(1)
            }
            return g.image = j.isImg(d) && d, g.anchor = c.isOnAnchor() && j.ancestor(c.sc, j.isAnchor), g.ancestors = j.listAncestor(c.sc, j.isEditable), g.range = c, g
        }
    }, o = function() {
        var b = function(a, b) {
            var c, d, e = a.parentElement(), f = document.body.createTextRange(), h = g.from(e.childNodes);
            for (c = 0; c < h.length; c++)
                if (!j.isText(h[c])) {
                    if (f.moveToElementText(h[c]), f.compareEndPoints("StartToStart", a) >= 0)
                        break;
                    d = h[c]
                }
            if (0 !== c && j.isText(h[c - 1])) {
                var i = document.body.createTextRange(), k = null;
                i.moveToElementText(d || e), i.collapse(!d), k = d ? d.nextSibling : e.firstChild;
                var l = a.duplicate();
                l.setEndPoint("StartToStart", i);
                for (var m = l.text.replace(/[\r\n]/g, "").length; m > k.nodeValue.length && k.nextSibling; )
                    m -= k.nodeValue.length, k = k.nextSibling;
                {
                    k.nodeValue
                }
                b && k.nextSibling && j.isText(k.nextSibling) && m === k.nodeValue.length && (m -= k.nodeValue.length, k = k.nextSibling), e = k, c = m
            }
            return{cont: e, offset: c}
        }, c = function(a) {
            var b = function(a, c) {
                var d, e;
                if (j.isText(a)) {
                    var h = j.listPrev(a, f.not(j.isText)), i = g.last(h).previousSibling;
                    d = i || a.parentNode, c += g.sum(g.tail(h), j.nodeLength), e = !i
                } else {
                    if (d = a.childNodes[c] || a, j.isText(d))
                        return b(d, 0);
                    c = 0, e = !1
                }
                return{node: d, collapseToStart: e, offset: c}
            }, c = document.body.createTextRange(), d = b(a.node, a.offset);
            return c.moveToElementText(d.node), c.collapse(d.collapseToStart), c.moveStart("character", d.offset), c
        }, d = function(b, h, i, k) {
            this.sc = b, this.so = h, this.ec = i, this.eo = k;
            var l = function() {
                if (e.isW3CRangeSupport) {
                    var a = document.createRange();
                    return a.setStart(b, h), a.setEnd(i, k), a
                }
                var d = c({node: b, offset: h});
                return d.setEndPoint("EndToEnd", c({node: i, offset: k})), d
            };
            this.getPoints = function() {
                return{sc: b, so: h, ec: i, eo: k}
            }, this.getStartPoint = function() {
                return{node: b, offset: h}
            }, this.getEndPoint = function() {
                return{node: i, offset: k}
            }, this.select = function() {
                var a = l();
                if (e.isW3CRangeSupport) {
                    var b = document.getSelection();
                    b.rangeCount > 0 && b.removeAllRanges(), b.addRange(a)
                } else
                    a.select()
            }, this.normalize = function() {
                var a = function(a) {
                    return j.isVisiblePoint(a) || (j.isLeftEdgePoint(a) ? a = j.nextPointUntil(a, j.isVisiblePoint) : j.isRightEdgePoint(a) && (a = j.prevPointUntil(a, j.isVisiblePoint))), a
                }, b = a(this.getStartPoint()), c = a(this.getStartPoint());
                return new d(b.node, b.offset, c.node, c.offset)
            }, this.nodes = function(a, b) {
                a = a || f.ok;
                var c = b && b.includeAncestor, d = b && b.fullyContains, e = this.getStartPoint(), h = this.getEndPoint(), i = [], k = [];
                return j.walkPoint(e, h, function(b) {
                    if (!j.isEditable(b.node)) {
                        var e;
                        d ? (j.isLeftEdgePoint(b) && k.push(b.node), j.isRightEdgePoint(b) && g.contains(k, b.node) && (e = b.node)) : e = c ? j.ancestor(b.node, a) : b.node, e && a(e) && i.push(e)
                    }
                }, !0), g.unique(i)
            }, this.commonAncestor = function() {
                return j.commonAncestor(b, i)
            }, this.expand = function(a) {
                var c = j.ancestor(b, a), e = j.ancestor(i, a);
                if (!c && !e)
                    return new d(b, h, i, k);
                var f = this.getPoints();
                return c && (f.sc = c, f.so = 0), e && (f.ec = e, f.eo = j.nodeLength(e)), new d(f.sc, f.so, f.ec, f.eo)
            }, this.collapse = function(a) {
                return a ? new d(b, h, b, h) : new d(i, k, i, k)
            }, this.splitText = function() {
                var a = b === i, c = this.getPoints();
                return j.isText(i) && !j.isEdgePoint(this.getEndPoint()) && i.splitText(k), j.isText(b) && !j.isEdgePoint(this.getStartPoint()) && (c.sc = b.splitText(h), c.so = 0, a && (c.ec = c.sc, c.eo = k - h)), new d(c.sc, c.so, c.ec, c.eo)
            }, this.deleteContents = function() {
                if (this.isCollapsed())
                    return this;
                var b = this.splitText(), c = b.nodes(null, {fullyContains: !0}), e = j.prevPointUntil(b.getStartPoint(), function(a) {
                    return!g.contains(c, a.node)
                }), f = [];
                return a.each(c, function(a, b) {
                    var c = b.parentNode;
                    e.node !== c && 1 === j.nodeLength(c) && f.push(c), j.remove(b, !1)
                }), a.each(f, function(a, b) {
                    j.remove(b, !1)
                }), new d(e.node, e.offset, e.node, e.offset)
            };
            var m = function(a) {
                return function() {
                    var c = j.ancestor(b, a);
                    return!!c && c === j.ancestor(i, a)
                }
            };
            this.isOnEditable = m(j.isEditable), this.isOnList = m(j.isList), this.isOnAnchor = m(j.isAnchor), this.isOnCell = m(j.isCell), this.isLeftEdgeOf = function(a) {
                if (!j.isLeftEdgePoint(this.getStartPoint()))
                    return!1;
                var b = j.ancestor(this.sc, a);
                return b && j.isLeftEdgeOf(this.sc, b)
            }, this.isCollapsed = function() {
                return b === i && h === k
            }, this.wrapBodyInlineWithPara = function() {
                if (j.isBodyContainer(b) && j.isEmpty(b))
                    return b.innerHTML = j.emptyPara, new d(b.firstChild, 0);
                if (!j.isInline(b) || j.isParaInline(b))
                    return this;
                var a = j.listAncestor(b, f.not(j.isInline)), c = g.last(a);
                j.isInline(c) || (c = a[a.length - 2] || b.childNodes[h]);
                var e = j.listPrev(c, j.isParaInline).reverse();
                if (e = e.concat(j.listNext(c.nextSibling, j.isParaInline)), e.length) {
                    var i = j.wrap(g.head(e), "p");
                    j.appendChildNodes(i, g.tail(e))
                }
                return this
            }, this.insertNode = function(a, b) {
                var c, d, e, f = this.wrapBodyInlineWithPara(), h = f.getStartPoint();
                if (b)
                    d = j.isPara(h.node) ? h.node : h.node.parentNode, e = j.isPara(h.node) ? h.node.childNodes[h.offset] : j.splitTree(h.node, h);
                else {
                    var i = j.listAncestor(h.node, j.isBodyContainer), k = g.last(i) || h.node;
                    j.isBodyContainer(k) ? (c = i[i.length - 2], d = k) : (c = k, d = c.parentNode), e = c && j.splitTree(c, h)
                }
                return e ? e.parentNode.insertBefore(a, e) : d.appendChild(a), a
            }, this.toString = function() {
                var a = l();
                return e.isW3CRangeSupport ? a.toString() : a.text
            }, this.bookmark = function(a) {
                return{s: {path: j.makeOffsetPath(a, b), offset: h}, e: {path: j.makeOffsetPath(a, i), offset: k}}
            }, this.getClientRects = function() {
                var a = l();
                return a.getClientRects()
            }
        };
        return{create: function(a, c, f, g) {
                if (arguments.length)
                    2 === arguments.length && (f = a, g = c);
                else if (e.isW3CRangeSupport) {
                    var h = document.getSelection();
                    if (0 === h.rangeCount)
                        return null;
                    if (j.isBody(h.anchorNode))
                        return null;
                    var i = h.getRangeAt(0);
                    a = i.startContainer, c = i.startOffset, f = i.endContainer, g = i.endOffset
                } else {
                    var k = document.selection.createRange(), l = k.duplicate();
                    l.collapse(!1);
                    var m = k;
                    m.collapse(!0);
                    var n = b(m, !0), o = b(l, !1);
                    j.isText(n.node) && j.isLeftEdgePoint(n) && j.isTextNode(o.node) && j.isRightEdgePoint(o) && o.node.nextSibling === n.node && (n = o), a = n.cont, c = n.offset, f = o.cont, g = o.offset
                }
                return new d(a, c, f, g)
            }, createFromNode: function(a) {
                return this.create(a, 0, a, 1)
            }, createFromBookmark: function(a, b) {
                var c = j.fromOffsetPath(a, b.s.path), e = b.s.offset, f = j.fromOffsetPath(a, b.e.path), g = b.e.offset;
                return new d(c, e, f, g)
            }}
    }(), p = function() {
        this.insertTab = function(a, b, c) {
            var d = j.createText(new Array(c + 1).join(j.NBSP_CHAR));
            b = b.deleteContents(), b.insertNode(d, !0), b = o.create(d, c), b.select()
        }, this.insertParagraph = function() {
            var b = o.create();
            b = b.deleteContents(), b = b.wrapBodyInlineWithPara();
            var c, d = j.ancestor(b.sc, j.isPara);
            if (d) {
                c = j.splitTree(d, b.getStartPoint());
                var e = j.listDescendant(d, j.isEmptyAnchor);
                e = e.concat(j.listDescendant(c, j.isEmptyAnchor)), a.each(e, function(a, b) {
                    j.remove(b)
                })
            } else {
                var f = b.sc.childNodes[b.so];
                c = a(j.emptyPara)[0], f ? b.sc.insertBefore(c, f) : b.sc.appendChild(c)
            }
            o.create(c, 0).normalize().select()
        }
    }, q = function() {
        this.tab = function(a, b) {
            var c = j.ancestor(a.commonAncestor(), j.isCell), d = j.ancestor(c, j.isTable), e = j.listDescendant(d, j.isCell), f = g[b ? "prev" : "next"](e, c);
            f && o.create(f, 0).select()
        }, this.createTable = function(b, c) {
            for (var d, e = [], f = 0; b > f; f++)
                e.push("<td>" + j.blank + "</td>");
            d = e.join("");
            for (var g, h = [], i = 0; c > i; i++)
                h.push("<tr>" + d + "</tr>");
            return g = h.join(""), a('<table class="table table-bordered">' + g + "</table>")[0]
        }
    }, r = function() {
        this.insertOrderedList = function() {
            this.toggleList("OL")
        }, this.insertUnorderedList = function() {
            this.toggleList("UL")
        }, this.indent = function() {
            var b = this, c = o.create().wrapBodyInlineWithPara(), d = c.nodes(j.isPara, {includeAncestor: !0}), e = g.clusterBy(d, f.peq2("parentNode"));
            a.each(e, function(c, d) {
                var e = g.head(d);
                j.isLi(e) ? b.wrapList(d, e.parentNode.nodeName) : a.each(d, function(b, c) {
                    a(c).css("marginLeft", function(a, b) {
                        return(parseInt(b, 10) || 0) + 25
                    })
                })
            }), c.select()
        }, this.outdent = function() {
            var b = this, c = o.create().wrapBodyInlineWithPara(), d = c.nodes(j.isPara, {includeAncestor: !0}), e = g.clusterBy(d, f.peq2("parentNode"));
            a.each(e, function(c, d) {
                var e = g.head(d);
                j.isLi(e) ? b.releaseList([d]) : a.each(d, function(b, c) {
                    a(c).css("marginLeft", function(a, b) {
                        return b = parseInt(b, 10) || 0, b > 25 ? b - 25 : ""
                    })
                })
            }), c.select()
        }, this.toggleList = function(b) {
            var c = this, d = o.create().wrapBodyInlineWithPara(), e = d.nodes(j.isPara, {includeAncestor: !0}), h = g.clusterBy(e, f.peq2("parentNode"));
            if (g.find(e, j.isPurePara))
                a.each(h, function(a, d) {
                    c.wrapList(d, b)
                });
            else {
                var i = d.nodes(j.isList, {includeAncestor: !0}).filter(function(c) {
                    return!a.nodeName(c, b)
                });
                i.length ? a.each(i, function(a, c) {
                    j.replace(c, b)
                }) : this.releaseList(h, !0)
            }
            d.select()
        }, this.wrapList = function(b, c) {
            var d = g.head(b), e = g.last(b), f = j.isList(d.previousSibling) && d.previousSibling, h = j.isList(e.nextSibling) && e.nextSibling, i = f || j.insertAfter(j.create(c || "UL"), e);
            b = a.map(b, function(a) {
                return j.isPurePara(a) ? j.replace(a, "LI") : a
            }), j.appendChildNodes(i, b), h && (j.appendChildNodes(i, g.from(h.childNodes)), j.remove(h))
        }, this.releaseList = function(b, c) {
            var d = [];
            return a.each(b, function(b, e) {
                var f = g.head(e), h = g.last(e), i = c ? j.lastAncestor(f, j.isList) : f.parentNode, k = i.childNodes.length > 1 ? j.splitTree(i, {node: h.parentNode, offset: j.position(h) + 1}, !0) : null, l = j.splitTree(i, {node: f.parentNode, offset: j.position(f)}, !0);
                e = c ? j.listDescendant(l, j.isLi) : g.from(l.childNodes).filter(j.isLi), (c || !j.isList(i.parentNode)) && (e = a.map(e, function(a) {
                    return j.replace(a, "P")
                })), a.each(g.from(e).reverse(), function(a, b) {
                    j.insertAfter(b, i)
                });
                var m = g.compact([i, l, k]);
                a.each(m, function(b, c) {
                    var d = [c].concat(j.listDescendant(c, j.isList));
                    a.each(d.reverse(), function(a, b) {
                        j.nodeLength(b) || j.remove(b, !0)
                    })
                }), d = d.concat(e)
            }), d
        }
    }, s = function() {
        var b = new n, c = new q, d = new p, f = new r;
        this.saveRange = function(a, b) {
            a.focus(), a.data("range", o.create()), b && o.create().collapse().select()
        }, this.restoreRange = function(a) {
            var b = a.data("range");
            b && (b.select(), a.focus())
        }, this.currentStyle = function(a) {
            var c = o.create();
            return c ? c.isOnEditable() && b.current(c, a) : !1
        };
        var h = this.triggerOnChange = function(a) {
            var b = a.data("callbacks").onChange;
            b && b(a.html(), a)
        };
        this.undo = function(a) {
            a.data("NoteHistory").undo(), h(a)
        }, this.redo = function(a) {
            a.data("NoteHistory").redo(), h(a)
        };
        for (var i = this.afterCommand = function(a) {
            a.data("NoteHistory").recordUndo(), h(a)
        }, k = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor", "foreColor", "insertHorizontalRule", "fontName"], m = 0, s = k.length; s > m; m++)
            this[k[m]] = function(a) {
                return function(b, c) {
                    document.execCommand(a, !1, c), i(b)
                }
            }(k[m]);
        this.tab = function(a, b) {
            var e = o.create();
            e.isCollapsed() && e.isOnCell() ? c.tab(e) : (d.insertTab(a, e, b.tabsize), i(a))
        }, this.untab = function() {
            var a = o.create();
            a.isCollapsed() && a.isOnCell() && c.tab(a, !0)
        }, this.insertParagraph = function(a) {
            d.insertParagraph(a), i(a)
        }, this.insertOrderedList = function(a) {
            f.insertOrderedList(a), i(a)
        }, this.insertUnorderedList = function(a) {
            f.insertUnorderedList(a), i(a)
        }, this.indent = function(a) {
            f.indent(a), i(a)
        }, this.outdent = function(a) {
            f.outdent(a), i(a)
        }, this.insertImage = function(a, b, c) {
            l.createImage(b, c).then(function(b) {
                b.css({display: "", width: Math.min(a.width(), b.width())}), o.create().insertNode(b[0]), i(a)
            }).fail(function() {
                var b = a.data("callbacks");
                b.onImageUploadError && b.onImageUploadError()
            })
        }, this.insertVideo = function(b, c) {
            var d, e = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/, f = c.match(e), g = /\/\/instagram.com\/p\/(.[a-zA-Z0-9]*)/, h = c.match(g), j = /\/\/vine.co\/v\/(.[a-zA-Z0-9]*)/, k = c.match(j), l = /\/\/(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/, m = c.match(l), n = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/, p = c.match(n), q = /\/\/v\.youku\.com\/v_show\/id_(\w+)\.html/, r = c.match(q);
            if (f && 11 === f[1].length) {
                var s = f[1];
                d = a("<iframe>").attr("src", "//www.youtube.com/embed/" + s).attr("width", "640").attr("height", "360")
            } else
                h && h[0].length ? d = a("<iframe>").attr("src", h[0] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true") : k && k[0].length ? d = a("<iframe>").attr("src", k[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed") : m && m[3].length ? d = a("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("src", "//player.vimeo.com/video/" + m[3]).attr("width", "640").attr("height", "360") : p && p[2].length ? d = a("<iframe>").attr("src", "//www.dailymotion.com/embed/video/" + p[2]).attr("width", "640").attr("height", "360") : r && r[1].length && (d = a("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + r[1]));
            d && (d.attr("frameborder", 0), o.create().insertNode(d[0]), i(b))
        }, this.formatBlock = function(a, b) {
            b = e.isMSIE ? "<" + b + ">" : b, document.execCommand("FormatBlock", !1, b), i(a)
        }, this.formatPara = function(a) {
            this.formatBlock(a, "P"), i(a)
        };
        for (var m = 1; 6 >= m; m++)
            this["formatH" + m] = function(a) {
                return function(b) {
                    this.formatBlock(b, "H" + a)
                }
            }(m);
        this.fontSize = function(a, b) {
            document.execCommand("fontSize", !1, 3), e.isFF ? a.find("font[size=3]").removeAttr("size").css("font-size", b + "px") : a.find("span").filter(function() {
                return"medium" === this.style.fontSize
            }).css("font-size", b + "px"), i(a)
        }, this.lineHeight = function(a, c) {
            b.stylePara(o.create(), {lineHeight: c}), i(a)
        }, this.unlink = function(a) {
            var b = o.create();
            if (b.isOnAnchor()) {
                var c = j.ancestor(b.sc, j.isAnchor);
                b = o.createFromNode(c), b.select(), document.execCommand("unlink"), i(a)
            }
        }, this.createLink = function(b, c, d) {
            var e = c.url, f = c.text, g = c.newWindow, h = c.range;
            d.onCreateLink && (e = d.onCreateLink(e)), h = h.deleteContents();
            var j = h.insertNode(a("<A>" + f + "</A>")[0], !0);
            a(j).attr({href: e, target: g ? "_blank" : ""}), o.createFromNode(j).select(), i(b)
        }, this.getLinkInfo = function(b) {
            b.focus();
            var c = o.create().expand(j.isAnchor), d = a(g.head(c.nodes(j.isAnchor)));
            return{range: c, text: c.toString(), isNewWindow: d.length ? "_blank" === d.attr("target") : !0, url: d.length ? d.attr("href") : ""}
        }, this.getVideoInfo = function(a) {
            a.focus();
            var b = o.create();
            if (b.isOnAnchor()) {
                var c = j.ancestor(b.sc, j.isAnchor);
                b = o.createFromNode(c)
            }
            return{text: b.toString()}
        }, this.color = function(a, b) {
            var c = JSON.parse(b), d = c.foreColor, e = c.backColor;
            d && document.execCommand("foreColor", !1, d), e && document.execCommand("backColor", !1, e), i(a)
        }, this.insertTable = function(a, b) {
            var d = b.split("x"), e = o.create();
            e = e.deleteContents(), e.insertNode(c.createTable(d[0], d[1])), i(a)
        }, this.floatMe = function(a, b, c) {
            c.css("float", b), i(a)
        }, this.imageShape = function(a, b, c) {
            c.removeClass("img-rounded img-circle img-thumbnail"), b && c.addClass(b)
        }, this.resize = function(a, b, c) {
            c.css({width: 100 * b + "%", height: ""}), i(a)
        }, this.resizeTo = function(a, b, c) {
            var d;
            if (c) {
                var e = a.y / a.x, f = b.data("ratio");
                d = {width: f > e ? a.x : a.y / f, height: f > e ? a.x * f : a.y}
            } else
                d = {width: a.x, height: a.y};
            b.css(d)
        }, this.removeMedia = function(a, b, c) {

            var loc = a.find('img')[0].src;
            var arr = loc.split("/");
            var imgName = arr[arr.length - 1];

            // var ImageUrl = encodeURIComponent(a.find('img')[0].src);
var Confirm=window.confirm("Are you sure? You want to delete image from folder also");

        if (Confirm)
        {
         
            $.ajax({
                type: "POST",
                url: "DataBase.php",
                data: "Mode=" + "DeleteImage" + "&ImageLink=" + imgName,
                success: function(result) {
                    
                },
                error: function(error) {
                    alert(error);
                }// When Service call fails
            });
       
        
            c.detach(), i(a)
             }//if
//            alert($('img').prop('src'));
        }
    }, t = function(a) {
        var b = [], c = -1, d = a[0], e = function() {
            var b = o.create(), c = {s: {path: [0], offset: 0}, e: {path: [0], offset: 0}};
            return{contents: a.html(), bookmark: b ? b.bookmark(d) : c}
        }, f = function(b) {
            null !== b.contents && a.html(b.contents), null !== b.bookmark && o.createFromBookmark(d, b.bookmark).select()
        };
        this.undo = function() {
            c > 0 && (c--, f(b[c]))
        }, this.redo = function() {
            b.length - 1 > c && (c++, f(b[c]))
        }, this.recordUndo = function() {
            c++, b.length > c && (b = b.slice(0, c)), b.push(e())
        }, this.recordUndo()
    }, u = function() {
        this.update = function(b, c) {
            var d = function(b, c) {
                b.find(".dropdown-menu li a").each(function() {
                    var b = a(this).data("value") + "" == c + "";
                    this.className = b ? "checked" : ""
                })
            }, e = function(a, c) {
                var d = b.find(a);
                d.toggleClass("active", c())
            }, f = b.find(".note-fontname");
            if (f.length) {
                var h = c["font-family"];
                h && (h = g.head(h.split(",")), h = h.replace(/\'/g, ""), f.find(".note-current-fontname").text(h), d(f, h))
            }
            var i = b.find(".note-fontsize");
            i.find(".note-current-fontsize").text(c["font-size"]), d(i, parseFloat(c["font-size"]));
            var j = b.find(".note-height");
            d(j, parseFloat(c["line-height"])), e('button[data-event="bold"]', function() {
                return"bold" === c["font-bold"]
            }), e('button[data-event="italic"]', function() {
                return"italic" === c["font-italic"]
            }), e('button[data-event="underline"]', function() {
                return"underline" === c["font-underline"]
            }), e('button[data-event="strikethrough"]', function() {
                return"strikethrough" === c["font-strikethrough"]
            }), e('button[data-event="superscript"]', function() {
                return"superscript" === c["font-superscript"]
            }), e('button[data-event="subscript"]', function() {
                return"subscript" === c["font-subscript"]
            }), e('button[data-event="justifyLeft"]', function() {
                return"left" === c["text-align"] || "start" === c["text-align"]
            }), e('button[data-event="justifyCenter"]', function() {
                return"center" === c["text-align"]
            }), e('button[data-event="justifyRight"]', function() {
                return"right" === c["text-align"]
            }), e('button[data-event="justifyFull"]', function() {
                return"justify" === c["text-align"]
            }), e('button[data-event="insertUnorderedList"]', function() {
                return"unordered" === c["list-style"]
            }), e('button[data-event="insertOrderedList"]', function() {
                return"ordered" === c["list-style"]
            })
        }, this.updateRecentColor = function(b, c, d) {
            var e = a(b).closest(".note-color"), f = e.find(".note-recent-color"), g = JSON.parse(f.attr("data-value"));
            g[c] = d, f.attr("data-value", JSON.stringify(g));
            var h = "backColor" === c ? "background-color" : "color";
            f.find("i").css(h, d)
        }
    }, v = function() {
        var a = new u;
        this.update = function(b, c) {
            a.update(b, c)
        }, this.updateRecentColor = function(b, c, d) {
            a.updateRecentColor(b, c, d)
        }, this.activate = function(a) {
            a.find("button").not('button[data-event="codeview"]').removeClass("disabled")
        }, this.deactivate = function(a) {
            a.find("button").not('button[data-event="codeview"]').addClass("disabled")
        }, this.updateFullscreen = function(a, b) {
            var c = a.find('button[data-event="fullscreen"]');
            c.toggleClass("active", b)
        }, this.updateCodeview = function(a, b) {
            var c = a.find('button[data-event="codeview"]');
            c.toggleClass("active", b)
        }
    }, w = function() {
        var b = new u, c = function(b, c) {
            var d = a(b), e = c ? d.offset() : d.position(), f = d.outerHeight(!0);
            return{left: e.left, top: e.top + f}
        }, d = function(a, b) {
            a.css({display: "block", left: b.left, top: b.top})
        }, e = 20;
        this.update = function(h, i, j) {
            b.update(h, i);
            var k = h.find(".note-link-popover");
            if (i.anchor) {
                var l = k.find("a"), m = a(i.anchor).attr("href");
                l.attr("href", m).html(m), d(k, c(i.anchor, j))
            } else
                k.hide();
            var n = h.find(".note-image-popover");
            i.image ? d(n, c(i.image, j)) : n.hide();
            var o = h.find(".note-air-popover");
            if (j && !i.range.isCollapsed()) {
                var p = f.rect2bnd(g.last(i.range.getClientRects()));
                d(o, {left: Math.max(p.left + p.width / 2 - e, 0), top: p.top + p.height})
            } else
                o.hide()
        }, this.updateRecentColor = function(a, b, c) {
            a.updateRecentColor(a, b, c)
        }, this.hide = function(a) {
            a.children().hide()
        }
    }, x = function() {
        this.update = function(b, c, d) {
            var e = b.find(".note-control-selection");
            if (c.image) {
                var f = a(c.image), g = d ? f.offset() : f.position(), h = {w: f.outerWidth(!0), h: f.outerHeight(!0)};
                e.css({display: "block", left: g.left, top: g.top, width: h.w, height: h.h}).data("target", c.image);
                var i = h.w + "x" + h.h;
                e.find(".note-control-selection-info").text(i)
            } else
                e.hide()
        }, this.hide = function(a) {
            a.children().hide()
        }
    }, y = function() {
        var b = function(a, b) {
            a.toggleClass("disabled", !b), a.attr("disabled", !b)
        };
        this.showImageDialog = function(c, d) {
            return a.Deferred(function(a) {
                var c = d.find(".note-image-dialog"), e = d.find(".note-image-input"), f = d.find(".note-image-url"), g = d.find(".note-image-btn");
                c.one("shown.bs.modal", function() {
                    e.replaceWith(e.clone().on("change", function() {
                        a.resolve(this.files), c.modal("hide")
                    }).val("")), g.click(function(b) {
                        b.preventDefault(), a.resolve(f.val()), c.modal("hide")
                    }), f.on("keyup paste", function(a) {
                        var c;
                        c = "paste" === a.type ? a.originalEvent.clipboardData.getData("text") : f.val(), b(g, c)
                    }).val("").trigger("focus")
                }).one("hidden.bs.modal", function() {
                    e.off("change"), f.off("keyup paste"), g.off("click"), "pending" === a.state() && a.reject()
                }).modal("show")
            })
        }, this.showVideoDialog = function(c, d, e) {
            return a.Deferred(function(a) {
                var c = d.find(".note-video-dialog"), f = c.find(".note-video-url"), g = c.find(".note-video-btn");
                c.one("shown.bs.modal", function() {
                    f.val(e.text).keyup(function() {
                        b(g, f.val())
                    }).trigger("keyup").trigger("focus"), g.click(function(b) {
                        b.preventDefault(), a.resolve(f.val()), c.modal("hide")
                    })
                }).one("hidden.bs.modal", function() {
                    f.off("keyup"), g.off("click"), "pending" === a.state() && a.reject()
                }).modal("show")
            })
        }, this.showLinkDialog = function(c, d, e) {
            return a.Deferred(function(a) {
                var c = d.find(".note-link-dialog"), f = c.find(".note-link-text"), g = c.find(".note-link-url"), h = c.find(".note-link-btn"), i = c.find("input[type=checkbox]");
                c.one("shown.bs.modal", function() {
                    f.val(e.text), f.keyup(function() {
                        e.text = f.val()
                    }), e.url || (e.url = e.text, b(h, e.text)), g.keyup(function() {
                        b(h, g.val()), e.text || f.val(g.val())
                    }).val(e.url).trigger("focus").trigger("select"), i.prop("checked", e.newWindow), h.one("click", function(b) {
                        b.preventDefault(), a.resolve({range: e.range, url: g.val(), text: f.val(), newWindow: i.is(":checked")}), c.modal("hide")
                    })
                }).one("hidden.bs.modal", function() {
                    f.off("keyup"), g.off("keyup"), h.off("click"), "pending" === a.state() && a.reject()
                }).modal("show")
            }).promise()
        }, this.showHelpDialog = function(b, c) {
            return a.Deferred(function(a) {
                var b = c.find(".note-help-dialog");
                b.one("hidden.bs.modal", function() {
                    a.resolve()
                }).modal("show")
            }).promise()
        }
    };
    e.hasCodeMirror && (e.isSupportAmd ? require(["CodeMirror"], function(a) {
        b = a
    }) : b = window.CodeMirror);
    var z = function() {
        var c = a(window), d = a(document), f = a("html, body"), h = new s, i = new v, k = new w, n = new x, o = new y, p = function(b) {
            var c = a(b).closest(".note-editor, .note-air-editor, .note-air-layout");
            if (!c.length)
                return null;
            var d;
            return d = c.is(".note-editor, .note-air-editor") ? c : a("#note-editor-" + g.last(c.attr("id").split("-"))), j.buildLayoutInfo(d)
        }, q = function(b, c) {
            var d = b.data("callbacks");
            d.onImageUpload ? d.onImageUpload(c, h, b) : a.each(c, function(a, c) {
                var e = c.name;
                l.readFileAsDataURL(c).then(function(a) {
                    h.insertImage(b, a, e)
                }).fail(function() {
                    d.onImageUploadError && d.onImageUploadError()
                })
            })
        }, r = {showLinkDialog: function(a) {
                var b = a.editor(), c = a.dialog(), d = a.editable(), e = h.getLinkInfo(d), f = b.data("options");
                h.saveRange(d), o.showLinkDialog(d, c, e).then(function(b) {
                    h.restoreRange(d), h.createLink(d, b, f), k.hide(a.popover())
                }).fail(function() {
                    h.restoreRange(d)
                })
            }, showImageDialog: function(a) {
                var b = a.dialog(), c = a.editable();
                h.saveRange(c), o.showImageDialog(c, b).then(function(a) {
                    h.restoreRange(c), "string" == typeof a ? h.insertImage(c, a) : q(c, a)
                }).fail(function() {
                    h.restoreRange(c)
                })
            }, showVideoDialog: function(a) {
                var b = a.dialog(), c = a.editable(), d = h.getVideoInfo(c);
                h.saveRange(c), o.showVideoDialog(c, b, d).then(function(a) {
                    h.restoreRange(c), h.insertVideo(c, a)
                }).fail(function() {
                    h.restoreRange(c)
                })
            }, showHelpDialog: function(a) {
                var b = a.dialog(), c = a.editable();
                h.saveRange(c, !0), o.showHelpDialog(c, b).then(function() {
                    h.restoreRange(c)
                })
            }, fullscreen: function(a) {
                var b = a.editor(), d = a.toolbar(), e = a.editable(), g = a.codable(), h = b.data("options"), j = function(a) {
                    b.css("width", a.w), e.css("height", a.h), g.css("height", a.h), g.data("cmeditor") && g.data("cmeditor").setsize(null, a.h)
                };
                b.toggleClass("fullscreen");
                var k = b.hasClass("fullscreen");
                k ? (e.data("orgheight", e.css("height")), c.on("resize", function() {
                    j({w: c.width(), h: c.height() - d.outerHeight()})
                }).trigger("resize"), f.css("overflow", "hidden")) : (c.off("resize"), j({w: h.width || "", h: e.data("orgheight")}), f.css("overflow", "visible")), i.updateFullscreen(d, k)
            }, codeview: function(a) {
                var c, d, f = a.editor(), g = a.toolbar(), h = a.editable(), l = a.codable(), m = a.popover(), n = f.data("options");
                f.toggleClass("codeview");
                var o = f.hasClass("codeview");
                o ? (l.val(j.html(h, !0)), l.height(h.height()), i.deactivate(g), k.hide(m), l.focus(), e.hasCodeMirror && (c = b.fromTextArea(l[0], n.codemirror), n.codemirror.tern && (d = new b.TernServer(n.codemirror.tern), c.ternServer = d, c.on("cursorActivity", function(a) {
                    d.updateArgHints(a)
                })), c.setSize(null, h.outerHeight()), l.data("cmEditor", c))) : (e.hasCodeMirror && (c = l.data("cmEditor"), l.val(c.getValue()), c.toTextArea()), h.html(j.value(l) || j.emptyPara), h.height(n.height ? l.height() : "auto"), i.activate(g), h.focus()), i.updateCodeview(a.toolbar(), o)
            }}, u = function(a) {
            j.isImg(a.target) && a.preventDefault()
        }, z = function(a) {
            setTimeout(function() {
                var b = p(a.currentTarget || a.target), c = h.currentStyle(a.target);
                if (c) {
                    var d = b.editor().data("options").airMode;
                    d || i.update(b.toolbar(), c), k.update(b.popover(), c, d), n.update(b.handle(), c, d)
                }
            }, 0)
        }, A = function(a) {
            var b = p(a.currentTarget || a.target);
            k.hide(b.popover()), n.hide(b.handle())
        }, B = function(a) {
            var b = a.originalEvent.clipboardData;
            if (b && b.items && b.items.length) {
                var c = p(a.currentTarget || a.target), d = c.editable(), e = g.head(b.items), f = "file" === e.kind && -1 !== e.type.indexOf("image/");
                f && q(d, [e.getAsFile()]), h.afterCommand(d)
            }
        }, C = function(b) {
            if (j.isControlSizing(b.target)) {
                b.preventDefault(), b.stopPropagation();
                var c = p(b.target), e = c.handle(), f = c.popover(), g = c.editable(), i = c.editor(), l = e.find(".note-control-selection").data("target"), m = a(l), o = m.offset(), q = d.scrollTop(), r = i.data("options").airMode;
                d.on("mousemove", function(a) {
                    h.resizeTo({x: a.clientX - o.left, y: a.clientY - (o.top - q)}, m, !a.shiftKey), n.update(e, {image: l}, r), k.update(f, {image: l}, r)
                }).one("mouseup", function() {
                    d.off("mousemove")
                }), m.data("ratio") || m.data("ratio", m.height() / m.width()), h.afterCommand(g)
            }
        }, D = function(b) {
            var c = a(b.target).closest("[data-event]");
            c.length && b.preventDefault()
        }, E = function(b) {
            var c = a(b.target).closest("[data-event]");
            if (c.length) {
                var d = c.attr("data-event"), e = c.attr("data-value"), f = c.attr("data-hide"), j = p(b.target);
                b.preventDefault();
                var l;
                if (-1 !== a.inArray(d, ["resize", "floatMe", "removeMedia", "imageShape"])) {
                    var m = j.handle().find(".note-control-selection");
                    l = a(m.data("target"))
                }
                if (f && c.parents(".popover").hide(), h[d]) {
                    var n = j.editable();
                    n.trigger("focus"), h[d](n, e, l)
                } else
                    r[d] && r[d].call(this, j);
                if (-1 !== a.inArray(d, ["backColor", "foreColor"])) {
                    var o = j.editor().data("options", o), q = o.airMode ? k : i;
                    q.updateRecentColor(g.head(c), d, e)
                }
                z(b)
            }
        }, F = 24, G = function(a) {
            a.preventDefault(), a.stopPropagation();
            var b = p(a.target).editable(), c = b.offset().top - d.scrollTop(), e = p(a.currentTarget || a.target), f = e.editor().data("options");
            d.on("mousemove", function(a) {
                var d = a.clientY - (c + F);
                d = f.minHeight > 0 ? Math.max(d, f.minHeight) : d, d = f.maxHeight > 0 ? Math.min(d, f.maxHeight) : d, b.height(d)
            }).one("mouseup", function() {
                d.off("mousemove")
            })
        }, H = 18, I = function(b, c) {
            var d, e = a(b.target.parentNode), f = e.next(), g = e.find(".note-dimension-picker-mousecatcher"), h = e.find(".note-dimension-picker-highlighted"), i = e.find(".note-dimension-picker-unhighlighted");
            if (void 0 === b.offsetX) {
                var j = a(b.target).offset();
                d = {x: b.pageX - j.left, y: b.pageY - j.top}
            } else
                d = {x: b.offsetX, y: b.offsetY};
            var k = {c: Math.ceil(d.x / H) || 1, r: Math.ceil(d.y / H) || 1};
            h.css({width: k.c + "em", height: k.r + "em"}), g.attr("data-value", k.c + "x" + k.r), 3 < k.c && k.c < c.insertTableMaxSize.col && i.css({width: k.c + 1 + "em"}), 3 < k.r && k.r < c.insertTableMaxSize.row && i.css({height: k.r + 1 + "em"}), f.html(k.c + " x " + k.r)
        }, J = function(a, b) {
            b ? d.on("drop", function(a) {
                a.preventDefault()
            }) : K(a)
        }, K = function(b) {
            var c = a(), e = b.dropzone, f = b.dropzone.find(".note-dropzone-message");
            d.on("dragenter", function(a) {
                var d = b.editor.hasClass("codeview");
                d || c.length || (b.editor.addClass("dragover"), e.width(b.editor.width()), e.height(b.editor.height()), f.text("Drag Image Here")), c = c.add(a.target)
            }).on("dragleave", function(a) {
                c = c.not(a.target), c.length || b.editor.removeClass("dragover")
            }).on("drop", function() {
                c = a(), b.editor.removeClass("dragover")
            }), e.on("dragenter", function() {
                e.addClass("hover"), f.text("Drop Image")
            }).on("dragleave", function() {
                e.removeClass("hover"), f.text("Drag Image Here")
            }), e.on("drop", function(a) {
                a.preventDefault();
                var b = a.originalEvent.dataTransfer;
                if (b && b.files) {
                    var c = p(a.currentTarget || a.target);
                    c.editable().focus(), q(c.editable(), b.files)
                }
            }).on("dragover", !1)
        };
        this.bindKeyMap = function(a, b) {
            var c = a.editor, d = a.editable;
            a = p(d), d.on("keydown", function(e) {
                var f = [];
                e.metaKey && f.push("CMD"), e.ctrlKey && !e.altKey && f.push("CTRL"), e.shiftKey && f.push("SHIFT");
                var g = m.nameFromCode[e.keyCode];
                g && f.push(g);
                var i = b[f.join("+")];
                i ? (e.preventDefault(), h[i] ? h[i](d, c.data("options")) : r[i] && r[i].call(this, a)) : m.isEdit(e.keyCode) && h.afterCommand(d)
            })
        }, this.attach = function(a, b) {
            this.bindKeyMap(a, b.keyMap[e.isMac ? "mac" : "pc"]), a.editable.on("mousedown", u), a.editable.on("keyup mouseup", z), a.editable.on("scroll", A), a.editable.on("paste", B), a.handle.on("mousedown", C), a.popover.on("click", E), a.popover.on("mousedown", D), b.airMode || (J(a, b.disableDragAndDrop), a.toolbar.on("click", E), a.toolbar.on("mousedown", D), b.disableResizeEditor || a.statusbar.on("mousedown", G));
            var c = b.airMode ? a.popover : a.toolbar, d = c.find(".note-dimension-picker-mousecatcher");
            d.css({width: b.insertTableMaxSize.col + "em", height: b.insertTableMaxSize.row + "em"}).on("mousemove", function(a) {
                I(a, b)
            }), a.editor.data("options", b), b.styleWithSpan && !e.isMSIE && setTimeout(function() {
                document.execCommand("styleWithCSS", 0, !0)
            }, 0);
            var f = new t(a.editable);
            if (a.editable.data("NoteHistory", f), b.onenter && a.editable.keypress(function(a) {
                a.keyCode === m.ENTER && b.onenter(a)
            }), b.onfocus && a.editable.focus(b.onfocus), b.onblur && a.editable.blur(b.onblur), b.onkeyup && a.editable.keyup(b.onkeyup), b.onkeydown && a.editable.keydown(b.onkeydown), b.onpaste && a.editable.on("paste", b.onpaste), b.onToolbarClick && a.toolbar.click(b.onToolbarClick), b.onChange) {
                var g = function() {
                    h.triggerOnChange(a.editable)
                };
                if (e.isMSIE) {
                    var i = "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted";
                    a.editable.on(i, g)
                } else
                    a.editable.on("input", g)
            }
            a.editable.data("callbacks", {onChange: b.onChange, onAutoSave: b.onAutoSave, onImageUpload: b.onImageUpload, onImageUploadError: b.onImageUploadError, onFileUpload: b.onFileUpload, onFileUploadError: b.onFileUpload})
        }, this.dettach = function(a, b) {
            a.editable.off(), a.popover.off(), a.handle.off(), a.dialog.off(), b.airMode || (a.dropzone.off(), a.toolbar.off(), a.statusbar.off())
        }
    }, A = function() {
        var b = function(a, b) {
            var c = b.event, d = b.value, e = b.title, f = b.className, g = b.dropdown, h = b.hide;
            return'<button type="button" class="btn btn-default btn-sm btn-small' + (f ? " " + f : "") + (g ? " dropdown-toggle" : "") + '"' + (g ? ' data-toggle="dropdown"' : "") + (e ? ' title="' + e + '"' : "") + (c ? ' data-event="' + c + '"' : "") + (d ? " data-value='" + d + "'" : "") + (h ? " data-hide='" + h + "'" : "") + ' tabindex="-1">' + a + (g ? ' <span class="caret"></span>' : "") + "</button>" + (g || "")
        }, c = function(a, c) {
            var d = '<i class="' + a + '"></i>';
            return b(d, c)
        }, d = function(a, b) {
            return'<div class="' + a + ' popover bottom in" style="display: none;"><div class="arrow"></div><div class="popover-content">' + b + "</div></div>"
        }, g = function(a, b, c, d) {
            return'<div class="' + a + ' modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content">' + (b ? '<div class="modal-header"><button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button><h4 class="modal-title">' + b + "</h4></div>" : "") + '<form class="note-modal-form"><div class="modal-body">' + c + "</div>" + (d ? '<div class="modal-footer">' + d + "</div>" : "") + "</form></div></div></div>"
        }, h = {picture: function(a) {
                return c("fa fa-picture-o", {event: "showImageDialog", title: a.image.image, hide: !0})
            }, link: function(a) {
                return c("fa fa-link", {event: "showLinkDialog", title: a.link.link, hide: !0})
            }, video: function(a) {
                return c("fa fa-youtube-play", {event: "showVideoDialog", title: a.video.video, hide: !0})
            }, table: function(a) {
                var b = '<ul class="note-table dropdown-menu"><div class="note-dimension-picker"><div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div><div class="note-dimension-picker-highlighted"></div><div class="note-dimension-picker-unhighlighted"></div></div><div class="note-dimension-display"> 1 x 1 </div></ul>';
                return c("fa fa-table", {title: a.table.table, dropdown: b})
            }, style: function(a, b) {
                var d = b.styleTags.reduce(function(b, c) {
                    var d = a.style["p" === c ? "normal" : c];
                    return b + '<li><a data-event="formatBlock" href="#" data-value="' + c + '">' + ("p" === c || "pre" === c ? d : "<" + c + ">" + d + "</" + c + ">") + "</a></li>"
                }, "");
                return c("fa fa-magic", {title: a.style.style, dropdown: '<ul class="dropdown-menu">' + d + "</ul>"})
            }, fontname: function(a, c) {
                var d = c.fontNames.reduce(function(a, b) {
                    return e.isFontInstalled(b) ? a + '<li><a data-event="fontName" href="#" data-value="' + b + '"><i class="fa fa-check"></i> ' + b + "</a></li>" : a
                }, ""), f = '<span class="note-current-fontname">' + c.defaultFontName + "</span>";
                return b(f, {title: a.font.name, dropdown: '<ul class="dropdown-menu">' + d + "</ul>"})
            }, fontsize: function(a, c) {
                var d = c.fontSizes.reduce(function(a, b) {
                    return a + '<li><a data-event="fontSize" href="#" data-value="' + b + '"><i class="fa fa-check"></i> ' + b + "</a></li>"
                }, ""), e = '<span class="note-current-fontsize">11</span>';
                return b(e, {title: a.font.size, dropdown: '<ul class="dropdown-menu">' + d + "</ul>"})
            }, color: function(a) {
                var c = '<i class="fa fa-font" style="color:black;background-color:yellow;"></i>', d = b(c, {className: "note-recent-color", title: a.color.recent, event: "color", value: '{"backColor":"yellow"}'}), e = '<ul class="dropdown-menu"><li><div class="btn-group"><div class="note-palette-title">' + a.color.background + '</div><div class="note-color-reset" data-event="backColor" data-value="inherit" title="' + a.color.transparent + '">' + a.color.setTransparent + '</div><div class="note-color-palette" data-target-event="backColor"></div></div><div class="btn-group"><div class="note-palette-title">' + a.color.foreground + '</div><div class="note-color-reset" data-event="foreColor" data-value="inherit" title="' + a.color.reset + '">' + a.color.resetToDefault + '</div><div class="note-color-palette" data-target-event="foreColor"></div></div></li></ul>', f = b("", {title: a.color.more, dropdown: e});
                return d + f
            }, bold: function(a) {
                return c("fa fa-bold", {event: "bold", title: a.font.bold})
            }, italic: function(a) {
                return c("fa fa-italic", {event: "italic", title: a.font.italic})
            }, underline: function(a) {
                return c("fa fa-underline", {event: "underline", title: a.font.underline})
            }, strikethrough: function(a) {
                return c("fa fa-strikethrough", {event: "strikethrough", title: a.font.strikethrough})
            }, superscript: function(a) {
                return c("fa fa-superscript", {event: "superscript", title: a.font.superscript})
            }, subscript: function(a) {
                return c("fa fa-subscript", {event: "subscript", title: a.font.subscript})
            }, clear: function(a) {
                return c("fa fa-eraser", {event: "removeFormat", title: a.font.clear})
            }, ul: function(a) {
                return c("fa fa-list-ul", {event: "insertUnorderedList", title: a.lists.unordered})
            }, ol: function(a) {
                return c("fa fa-list-ol", {event: "insertOrderedList", title: a.lists.ordered})
            }, paragraph: function(a) {
                var b = c("fa fa-align-left", {title: a.paragraph.left, event: "justifyLeft"}), d = c("fa fa-align-center", {title: a.paragraph.center, event: "justifyCenter"}), e = c("fa fa-align-right", {title: a.paragraph.right, event: "justifyRight"}), f = c("fa fa-align-justify", {title: a.paragraph.justify, event: "justifyFull"}), g = c("fa fa-outdent", {title: a.paragraph.outdent, event: "outdent"}), h = c("fa fa-indent", {title: a.paragraph.indent, event: "indent"}), i = '<div class="dropdown-menu"><div class="note-align btn-group">' + b + d + e + f + '</div><div class="note-list btn-group">' + h + g + "</div></div>";
                return c("fa fa-align-left", {title: a.paragraph.paragraph, dropdown: i})
            }, height: function(a, b) {
                var d = b.lineHeights.reduce(function(a, b) {
                    return a + '<li><a data-event="lineHeight" href="#" data-value="' + parseFloat(b) + '"><i class="fa fa-check"></i> ' + b + "</a></li>"
                }, "");
                return c("fa fa-text-height", {title: a.font.height, dropdown: '<ul class="dropdown-menu">' + d + "</ul>"})
            }, help: function(a) {
                return c("fa fa-question", {event: "showHelpDialog", title: a.options.help, hide: !0})
            }, fullscreen: function(a) {
                return c("fa fa-arrows-alt", {event: "fullscreen", title: a.options.fullscreen})
            }, codeview: function(a) {
                return c("fa fa-code", {event: "codeview", title: a.options.codeview})
            }, undo: function(a) {
                return c("fa fa-undo", {event: "undo", title: a.history.undo})
            }, redo: function(a) {
                return c("fa fa-repeat", {event: "redo", title: a.history.redo})
            }, hr: function(a) {
                return c("fa fa-minus", {event: "insertHorizontalRule", title: a.hr.insert})
            }}, i = function(a, e) {
            var f = function() {
                var b = c("fa fa-edit", {title: a.link.edit, event: "showLinkDialog", hide: !0}), e = c("fa fa-unlink", {title: a.link.unlink, event: "unlink"}), f = '<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;<div class="note-insert btn-group">' + b + e + "</div>";
                return d("note-link-popover", f)
            }, g = function() {
                var e = b('<span class="note-fontsize-10">100%</span>', {title: a.image.resizeFull, event: "resize", value: "1"}), f = b('<span class="note-fontsize-10">50%</span>', {title: a.image.resizeHalf, event: "resize", value: "0.5"}), g = b('<span class="note-fontsize-10">25%</span>', {title: a.image.resizeQuarter, event: "resize", value: "0.25"}), h = c("fa fa-align-left", {title: a.image.floatLeft, event: "floatMe", value: "left"}), i = c("fa fa-align-right", {title: a.image.floatRight, event: "floatMe", value: "right"}), j = c("fa fa-align-justify", {title: a.image.floatNone, event: "floatMe", value: "none"}), k = c("fa fa-square", {title: a.image.shapeRounded, event: "imageShape", value: "img-rounded"}), l = c("fa fa-circle-o", {title: a.image.shapeCircle, event: "imageShape", value: "img-circle"}), m = c("fa fa-picture-o", {title: a.image.shapeThumbnail, event: "imageShape", value: "img-thumbnail"}), n = c("fa fa-times", {title: a.image.shapeNone, event: "imageShape", value: ""}), o = c("fa fa-trash-o", {title: a.image.remove, event: "removeMedia", value: "none"}), p = '<div class="btn-group">' + e + f + g + '</div><div class="btn-group">' + h + i + j + '</div><div class="btn-group">' + k + l + m + n + '</div><div class="btn-group">' + o + "</div>";
                return d("note-image-popover", p)
            }, i = function() {
                for (var b = "", c = 0, f = e.airPopover.length; f > c; c++) {
                    var g = e.airPopover[c];
                    b += '<div class="note-' + g[0] + ' btn-group">';
                    for (var i = 0, j = g[1].length; j > i; i++)
                        b += h[g[1][i]](a, e);
                    b += "</div>"
                }
                return d("note-air-popover", b)
            };
            return'<div class="note-popover">' + f() + g() + (e.airMode ? i() : "") + "</div>"
        }, k = function() {
            return'<div class="note-handle"><div class="note-control-selection"><div class="note-control-selection-bg"></div><div class="note-control-holder note-control-nw"></div><div class="note-control-holder note-control-ne"></div><div class="note-control-holder note-control-sw"></div><div class="note-control-sizing note-control-se"></div><div class="note-control-selection-info"></div></div></div>'
        }, l = function(a, b) {
            return'<table class="note-shortcut"><thead><tr><th></th><th>' + a + "</th></tr></thead><tbody>" + b + "</tbody></table>"
        }, m = function(a) {
            var b = "<tr><td>⌘ + B</td><td>" + a.font.bold + "</td></tr><tr><td>⌘ + I</td><td>" + a.font.italic + "</td></tr><tr><td>⌘ + U</td><td>" + a.font.underline + "</td></tr><tr><td>⌘ + ⇧ + S</td><td>" + a.font.strikethrough + "</td></tr><tr><td>⌘ + \\</td><td>" + a.font.clear + "</td></tr>";
            return l(a.shortcut.textFormatting, b)
        }, n = function(a) {
            var b = "<tr><td>⌘ + Z</td><td>" + a.history.undo + "</td></tr><tr><td>⌘ + ⇧ + Z</td><td>" + a.history.redo + "</td></tr><tr><td>⌘ + ]</td><td>" + a.paragraph.indent + "</td></tr><tr><td>⌘ + [</td><td>" + a.paragraph.outdent + "</td></tr><tr><td>⌘ + ENTER</td><td>" + a.hr.insert + "</td></tr>";
            return l(a.shortcut.action, b)
        }, o = function(a) {
            var b = "<tr><td>⌘ + ⇧ + L</td><td>" + a.paragraph.left + "</td></tr><tr><td>⌘ + ⇧ + E</td><td>" + a.paragraph.center + "</td></tr><tr><td>⌘ + ⇧ + R</td><td>" + a.paragraph.right + "</td></tr><tr><td>⌘ + ⇧ + J</td><td>" + a.paragraph.justify + "</td></tr><tr><td>⌘ + ⇧ + NUM7</td><td>" + a.lists.ordered + "</td></tr><tr><td>⌘ + ⇧ + NUM8</td><td>" + a.lists.unordered + "</td></tr>";
            return l(a.shortcut.paragraphFormatting, b)
        }, p = function(a) {
            var b = "<tr><td>⌘ + NUM0</td><td>" + a.style.normal + "</td></tr><tr><td>⌘ + NUM1</td><td>" + a.style.h1 + "</td></tr><tr><td>⌘ + NUM2</td><td>" + a.style.h2 + "</td></tr><tr><td>⌘ + NUM3</td><td>" + a.style.h3 + "</td></tr><tr><td>⌘ + NUM4</td><td>" + a.style.h4 + "</td></tr><tr><td>⌘ + NUM5</td><td>" + a.style.h5 + "</td></tr><tr><td>⌘ + NUM6</td><td>" + a.style.h6 + "</td></tr>";
            return l(a.shortcut.documentStyle, b)
        }, q = function(a, b) {
            var c = b.extraKeys, d = "";
            for (var e in c)
                c.hasOwnProperty(e) && (d += "<tr><td>" + e + "</td><td>" + c[e] + "</td></tr>");
            return l(a.shortcut.extraKeys, d)
        }, r = function(a, b) {
            var c = '<table class="note-shortcut-layout"><tbody><tr><td>' + n(a, b) + "</td><td>" + m(a, b) + "</td></tr><tr><td>" + p(a, b) + "</td><td>" + o(a, b) + "</td></tr>";
            return b.extraKeys && (c += '<tr><td colspan="2">' + q(a, b) + "</td></tr>"), c += "</tbody></table>"
        }, s = function(a) {
            return a.replace(/⌘/g, "Ctrl").replace(/⇧/g, "Shift")
        }, t = function(a, b) {
            var c = function() {
                var b = '<div class="form-group row-fluid note-group-select-from-files"><label>' + a.image.selectFromFiles + '</label><input class="note-image-input" type="file" name="files" accept="image/*" /></div><div class="form-group row-fluid"><label>' + a.image.url + '</label><input class="note-image-url form-control span12" type="text" /></div>', c = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + a.image.insert + "</button>";
                return g("note-image-dialog", a.image.insert, b, c)
            }, d = function() {
                var c = '<div class="form-group row-fluid"><label>' + a.link.textToDisplay + '</label><input class="note-link-text form-control span12" type="text" /></div><div class="form-group row-fluid"><label>' + a.link.url + '</label><input class="note-link-url form-control span12" type="text" /></div>' + (b.disableLinkTarget ? "" : '<div class="checkbox"><label><input type="checkbox" checked> ' + a.link.openInNewWindow + "</label></div>"), d = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + a.link.insert + "</button>";
                return g("note-link-dialog", a.link.insert, c, d)
            }, f = function() {
                var b = '<div class="form-group row-fluid"><label>' + a.video.url + ' <small class="text-muted">' + a.video.providers + '</small></label><input class="note-video-url form-control span12" type="text" /></div>', c = '<button href="#" class="btn btn-primary note-video-btn disabled" disabled>' + a.video.insert + "</button>";
                return g("note-video-dialog", a.video.insert, b, c)
            }, h = function() {
                var c = '<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">' + a.shortcut.close + '</a><div class="title">' + a.shortcut.shortcuts + "</div>" + (e.isMac ? r(a, b) : s(r(a, b))) + '<p class="text-center"><a href="//hackerwins.github.io/summernote/" target="_blank">Summernote 0.5.10</a> · <a href="//github.com/HackerWins/summernote" target="_blank">Project</a> · <a href="//github.com/HackerWins/summernote/issues" target="_blank">Issues</a></p>';
                return g("note-help-dialog", "", c, "")
            };
            return'<div class="note-dialog">' + c() + d() + f() + h() + "</div>"
        }, u = function() {
            return'<div class="note-resizebar"><div class="note-icon-bar"></div><div class="note-icon-bar"></div><div class="note-icon-bar"></div></div>'
        }, v = function(a) {
            return e.isMac && (a = a.replace("CMD", "⌘").replace("SHIFT", "⇧")), a.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")
        }, w = function(b, c, d) {
            var e = f.invertObject(c), g = b.find("button");
            g.each(function(b, c) {
                var d = a(c), f = e[d.data("event")];
                f && d.attr("title", function(a, b) {
                    return b + " (" + v(f) + ")"
                })
            }).tooltip({container: "body", trigger: "hover", placement: d || "top"}).on("click", function() {
                a(this).tooltip("hide")
            })
        }, x = function(b, c) {
            var d = c.colors;
            b.find(".note-color-palette").each(function() {
                for (var b = a(this), c = b.attr("data-target-event"), e = [], f = 0, g = d.length; g > f; f++) {
                    for (var h = d[f], i = [], j = 0, k = h.length; k > j; j++) {
                        var l = h[j];
                        i.push(['<button type="button" class="note-color-btn" style="background-color:', l, ';" data-event="', c, '" data-value="', l, '" title="', l, '" data-toggle="button" tabindex="-1"></button>'].join(""))
                    }
                    e.push('<div class="note-color-row">' + i.join("") + "</div>")
                }
                b.html(e.join(""))
            })
        };
        this.createLayoutByAirMode = function(b, c) {
            var d = c.keyMap[e.isMac ? "mac" : "pc"], g = a.extend(a.summernote.lang["en-US"], a.summernote.lang[c.lang]), h = f.uniqueId();
            b.addClass("note-air-editor note-editable"), b.attr({id: "note-editor-" + h, contentEditable: !0});
            var j = document.body, l = a(i(g, c));
            l.addClass("note-air-layout"), l.attr("id", "note-popover-" + h), l.appendTo(j), w(l, d), x(l, c);
            var m = a(k());
            m.addClass("note-air-layout"), m.attr("id", "note-handle-" + h), m.appendTo(j);
            var n = a(t(g, c));
            n.addClass("note-air-layout"), n.attr("id", "note-dialog-" + h), n.find("button.close, a.modal-close").click(function() {
                a(this).closest(".modal").modal("hide")
            }), n.appendTo(j)
        }, this.createLayoutByFrame = function(b, c) {
            var d = a('<div class="note-editor"></div>');
            c.width && d.width(c.width), c.height > 0 && a('<div class="note-statusbar">' + (c.disableResizeEditor ? "" : u()) + "</div>").prependTo(d);
            var f = !b.is(":disabled"), g = a('<div class="note-editable" contentEditable="' + f + '"></div>').prependTo(d);
            c.height && g.height(c.height), c.direction && g.attr("dir", c.direction), g.html(j.html(b) || j.emptyPara), a('<textarea class="note-codable"></textarea>').prependTo(d);
            for (var l = a.extend(a.summernote.lang["en-US"], a.summernote.lang[c.lang]), m = "", n = 0, o = c.toolbar.length; o > n; n++) {
                var p = c.toolbar[n][0], q = c.toolbar[n][1];
                m += '<div class="note-' + p + ' btn-group">';
                for (var r = 0, s = q.length; s > r; r++)
                    a.isFunction(h[q[r]]) && (m += h[q[r]](l, c));
                m += "</div>"
            }
            m = '<div class="note-toolbar btn-toolbar">' + m + "</div>";
            var v = a(m).prependTo(d), y = c.keyMap[e.isMac ? "mac" : "pc"];
            x(v, c), w(v, y, "bottom");
            var z = a(i(l, c)).prependTo(d);
            x(z, c), w(z, y), a(k()).prependTo(d);
            var A = a(t(l, c)).prependTo(d);
            A.find("button.close, a.modal-close").click(function() {
                a(this).closest(".modal").modal("hide")
            }), a('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo(d), d.insertAfter(b), b.hide()
        }, this.noteEditorFromHolder = function(b) {
            return b.hasClass("note-air-editor") ? b : b.next().hasClass("note-editor") ? b.next() : a()
        }, this.createLayout = function(a, b) {
            this.noteEditorFromHolder(a).length || (b.airMode ? this.createLayoutByAirMode(a, b) : this.createLayoutByFrame(a, b))
        }, this.layoutInfoFromHolder = function(a) {
            var b = this.noteEditorFromHolder(a);
            if (b.length) {
                var c = j.buildLayoutInfo(b);
                for (var d in c)
                    c.hasOwnProperty(d) && (c[d] = c[d].call());
                return c
            }
        }, this.removeLayout = function(a, b, c) {
            c.airMode ? (a.removeClass("note-air-editor note-editable").removeAttr("id contentEditable"), b.popover.remove(), b.handle.remove(), b.dialog.remove()) : (a.html(b.editable.html()), b.editor.remove(), a.show())
        }
    };
    a.summernote = a.summernote || {}, a.extend(a.summernote, k);
    var B = new A, C = new z;
    a.fn.extend({summernote: function(b) {
            if (b = a.extend({}, a.summernote.options, b), this.each(function(c, d) {
                var e = a(d);
                B.createLayout(e, b);
                var f = B.layoutInfoFromHolder(e);
                C.attach(f, b), j.isTextarea(e[0]) && e.closest("form").submit(function() {
                    e.val(e.code())
                })
            }), this.first().length && b.focus) {
                var c = B.layoutInfoFromHolder(this.first());
                c.editable.focus()
            }
            return this.length && b.oninit && b.oninit(), this
        }, code: function(b) {
            if (void 0 === b) {
                var c = this.first();
                if (!c.length)
                    return;
                var d = B.layoutInfoFromHolder(c);
                if (d && d.editable) {
                    var f = d.editor.hasClass("codeview");
                    return f && e.hasCodeMirror && d.codable.data("cmEditor").save(), f ? d.codable.val() : d.editable.html()
                }
                return j.isTextarea(c[0]) ? c.val() : c.html()
            }
            return this.each(function(c, d) {
                var e = B.layoutInfoFromHolder(a(d));
                e && e.editable && e.editable.html(b)
            }), this
        }, destroy: function() {
            return this.each(function(b, c) {
                var d = a(c), e = B.layoutInfoFromHolder(d);
                if (e && e.editable) {
                    var f = e.editor.data("options");
                    C.dettach(e, f), B.removeLayout(d, e, f)
                }
            }), this
        }})
});