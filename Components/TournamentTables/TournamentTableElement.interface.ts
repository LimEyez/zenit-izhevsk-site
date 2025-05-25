import { TeamElementTable } from "./TeamElementTable.type";

export interface TournamentTableElementProps {
    teams: TeamElementTable[],
    groupName?: string | null | undefined
}