import BasicTitle from "../BasicTitle/BasicTitle";
import { MembersCardListProps } from "./MembersCardList.interface";

export default function MembersCardList(props: MembersCardListProps) {
    return (
        <div className="flex flex-col items-center justify-center max-w-[1200px] gap-[15px]">
            {props.title !== null && props.title != undefined && props.title !== '' ? 
            <BasicTitle text={props.title} /> : null}
            <div className="flex flex-row justify-center items-center flex-wrap gap-[20px]">
                {props.children}
            </div>
        </div>
    )
}