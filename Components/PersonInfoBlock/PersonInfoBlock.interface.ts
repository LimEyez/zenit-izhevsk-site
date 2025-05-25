import { StaticImageData } from "next/image";

export interface PersonInfoBlockProps {
    name: string,
    surname: string,
    age: number | string,
    src: string | StaticImageData,
    role: string
    biography?: string | null | undefined,
    personComment?: string | null | undefined
}