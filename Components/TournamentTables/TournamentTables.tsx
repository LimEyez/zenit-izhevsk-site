
import BasicTitle from "../BasicTitle/BasicTitle";
import TournamentTableElement from "./TournamentTableElement";

export default function TournamentTables() {

    // group: Название команды
    // games: Количество игр
    // wins: Подеды
    // draw: Ничьи
    // defeat: Поражения
    // scoredGoals: Забитые мячи
    // missedGoals: Пропущенные мячи
    // score: Очки


    const tables = [
        {
            tableName: "Чемпионат МФС Приволжье. Сезон-2024",
            groupName: "Группа А",
            info: [
                {
                    teamName: "Шумбрат",
                    games: 14,
                    wins: 11,
                    draw: 2,
                    defeat: 1,
                    scoredGoals: 41,
                    missedGoals: 6,
                    score: 35
                },
                {
                    teamName: "Дорожник",
                    games: 14,
                    wins: 10,
                    draw: 2,
                    defeat: 2,
                    scoredGoals: 38,
                    missedGoals: 11,
                    score: 32
                },
                {
                    teamName: "БоМИК",
                    games: 14,
                    wins: 9,
                    draw: 3,
                    defeat: 2,
                    scoredGoals: 28,
                    missedGoals: 10,
                    score: 30
                },
                {
                    teamName: "Оргэнергострой",
                    games: 14,
                    wins: 7,
                    draw: 2,
                    defeat: 5,
                    scoredGoals: 28,
                    missedGoals: 15,
                    score: 23
                },
                {
                    teamName: "Зенит-Ижевск",
                    games: 14,
                    wins: 6,
                    draw: 3,
                    defeat: 5,
                    scoredGoals: 20,
                    missedGoals: 18,
                    score: 21
                },
                {
                    teamName: "СШОР Сокол-М",
                    games: 14,
                    wins: 3,
                    draw: 3,
                    defeat: 8,
                    scoredGoals: 14,
                    missedGoals: 31,
                    score: 12
                },
                {
                    teamName: "Университет",
                    games: 14,
                    wins: 2,
                    draw: 1,
                    defeat: 11,
                    scoredGoals: 7,
                    missedGoals: 35,
                    score: 7
                },
                {
                    teamName: "СШ-Волга-М",
                    games: 14,
                    wins: 0,
                    draw: 0,
                    defeat: 14,
                    scoredGoals: 9,
                    missedGoals: 59,
                    score: 0
                }
            ]
        },
        {
            tableName: "Кубок МФС Приволжье. Сезон-2024",
            groupName: "Группа С",
            info: [
                {
                    teamName: "ЛАТО",
                    games: 6,
                    wins: 5,
                    draw: 0,
                    defeat: 1,
                    scoredGoals: 18,
                    missedGoals: 3,
                    score: 6
                },
                {
                    teamName: "Зенит-Ижевск",
                    games: 6,
                    wins: 4,
                    draw: 1,
                    defeat: 1,
                    scoredGoals: 22,
                    missedGoals: 8,
                    score: 6
                },
                {
                    teamName: "СШ-Волга-М",
                    games: 6,
                    wins: 1,
                    draw: 2,
                    defeat: 3,
                    scoredGoals: 9,
                    missedGoals: 17,
                    score: 6
                },
                {
                    teamName: "УОР-СШ",
                    games: 6,
                    wins: 0,
                    draw: 1,
                    defeat: 5,
                    scoredGoals: 3,
                    missedGoals: 24,
                    score: 6
                }
            ]
        }
    ];


    return (
        <div className="h-auto w-full pt-[30px] pb-[30px] flex justify-center items-center">
            <div
                className="h-full w-full max-w-[1200px] flex flex-col justify-center items-center shrink-0 sm:pl-[12px] sm:pr-[12px] xl:pl-0 xl:pr-0"
            >
                <BasicTitle text="Турнирные таблицы" />
                <div className="h-full w-full flex flex-col justify-center gap-[30px]">
                    {
                        tables.map((table) => {
                            return (
                                <div key={table.tableName} className="flex flex-col justify-start w-full">
                                    <p className="mb-[15px] pl-[45px] pr-[45px] text-[30px] font-light">
                                        {table.tableName}
                                    </p>
                                    <TournamentTableElement
                                        groupName={table.groupName}
                                        teams={table.info}
                                    />
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}