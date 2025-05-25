module.exports = {

"[project]/.next-internal/server/app/news/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/lib/dateUtils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/public/images/Default-Carousel-Image.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Default-Carousel-Image.e151fca2.png");}}),
"[project]/public/images/Default-Carousel-Image.png.mjs { IMAGE => \"[project]/public/images/Default-Carousel-Image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Default$2d$Carousel$2d$Image$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/Default-Carousel-Image.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Default$2d$Carousel$2d$Image$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 10560,
    height: 1440,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAHUlEQVR42mP48fP3/58g/Ov3//cfv4AxiP0DKgYAAkQfMPGoe60AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 1
};
}}),
"[project]/app/news/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NewsDetail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dateUtils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dateUtils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Default$2d$Carousel$2d$Image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Default$2d$Carousel$2d$Image$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Default-Carousel-Image.png.mjs { IMAGE => "[project]/public/images/Default-Carousel-Image.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
;
;
;
;
async function NewsDetail({ params }) {
    const { id } = await params;
    const data = {
        src: '',
        title: `Название новости ${(await params).id}.`,
        date: '2025-01-01T16:40:00',
        newsDescription: `Описание новости ${id}.`,
        alt: '',
        newsFullText: `Основной текст новости ${id}.`
    };
    const correctDateFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dateUtils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatToRuTimeDayMonthYear"])(data.date, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col items-center mt-[50px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[1200px] flex flex-col justify-center pl-[10px] pr-[10px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "w-full text-[20px] font-medium text-white leading-none",
                        children: correctDateFormat
                    }, void 0, false, {
                        fileName: "[project]/app/news/[id]/page.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/news/[id]/page.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mt-[50px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "w-full text-[60px] font-extrabold text-white leading-[1.1]",
                        children: data.title
                    }, void 0, false, {
                        fileName: "[project]/app/news/[id]/page.tsx",
                        lineNumber: 28,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/news/[id]/page.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mt-[30px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "w-full text-[30px] font-medium text-white leading-[1.1]",
                        children: data.newsDescription
                    }, void 0, false, {
                        fileName: "[project]/app/news/[id]/page.tsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/news/[id]/page.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mt-[30px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        alt: data.alt ? data.alt : 'Стандартное фото новости',
                        src: data.src ? data.src : __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Default$2d$Carousel$2d$Image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Default$2d$Carousel$2d$Image$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
                    }, void 0, false, {
                        fileName: "[project]/app/news/[id]/page.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/news/[id]/page.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: `
                    w-full whitespace-pre-line text-[20px] 
                    font-normal text-white font-[inter] mt-[30px]`,
                        children: data.newsFullText
                    }, void 0, false, {
                        fileName: "[project]/app/news/[id]/page.tsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/news/[id]/page.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/news/[id]/page.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/news/[id]/page.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}}),
"[project]/app/news/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/news/[id]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_57c8ab25._.js.map