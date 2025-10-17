import { BasicTitleProps } from "./BasicTitle.interface";

export default function BasicTitle(props: BasicTitleProps) {
    return (
        <div
            className="w-full h-auto flex justify-center items-center mb-[15px] "
        >
            <h1
                className={`text-[26px] font-extrabold text-center
                    md:text-[32px]`}
                style={{
                    fontSize: props.fontSize,
                    fontWeight: props.fontWeight
                }}
            >
                {props.text.toUpperCase()}
            </h1>
        </div>
    )
}