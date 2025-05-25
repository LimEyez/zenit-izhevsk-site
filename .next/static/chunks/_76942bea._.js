(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/public/images/Default-Carousel-Image.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Default-Carousel-Image.e151fca2.png");}}),
"[project]/public/images/Default-Carousel-Image.png.mjs { IMAGE => \"[project]/public/images/Default-Carousel-Image.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Default$2d$Carousel$2d$Image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Default$2d$Carousel$2d$Image$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Default-Carousel-Image.png.mjs { IMAGE => "[project]/public/images/Default-Carousel-Image.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
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
function NewsCarousel() {
    _s();
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
                    const DocumentHeight = document.documentElement.clientHeight;
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
            title: "First slide",
            img: ''
        },
        {
            id: 2,
            title: "Second slide",
            img: ''
        },
        {
            id: 3,
            title: "Third slide",
            img: ''
        },
        {
            id: 4,
            title: "Fourth slide",
            img: ''
        },
        {
            id: 5,
            title: "Fifth slide",
            img: ''
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
        // spaceBetween={50}
        slidesPerView: 1,
        onSlideChange: ()=>console.log('slide change'),
        onSwiper: (swiper)=>console.log(swiper),
        className: `
            w-[100vw] max-h-[70vh] min-h-[440px] flex 
            justify-center items-center relative 
            ]overflow-hidden transition-all duration-0
        `,
        style: {
            height: sizesNewsContainer.height,
            width: sizesNewsContainer.width
        },
        children: LastFiveNews.map((news, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    alt: `Фото новости ${news.title}-newsId=${news.id}`,
                    src: news.img != null && news.img != undefined && news.img != '' ? news.img : __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Default$2d$Carousel$2d$Image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Default$2d$Carousel$2d$Image$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    className: "w-full h-full object-cover",
                    quality: 100
                }, void 0, false, {
                    fileName: "[project]/Components/NewsCarousel/NewsCarousel.tsx",
                    lineNumber: 71,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/Components/NewsCarousel/NewsCarousel.tsx",
                lineNumber: 70,
                columnNumber: 17
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Components/NewsCarousel/NewsCarousel.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
} // export default function NewsCarousel() {
 //     const [sizesNewsContainer, setSizesNewsContainer] = useState<{
 //         width: number, height: number
 //     }>({
 //         width: 0,
 //         height: 0
 //     });
 //     useEffect(() => {
 //         // Функция для обновления размера окна
 //         //Функция получения размеров блока новостей
 //         const handleResize = () => {
 //             const DocumentWidth = document.documentElement.clientWidth;
 //             const DocumentHeight = document.documentElement.clientHeight
 //             const width = DocumentWidth; //px
 //             const height = (width / 16) * 9; //px
 //             setSizesNewsContainer({ width, height });
 //         };
 //         // Инициализируем размеры окна при монтировании компонента
 //         handleResize();
 //         // Добавляем слушатель события изменения размера окна
 //         window.addEventListener('resize', handleResize);
 //         // Очистка слушателя при размонтировании компонента
 //         return () => {
 //             window.removeEventListener('resize', handleResize);
 //         };
 //     }, []); // Массив зависимостей пустой, значит эффект выполнится только один раз при монтировании
 //     const LastFiveNews = [
 //         { id: 1, title: "First slide", img: '' },
 //         { id: 2, title: "Second slide", img: '' },
 //         { id: 3, title: "Third slide", img: '' },
 //         { id: 4, title: "Fourth slide", img: '' },
 //         { id: 5, title: "Fifth slide", img: '' }
 //     ];
 // 
 // 
 // return (
 //     <div 
 //         className={`w-full max-h-[70vh] min-h-[440px] flex justify-center items-center relative overflow-hidden transition-all duration-0`}
 //         style={{
 //             height: sizesNewsContainer.height + 'px',
 //             maxHeight: '70vh'
 //         }}
 //     >
 //         <div className="transition-all duration-300 w-full h-full object-cover">
 //             <div className="transition-all duration-300 h-full">
 //                 <img
 //                     src={'/images/Default-Carousel-Image.png'}
 //                     className="w-full h-full newsCarouselImage"
 //                     alt="Зенит Ижевск фон слайдера"
 //                 />
 //             </div>
 //         </div>
 //         <div className="absolute inset-0 h-full w-full newsCarouselGradientBottom"></div>
 //     </div>
 // );
 // }
_s(NewsCarousel, "L88590LeGeofUuMFCcCWJb6V6T4=");
_c = NewsCarousel;
var _c;
__turbopack_context__.k.register(_c, "NewsCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_76942bea._.js.map