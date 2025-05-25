'use client'
import Image from "next/image";
import BasicTitle from "../BasicTitle/BasicTitle";
import Link from "next/link";
import DefaultPreviewVideo from '@/public/images/Default-Video-Preview-Image.png'
import { DiCelluloid } from "react-icons/di";
import GradientHover from "../GradientHover/GradientHover";
import { useState } from "react";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import { ThreeDot } from "react-loading-indicators";
import Loader from "../Loader/Loader";

export default function VideosBlock() {

    let videoId = 1;
    const videosCount = 14;
    const maxGetElements = 6;

    const [data, setData] = useState(new Array(maxGetElements).fill(null).map((_) => {
        const video = { name: `Название видео ${videoId}`, href: '', src: '' };
        videoId++;
        return video;
    }));

    const [loadingStatus, setLoadingStatus] = useState<boolean>(false);

    const getMoreVideos = () => {
        setLoadingStatus(true);
        setTimeout(
            () => {

                const countMoreVideos = Math.min(videosCount - data.length, maxGetElements)
                const moreVideos = new Array(countMoreVideos).fill(null).map((_) => {
                    const video = { name: `Название видео ${videoId}`, href: '', src: '' };
                    videoId++;
                    return video;
                });
                setData([...data, ...moreVideos]);
                setLoadingStatus(false);
            }, 1000
        )
    }

    return (
        <div className="w-full flex flex-col justify-center items-center mb-[15px]">
            <BasicTitle text="Видео" fontSize={30} fontWeight={500} />
            <div className="w-full flex flex-row justify-center flex-wrap gap-[30px]">
                {data.map((video, index) => {
                    return (
                        <Link
                            key={`Видео "${video.name}"-index=${index}`}
                            className={`
                                max-w-[380px] max-h-[213px] relative group text-[#00102D]
                                transition-all linear hover:text-white duration-100`}
                            href={video.href}
                        >
                            {
                                video.src !== '' && video.src !== null && video.src != undefined ?
                                    <Image
                                        className="h-full  pointer-events-none"
                                        src={video.src}
                                        alt={`Превью видео ${video.name}`}
                                    />
                                    :
                                    <>
                                        <Image
                                            className="h-full pointer-events-none"
                                            src={DefaultPreviewVideo}
                                            alt={`Стандартная обложка видео Зенит Ижевск`}
                                        />
                                        <div className={`
                                            absolute flex flex-col 
                                            justify-end inset-0 z-100 p-[5px]
                                            text-[20px] font-extrabold italic
                                            `}>

                                            <h1
                                                className={`
                                                    line-clamp-2
                                                    `}
                                            >
                                                {video.name}
                                            </h1>
                                        </div>
                                    </>
                            }
                            <GradientHover passiveEffect={false} />

                        </Link>
                    )
                })}
            </div>
            {
                loadingStatus ?
                    <Loader />
                    : null
            }
            {
                data.length !== videosCount || loadingStatus ?
                    <ShowMoreButton func={getMoreVideos} />
                    : null
            }
        </div >
    )
}