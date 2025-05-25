import { StaticImageData } from "next/image";

export interface PlayerInfoBlockProps {
    name: string,
    surname: string,
    playerNumber?: number | string | null | undefined,
    role: string,
    age: number | string,
    leadingLeg?: string | null | undefined,
    firstCoach?: string | null | undefined,
    schools?: string | null | undefined,
    achievements?: string | null | undefined,
    biography?: string | null | undefined,
    playerComment?: string | null | undefined,
    src: string | StaticImageData
}