import PhotoCard from "@/Components/PhotoCard/PhotoCard";
import { PlayerCardProps } from "./PlayerCard.interface";
import { RouteNames } from "@/lib/routesInfo";

export default function PlayerCard(props: PlayerCardProps) {

    return (
        <PhotoCard
            href={RouteNames.player + `/${props.id}`} src={props.src} alt={`Фото ${props.name + ' ' + props.surname}`}
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
                <p className="font-black text-[45px] mt-[5px]">
                    {String(props.playerNumber).toUpperCase()}
                </p>
            </div>
        </PhotoCard>
    )
}