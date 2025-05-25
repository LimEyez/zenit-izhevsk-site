import BasicTitle from "@/Components/BasicTitle/BasicTitle";
import Image from "next/image";
import DefaultImage from '@/public/images/Default-Image.png'
import MembersCardList from "@/Components/MembersCardList/MembersCardList";
import PlayerCard from "@/Components/MembersCardList/PlayerCard/PlayerCard";
import PersonCard from "@/Components/MembersCardList/PersonCard/PersonCard";

export default function StaffPage() {
    let idStaffMember = 1;
    const data = new Array(4).fill(null).map((value, index) => {
        const infoStaffMember = { id: idStaffMember, name: `Имя`, surname: "Фамилия", post: "Должность" };
        idStaffMember++;
        return (infoStaffMember)
    })


    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="max-w-[1200px] text-center">
                <MembersCardList title={"Персонал"} >
                    {data.map((staffMember) => {
                        return (
                            <PersonCard
                                key={staffMember.name + ' ' + staffMember.surname + ' ' + '-idStaffMember=' + staffMember.id}
                                id={staffMember.id}
                                name={staffMember.name}
                                surname={staffMember.surname}
                                post={staffMember.post}
                            />
                        )
                    })}
                </MembersCardList>
            </div>

        </div>
    )
}