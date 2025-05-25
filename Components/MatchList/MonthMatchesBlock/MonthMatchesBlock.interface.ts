export interface MonthMatchesBlockProps {
    year: string,
    month: number | string,
    matches: {
        day: number | string,
        time: string,
        host: {
            name: string,
            img: string
        },
        guest: {
            name: string,
            img: string
        },
        host_score: number,
        guest_score: number,
        stadium: {
            name: string,
            is_home: boolean
        },
        tournament: string
    }[]
}
