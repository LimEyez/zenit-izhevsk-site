import { SubNavigationProps } from "./SubNavigation.interface";
import SubNavigationButton from "./SubNavigationButton/SubNavigationButton";

export default function SubNavigation(props: SubNavigationProps) {

    return (
        <div className={`w-full flex justify-center items-center ${props.className}`}>
            <nav className="flex flex-row flex-wrap justify-center items-center w-full max-w-[1200px] gap-[30px]">
                {props.routeNames.map((route, index) => {
                    return (
                        <SubNavigationButton
                            key={route.title + '-indexSubRoute=' + index}
                            href={route.href}
                            title={route.title}
                        />
                    )
                })}
            </nav>
        </div>
    )
}