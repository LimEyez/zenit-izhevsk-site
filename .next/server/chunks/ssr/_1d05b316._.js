module.exports = {

"[project]/public/images/Triangle.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Triangle.f80f8c5f.png");}}),
"[project]/public/images/Triangle.png.mjs { IMAGE => \"[project]/public/images/Triangle.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Triangle$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/Triangle.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Triangle$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 13,
    height: 13,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAl0lEQVR42o2OMQrDIBSGDZlD7CbkDskkXqCHEI+gF9Gh3aOLS47gFcSjdHYpotDmlba0U/vBB4//f/AeQr8QQsxKqaOU8kvIOOczMsaonPOl1lo+hUxrLRHGeHDOnVtr5fYEFqy1p3EcB7jSEUIOIYS1lHIFvffrXmLoHn90O4yxKaW0xRi3ZVmmd/mi7/uOUkpAmNG/3AHs0FIh5nW1IQAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/Components/DropdownFilter/DropdownFilter.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DropdownFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Triangle$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Triangle$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Triangle.png.mjs { IMAGE => "[project]/public/images/Triangle.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function DropdownFilter(props) {
    const [openStatus, setOpenStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeElementIndex, setActiveElementIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-[60px] min-w-[195px] bg-[#001E51] dropdown",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col items-start",
            onClick: ()=>{
                setOpenStatus(!openStatus);
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `min-h-[60px] h-[60px] w-full flex flex-row flex-1 justify-start items-center dropdownElement dropdownActiveMainblock`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-[60px] flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: props.elements[activeElementIndex].title
                            }, void 0, false, {
                                fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
                                lineNumber: 18,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            alt: "Стрелка выпадающего списка",
                            className: "pointer-none ml-[5px] object-contain transition-all duration-200",
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Triangle$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Triangle$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            style: {
                                transform: openStatus ? "scaleY(-1)" : "scaleY(1)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `
                        w-full overflow-y-auto dropdownListBlock
                        transition-all duration-300
                    `,
                    style: {
                        maxHeight: openStatus ? 240 : 0
                    },
                    children: props.elements.map((element, index)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `
                                    w-full h-[60px] flex items-center dropdownElement
                                    ${element.title === props.elements[activeElementIndex].title ? 'bg-[#10839D]' : ''}
                                `,
                            onClick: ()=>{
                                props.handleSelectSetState(element.returnedValue);
                                setOpenStatus(false);
                                setActiveElementIndex(index);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: element.title
                            }, void 0, false, {
                                fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
                                lineNumber: 53,
                                columnNumber: 33
                            }, this)
                        }, element.title, false, {
                            fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
                            lineNumber: 41,
                            columnNumber: 29
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}}),
"[project]/Components/MatchList/MatchList.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MatchList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$DropdownFilter$2f$DropdownFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Components/DropdownFilter/DropdownFilter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function MatchList(props) {
    const data = props.data;
    const [datesVisibleMatches, setDatesVisibleMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [typeVisibleMatches, setTypeVisibleMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ВСЕ МАТЧИ');
    const typesForFilter = [
        {
            title: 'ВСЕ МАТЧИ',
            returnedValue: 'ВСЕ МАТЧИ'
        },
        {
            title: 'ЧЕМПИОНАТ',
            returnedValue: 'ЧЕМПИОНАТ'
        },
        {
            title: 'КУБОК',
            returnedValue: 'КУБОК'
        },
        {
            title: 'ПРОЧЕЕ',
            returnedValue: 'ПРОЧЕЕ'
        }
    ];
    //Определение доступных дат (годов) для фильтрации
    const datesForFilter = data.map((element, index)=>{
        // Проверяем, если это последний элемент или массив содержит одну дату
        const nextYear = data[index + 1]?.date_year || null;
        // Если это единственная дата или если это не последний элемент
        if (data.length === 1 || nextYear !== null) {
            const finalTextDropdownElement = element.date_year + `${nextYear ? "/" + nextYear.slice(nextYear.length - 2) : ''}`;
            return {
                returnedValue: {
                    startYear: element.date_year,
                    endYear: nextYear
                },
                title: finalTextDropdownElement
            };
        } else {
            // Возвращаем null для последнего элемента без следующего года
            return null;
        }
    }).filter((item)=>item !== null); // Убираем все null значения из массива
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        datesForFilter.length > 0 ? setDatesVisibleMatches({
            startYear: datesForFilter[datesForFilter.length - 1].returnedValue.startYear,
            endYear: datesForFilter[datesForFilter.length - 1].returnedValue.endYear
        }) : null;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col justify-start items-center gap-[45px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-row justify-start items-start gap-[10px]",
            children: [
                datesForFilter.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$DropdownFilter$2f$DropdownFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    elements: datesForFilter.slice().reverse(),
                    handleSelectSetState: (activeDates)=>setDatesVisibleMatches(activeDates)
                }, void 0, false, {
                    fileName: "[project]/Components/MatchList/MatchList.tsx",
                    lineNumber: 63,
                    columnNumber: 25
                }, this) : null,
                datesForFilter.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$DropdownFilter$2f$DropdownFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    elements: typesForFilter,
                    handleSelectSetState: (activeType)=>setTypeVisibleMatches(activeType)
                }, void 0, false, {
                    fileName: "[project]/Components/MatchList/MatchList.tsx",
                    lineNumber: 70,
                    columnNumber: 25
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/Components/MatchList/MatchList.tsx",
            lineNumber: 60,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Components/MatchList/MatchList.tsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=_1d05b316._.js.map