import BasicTitle from "@/Components/BasicTitle/BasicTitle";
import ParkingDefaultImage from '@/public/images/Parking-Default-Image.png'
import Image from "next/image";

export default function ParkingPage() {

    const data = [
        {
            src: '',
            text: `На территории, прилегающей к парку им. Кирова, а также вдоль улицы Береговая находится бесплатная парковка.
            `
        }
    ]

    const src = data[0].src !== null && data[0].src !== undefined && data[0].src !== '' ?
        data[0].src : ParkingDefaultImage

    return (

        <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
            <BasicTitle text="Парковки" />
            <Image
                alt="Фото схемы парковок стадиона Купол"
                className="h-full max-h-[670px] w-full object-contain"
                src={src}
            />
            <pre className=" w-full mt-[30px] whitespace-pre-line text-[20px] font-normal font-[inter]">
                {data[0].text}
            </pre>
        </div>

    )
}