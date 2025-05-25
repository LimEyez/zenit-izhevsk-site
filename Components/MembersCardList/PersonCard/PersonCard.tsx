import { SubRouteNames } from "@/lib/subRoutesInfo";
import { PersonCardProps } from "./PersonCard.interface";
import PhotoCard from "@/Components/PhotoCard/PhotoCard";
import { RouteNames } from "@/lib/routesInfo";


export default function PersonCard(props: PersonCardProps) {

    return (
        <PhotoCard
            href={RouteNames.person + `/${props.id}`} src={props.src} alt={`Фото ${props.name + ' ' + props.surname}`}
            width={285}
            height={350}
            borderRadius={10}
        >
            <div
                className={`
                flex h-full flex-col justify-end items-start 
                pr-[15px] pl-[15px] pb-[4px] pt-[4px] text-[20px] font-extrabold text-white
                italic leading-[1.1]
            `}
            >
                <p>
                    {props.name?.toUpperCase()}
                </p>
                <p>
                    {props.surname?.toUpperCase()}
                </p>
                <p className="font-light text-[20px] mt-[15px]">
                    {props.post?.toUpperCase()}
                </p>
            </div>
        </PhotoCard>
    )
}