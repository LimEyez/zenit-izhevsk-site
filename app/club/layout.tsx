import SubNavigation from "@/Components/SubNavigation/SubNavigation";
import { SubClubRouteInfo } from "@/lib/subRoutesInfo";
import { ReactNode } from "react";

export default function ClubLayout({ children }: { children: ReactNode }) {

    return (
        <div>
            <SubNavigation routeNames={SubClubRouteInfo} className="pt-[60px] pb-[30px]" />
            <div>
                {children}
            </div>
        </div>
    )
}