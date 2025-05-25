import BasicTitle from "@/Components/BasicTitle/BasicTitle";
import Image from "next/image";
import DefaultImage from '@/public/images/Default-Image.png'
import MembersCardList from "@/Components/MembersCardList/MembersCardList";
import PlayerCard from "@/Components/MembersCardList/PlayerCard/PlayerCard";
import PersonCard from "@/Components/MembersCardList/PersonCard/PersonCard";

export default function CoachPage() {
    let idCoach = 1;
    const data = new Array(4).fill(null).map((value, index) => {
        const infoCoach = { id: idCoach, name: `Имя`, surname: "Фамилия", post: "Должность" };
        idCoach++;
        return (infoCoach)
    })


    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="max-w-[1200px] text-center">
                <MembersCardList title={"Тренерский штаб"} >
                    {data.map((coach) => {
                        return (
                            <PersonCard
                                key={coach.name + ' ' + coach.surname + ' ' + '-idCoach=' + coach.id}
                                id={coach.id}
                                name={coach.name}
                                surname={coach.surname}
                                post={coach.post}
                            />
                        )
                    })}
                </MembersCardList>
            </div>

        </div>
    )
}