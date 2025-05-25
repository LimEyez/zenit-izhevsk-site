import BasicTitle from "@/Components/BasicTitle/BasicTitle";
import Image from "next/image";
import HowToGetImage from '@/public/images/How-To-Get-Image.png'
import './style.scss'

export default function HowToGetPage() {

    const data = [
        {
            src: '',
            formattedTextHtml: `
<h1>На общественном транспорте:</h1>
<p>&nbsp;</p>
<h2>Остановка &laquo;Парк имени Кирова&raquo;</h2>
<p>Автобус: 29, 56, 79, 128, 312, 320, 322, 324, 374, 505э, 505э (Сапсан), СХА &ndash; СНТ Берёзка<br />Маршрутки: 18, 469, 505, 530, 531, 567, 567э, Ижевск &ndash; Варавай Трамвай: 1, 4, 7, 10</p>
<p>&nbsp;</p>
<h2>Остановка &laquo;Аграрный университет&raquo;</h2>
<p>Троллейбус: 6, 9 Автобус: 36 <br /><br />От остановки &laquo;Парк имени Кирова&raquo; или &laquo;Аграрный университет&raquo; проходим до перекрестка ул. Кирова и Песочной. Проходим через главные ворота парка им. Кирова. 
До стадиона можно добраться по центральной аллее.</p>
`
        }
    ]

    const src = data[0].src !== null && data[0].src !== undefined && data[0].src !== '' ?
        data[0].src : HowToGetImage;

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
                <BasicTitle text="Как добраться" />
                <div className="max-h-670">
                    {
                        src ?
                            <Image
                                alt="Фото стадион Купол"
                                className="h-full object-contain"
                                src={src}
                            /> : null
                    }
                </div>
                <div
                    className="mt-[30px] w-full howToGetTextBlock"
                    dangerouslySetInnerHTML={{ __html: data[0].formattedTextHtml }}
                />
            </div>
        </div>
    )
}