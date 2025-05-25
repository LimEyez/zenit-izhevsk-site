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
            className: "text-[60px] font-extrabold",
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
"[project]/Components/TournamentTables/TournamentTableElement.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TournamentTableElement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ag$2d$grid$2d$react$2f$dist$2f$package$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ag-grid-react/dist/package/index.esm.mjs [app-client] (ecmascript)");
'use client';
;
;
function TournamentTableElement(props) {
    const columnDefs = [
        {
            field: 'teamName',
            headerName: props.groupName ? props.groupName : "Группа"
        },
        {
            field: 'games',
            headerName: 'И'
        },
        {
            field: 'wins',
            headerName: 'В'
        },
        {
            field: 'draw',
            headerName: 'Н'
        },
        {
            field: 'defeat',
            headerName: 'П'
        },
        {
            headerName: 'М',
            valueGetter: (params)=>`${params.data?.scoredGoals}-${params.data?.missedGoals}`
        },
        {
            field: 'score',
            headerName: 'О'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ag$2d$grid$2d$react$2f$dist$2f$package$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgGridReact"], {
        rowData: props.teams,
        columnDefs: columnDefs,
        domLayout: "autoHeight"
    }, void 0, false, {
        fileName: "[project]/Components/TournamentTables/TournamentTableElement.tsx",
        lineNumber: 23,
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
"[project]/Components/TournamentTables/TournamentTables.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TournamentTables)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$BasicTitle$2f$BasicTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Components/BasicTitle/BasicTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$TournamentTables$2f$TournamentTableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Components/TournamentTables/TournamentTableElement.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function TournamentTables() {
    // group: Название команды
    // games: Количество игр
    // wins: Подеды
    // draw: Ничьи
    // defeat: Поражения
    // scoredGoals: Забитые мячи
    // missedGoals: Пропущенные мячи
    // score: Очки
    const tables = [
        // Чемпионат МФС Приволжье. Сезон-2024 — Группа A
        {
            tableName: "Чемпионат МФС Приволжье. Сезон-2024",
            groupName: "Группа А",
            info: [
                {
                    teamName: "Шумбрат",
                    games: 14,
                    wins: 11,
                    draw: 2,
                    defeat: 1,
                    scoredGoals: 41,
                    missedGoals: 6,
                    score: 35
                },
                {
                    teamName: "Дорожник",
                    games: 14,
                    wins: 10,
                    draw: 2,
                    defeat: 2,
                    scoredGoals: 38,
                    missedGoals: 11,
                    score: 32
                },
                {
                    teamName: "БоМИК",
                    games: 14,
                    wins: 9,
                    draw: 3,
                    defeat: 2,
                    scoredGoals: 28,
                    missedGoals: 10,
                    score: 30
                },
                {
                    teamName: "Оргэнергострой",
                    games: 14,
                    wins: 7,
                    draw: 3,
                    defeat: 4,
                    scoredGoals: 29,
                    missedGoals: 18,
                    score: 24
                },
                {
                    teamName: "Зенит-Ижевск",
                    games: 14,
                    wins: 6,
                    draw: 3,
                    defeat: 5,
                    scoredGoals: 20,
                    missedGoals: 18,
                    score: 21
                },
                {
                    teamName: "СШОР Сокол-М",
                    games: 14,
                    wins: 3,
                    draw: 8,
                    defeat: 3,
                    scoredGoals: 18,
                    missedGoals: 14,
                    score: 17
                },
                {
                    teamName: "Университет",
                    games: 14,
                    wins: 2,
                    draw: 1,
                    defeat: 11,
                    scoredGoals: 7,
                    missedGoals: 35,
                    score: 7
                },
                {
                    teamName: "СШ-Волга-М",
                    games: 14,
                    wins: 0,
                    draw: 0,
                    defeat: 14,
                    scoredGoals: 9,
                    missedGoals: 59,
                    score: 0
                }
            ]
        },
        {
            tableName: "Кубок МФС Приволжье. Сезон-2024",
            groupName: "Группа С",
            info: [
                {
                    teamName: "ЛАТО",
                    games: 6,
                    wins: 5,
                    draw: 1,
                    defeat: 0,
                    scoredGoals: 18,
                    missedGoals: 3,
                    score: 16
                },
                {
                    teamName: "Зенит-Ижевск",
                    games: 6,
                    wins: 4,
                    draw: 1,
                    defeat: 1,
                    scoredGoals: 22,
                    missedGoals: 8,
                    score: 13
                },
                {
                    teamName: "СШ-Волга-М",
                    games: 6,
                    wins: 1,
                    draw: 1,
                    defeat: 4,
                    scoredGoals: 9,
                    missedGoals: 17,
                    score: 4
                },
                {
                    teamName: "УОР-СШ",
                    games: 6,
                    wins: 1,
                    draw: 0,
                    defeat: 5,
                    scoredGoals: 3,
                    missedGoals: 24,
                    score: 3
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-auto w-full flex justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full max-w-[1920px] overflow-hidden flex flex-col justify-center items-center shrink-0 ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$BasicTitle$2f$BasicTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "Турнирные таблицы"
                }, void 0, false, {
                    fileName: "[project]/Components/TournamentTables/TournamentTables.tsx",
                    lineNumber: 161,
                    columnNumber: 17
                }, this),
                tables.map((table)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[360px] w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$TournamentTables$2f$TournamentTableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            groupName: table.groupName,
                            teams: table.info
                        }, void 0, false, {
                            fileName: "[project]/Components/TournamentTables/TournamentTables.tsx",
                            lineNumber: 166,
                            columnNumber: 33
                        }, this)
                    }, table.tableName, false, {
                        fileName: "[project]/Components/TournamentTables/TournamentTables.tsx",
                        lineNumber: 165,
                        columnNumber: 29
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/Components/TournamentTables/TournamentTables.tsx",
            lineNumber: 158,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Components/TournamentTables/TournamentTables.tsx",
        lineNumber: 157,
        columnNumber: 9
    }, this);
}
_c = TournamentTables;
var _c;
__turbopack_context__.k.register(_c, "TournamentTables");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=Components_f6b253f7._.js.map