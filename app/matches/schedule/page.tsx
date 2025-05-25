import MatchList from "@/Components/MatchList/MatchList"
import { MatchData } from "@/lib/matches.interface"

export default async function SchedulePage() {

    const res = await fetch('http://localhost:3000/fetches/matches')
    const data : MatchData = await res.json();

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-[1200px] flex flex-col items-center justify-center">
                <MatchList data={data}/>
            </div>
        </div>
    )
}