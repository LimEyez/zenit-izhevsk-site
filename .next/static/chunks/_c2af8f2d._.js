(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/Components/BasicTitle/BasicTitle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BasicTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function BasicTitle(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-auto flex justify-center items-center mb-[15px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-[60px] font-extrabold ",
            children: props.text.toUpperCase()
        }, void 0, false, {
            fileName: "[project]/Components/BasicTitle/BasicTitle.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Components/BasicTitle/BasicTitle.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = BasicTitle;
var _c;
__turbopack_context__.k.register(_c, "BasicTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Components/NewsCard/NewsCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NewsCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function NewsCard(props) {
    const newsDate = new Date(props.date);
    const formatedDateString = newsDate.toLocaleDateString('ru-RU');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-285 gap-[15px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-250"
            }, void 0, false, {
                fileName: "[project]/Components/NewsCard/NewsCard.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "w-full h-62",
                        children: props.title
                    }, void 0, false, {
                        fileName: "[project]/Components/NewsCard/NewsCard.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "w-full h-[120px]",
                        children: props.date
                    }, void 0, false, {
                        fileName: "[project]/Components/NewsCard/NewsCard.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Components/NewsCard/NewsCard.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Components/NewsCard/NewsCard.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = NewsCard;
var _c;
__turbopack_context__.k.register(_c, "NewsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/news/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NewsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$BasicTitle$2f$BasicTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Components/BasicTitle/BasicTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$NewsCard$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Components/NewsCard/NewsCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$paginate$2f$dist$2f$react$2d$paginate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-paginate/dist/react-paginate.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function NewsPage() {
    _s();
    // Статические данные новостей
    const newsDescription = `
    ФК "Зенит-Ижевск" гордится своим городом с богатой историей и славными традициями!
    Поздравляем всех болельщиков с этим замечательным праздником!
    Вместе к новым победам! 💙
  `;
    const news = new Array(40).map((value, index)=>({
            id: index + 1,
            date: "2025-01-01",
            title: "Новость" + index,
            newsDescription,
            src: ''
        }));
    // Устанавливаем количество элементов на странице (например, 12)
    const itemsPerPage = 12;
    // Состояние для текущей страницы
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Функция обработки переключения страницы
    const handlePageClick = (data)=>{
        setCurrentPage(data.selected);
    };
    // Отображаемые новости для текущей страницы
    const displayedNews = news.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    console.log(displayedNews);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[30px]"
            }, void 0, false, {
                fileName: "[project]/app/news/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$BasicTitle$2f$BasicTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                text: "Новости"
            }, void 0, false, {
                fileName: "[project]/app/news/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row",
                        children: displayedNews.map((news)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$NewsCard$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                date: news.date,
                                id: news.id,
                                title: news.title,
                                newsDescription: news.newsDescription
                            }, news.title + '-idNews=' + news.id, false, {
                                fileName: "[project]/app/news/page.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/news/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$paginate$2f$dist$2f$react$2d$paginate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            pageCount: Math.ceil(news.length / itemsPerPage),
                            pageRangeDisplayed: 5,
                            marginPagesDisplayed: 2,
                            onPageChange: handlePageClick,
                            containerClassName: "pagination" // Класс для контейнера пагинации
                            ,
                            activeClassName: "active" // Класс для активной страницы
                            ,
                            previousLabel: "‹" // Символ для предыдущей страницы
                            ,
                            nextLabel: "›" // Символ для следующей страницы
                        }, void 0, false, {
                            fileName: "[project]/app/news/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/news/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/news/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/news/page.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(NewsPage, "kF5zyetxw6M8BnbNC3J8pG5ccpI=");
_c = NewsPage;
var _c;
__turbopack_context__.k.register(_c, "NewsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/react-paginate/dist/react-paginate.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
!function(e, a) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = a(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)")) : ("TURBOPACK unreachable", undefined);
}(this, (e)=>(()=>{
        var a = {
            703: (e, a, t)=>{
                "use strict";
                var r = t(414);
                function n() {}
                function i() {}
                i.resetWarningCache = n, e.exports = function() {
                    function e(e, a, t, n, i, s) {
                        if (s !== r) {
                            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw o.name = "Invariant Violation", o;
                        }
                    }
                    function a() {
                        return e;
                    }
                    e.isRequired = e;
                    var t = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: a,
                        element: e,
                        elementType: e,
                        instanceOf: a,
                        node: e,
                        objectOf: a,
                        oneOf: a,
                        oneOfType: a,
                        shape: a,
                        exact: a,
                        checkPropTypes: i,
                        resetWarningCache: n
                    };
                    return t.PropTypes = t, t;
                };
            },
            697: (e, a, t)=>{
                e.exports = t(703)();
            },
            414: (e)=>{
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            },
            98: (a)=>{
                "use strict";
                a.exports = e;
            }
        }, t = {};
        function r(e) {
            var n = t[e];
            if (void 0 !== n) return n.exports;
            var i = t[e] = {
                exports: {}
            };
            return a[e](i, i.exports, r), i.exports;
        }
        r.n = (e)=>{
            var a = e && e.__esModule ? ()=>e.default : ()=>e;
            return r.d(a, {
                a
            }), a;
        }, r.d = (e, a)=>{
            for(var t in a)r.o(a, t) && !r.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: a[t]
            });
        }, r.o = (e, a)=>Object.prototype.hasOwnProperty.call(e, a), r.r = (e)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        };
        var n = {};
        return (()=>{
            "use strict";
            r.r(n), r.d(n, {
                default: ()=>k
            });
            var e = r(98), a = r.n(e), t = r(697), i = r.n(t);
            function s() {
                return s = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), s.apply(this, arguments);
            }
            var o = function(e) {
                var t = e.pageClassName, r = e.pageLinkClassName, n = e.page, i = e.selected, o = e.activeClassName, l = e.activeLinkClassName, c = e.getEventListener, p = e.pageSelectedHandler, u = e.href, g = e.extraAriaContext, d = e.pageLabelBuilder, f = e.rel, b = e.ariaLabel || "Page " + n + (g ? " " + g : ""), v = null;
                return i && (v = "page", b = e.ariaLabel || "Page " + n + " is your current page", t = void 0 !== t ? t + " " + o : o, void 0 !== r ? void 0 !== l && (r = r + " " + l) : r = l), a().createElement("li", {
                    className: t
                }, a().createElement("a", s({
                    rel: f,
                    role: u ? void 0 : "button",
                    className: r,
                    href: u,
                    tabIndex: i ? "-1" : "0",
                    "aria-label": b,
                    "aria-current": v,
                    onKeyPress: p
                }, c(p)), d(n)));
            };
            o.propTypes = {
                pageSelectedHandler: i().func.isRequired,
                selected: i().bool.isRequired,
                pageClassName: i().string,
                pageLinkClassName: i().string,
                activeClassName: i().string,
                activeLinkClassName: i().string,
                extraAriaContext: i().string,
                href: i().string,
                ariaLabel: i().string,
                page: i().number.isRequired,
                getEventListener: i().func.isRequired,
                pageLabelBuilder: i().func.isRequired,
                rel: i().string
            };
            const l = o;
            function c() {
                return c = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), c.apply(this, arguments);
            }
            var p = function(e) {
                var t = e.breakLabel, r = e.breakAriaLabel, n = e.breakClassName, i = e.breakLinkClassName, s = e.breakHandler, o = e.getEventListener, l = n || "break";
                return a().createElement("li", {
                    className: l
                }, a().createElement("a", c({
                    className: i,
                    role: "button",
                    tabIndex: "0",
                    "aria-label": r,
                    onKeyPress: s
                }, o(s)), t));
            };
            p.propTypes = {
                breakLabel: i().oneOfType([
                    i().string,
                    i().node
                ]),
                breakAriaLabel: i().string,
                breakClassName: i().string,
                breakLinkClassName: i().string,
                breakHandler: i().func.isRequired,
                getEventListener: i().func.isRequired
            };
            const u = p;
            function g(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return null != e ? e : a;
            }
            function d(e) {
                return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, d(e);
            }
            function f() {
                return f = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), f.apply(this, arguments);
            }
            function b(e, a) {
                for(var t = 0; t < a.length; t++){
                    var r = a[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function v(e, a) {
                return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e;
                }, v(e, a);
            }
            function h(e, a) {
                if (a && ("object" === d(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
                return m(e);
            }
            function m(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function y(e) {
                return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                }, y(e);
            }
            function C(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e;
            }
            var P = function(e) {
                !function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && v(e, a);
                }(o, e);
                var t, r, n, i, s = (n = o, i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }(), function() {
                    var e, a = y(n);
                    if (i) {
                        var t = y(this).constructor;
                        e = Reflect.construct(a, arguments, t);
                    } else e = a.apply(this, arguments);
                    return h(this, e);
                });
                function o(e) {
                    var t, r;
                    return function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), C(m(t = s.call(this, e)), "handlePreviousPage", function(e) {
                        var a = t.state.selected;
                        t.handleClick(e, null, a > 0 ? a - 1 : void 0, {
                            isPrevious: !0
                        });
                    }), C(m(t), "handleNextPage", function(e) {
                        var a = t.state.selected, r = t.props.pageCount;
                        t.handleClick(e, null, a < r - 1 ? a + 1 : void 0, {
                            isNext: !0
                        });
                    }), C(m(t), "handlePageSelected", function(e, a) {
                        if (t.state.selected === e) return t.callActiveCallback(e), void t.handleClick(a, null, void 0, {
                            isActive: !0
                        });
                        t.handleClick(a, null, e);
                    }), C(m(t), "handlePageChange", function(e) {
                        t.state.selected !== e && (t.setState({
                            selected: e
                        }), t.callCallback(e));
                    }), C(m(t), "getEventListener", function(e) {
                        return C({}, t.props.eventListener, e);
                    }), C(m(t), "handleClick", function(e, a, r) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = n.isPrevious, s = void 0 !== i && i, o = n.isNext, l = void 0 !== o && o, c = n.isBreak, p = void 0 !== c && c, u = n.isActive, g = void 0 !== u && u;
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                        var d = t.state.selected, f = t.props.onClick, b = r;
                        if (f) {
                            var v = f({
                                index: a,
                                selected: d,
                                nextSelectedPage: r,
                                event: e,
                                isPrevious: s,
                                isNext: l,
                                isBreak: p,
                                isActive: g
                            });
                            if (!1 === v) return;
                            Number.isInteger(v) && (b = v);
                        }
                        void 0 !== b && t.handlePageChange(b);
                    }), C(m(t), "handleBreakClick", function(e, a) {
                        var r = t.state.selected;
                        t.handleClick(a, e, r < e ? t.getForwardJump() : t.getBackwardJump(), {
                            isBreak: !0
                        });
                    }), C(m(t), "callCallback", function(e) {
                        void 0 !== t.props.onPageChange && "function" == typeof t.props.onPageChange && t.props.onPageChange({
                            selected: e
                        });
                    }), C(m(t), "callActiveCallback", function(e) {
                        void 0 !== t.props.onPageActive && "function" == typeof t.props.onPageActive && t.props.onPageActive({
                            selected: e
                        });
                    }), C(m(t), "getElementPageRel", function(e) {
                        var a = t.state.selected, r = t.props, n = r.nextPageRel, i = r.prevPageRel, s = r.selectedPageRel;
                        return a - 1 === e ? i : a === e ? s : a + 1 === e ? n : void 0;
                    }), C(m(t), "pagination", function() {
                        var e = [], r = t.props, n = r.pageRangeDisplayed, i = r.pageCount, s = r.marginPagesDisplayed, o = r.breakLabel, l = r.breakClassName, c = r.breakLinkClassName, p = r.breakAriaLabels, g = t.state.selected;
                        if (i <= n) for(var d = 0; d < i; d++)e.push(t.getPageElement(d));
                        else {
                            var f = n / 2, b = n - f;
                            g > i - n / 2 ? f = n - (b = i - g) : g < n / 2 && (b = n - (f = g));
                            var v, h, m = function(e) {
                                return t.getPageElement(e);
                            }, y = [];
                            for(v = 0; v < i; v++){
                                var C = v + 1;
                                if (C <= s) y.push({
                                    type: "page",
                                    index: v,
                                    display: m(v)
                                });
                                else if (C > i - s) y.push({
                                    type: "page",
                                    index: v,
                                    display: m(v)
                                });
                                else if (v >= g - f && v <= g + (0 === g && n > 1 ? b - 1 : b)) y.push({
                                    type: "page",
                                    index: v,
                                    display: m(v)
                                });
                                else if (o && y.length > 0 && y[y.length - 1].display !== h && (n > 0 || s > 0)) {
                                    var P = v < g ? p.backward : p.forward;
                                    h = a().createElement(u, {
                                        key: v,
                                        breakAriaLabel: P,
                                        breakLabel: o,
                                        breakClassName: l,
                                        breakLinkClassName: c,
                                        breakHandler: t.handleBreakClick.bind(null, v),
                                        getEventListener: t.getEventListener
                                    }), y.push({
                                        type: "break",
                                        index: v,
                                        display: h
                                    });
                                }
                            }
                            y.forEach(function(a, t) {
                                var r = a;
                                "break" === a.type && y[t - 1] && "page" === y[t - 1].type && y[t + 1] && "page" === y[t + 1].type && y[t + 1].index - y[t - 1].index <= 2 && (r = {
                                    type: "page",
                                    index: a.index,
                                    display: m(a.index)
                                }), e.push(r.display);
                            });
                        }
                        return e;
                    }), void 0 !== e.initialPage && void 0 !== e.forcePage && console.warn("(react-paginate): Both initialPage (".concat(e.initialPage, ") and forcePage (").concat(e.forcePage, ") props are provided, which is discouraged.") + " Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"), r = e.initialPage ? e.initialPage : e.forcePage ? e.forcePage : 0, t.state = {
                        selected: r
                    }, t;
                }
                return t = o, (r = [
                    {
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props, a = e.initialPage, t = e.disableInitialCallback, r = e.extraAriaContext, n = e.pageCount, i = e.forcePage;
                            void 0 === a || t || this.callCallback(a), r && console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."), Number.isInteger(n) || console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n, "). Did you forget a Math.ceil()?")), void 0 !== a && a > n - 1 && console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a, " > ").concat(n - 1, ").")), void 0 !== i && i > n - 1 && console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i, " > ").concat(n - 1, ")."));
                        }
                    },
                    {
                        key: "componentDidUpdate",
                        value: function(e) {
                            void 0 !== this.props.forcePage && this.props.forcePage !== e.forcePage && (this.props.forcePage > this.props.pageCount - 1 && console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage, " > ").concat(this.props.pageCount - 1, ").")), this.setState({
                                selected: this.props.forcePage
                            })), Number.isInteger(e.pageCount) && !Number.isInteger(this.props.pageCount) && console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount, "). Did you forget a Math.ceil()?"));
                        }
                    },
                    {
                        key: "getForwardJump",
                        value: function() {
                            var e = this.state.selected, a = this.props, t = a.pageCount, r = e + a.pageRangeDisplayed;
                            return r >= t ? t - 1 : r;
                        }
                    },
                    {
                        key: "getBackwardJump",
                        value: function() {
                            var e = this.state.selected - this.props.pageRangeDisplayed;
                            return e < 0 ? 0 : e;
                        }
                    },
                    {
                        key: "getElementHref",
                        value: function(e) {
                            var a = this.props, t = a.hrefBuilder, r = a.pageCount, n = a.hrefAllControls;
                            if (t) return n || e >= 0 && e < r ? t(e + 1, r, this.state.selected) : void 0;
                        }
                    },
                    {
                        key: "ariaLabelBuilder",
                        value: function(e) {
                            var a = e === this.state.selected;
                            if (this.props.ariaLabelBuilder && e >= 0 && e < this.props.pageCount) {
                                var t = this.props.ariaLabelBuilder(e + 1, a);
                                return this.props.extraAriaContext && !a && (t = t + " " + this.props.extraAriaContext), t;
                            }
                        }
                    },
                    {
                        key: "getPageElement",
                        value: function(e) {
                            var t = this.state.selected, r = this.props, n = r.pageClassName, i = r.pageLinkClassName, s = r.activeClassName, o = r.activeLinkClassName, c = r.extraAriaContext, p = r.pageLabelBuilder;
                            return a().createElement(l, {
                                key: e,
                                pageSelectedHandler: this.handlePageSelected.bind(null, e),
                                selected: t === e,
                                rel: this.getElementPageRel(e),
                                pageClassName: n,
                                pageLinkClassName: i,
                                activeClassName: s,
                                activeLinkClassName: o,
                                extraAriaContext: c,
                                href: this.getElementHref(e),
                                ariaLabel: this.ariaLabelBuilder(e),
                                page: e + 1,
                                pageLabelBuilder: p,
                                getEventListener: this.getEventListener
                            });
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            var e = this.props.renderOnZeroPageCount;
                            if (0 === this.props.pageCount && void 0 !== e) return e ? e(this.props) : e;
                            var t = this.props, r = t.disabledClassName, n = t.disabledLinkClassName, i = t.pageCount, s = t.className, o = t.containerClassName, l = t.previousLabel, c = t.previousClassName, p = t.previousLinkClassName, u = t.previousAriaLabel, d = t.prevRel, b = t.nextLabel, v = t.nextClassName, h = t.nextLinkClassName, m = t.nextAriaLabel, y = t.nextRel, C = this.state.selected, P = 0 === C, k = C === i - 1, x = "".concat(g(c)).concat(P ? " ".concat(g(r)) : ""), L = "".concat(g(v)).concat(k ? " ".concat(g(r)) : ""), N = "".concat(g(p)).concat(P ? " ".concat(g(n)) : ""), O = "".concat(g(h)).concat(k ? " ".concat(g(n)) : ""), R = P ? "true" : "false", E = k ? "true" : "false";
                            return a().createElement("ul", {
                                className: s || o,
                                role: "navigation",
                                "aria-label": "Pagination"
                            }, a().createElement("li", {
                                className: x
                            }, a().createElement("a", f({
                                className: N,
                                href: this.getElementHref(C - 1),
                                tabIndex: P ? "-1" : "0",
                                role: "button",
                                onKeyPress: this.handlePreviousPage,
                                "aria-disabled": R,
                                "aria-label": u,
                                rel: d
                            }, this.getEventListener(this.handlePreviousPage)), l)), this.pagination(), a().createElement("li", {
                                className: L
                            }, a().createElement("a", f({
                                className: O,
                                href: this.getElementHref(C + 1),
                                tabIndex: k ? "-1" : "0",
                                role: "button",
                                onKeyPress: this.handleNextPage,
                                "aria-disabled": E,
                                "aria-label": m,
                                rel: y
                            }, this.getEventListener(this.handleNextPage)), b)));
                        }
                    }
                ]) && b(t.prototype, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), o;
            }(e.Component);
            C(P, "propTypes", {
                pageCount: i().number.isRequired,
                pageRangeDisplayed: i().number,
                marginPagesDisplayed: i().number,
                previousLabel: i().node,
                previousAriaLabel: i().string,
                prevPageRel: i().string,
                prevRel: i().string,
                nextLabel: i().node,
                nextAriaLabel: i().string,
                nextPageRel: i().string,
                nextRel: i().string,
                breakLabel: i().oneOfType([
                    i().string,
                    i().node
                ]),
                breakAriaLabels: i().shape({
                    forward: i().string,
                    backward: i().string
                }),
                hrefBuilder: i().func,
                hrefAllControls: i().bool,
                onPageChange: i().func,
                onPageActive: i().func,
                onClick: i().func,
                initialPage: i().number,
                forcePage: i().number,
                disableInitialCallback: i().bool,
                containerClassName: i().string,
                className: i().string,
                pageClassName: i().string,
                pageLinkClassName: i().string,
                pageLabelBuilder: i().func,
                activeClassName: i().string,
                activeLinkClassName: i().string,
                previousClassName: i().string,
                nextClassName: i().string,
                previousLinkClassName: i().string,
                nextLinkClassName: i().string,
                disabledClassName: i().string,
                disabledLinkClassName: i().string,
                breakClassName: i().string,
                breakLinkClassName: i().string,
                extraAriaContext: i().string,
                ariaLabelBuilder: i().func,
                eventListener: i().string,
                renderOnZeroPageCount: i().func,
                selectedPageRel: i().string
            }), C(P, "defaultProps", {
                pageRangeDisplayed: 2,
                marginPagesDisplayed: 3,
                activeClassName: "selected",
                previousLabel: "Previous",
                previousClassName: "previous",
                previousAriaLabel: "Previous page",
                prevPageRel: "prev",
                prevRel: "prev",
                nextLabel: "Next",
                nextClassName: "next",
                nextAriaLabel: "Next page",
                nextPageRel: "next",
                nextRel: "next",
                breakLabel: "...",
                breakAriaLabels: {
                    forward: "Jump forward",
                    backward: "Jump backward"
                },
                disabledClassName: "disabled",
                disableInitialCallback: !1,
                pageLabelBuilder: function(e) {
                    return e;
                },
                eventListener: "onClick",
                renderOnZeroPageCount: void 0,
                selectedPageRel: "canonical",
                hrefAllControls: !1
            });
            const k = P;
        })(), n;
    })()); //# sourceMappingURL=react-paginate.js.map
}}),
}]);

//# sourceMappingURL=_c2af8f2d._.js.map