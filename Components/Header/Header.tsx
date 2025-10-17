'use client'
import { RoutesHeader } from "@/lib/routesInfo"
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"
import ZenitIzhevskLogo from "@/public/images/Zenit-Izhevs-Logo.png"
import { useEffect, useState } from "react";


export default function Header() {

    const PathName = usePathname();

    const [scrolled, setScrolled] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const checkScrollTop = () => {
        if (window.scrollY > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {

        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);

        };
    }, []);

    return (
        <header className="
        h-[60px] flex flex-col justify-center items-center w-full bg-[#001947] z-2000 sticky top-0
        ">
            {/* WIDTH >= 1000px */}
            <div className="w-full h-full max-w-[1200px] justify-center items-center hidden 
            lg:flex">
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
                                    font-light not-focus:[#000000] hover:text-[#10839D] 
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
            {/* WIDTH < 1000px */}
            <div className="w-full h-full max-w-[1200px] justify-center items-center flex
             lg:hidden">
                <nav className="w-full h-full flex items-center px-4">

                    <Link
                        href="/"
                        className={`shrink-0 z-1000 transition-all duration-300 linear scale-50`}
                    >
                        <Image
                            alt="Зенит Ижевск"
                            src={ZenitIzhevskLogo}
                            width={76}
                            height={104}
                        />
                    </Link>
                    <i className="absolute right-4 top-1/2 -translate-y-1/2" onClick={toggleMenu}>
                        {/* Иконка "гамбургер" */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ms-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </i>
                    {menuOpen && (
                        <div className="absolute top-[60px] h-screen right-0 w-full bg-[#00102D] flex flex-col items-center z-1000">
                            {RoutesHeader.filter(route => route.path !== "/").map((route) => {
                                const isActive = PathName.startsWith(route.path); // Проверка активной страницы
                                return (
                                    <Link
                                        key={route.title}
                                        href={route.path}
                                        className={`
                                    text-[24px] transition-all linear duration-50 
                                    font-light not-focus:[#000000] hover:text-[#10839D] 
                                    h-[50px]  w-screen flex items-center pl-[24px]
                                    ${isActive ? "text-[#10839D]" : ""}
                                    border-b-[1px] border-gray-600
                                `}
                                    >
                                        {route.title.toUpperCase()}
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </nav>
            </div>
        </header>

    )

}
