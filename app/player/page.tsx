import { SubRouteNames } from "@/lib/subRoutesInfo";
import { redirect } from "next/navigation";

export default function PlayerPage() {
    redirect(SubRouteNames.players);
}