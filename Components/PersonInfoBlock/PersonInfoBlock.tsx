import Image from "next/image";
import { PersonInfoBlockProps } from "./PersonInfoBlock.interface";
import { title } from "process";

export default function PersonInfoBlock(props: PersonInfoBlockProps) {

    const info = [
        { title: "Возраст:", value: props.age },
        { title: "Должность:", value: props.role }
    ]

    const ElementInfo = ({ title, value }: { title: string, value: string | number }) => {
        return (
            <p className="text-[20px] text-white">
                <span className="font-normal">{title}</span>
                <span> </span>
                <span className="font-extrabold">{value}</span>
            </p>
        )
    }

    const BiographyAndCommentBlock = ({ title, value }: { title: string, value: string | number }) => {
        return (
            <div className="flex flex-col text-[30px] font-extrabold text-left mt-[25px]">
                <h1>
                    {title}
                </h1>
                <p className="font-normal text-[20px]">
                    {value}
                </p>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-row flex-wrap leading-[1.1] justify-start gap-[15px] text-[60px] font-extrabold">
                <p>{props.name}</p>
                <p>{props.surname}</p>
            </div>
            <div className="h-[3px] w-full bg-white rounded-[10px] mb-[20px]" />
            <div className="w-full">
                <div className="w-full h-full flex flex-row justify-center  flex-wrap  gap-[50px]">
                    <div className="flex justify-center items-center aspect-650/680 max-w-[650px]">
                        <Image className="object-cover h-full w-full" src={props.src} alt={`Фото ${props.name} ${props.surname}`} />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-[20px] min-w-[315px] flex-1">
                        {info.map((infoElement) => {
                            if (infoElement.value !== null && infoElement.value !== undefined && infoElement.value !== '') {
                                return (
                                    <ElementInfo
                                        key={`Информация ${infoElement.title} ${props.name} ${props.surname}`}
                                        title={infoElement.title}
                                        value={infoElement.value}
                                    />
                                )
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
                {props.biography !== null && props.biography !== undefined && props.biography !== '' ?
                    <BiographyAndCommentBlock title="Биография" value={props.biography} /> : null
                }
                {props.personComment !== null && props.personComment !== undefined && props.personComment !== '' ?
                    <BiographyAndCommentBlock title="Немного от игрока:" value={props.personComment} /> : null
                }
            </div>
        </div>

    )
}