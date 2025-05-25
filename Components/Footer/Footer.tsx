import { Contacts } from "@/lib/contacts";
import { SocialIcons } from "@/lib/socialIcons";
import { SocialRoutesFooter } from "@/lib/socialRoutesInfo";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full flex justify-center">
            <div className=" w-full max-w-[1200px] flex flex-row pl-[32px] pr-[32px] pt-[60px] pb-[60px] text-[16px] text-white/80 font-light">
                <div>
                    <p>
                        Контакты:
                    </p>
                    <p>
                        Адрес: {Contacts.adress}
                    </p>
                    <div className="flex flex-row gap-[5px]">

                        Телефон:
                        <p className="flex flex-col">

                            {Contacts.phoneNumbers.map((phoneNumber) => (
                                <span
                                    key={phoneNumber}
                                >
                                    {phoneNumber}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>

                <div
                    className="flex flex-row justify-end flex-1 gap-[15px]"
                >
                    {
                        SocialRoutesFooter.map((route) => {
                            const IconComponent = SocialIcons[route.title as keyof typeof SocialIcons]
                            return (
                                <Link
                                    key={route.title}
                                    href={route.path}
                                    target="_blank"
                                    className="w-[35px] h-[35px] flex justify-center items-center"
                                >
                                    <IconComponent
                                        className="w-full h-full text-[#CCD2DC] hover:text-white"
                                    />
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </footer>
    )
}