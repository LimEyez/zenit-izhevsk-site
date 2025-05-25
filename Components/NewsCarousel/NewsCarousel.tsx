'use client'
import { useEffect, useState } from 'react';
import '@/app/globals.css'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // если используешь стрелки
// import 'swiper/css/pagination'
import Link from 'next/link';
import { RouteNames } from '@/lib/routesInfo';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import PaginationNewsCarousel from './PaginationNewsCarousel';
import type { Swiper as SwiperClass } from 'swiper';

export default function NewsCarousel() {

    const LastFiveNews = [
        { id: 1, title: "«ЗЕНИТ-ИЖЕВСК» - «ФАНКОМ» ИТОГИ МАТЧА 1", img: '' },
        { id: 2, title: "«ЗЕНИТ-ИЖЕВСК» - «ФАНКОМ» ИТОГИ МАТЧА 2", img: '' },
        { id: 3, title: "«ЗЕНИТ-ИЖЕВСК» - «ФАНКОМ» ИТОГИ МАТЧА 3", img: '' },
        { id: 4, title: "«ЗЕНИТ-ИЖЕВСК» - «ФАНКОМ» ИТОГИ МАТЧА 4", img: '' },
        { id: 5, title: "«ЗЕНИТ-ИЖЕВСК» - «ФАНКОМ» ИТОГИ МАТЧА 5", img: '' }
    ];

    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
    const [indexActiveSlide, setIndexActiveSlide] = useState<number>(0);

    const [sizesNewsContainer, setSizesNewsContainer] = useState<{
        width: number, height: number
    }>({
        width: 0,
        height: 0
    });

    const moveToSlide = (index: number) => {
        swiperInstance?.slideToLoop(index);
    }

    useEffect(() => {
        // Функция для обновления размера окна
        //Функция получения размеров блока новостей
        const handleResize = () => {
            const DocumentWidth = document.documentElement.clientWidth;

            const width = DocumentWidth; //px
            const height = (width / 16) * 9; //px

            setSizesNewsContainer({ width, height });
        };

        // Инициализируем размеры окна при монтировании компонента
        handleResize();

        // Добавляем слушатель события изменения размера окна
        window.addEventListener('resize', handleResize);

        // Очистка слушателя при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Массив зависимостей пустой, значит эффект выполнится только один раз при монтировании

    return (
        <Swiper
            slidesPerView={1}
            speed={1500}
            onSlideChange={(swiper) =>{
                setIndexActiveSlide(swiper.realIndex)
                swiper.autoplay.start();
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            className={`
            w-[100vw] max-h-[70vh] min-h-[440px] flex 
            justify-center items-center relative 
            ]overflow-hidden transition-all duration-0 
        `}
            style={{
                height: sizesNewsContainer.height,
                width: sizesNewsContainer.width,
            }}
            loop={true}
            spaceBetween={30}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            // navigation={true}
            modules={[Autoplay]}
        >
            {LastFiveNews.map((news, index) => {
                return (
                    <SwiperSlide
                        className='relative'
                    >
                        <div className='w-full h-full relative flex flex-col items-center'>
                            <img
                                alt={`Фото новости ${news.title}-newsId=${news.id}`}
                                // src={news.img != null && news.img != undefined && news.img != '' ? 
                                //     news.img : DefaultCarouselImage}
                                className="w-full h-full object-cover"
                                src={'/images/Default-Carousel-Image.png'}
                            />
                            <div className="absolute z-20 inset-0 h-full w-full newsCarouselGradientBottom"></div>
                            <div className='w-full h-full flex flex-col justify-end items-center absolute inset-0'>
                                <div className='w-full max-w-[1200px] z-30 pb-[60px]'>

                                    <Link
                                        href={RouteNames.news + `/${news.id}`}
                                        className={`
                                         text-white text-[60px] w-full font-extrabold 
                                        italic text-left leading-[1.1]
                                        `}
                                    >
                                        {news.title}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
            <div className='absolute flex flex-col pb-[30px] justify-end items-center z-60 inset-0 pointer-events-none'>
                <div className='w-full max-w-[1200px] pl-[10px] pr-[10px]'>
                    <PaginationNewsCarousel
                        NumberOfSlides={LastFiveNews.length}
                        className='w-full h-full '
                        moveToSlide={moveToSlide}
                        activeIndex={indexActiveSlide}
                    />
                </div>
            </div>
        </Swiper>
    );
}