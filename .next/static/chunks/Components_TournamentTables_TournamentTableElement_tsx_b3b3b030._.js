(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/Components/TournamentTables/TournamentTableElement.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TournamentTableElement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function TournamentTableElement(props) {
    const tableHeadNames = [
        {
            name: '',
            className: 'w-80'
        },
        {
            name: props.groupName,
            className: 'w-400'
        },
        {
            name: 'И',
            className: 'w-100'
        },
        {
            name: 'В',
            className: 'w-100'
        },
        {
            name: 'Н',
            className: 'w-100'
        },
        {
            name: 'П',
            className: 'w-100'
        },
        {
            name: 'М',
            className: 'w-200'
        },
        {
            name: 'О',
            className: 'w-80'
        }
    ];
    const TableHeadElement = ({ className = '', title = '' })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: `px-6 py-3 font-medium text-gray-700 w-[80px] ${className}`,
            children: title
        }, void 0, false, {
            fileName: "[project]/Components/TournamentTables/TournamentTableElement.tsx",
            lineNumber: 22,
            columnNumber: 17
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: tableHeadNames.map((th)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHeadElement, {
                        title: th.name,
                        className: ` ${th.className}`
                    }, void 0, false, {
                        fileName: "[project]/Components/TournamentTables/TournamentTableElement.tsx",
                        lineNumber: 31,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Components/TournamentTables/TournamentTableElement.tsx",
                lineNumber: 29,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Components/TournamentTables/TournamentTableElement.tsx",
            lineNumber: 28,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Components/TournamentTables/TournamentTableElement.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
_c = TournamentTableElement;
var _c;
__turbopack_context__.k.register(_c, "TournamentTableElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=Components_TournamentTables_TournamentTableElement_tsx_b3b3b030._.js.map