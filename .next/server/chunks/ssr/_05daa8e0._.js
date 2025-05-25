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
        className: "relative z-30 min-h-[60px] min-w-[195px] bg-[#001E51] dropdown text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute w-full flex flex-col items-start",
            onClick: ()=>{
                setOpenStatus(!openStatus);
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `min-h-[60px] h-[60px] w-full flex flex-row 
                    flex-1 justify-start items-center 
                    dropdownElement dropdownActiveMainblock`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-[60px] flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: props.elements[activeElementIndex].title
                            }, void 0, false, {
                                fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
                            lineNumber: 21,
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
                            lineNumber: 24,
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
                        transition-all duration-300 bg-[#001E51]
                    `,
                    style: {
                        maxHeight: openStatus ? 240 : 0
                    },
                    children: props.elements.map((element, index)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `
                                    w-full h-[60px] flex items-center dropdownElement
                                    transition-all duration-50
                                    ${element.title === props.elements[activeElementIndex].title ? 'bg-[#10839D] hover:text-white' : 'hover:text-[#10839D]'}
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
                                lineNumber: 61,
                                columnNumber: 33
                            }, this)
                        }, element.title, false, {
                            fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
                            lineNumber: 45,
                            columnNumber: 29
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Components/DropdownFilter/DropdownFilter.tsx",
                    lineNumber: 34,
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
"[project]/lib/dateUtils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MonthsNames": (()=>MonthsNames),
    "formatToRuDayMonthYear": (()=>formatToRuDayMonthYear),
    "formatToRuTimeDayMonthYear": (()=>formatToRuTimeDayMonthYear)
});
const MonthsNames = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
];
const monthsNamesGenitive = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
];
function formatToRuDayMonthYear(date, showNameOfMonth = false) {
    let parsedDate;
    if (date instanceof Date) {
        parsedDate = date;
    } else {
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            parsedDate = new Date(date + "T00:00:00");
        } else {
            parsedDate = new Date(date);
        }
    }
    if (isNaN(parsedDate.getTime())) {
        return null;
    }
    const day = String(parsedDate.getDate()).padStart(2, '0');
    const month = showNameOfMonth ? monthsNamesGenitive[parsedDate.getMonth()] : String(parsedDate.getMonth() + 1).padStart(2, '0');
    const separator = showNameOfMonth ? ' ' : '.';
    const year = parsedDate.getFullYear();
    return `${day}${separator}${month}${separator}${year}`;
}
function formatToRuTimeDayMonthYear(date, showNameOfMonth = false) {
    let parsedDate;
    if (date instanceof Date) {
        parsedDate = date;
    } else {
        // Проверим, если строка соответствует формату 'yyyy-mm-dd', то это только дата
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            parsedDate = new Date(date + "T00:00:00"); // добавляем время по умолчанию (00:00)
        } else {
            parsedDate = new Date(date);
        }
    }
    if (isNaN(parsedDate.getTime())) {
        return null; // Невалидная дата
    }
    const day = String(parsedDate.getDate()).padStart(2, '0');
    const month = showNameOfMonth ? monthsNamesGenitive[parsedDate.getMonth()] : String(parsedDate.getMonth() + 1).padStart(2, '0');
    const year = parsedDate.getFullYear();
    const separator = showNameOfMonth ? ' ' : '.';
    // Получаем время из parsedDate
    const hours = String(parsedDate.getHours()).padStart(2, '0');
    const minutes = String(parsedDate.getMinutes()).padStart(2, '0');
    // Если время не указано, возвращаем только дату
    const time = hours === '00' && minutes === '00' ? '' : `${hours}:${minutes}`;
    // Возвращаем дату с временем, если оно есть
    return time ? `${time}, ${day}${separator}${month}${separator}${year}` : `${day}${separator}${month}${separator}${year}`;
}
}}),
"[project]/public/images/HomeIcon.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/HomeIcon.b3e3ba52.png");}}),
"[project]/public/images/HomeIcon.png.mjs { IMAGE => \"[project]/public/images/HomeIcon.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$HomeIcon$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/HomeIcon.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$HomeIcon$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 30,
    height: 30,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAxElEQVR42k2OsQqCUBiFfxVT2xxamiTnwNmtuTa5BoKzoD6LzyAO7Q3ODj2Ag8N1alCcfILArHvCogMHDt/HDz/RElmWJdd19yg2/UdVVdnzvAPnvG7btmaMHcA+Utf1VRRF/jiO99cSbMHOcJSmKRuG4Se/AYvj2CfbtrdVVV3neX42TXNDscHgyDAMpSzLyzRNjyRJQnEVYoPBkaZpSp7nWdd1PAiCo+ip73teFEUmflBIkiSyLGvjOM7ONM01ig0G9wbsRm+Aw8itVAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/images/PlaneIcon.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/PlaneIcon.6b835b21.png");}}),
