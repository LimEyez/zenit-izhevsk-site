import { SubStadiumRouteInfo } from "@/lib/subRoutesInfo";
import { redirect } from "next/navigation";

export default function StadiumPage() {
  redirect(SubStadiumRouteInfo[0].href)
  }
  