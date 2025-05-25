


import Link from "next/link";
import { RouteNames } from "@/lib/routesInfo";
import { LatestNewsProps } from "../LatestNews/LatestNewsElement.interface";
import Image from "next/image"
import PhotoCard from "../PhotoCard/PhotoCard";

export default function LatestNewsElement(props: LatestNewsProps) {

    const href = RouteNames.news + `/${props.id}`

    return (
        <PhotoCard
            alt={props.alt}
            href={href}
            src={props.src}
            
        >
            <div className="flex h-full flex-col justify-end pr-[15px] pl-[15px] pb-[30px] text-[20px] font-bold text-white ">
                <p>
                    {props.title}
                </p>
            </div>
        </PhotoCard>
    )
}