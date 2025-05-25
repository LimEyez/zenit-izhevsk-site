import { title } from "process";
import { RouteNames } from "./routesInfo";

export const SubRouteNames = {
    players: `${RouteNames.team}/players`,
    coaches: `${RouteNames.team}/coaches`,
    staff: `${RouteNames.team}/staff`,
    aboutClub: `${RouteNames.club}/about`,
    administration: `${RouteNames.club}/administration`,
    media: `${RouteNames.club}/media`,
    aboutStadium: `${RouteNames.stadium}/about`,
    howToGet: `${RouteNames.stadium}/how-to-get`,
    parking: `${RouteNames.stadium}/parking`,
    schedule: `${RouteNames.matches}/schedule`,
    tables: `${RouteNames.matches}/tables`
}

export const SubTeamRouteInfo = [
    { title: "Игроки", href: SubRouteNames.players },
    { title: "Тренерский штаб", href: SubRouteNames.coaches },
    { title: "Персонал", href: SubRouteNames.staff }
]

export const SubClubRouteInfo = [
    { title: "О клубе", href: SubRouteNames.aboutClub },
    { title: "Руководство", href: SubRouteNames.administration },
    { title: "Медиа", href: SubRouteNames.media }
]

export const SubStadiumRouteInfo = [
    { title: "Стадион", href: SubRouteNames.aboutStadium },
    { title: "Как добраться", href: SubRouteNames.howToGet },
    { title: "Парковки", href: SubRouteNames.parking }
]

export const SubMatchesRouteInfo = [
    { title: "Расписание", href: SubRouteNames.schedule },
    { title: "Таблицы", href: SubRouteNames.tables },
]