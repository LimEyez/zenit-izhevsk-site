import { SubTeamRouteInfo } from "@/lib/subRoutesInfo";
import { redirect } from "next/navigation";


export default function TeamPage() {
    redirect(SubTeamRouteInfo[0].href);
  }
  