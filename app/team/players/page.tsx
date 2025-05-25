import BasicTitle from "@/Components/BasicTitle/BasicTitle";
import Image from "next/image";
import DefaultImage from '@/public/images/Default-Image.png'
import MembersCardList from "@/Components/MembersCardList/MembersCardList";
import PlayerCard from "@/Components/MembersCardList/PlayerCard/PlayerCard";

export default function PlayersPage() {
    let NumberPlayer = 1;
    let idPlayer = 1;
    const data = [

        {
            role: 'Вратари', info: new Array(4).fill(null).map((value, index) => {
                const infoPlayer = { id: idPlayer, name: `Имя`, surname: "Фамилия", playerNumber: NumberPlayer };
                NumberPlayer++;
                idPlayer++;
                return (infoPlayer)
            }),
        },
        {
            role: 'Защитники', info: new Array(6).fill(null).map((value, index) => {
                const infoPlayer = { id: idPlayer, name: `Имя`, surname: "Фамилия", playerNumber: NumberPlayer };
                NumberPlayer++;
                idPlayer++;
                return (infoPlayer)
            }),
        },
        {
            role: 'Полузащитники', info: new Array(8).fill(null).map((value, index) => {
                const infoPlayer = { id: idPlayer, name: `Имя`, surname: "Фамилия", playerNumber: NumberPlayer };
                NumberPlayer++;
                idPlayer++;
                return (infoPlayer)
            }),
        },
        {
            role: 'Нападающие', info: new Array(3).fill(null).map((value, index) => {
                const infoPlayer = { id: idPlayer, name: `Имя`, surname: "Фамилия", playerNumber: NumberPlayer };
                NumberPlayer++;
                idPlayer++;
                return (infoPlayer)
            }),
        }
    ]

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="max-w-[1200px] text-center">
                <BasicTitle text="Состав команды" />
                <div className="w-full">
                    <Image className="w-full rounded-[10px]" alt="Состав команды Зенит Ижевск" src={DefaultImage} />
                </div>
                {data.map((players) => {
                    return (
                        <div key={`Список ${players.role}`} className="w-full pt-[30px] pb-[0px]">
                            <MembersCardList title={players.role} >
                                {players.info.map((player) => {
                                    return (
                                        <PlayerCard
                                            key={player.name + ' ' + player.surname + ' ' + '-idPlayer=' + player.id}
                                            id={player.id}
                                            name={player.name}
                                            surname={player.surname}
                                            playerNumber={player.playerNumber}
                                        />
                                    )
                                })}
                            </MembersCardList>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}