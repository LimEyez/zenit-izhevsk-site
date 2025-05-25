import BasicTitle from "@/Components/BasicTitle/BasicTitle";
import { Contacts } from "@/lib/contacts";
import { SocialRoutesContactsPage } from "@/lib/socialRoutesInfo";
import Link from "next/link";
import SocialQrImage from '@/public/images/Socials-QR-Image.png'
import Image from "next/image";

export default function ContactsPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[1200px] mt-[30px]">
        <BasicTitle text="Контакты" />
        <div className="flex flex-col justify-start w-full gap-[15px] text-[20px] font-normal">
          <p>Адрес:  Удмуртская Республика, 426000 г. Ижевск, ул. Кирова, 6, стадион Купол</p>
          <div className="flex flex-row gap-[5px]">

            Телефон:
            <p className="flex flex-col">

              {Contacts.phoneNumbers.map((phoneNumber) => (
                <span
                  key={phoneNumber}
                >
                  {phoneNumber}
                </span>
              ))}
            </p>
          </div>
          <p>Соцсети клуба:</p>
          <div className="w-full flex flex-col items-start gap-[10px]">
            {SocialRoutesContactsPage.map((social, index) => {
              return (
                <div 
                  key={social.title + index} 
                  className="flex flex-row justify-center items-center gap-[15px] h-[17px]">
                  <social.icon />
                  <Link href={social.path}>
                    {social.path}
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="w-full flex flex-row items-start justify-start">
            <Image alt="Ссылки на соцсети Зенит Ижевск" 
            src={SocialQrImage} 
            className="max-h-[135px] w-auto object-contain"/>
          </div>
        </div>
      </div>
    </div>
  );
}
