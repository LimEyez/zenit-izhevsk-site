(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/Components/NewsCarousel/NewsCarousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NewsCarousel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
// import 'swiper/css/pagination'
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routesInfo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function NewsCarousel() {
    _s();
    const [swiperInstance, setSwiperInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sizesNewsContainer, setSizesNewsContainer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewsCarousel.useEffect": ()=>{
            // Функция для обновления размера окна
            //Функция получения размеров блока новостей
            const handleResize = {
                "NewsCarousel.useEffect.handleResize": ()=>{
                    const DocumentWidth = document.documentElement.clientWidth;
                    const width = DocumentWidth; //px
                    const height = width / 16 * 9; //px
                    setSizesNewsContainer({
                        width,
                        height
                    });
                }
            }["NewsCarousel.useEffect.handleResize"];
            // Инициализируем размеры окна при монтировании компонента
            handleResize();
            // Добавляем слушатель события изменения размера окна
            window.addEventListener('resize', handleResize);
            // Очистка слушателя при размонтировании компонента
            return ({
                "NewsCarousel.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                }
            })["NewsCarousel.useEffect"];
        }
    }["NewsCarousel.useEffect"], []); // Массив зависимостей пустой, значит эффект выполнится только один раз при монтировании
    const LastFiveNews = [
        {
            id: 1,
            title: "«ЗЕНИТ-ИЖЕВСК» - «ФАНКОМ» ИТОГИ МАТЧА 1",
            img: ''
        },
        {
            id: 2,
            title: "«ЗЕНИТ-ИЖЕВСК» - «ФАНКОМ» ИТОГИ МАТЧА 2",
            img: ''
        },
        {
            id: 3,
            title: "«ЗЕНИТ-ИЖЕВСК» - «ФАНКОМ» ИТОГИ МАТЧА 3",
            img: ''
        },
        {
            id: 4,
            title: "«ЗЕНИТ-ИЖЕВСК» - «ФАНКОМ» ИТОГИ МАТЧА 4",
            img: ''
        },
        {
            id: 5,
            title: "«ЗЕНИТ-ИЖЕВСК» - «ФАНКОМ» ИТОГИ МАТЧА 5",
            img: ''
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
        slidesPerView: 1,
        onSlideChange: ()=>console.log('slide change'),
        onSwiper: (swiper)=>setSwiperInstance(swiper),
        className: `
            w-[100vw] max-h-[70vh] min-h-[440px] flex 
            justify-center items-center relative 
            ]overflow-hidden transition-all duration-0 
        `,
        style: {
            height: sizesNewsContainer.height,
            width: sizesNewsContainer.width
        },
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: true,
        pagination: {
            clickable: true,
            bulletClass: 'swiper-pagination-bullet'
        },
        modules: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
        ],
        children: LastFiveNews.map((news, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full relative flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: `Фото новости ${news.title}-newsId=${news.id}`,
                            // src={news.img != null && news.img != undefined && news.img != '' ? 
                            //     news.img : DefaultCarouselImage}
                            className: "w-full h-full object-cover",
                            src: '/images/Default-Carousel-Image.png'
                        }, void 0, false, {
                            fileName: "[project]/Components/NewsCarousel/NewsCarousel.tsx",
                            lineNumber: 91,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute z-20 inset-0 h-full w-full newsCarouselGradientBottom"
                        }, void 0, false, {
                            fileName: "[project]/Components/NewsCarousel/NewsCarousel.tsx",
                            lineNumber: 98,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex flex-col justify-end items-center absolute inset-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[1200px] z-30 pb-[60px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesInfo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteNames"].news + `/${news.id}`,
                                    className: `
                                         text-white text-[60px] w-full font-extrabold 
                                        italic text-left leading-[1.1]
                                        `,
                                    children: news.title
                                }, void 0, false, {
                                    fileName: "[project]/Components/NewsCarousel/NewsCarousel.tsx",
                                    lineNumber: 102,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Components/NewsCarousel/NewsCarousel.tsx",
                                lineNumber: 100,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Components/NewsCarousel/NewsCarousel.tsx",
                            lineNumber: 99,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Components/NewsCarousel/NewsCarousel.tsx",
                    lineNumber: 90,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/Components/NewsCarousel/NewsCarousel.tsx",
                lineNumber: 88,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Components/NewsCarousel/NewsCarousel.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
_s(NewsCarousel, "OZ7AOmJYUjpxTzDT0LcOIerjv6U=");
_c = NewsCarousel;
var _c;
__turbopack_context__.k.register(_c, "NewsCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=Components_NewsCarousel_NewsCarousel_tsx_b47abb52._.js.map