'use client'
import { RoutesHeader } from "@/lib/routesInfo"
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"
import ZenitIzhevskLogo from "@/public/images/Zenit-Izhevs-Logo.png"
import { useEffect, useState } from "react";


export default function Header() {

    const PathName = usePathname();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="h-[60px] flex flex-col justify-center items-center w-full bg-[#001947] z-2000 sticky top-0">
            <div className="w-full h-full max-w-[1200px] flex justify-center items-center">
                <nav className="w-full h-full flex items-center justify-around px-4">

                    <Link
                        href="/"
                        className={`shrink-0 z-1000 transition-all duration-300 linear ${scrolled ? 'scale-50' : 'scale-100'}`}
                    >
                        <Image
                            alt="Зенит Ижевск"
                            src={ZenitIzhevskLogo}
                            width={76}
                            height={104}
                        />
                    </Link>
                    {RoutesHeader.filter(route => route.path !== "/").map((route) => {
                        const isActive = PathName.startsWith(route.path); // Проверка активной страницы
                        return (
                            <Link
                                key={route.title}
                                href={route.path}
                                className={`
                                    text-[20px] transition-all linear duration-50 
                                    font-light hover:text-[#10839D] 
                                    ${isActive ? "text-[#10839D] border-b border-[#10839D]" : ""}
                                `}
                            >
                                {route.title.toUpperCase()}
                            </Link>
                        );
                    })}
                </nav>
                <div
                    className="flex-1"
                >
                </div>
            </div>
        </header>

    )
}
