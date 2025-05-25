import BasicTitle from "@/Components/BasicTitle/BasicTitle";
import MembersCardList from "@/Components/MembersCardList/MembersCardList";
import PersonCard from "@/Components/MembersCardList/PersonCard/PersonCard";

export default function AdministrationPage() {

    const data = [
        { id: 1, name: "Имя", surname: "Фамилия", post: 'Должность' },
        { id: 2, name: "Имя", surname: "Фамилия", post: 'Должность' },
        { id: 3, name: "Имя", surname: "Фамилия", post: 'Должность' }
    ]
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full max-w-[1200px]">
                <BasicTitle text="Руководство" />
                <MembersCardList>
                    {
                        data.map((person) => {
                            return (

                                <PersonCard
                                    key={`Карточка руководителя: ${person.name} ${person.surname}-id=${person.id}`}
                                    name={person.name}
                                    surname={person.surname}
                                    post={person.post}
                                    id={person.id}
                                    
                                />
                            )
                        })
                    }
                </MembersCardList>
            </div>
        </div>
    )
}