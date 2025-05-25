import { ShowMoreButtonProps } from "./ShowMoreButton.interface";

export default function ShowMoreButton(props: ShowMoreButtonProps) {
    return (
        <button
            onClick={props.func}
            className={`
                w-[220px] h-[60px] bg-[#001E51] 
                rounded-[65px] mt-[30px] mb-[30px]
                text-[20px] font-medium
                transition-all linear duration-100
                hover:bg-[#10839D]
            `}
        >
            ПОКАЗАТЬ ЕЩЁ
        </button>
    )
}