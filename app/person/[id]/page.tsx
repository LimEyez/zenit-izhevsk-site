import Image from "next/image";
import DefaultImage from '@/public/images/Default-Image.png'
import PersonInfoBlock from "@/Components/PersonInfoBlock/PersonInfoBlock";

export default async function PersonInfoPage({ params }: { params: Promise<{ id: string }> }) {

    const {id} = await params;

    const data = [
        {
            name: "Имя",
            surname: "Фамилия",
            role: "Должность...",
            age: 0,
            biography: 'Биография...',
            src: '',
        }
    ]

    const src = data[0].src !== null && data[0].src !== undefined && data[0].src !== '' ? data[0].src : DefaultImage;

    return(
        <div className="w-full flex flex-col items-center pt-[45]">
            <div className="w-full max-w-[1200px]">
                <PersonInfoBlock
                    name={data[0].name}
                    surname={data[0].surname}
                    age={data[0].age}
                    biography={data[0].biography}
                    role={data[0].role}
                    src={src}
                />
            </div>
        </div>
    )
}