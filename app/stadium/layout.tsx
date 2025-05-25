import SubNavigation from "@/Components/SubNavigation/SubNavigation";
import { SubStadiumRouteInfo } from "@/lib/subRoutesInfo";
import { ReactNode } from "react";

export default function ClubLayout({ children }: { children: ReactNode }) {

    return (
        <div>
            <SubNavigation routeNames={SubStadiumRouteInfo} className="pt-[60px] pb-[30px]"/>
            <div className="w-full flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    )
}