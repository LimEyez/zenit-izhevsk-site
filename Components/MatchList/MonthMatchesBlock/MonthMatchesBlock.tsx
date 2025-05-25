import { MonthsNames } from "@/lib/dateUtils";
import { MonthMatchesBlockProps } from "./MonthMatchesBlock.interface";
import Image from "next/image";
import HomeIcon from "@/public/images/HomeIcon.png"
import PlaneIcon from "@/public/images/PlaneIcon.png"

export default function MonthMatchesBlock(props: MonthMatchesBlockProps) {

    return (
        <div className="flex flex-col w-full text-white">
            <h1 className="text-[60px] font-extrabold w-full text-left">{MonthsNames[Number(props.month) - 1].toUpperCase()} {props.year.toUpperCase()}</h1>
            {props.matches.map((match, index) => {
                const dayName = new Date(props.year + '-' + props.month + '-' + match.day).toLocaleDateString("ru-RU", { weekday: 'short' });
                const iconSrc = match.stadium.is_home ? HomeIcon : PlaneIcon;
                return (
                    <div
                        key={"Матч " + props.year + '/' + props.month + '/' + match.day +
                            '-' + match.tournament + '-' + match.host.name + '-vs-' +
                            match.guest.name + '-' + match.time + '-' + match.stadium.name +
                            '-isHome-' + match.stadium.is_home + '-index=' + index
                        }
                        className="flex flex-row justify-between items-center max-h-[120px] border-t-[1px]"
                    >
                        <p className="min-w-[70px] max-w-[70px] h-full w-full text-[45px] font-extrabold text-center">{Number(match.day)}</p>
                        <div className="flex flex-col justify-center items-center min-w-[60px] max-w-[60px] h-full w-full text-center text-[15px] font-normal">
                            <p>{dayName.toUpperCase()}</p>
                            <p>{match.time}</p>
                        </div>
                        {/* Название принимающей команды */}
                        <p className=" pl-[2px] pr-[2px] text-[20px] min-w-[123px] font-normal w-full max-w-[250px] text-center">{match.host.name.toUpperCase()}</p>
                        {/* Логотип принимающей команды */}
                        {
                            match.host.img !== null && match.host.img !== undefined && match.host.img !== '' ?
                                <Image className="w-full min-w-[70px] w-[70px] max-w-[70px] h-full min-h-[70px]" alt={`Логотип ${match.host.name}`} src={match.host.img} /> :
                                <div className="w-full min-w-[70px] w-[70px] max-w-[70px] h-full min-h-[70px] bg-white" />
                        }
                        {/* Счет */}
                        <div className="min-w-[190px] max-w-[190px] flex justify-center w-full text-[60px] flex flex-row">
                            <p className="font-extrabold text-center flex-1 align-middle">
                                {match.host_score == 0 ? '-' : match.host_score}
                            </p>
                            <p className="w-[21px] text-[60px] text-center font-extrabold align-middle leading-[1.35]">:</p>
                            <p className="font-extrabold text-center flex-1 align-middle">
                                {match.guest_score == 0 ? '-' : match.guest_score}
                            </p>
                        </div>
                        {
                            match.guest.img !== null && match.guest.img !== undefined && match.guest.img !== '' ?
                            <Image alt={`Логотип ${match.guest.name}`} src={match.guest.img} /> :
                            <div className="w-full min-w-[70px] w-[70px] max-w-[70px] h-full min-h-[70px] bg-white" />
                        }
                        {/* Название команды соперника */}
                        <p className=" pl-[2px] pr-[2px] text-[20px] font-normal w-full min-w-[128px] max-w-[250px] text-center">{match.guest.name.toUpperCase()}</p>
                        <p className="text-[15px] font-normal w-full max-w-[150px] text-center shrink">{match.stadium.name.toUpperCase()}</p>
                        <Image
                            alt="Иконка статуса места проведения"
                            src={iconSrc}
                            className="w-[30px] h-[30px] mr-[10px] ml-[10px] object-center object-contain"
                        />
                    </div>
                )
            })}
        </div>
    )
}