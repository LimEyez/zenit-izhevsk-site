interface TeamInfo {
    name: string;
    img: string;
}

interface StadiumInfo {
    name: string;
    is_home: boolean;
}

interface Match {
    day: string;
    time: string;
    host: TeamInfo;
    guest: TeamInfo;
    host_score: number;
    guest_score: number;
    stadium: StadiumInfo;
    tournament: string;
}

interface MatchesByMonth {
    date_month: string; // формат MM
    matches: Match[];
}

interface MatchesByYear {
    date_year: string; // формат YYYY
    matchesByMonth: MatchesByMonth[];
}

export type MatchData = MatchesByYear[];
