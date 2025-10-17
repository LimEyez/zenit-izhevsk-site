import Link from "next/link";
import { NearestMatchElementProps } from "./NearestMatchElement.interface";
import NearestMatchTeamIcon from "./NearestMatchTeamIcon"
import { RouteNames } from "@/lib/routesInfo";

export default function NearestMatchElement(props: NearestMatchElementProps) {

    const matchDate = new Date(props.date);
    const formatedDateString = matchDate.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' })

    const scores = (() => {
        if (props.score) {
            return props.score?.split(':');
        } else {
            return ['-', '-']
        }
    })()

    return (
        <div
            className="w-[200px] h-[200px] border rounded-[16px] flex flex-col justify-center text-center overflow-hidden p-[5px] py-[15x]
            md:w-[360px] md:h-[360px] md:py-0"
        >
            <div
                className="flex flex-1 flex-col justify-center"
            >
                <p
                    className="text-[16px] font-light
                    "
                >
                    {props.matchType.toUpperCase()}
                </p>
                <div className=" text-[16px] flex flex-row justify-center p-0 font-bold
                md:text-[30px] md:5-[5px] md:h-[50px]
                ">
                    <div className="w-[220px] flex flex-row">
                        <p className="font-extrabold text-center flex-1">
                            {formatedDateString}
                        </p>
                        <p className="w-[14px]"> | </p>
                        <p className="font-extrabold text-center flex-1">
                            {props.time}
                        </p>
                    </div>
                </div>
                <p
                    className="text-[14px] font-light
                    md:text-[20px]"
                >
                    Стадион «{props.stadium}»
                </p>
            </div>
            <div
                className="flex flex-1 flex-col justify-start gap-[0px]"
            >
                <div className="flex flex-row justify-center p-[5px] 
                md:h-[100px]">
                    <NearestMatchTeamIcon 
                    className="w-[43px] md:w-[62px] bg-white"/>
                    <div className="w-[192px] text-[32px] flex flex-row justify-center items-center
                    md:text-[60px]
                    ">
                        <p className="font-extrabold text-center flex-1 align-middle">
                            {scores[0]}
                        </p>
                        <p className="w-[21px] text-[32x] text-center font-extrabold align-middle leading-[1.35]
                        md:text-[60px]">:</p>
                        <p className="font-extrabold text-center flex-1 align-middle">
                            {scores[1]}
                        </p>
                    </div>
                    <NearestMatchTeamIcon 
                    className="w-[43px] md:w-[62px] bg-white"/>
                </div>
                <div className="flex justify-center items-center">
                    <Link
                        href={RouteNames.matches + '/' + props.id}
                        className="w-[150px] h-[30px] flex justify-center items-center border 
                        rounded-[20px] hover:bg-[#FFFFFF] hover:text-[#00102D] transition-all duration-300 linear
                        md:w-w-[172.5px] md:h-[37px]"
                    >
                        <p className="text-[16px] font-light md:text-[20px]">
                            ПОДРОБНЕЕ
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}