'use client'

import { SocialIcons } from "@/lib/socialIcons";
import { SocialRoutesHeader } from "@/lib/socialRoutesInfo"
import Link from "next/link"

export default function HeaderSocialLinks() {

    return (
        <header
            className="h-[30px] w-full bg-[#001E51] flex justify-center"
        >
            <div
                className=" w-full max-w-[1200px] flex flex-row justify-end gap-[20px] pe-[20px]"
            >
                {SocialRoutesHeader.map((route) => {
                    
                    //Берем иконку социальной сети, ключ которой совпадает с названием социальной сети (route.title)
                    const IconComponent = SocialIcons[route.title as keyof typeof SocialIcons];

                    return (
                        <div
                            key={route.title}
                            className="flex flex-row justify-center items-center font-light"
                        >
                            <Link
                                href={route.path}
                                target="_blank"
                                className="w-[20px] h-[20px] flex justify-center items-center"
                            >
                                <IconComponent
                                    className="w-full h-full text-[#CCD2DC] hover:text-white"
                                />
                            </Link>
                        </div>
                    )

                })}
            </div>
        </header>
    )
}