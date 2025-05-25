import TournamentTables from "@/Components/TournamentTables/TournamentTables";

export default function TablesPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
                <TournamentTables />
            </div>
        </div>
    )
}