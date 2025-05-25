import BasicTitle from "../BasicTitle/BasicTitle"
import LatestNewsElement from "./LatestNewsElement"

export default function LatestNews() {

    const LastThreeNews = [
        { id: 1, title: '«Зенит-Ижевск» одержал победу в контрольном матче с ФК «Фанком» г. Киров', src: null },
        { id: 2, title: '«Зенит-Ижевск» - «Ильпар»: комментарии главного тренера', src: null },
        { id: 3, title: '«Поражение в финальном матче сезона против мордовского  ФК «Шумбрат»', src: null },
    ]

    return (
        <div className="flex justify-center pt-[30px] pb-[30px]">
            <div
                className=" max-w-[1200px]"
            >
                <BasicTitle text="Новости" />
                <div
                    className="flex flex-row flex-wrap justify-center gap-[40px]"
                >
                    {LastThreeNews.map((news) => {
                        return (
                            <LatestNewsElement
                                key={news.title + '-id=' + news.id}
                                id={news.id}
                                title={news.title}
                                src={news.src}
                                alt={news.title}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}