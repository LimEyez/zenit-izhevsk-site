import TableElement from "./TableElement";
import { TournamentTableElementProps } from "./TournamentTableElement.interface";

export default function TournamentTableElement(props: TournamentTableElementProps) {



    const colSpan = [
        'col-span-4',
        'col-span-20',
        'col-span-5',
        'col-span-5',
        'col-span-5',
        'col-span-5',
        'col-span-10',
        'col-span-4'
    ];

    const tableHeadNames = [
        { name: '', },
        { name: props.groupName, },
        { name: 'И', },
        { name: 'В', },
        { name: 'Н', },
        { name: 'П', },
        { name: 'М', },
        { name: 'О', }
    ];

    const teamInfo = props.teams.reduce<(number | string)[][]>((accumulator, team, index) => {
        accumulator.push([index + 1, team.teamName, team.games, team.wins, team.draw, team.defeat, `${team.scoredGoals} - ${team.missedGoals}`, team.score]);
        return accumulator;
    }, []);


    return (
        <div
            className={`w-full bg-white overflow-hidden border-[2px] gap-[2px] 
        rounded-[30px] grid grid-cols-58 auto-rows-[minmax(60px,auto)]
        text-[30px] border-[4px] border-white`}>
            {/* Шапка таблицы (названия колонок) */}
            {tableHeadNames.map((th, index) => (
                <TableElement key={th.name} title={th.name} className={`font-extrabold ${colSpan[index]}`} />
            ))}
            {teamInfo.map((team, indexTeam) => (

                (team.map((info, index) => {
                    if (index == 1) {
                        return (
                            <TableElement key={props.groupName + 'index=' + indexTeam + '-indexParam=' + index} className={`font-light justify-start text-start ${colSpan[index]}`}>
                                <div className="w-[50px] h-[50px] bg-white mr-[15px] flex-shrink-0">
                                    
                                </div>
                                <p>
                                    {info}
                                </p>
                            </TableElement>
                        )
                    } else {
                        return (
                            <TableElement key={props.groupName + 'index=' + indexTeam + '-indexParam=' + index} className={`font-light ${colSpan[index]}`} title={info} />
                        )
                    }
                }))

            )
            )}
        </div>
    )
}