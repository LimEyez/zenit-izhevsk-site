import SubNavigation from "@/Components/SubNavigation/SubNavigation";
import { SubTeamRouteInfo } from "@/lib/subRoutesInfo";
import { ReactNode } from "react";

export default function TeamLayout({ children }: { children: ReactNode }) {

    return (
        <div>
            <SubNavigation routeNames={SubTeamRouteInfo} className="pb-[30px] pt-[60px]"/>
            <div>
                {children}
            </div>
        </div>
    )
}