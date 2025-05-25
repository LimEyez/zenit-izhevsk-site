import { formatToRuTimeDayMonthYear } from "@/lib/dateUtils"
import Image from "next/image";
import DefaultImage from '@/public/images/Default-Carousel-Image.png'

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const data = {
        src: '',
        title: `Название новости ${(await params).id}.`,
        date: '2025-01-01T16:40:00',
        newsDescription: `Описание новости ${id}.`,
        alt: '',
        newsFullText: `Основной текст новости ${id}.`
    }

    const correctDateFormat = formatToRuTimeDayMonthYear(data.date, true);

    return (
        <div className="w-full flex flex-col items-center mt-[50px]">
            <div className="w-full max-w-[1200px] flex flex-col justify-center pl-[10px] pr-[10px]">
                <div className="w-full">
                    <p className="w-full text-[20px] font-medium text-white leading-none">
                        {correctDateFormat}
                    </p>
                </div>
                <div className="w-full mt-[50px]">
                    <h1 className="w-full text-[60px] font-extrabold text-white leading-[1.1]">
                        {data.title}
                    </h1>
                </div>
                <div className="w-full mt-[30px]">
                    <h1 className="w-full text-[30px] font-medium text-white leading-[1.1]">
                        {data.newsDescription}
                    </h1>
                </div>
                <div className="w-full mt-[30px]">
                    <Image alt={data.alt ? data.alt : 'Стандартное фото новости'} src={data.src ? data.src : DefaultImage} />
                </div>
                <div className="w-full">
                    <pre className={`
                    w-full whitespace-pre-line text-[20px] 
                    font-normal text-white font-[inter] mt-[30px]`}
                    >
                        {data.newsFullText}
                    </pre>
                </div>
            </div>
        </div>
    )
}