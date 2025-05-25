export interface PhotoCardProps {
    src: string | null | undefined,
    alt: string,
    width?: number | string | null | undefined,
    height?: number | string | null | undefined,
    children?: React.ReactNode,
    href?: string | null | undefined,
    borderRadius? : number | string | null | undefined
}