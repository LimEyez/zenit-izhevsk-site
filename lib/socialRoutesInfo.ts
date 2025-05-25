import { SocialIcons } from "./socialIcons"

export const SocialRouteNames = {
    telegram: "https://t.me/zenitizhevsk",
    vk: "https://vk.com/fczenitizhevsk",
    youtube: "https://www.youtube.com/@zenitizhevsk2024"
}

export const SocialRoutesContactsPage = [
    { title: "telegram", path: SocialRouteNames.telegram, icon: SocialIcons.telegram},
    { title: "vk", path: SocialRouteNames.vk, icon: SocialIcons.vk },
    { title: "youtube", path: SocialRouteNames.youtube, icon: SocialIcons.youtube },
]

export const SocialRoutesHeader = [
    { title: "telegram", path: SocialRouteNames.telegram, },
    { title: "vk", path: SocialRouteNames.vk },
    { title: "youtube", path: SocialRouteNames.youtube },
]

export const SocialRoutesFooter = [
    { title: "telegram", path: SocialRouteNames.telegram },
    { title: "vk", path: SocialRouteNames.vk },
]