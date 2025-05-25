import { BasicTitleProps } from "./BasicTitle.interface";

export default function BasicTitle(props: BasicTitleProps) {
    return (
        <div
            className="w-full h-auto flex justify-center items-center mb-[15px]"
        >
            <h1
                className={`text-[60px] font-extrabold text-center`}
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