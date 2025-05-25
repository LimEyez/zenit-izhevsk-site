'use client'
import Link from "next/link";
import { SubNavigationButtonProps } from "./SubNavigationButton.interface";
import { usePathname } from "next/navigation";

export default function SubNavigationButton(props: SubNavigationButtonProps) {

    const PathName = usePathname();

    const activeClass = PathName == props.href ? 'bg-[#10839D] hover:text-white' : 'bg-[#001E51]';

    return (
        <Link href={props.href} className={`
            flex justify-center items-center text-[20px] 
            font-medium min-w-[200px] pt-[15px] 
            pb-[15px] pl-[15px] pr-[15px] text-center min-w-[240px] max-h-[60px]
            rounded-[65px] transition-all linear duration-100 text-white hover:text-[#10839D]
            ${activeClass}
            `}>
            <p>{props.title.toUpperCase()}</p>
        </Link>
    )
}