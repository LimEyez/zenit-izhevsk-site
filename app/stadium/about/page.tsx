import BasicTitle from "@/Components/BasicTitle/BasicTitle";
import Image from "next/image";
import CupolDefaultImage from '@/public/images/Cupol-Default-Image.png'

export default function StadiumAboutPage() {

    const data = [
        {
            src: '',
            text: `            
                В 1938 году в парке культуры и отдыха имени С. М. Кирова началось строительство стадиона с трибунами на 10 тысяч зрителей. В 1940 году стадион был сдан в эксплуатацию. Современное здание стадиона «Купол» вместимостью 3 500 человек появилось в 2001 году.
                Находится стадион в экологической чистой зоне парка культуры и отдыха горожан. На комплексе имеется натуральное футбольное поле, легкоатлетические беговые дорожки и секторы, уютные раздевалки и душевые, конференц-зал, гольф-клуб с комфортными беседками для круглогодичного пребывания для отдыхающих. Кроме того, работает прокат велосипедов и роликов. В зимнее время заливается каток и осуществляется прокат коньков, отдыхающих ждут также горячий чай и уютные раздевалки.

                Адрес: г. Ижевск, ул. Кирова, 6
                Телефон: 8 (3412) 72-47-00
                `
        }
    ]

    const src = data[0].src !== null && data[0].src !== undefined && data[0].src !== '' ?
        data[0].src : CupolDefaultImage

    return (
            <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
                <BasicTitle text="Стадион «Купол»" />
                    <Image
                        alt="Фото стадион Купол"
                        className="h-full max-h-[670px] object-contain"
                        src={src}
                    />
                <pre className="w-full mt-[30px] whitespace-pre-line text-[20px] font-normal font-[inter]">
                    {data[0].text}
                </pre>
            </div>
    )
}