import { SubClubRouteInfo } from "@/lib/subRoutesInfo";
import { redirect } from "next/navigation";

export default function ClubPage() {
  redirect(SubClubRouteInfo[0].href);
}
