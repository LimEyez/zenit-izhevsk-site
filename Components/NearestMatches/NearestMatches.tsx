import BasicTitle from "../BasicTitle/BasicTitle"
import NearestMatchElement from "./NearestMatchElement"

export default function NearestMatches() {

    const LastThreeMatches = [
        { id: 1, matchType: "Товарищеский матч", date: '2025-03-22', time: '14:00', stadium: 'СШОР Зенит-Ижевск', opposingTeam: "ФК Ильпар", score: '82:11' },
        { id: 2, matchType: "Товарищеский матч", date: '2025-04-02', time: '15:00', stadium: 'СШОР Зенит-Ижевск', opposingTeam: "ФК Шумбрат", score: '13:1' },
        { id: 3, matchType: "Товарищеский матч", date: '2025-04-12', time: '11:00', stadium: 'СШОР Зенит-Ижевск', opposingTeam: "ФК Волга", score: '0:0' }
    ]

    return (
        <div className="flex justify-center pt-[30px] pb-[30px] sm:px-[12px] xl:px-0 ">
            <div
                className=" max-w-[1200px] text-center"
            >
                <BasicTitle text="Ближайшие матчи" />
                <div
                    className="flex flex-row flex-wrap justify-center gap-[40px]"
                >
                    {LastThreeMatches.map((match) => {
                        const { id, matchType, date, time, stadium, opposingTeam, score } = match;
                        return (
                            <NearestMatchElement
                                key={matchType + '-id=' + id}
                                id={id}
                                matchType={matchType}
                                date={date}
                                time={time}
                                stadium={stadium}
                                opposingTeam={opposingTeam}
                                score={score}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}