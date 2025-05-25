import { SubMatchesRouteInfo } from "@/lib/subRoutesInfo";
import { redirect } from "next/navigation";

export default function MatchesPage() {
  redirect(SubMatchesRouteInfo[0].href);
}
