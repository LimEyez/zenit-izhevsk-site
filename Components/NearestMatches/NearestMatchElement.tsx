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
            className="w-[360px] h-[360px] border rounded-[20px] flex flex-col justify-center text-center overflow-hidden p-[5px]"
        >
            {/* <div>

            </div> */}
            <div
                className="flex flex-1 flex-col justify-start pt-[38px]"
            >
                <p
                    className="text-[20px] font-light"
                >
                    {props.matchType.toUpperCase()}
                </p>
                <div className="flex flex-row justify-center h-[50px] p-[5px] text-[30px] font-bold">
                    <div className="w-[220px] flex flex-row">
                        <p className="font-extrabold text-center flex-1">
                            {formatedDateString}
                        </p>
                        <p className="w-[21px]"> | </p>
                        <p className="font-extrabold text-center flex-1">
                            {props.time}
                        </p>
                    </div>
                </div>
                <p
                    className="text-[20px] font-light"
                >
                    Стадион «{props.stadium}»
                </p>
            </div>
            <div
                className="flex flex-1 flex-col justify-start gap-[0px]"
            >
                <div className="flex flex-row justify-center h-[100px] p-[5px]">
                    <NearestMatchTeamIcon />
                    <div className="w-[192px] text-[60px] flex flex-row">
                        <p className="font-extrabold text-center flex-1 align-middle">
                            {scores[0]}
                        </p>
                        <p className="w-[21px] text-[60px] text-center font-extrabold align-middle leading-[1.35]">:</p>
                        <p className="font-extrabold text-center flex-1 align-middle">
                            {scores[1]}
                        </p>
                    </div>
                    <NearestMatchTeamIcon />
                </div>
                <div className="flex justify-center items-center">
                    <Link
                        href={RouteNames.matches + '/' + props.id}
                        className="w-[172.5px] h-[37px] flex justify-center items-center border rounded-[20px] hover:bg-[#FFFFFF] hover:text-[#00102D] transition-all duration-300 linear"
                    >
                        <p className="text-[20px] font-light">
                            ПОДРОБНЕЕ
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}