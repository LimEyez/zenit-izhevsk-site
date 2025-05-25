module.exports = {

"[project]/.next-internal/server/app/team/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/team/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/team/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/lib/routesInfo.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteNames": (()=>RouteNames),
    "RoutesHeader": (()=>RoutesHeader)
});
const RouteNames = {
    main: "/",
    news: "/news",
    team: "/team",
    club: "/club",
    matches: "/matches",
    stadium: "/stadium",
    contacts: "/contacts"
};
const RoutesHeader = [
    {
        title: "Главная",
        path: RouteNames.main
    },
    {
        title: "Новости",
        path: RouteNames.news
    },
    {
        title: "Команда",
        path: RouteNames.team
    },
    {
        title: "Клуб",
        path: RouteNames.club
    },
    {
        title: "Матчи",
        path: RouteNames.matches
    },
    {
        title: "Стадион",
        path: RouteNames.stadium
    },
    {
        title: "Контакты",
        path: RouteNames.contacts
    }
];
}}),
"[project]/lib/subRoutesInfo.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SubTeamRouteInfo": (()=>SubTeamRouteInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesInfo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routesInfo.ts [app-rsc] (ecmascript)");
;
const SubTeamRouteInfo = [
    {
        title: "Игроки",
        href: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesInfo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteNames"].team}/gamers`
    },
    {
        title: "Тренерский штаб",
        href: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesInfo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteNames"].team}/coaches`
    },
    {
        title: 'Персонал',
        href: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesInfo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteNames"].team}/staff`
    }
];
}}),
"[project]/app/team/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TeamPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$subRoutesInfo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/subRoutesInfo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
function TeamPage() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$subRoutesInfo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubTeamRouteInfo"][0].href);
}
}}),
"[project]/app/team/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/team/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_655a75cc._.js.map