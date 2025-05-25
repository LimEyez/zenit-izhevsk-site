import Image from "next/image";
import DefaultImage from '@/public/images/Default-Image.png'
import PlayerInfoBlock from "@/Components/PlayerInfoBlock/PlayerInfoBlock";

export default async function PlayerInfoPage({ params }: { params: Promise<{ id: string }> }) {

    const {id} = await params;

    const data = [
        {
            name: "Имя",
            surname: "Фамилия",
            role: "Роль...",
            age: 0,
            playerNumber: 0,
            leadingLeg: '...',
            schools: 'Школы...',
            firstCoach: 'Тренеры...',
            achievements: 'Достижения...',
            biography: 'Биография...',
            playerComment: 'Комментарий игрока...',
            src: '',
        }
    ]

    const src = data[0].src !== null && data[0].src !== undefined && data[0].src !== '' ? data[0].src : DefaultImage;

    return(
        <div className="w-full flex flex-col items-center pt-[45]">
            <div className="w-full max-w-[1200px]">
                <PlayerInfoBlock
                    name={data[0].name}
                    surname={data[0].surname}
                    achievements={data[0].achievements}
                    age={data[0].age}
                    biography={data[0].biography}
                    firstCoach={data[0].firstCoach}
                    leadingLeg={data[0].leadingLeg}
                    playerComment={data[0].playerComment}
                    playerNumber={data[0].playerNumber}
                    role={data[0].role}
                    schools={data[0].schools}
                    src={src}
                />
            </div>
        </div>
    )
}