"[project]/public/images/PlaneIcon.png.mjs { IMAGE => \"[project]/public/images/PlaneIcon.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$PlaneIcon$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/PlaneIcon.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$PlaneIcon$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 30,
    height: 30,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzElEQVR42mWPOwqDQABEF2JYDStqlSZFtrDyFF5BsBVPoFhZJGcQwT56BK8gAV1ItLBI4a9TC88QyWoRSJx2Hsw8AGgURTnbtm3yPH8A/2FZdi/L8qksy7vrugaEcPcDBEFwwRgfoyjypmlqdV1XRVFEgiAgjuMgqKrqmec5qev6Nc/zexiGLsuyJE3TJI7jG6DFoygK0jTNCozj2BFCkgVaAd/3r8tEGIZe3/etpmmqJElomVkn6KnvScdxDIZhdhsTqoktyzIRQhvND1mwWgP3TEgKAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MonthMatchesBlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dateUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$HomeIcon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$HomeIcon$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/HomeIcon.png.mjs { IMAGE => "[project]/public/images/HomeIcon.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$PlaneIcon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$PlaneIcon$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/PlaneIcon.png.mjs { IMAGE => "[project]/public/images/PlaneIcon.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
;
;
;
;
;
function MonthMatchesBlock(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-full text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-[60px] font-extrabold w-full text-left",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MonthsNames"][Number(props.month) - 1].toUpperCase(),
                    " ",
                    props.year.toUpperCase()
                ]
            }, void 0, true, {
                fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            props.matches.map((match, index)=>{
                const dayName = new Date(props.year + '-' + props.month + '-' + match.day).toLocaleDateString("ru-RU", {
                    weekday: 'short'
                });
                const iconSrc = match.stadium.is_home ? __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$HomeIcon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$HomeIcon$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$PlaneIcon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$PlaneIcon$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row justify-between items-center max-h-[120px] border-t-[1px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "min-w-[70px] max-w-[70px] h-full w-full text-[45px] font-extrabold text-center",
                            children: Number(match.day)
                        }, void 0, false, {
                            fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                            lineNumber: 24,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center items-center min-w-[60px] max-w-[60px] h-full w-full text-center text-[15px] font-normal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: dayName.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: match.time
                                }, void 0, false, {
                                    fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                                    lineNumber: 27,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                            lineNumber: 25,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: " pl-[2px] pr-[2px] text-[20px] min-w-[123px] font-normal w-full max-w-[250px] text-center",
                            children: match.host.name.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                            lineNumber: 30,
                            columnNumber: 25
                        }, this),
                        match.host.img !== null && match.host.img !== undefined && match.host.img !== '' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-full min-w-[70px] w-[70px] max-w-[70px] h-full min-h-[70px]",
                            alt: `Логотип ${match.host.name}`,
                            src: match.host.img
                        }, void 0, false, {
                            fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                            lineNumber: 34,
                            columnNumber: 33
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full min-w-[70px] w-[70px] max-w-[70px] h-full min-h-[70px] bg-white"
                        }, void 0, false, {
                            fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                            lineNumber: 35,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-[190px] max-w-[190px] flex justify-center w-full text-[60px] flex flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-extrabold text-center flex-1 align-middle",
                                    children: match.host_score == 0 ? '-' : match.host_score
                                }, void 0, false, {
                                    fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                                    lineNumber: 39,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "w-[21px] text-[60px] text-center font-extrabold align-middle leading-[1.35]",
                                    children: ":"
                                }, void 0, false, {
                                    fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                                    lineNumber: 42,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-extrabold text-center flex-1 align-middle",
                                    children: match.guest_score == 0 ? '-' : match.guest_score
                                }, void 0, false, {
                                    fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                            lineNumber: 38,
                            columnNumber: 25
                        }, this),
                        match.guest.img !== null && match.guest.img !== undefined && match.guest.img !== '' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            alt: `Логотип ${match.guest.name}`,
                            src: match.guest.img
                        }, void 0, false, {
                            fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                            lineNumber: 49,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full min-w-[70px] w-[70px] max-w-[70px] h-full min-h-[70px] bg-white"
                        }, void 0, false, {
                            fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                            lineNumber: 50,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: " pl-[2px] pr-[2px] text-[20px] font-normal w-full min-w-[128px] max-w-[250px] text-center",
                            children: match.guest.name.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                            lineNumber: 53,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] font-normal w-full max-w-[150px] text-center shrink",
                            children: match.stadium.name.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                            lineNumber: 54,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            alt: "Иконка статуса места проведения",
                            src: iconSrc,
                            className: "w-[30px] h-[30px] mr-[10px] ml-[10px] object-center object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                            lineNumber: 55,
                            columnNumber: 25
                        }, this)
                    ]
                }, "Матч " + props.year + '/' + props.month + '/' + match.day + '-' + match.tournament + '-' + match.host.name + '-vs-' + match.guest.name + '-' + match.time + '-' + match.stadium.name + '-isHome-' + match.stadium.is_home + '-index=' + index, true, {
                    fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
                    lineNumber: 16,
                    columnNumber: 21
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx",
        lineNumber: 10,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$MatchList$2f$MonthMatchesBlock$2f$MonthMatchesBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Components/MatchList/MonthMatchesBlock/MonthMatchesBlock.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function MatchList(props) {
    const data = props.data;
    const [datesVisibleMatches, setDatesVisibleMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filteredData, setFilteredData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!datesVisibleMatches) return;
        const { startYear, endYear } = datesVisibleMatches;
        const filtered = data.filter((yearBlock)=>yearBlock.date_year === startYear || endYear !== null && yearBlock.date_year === endYear).map((yearBlock)=>{
            const filteredMonths = yearBlock.matchesByMonth.map((monthBlock)=>{
                const filteredMatches = typeVisibleMatches === 'ВСЕ МАТЧИ' ? monthBlock.matches : monthBlock.matches.filter((match)=>match.tournament === typeVisibleMatches);
                // Сортировка матчей по дню и времени (в убывающем порядке)
                const sortedMatches = filteredMatches.sort((a, b)=>{
                    const dateA = new Date(`${yearBlock.date_year}-${monthBlock.date_month}-${a.day}T${a.time}`);
                    const dateB = new Date(`${yearBlock.date_year}-${monthBlock.date_month}-${b.day}T${b.time}`);
                    return dateB.getTime() - dateA.getTime(); // убывание
                });
                return {
                    ...monthBlock,
                    matches: sortedMatches
                };
            }).filter((month)=>month.matches.length > 0).sort((a, b)=>Number(b.date_month) - Number(a.date_month)); // 🔽 месяцы
            return {
                ...yearBlock,
                matchesByMonth: filteredMonths
            };
        }).filter((year)=>year.matchesByMonth.length > 0).sort((a, b)=>Number(b.date_year) - Number(a.date_year)); // 🔽 года
        setFilteredData(filtered);
    }, [
        data,
        datesVisibleMatches,
        typeVisibleMatches
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col justify-start items-center gap-[45px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-30 w-full flex flex-row justify-start items-start gap-[10px]",
                children: [
                    datesForFilter.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$DropdownFilter$2f$DropdownFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        elements: datesForFilter.slice().reverse(),
                        handleSelectSetState: (activeDates)=>setDatesVisibleMatches(activeDates)
                    }, void 0, false, {
                        fileName: "[project]/Components/MatchList/MatchList.tsx",
                        lineNumber: 111,
                        columnNumber: 25
                    }, this) : null,
                    datesForFilter.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$DropdownFilter$2f$DropdownFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        elements: typesForFilter,
                        handleSelectSetState: (activeType)=>setTypeVisibleMatches(activeType)
                    }, void 0, false, {
                        fileName: "[project]/Components/MatchList/MatchList.tsx",
                        lineNumber: 118,
                        columnNumber: 25
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/Components/MatchList/MatchList.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            filteredData.map((mathcesByYear, index)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: mathcesByYear.matchesByMonth.map((mathcesByMonth, index)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$MatchList$2f$MonthMatchesBlock$2f$MonthMatchesBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            year: mathcesByYear.date_year,
                            month: mathcesByMonth.date_month,
                            matches: mathcesByMonth.matches
                        }, 'Блок матчей-' + mathcesByYear.date_year + '-' + mathcesByMonth.date_month + '-index=' + index, false, {
                            fileName: "[project]/Components/MatchList/MatchList.tsx",
                            lineNumber: 131,
                            columnNumber: 41
                        }, this);
                    })
                }, `year-${mathcesByYear.date_year}`, false, {
                    fileName: "[project]/Components/MatchList/MatchList.tsx",
                    lineNumber: 127,
                    columnNumber: 25
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/Components/MatchList/MatchList.tsx",
        lineNumber: 107,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=_05daa8e0._.js.map