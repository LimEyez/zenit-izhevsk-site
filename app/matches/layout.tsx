import BasicTitle from "@/Components/BasicTitle/BasicTitle";
import SubNavigation from "@/Components/SubNavigation/SubNavigation";
import { SubMatchesRouteInfo } from "@/lib/subRoutesInfo";
import { ReactNode } from "react";

export default function ClubLayout({ children }: { children: ReactNode }) {

    return (
        <div className="pt-[30px]">
            <BasicTitle text="Календарь матчей"/>
            <SubNavigation routeNames={SubMatchesRouteInfo} className="pt-0 pb-[30px]"/>
            <div className="w-full flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    )
}