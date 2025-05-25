import BasicTitle from "@/Components/BasicTitle/BasicTitle";
import Image, { StaticImageData } from "next/image";
import { title } from "process";
import DefaultImage from '@/public/images/Default-Image.png'
export default function AboutClubPage() {
    const data = [
        { title: 'Визитная карточка', info: 'Информация' },
        { title: 'Клубная история', info: 'Информация' },
    ]

    const performanceHistoryData = [
        { title: 'Название события 1', images: [{ alt: '', src: DefaultImage }], description: 'Описание...' },
        { title: 'Название события 2', images: [{ alt: '', src: DefaultImage }, { alt: '', src: DefaultImage }], description: 'Описание...' }
    ]

    const src = null;

    const InfoBlock = ({ title, info }: { title: string, info: string }) => {
        return (
            <div className="flex flex-col text-[30px] font-normal mt-[20px] mb-[20px]">
                <h1 className="font-extrabold mb-[20px]">
                    {title}
                </h1>
                <p className="text-[20px]">
                    {info}
                </p>
            </div>
        )
    }

    const PerformanceHistoryBlock = ({ title, images, description }:
        { title: string, images: { src: string | StaticImageData, alt: string }[] | null | undefined, description: string }) => {
        return (
            <div className="flex flex-col text-[30px] font-normal mt-[20px] mb-[20px]">
                <h1 className="font-extrabold mb-[10px]">
                    {title}
                </h1>
                <div className="flex flex-col gap-[20px]">
                    {images?.map((img) => {
                        return (
                            <Image
                                key={`Фото ${img.alt}`}
                                className="h-full max-h-[460px] object-contain object-left"
                                alt={img.alt}
                                src={img.src}
                            />
                        )
                    })}
                </div>
                <p className="text-[20px] mt-[50px]">
                    {description}
                </p>
            </div>
        )
    }

    return (
        <div className="w-full flex justify-center">
            <div className='w-full max-w-[1200px] flex-col justify-center'>
                <BasicTitle text="О клубе" />
                <Image
                    src={src !== null && src !== undefined && src !== '' ? src : DefaultImage}
                    alt="Фото Зенит Ижвск"
                />
                {data.map((info) => {
                    return (
                        <InfoBlock
                            key={`Зенит Ижевск о клубе: ${info.title}`}
                            title={info.title}
                            info={info.info}
                        />
                    )
                })}
                {performanceHistoryData.map((info) => {
                    return (
                        <PerformanceHistoryBlock
                            key={`Зенит Ижевск о клубе: ${info.title}`}
                            images={info.images}
                            description={info.description}
                            title={info.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}