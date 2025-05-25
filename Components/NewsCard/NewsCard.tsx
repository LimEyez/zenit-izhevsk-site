import { RouteNames } from "@/lib/routesInfo";
import { NewsCardProps } from "./NewsCard.interface";
import Link from "next/link";
import Image from "next/image";
import DefaultImage from '@/public/images/Default-Image.png'
import { formatToRuDayMonthYear } from "@/lib/dateUtils";

export default function NewsCard(props: NewsCardProps) {


    const formatedDateString = formatToRuDayMonthYear(props.date);

    return (
        <div className="flex flex-col min-w-[285px] max-w-[285px] gap-[15px]">
            <div className="w-full h-[250px] flex justify-center items-center bg-white overflow-hidden">
                <Image
                    alt="Зенит-Ижевск стандартная обложка новости"
                    src={props.src !== null && props.src !== undefined && props.src !== '' ? props.src : DefaultImage}
                    className="object-cover w-full h-full scale-130"
                />
            </div>
            <div className="w-full h-[200px] flex flex-col gap-[5px]">
                <div className={
                    `w-full h-[66px] overflow-hidden text-[20px] 
                font-extrabold break-normal leading-5 line-clamp-3
                `}>
                    <Link 
                        href={RouteNames.news + `/${props.id}`}
                        className="transition-all linear duration-50 hover:text-[#10839D]"    
                    >
                        {props.title}
                    </Link>
                </div>
                <p className="w-full h-[118px] text-[15px] font-light break-normal line-clamp-5">
                    {props.newsDescription}
                </p>
                <p className="w-full h-[20px] text-[15px] font-light">
                    {formatedDateString}
                </p>
            </div>
        </div>
    )
} 