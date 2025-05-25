'use client'
import { useState } from "react";
import BasicTitle from "../BasicTitle/BasicTitle";
import PhotoCard from "../PhotoCard/PhotoCard";
import Link from "next/link";
import Loader from "../Loader/Loader";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

export default function CollectionsBlock() {

    let collectionId = 1;
    const collectionsCount = 14;
    const maxGetElements = 3;


    const [data, setData] = useState(new Array(maxGetElements).fill(null).map((_) => {
        const collection = { name: `Название альбома ${collectionId}`, href: '/', src: '' };
        collectionId++;
        return collection;
    }));

    const [loadingStatus, setLoadingStatus] = useState<boolean>(false);

    const getMoreCollections = () => {
        setLoadingStatus(true);
        setTimeout(
            () => {

                const countMorePhotos = Math.min(collectionsCount - data.length, maxGetElements)
                const moreCollections = new Array(countMorePhotos).fill(null).map((_) => {
                    const collection = { name: `Название альбома ${collectionId}`, href: '/', src: '' };
                    collectionId++;
                    return collection;
                });
                setData([...data, ...moreCollections]);
                setLoadingStatus(false);
            }, 1000
        )
    }

    return (
        <div className="w-full flex flex-col justify-center items-center mb-[15px]">
            <BasicTitle text="Фото" fontSize={30} fontWeight={500} />
            <div className="w-full flex flex-row justify-center flex-wrap gap-[30px] text-[20px] font-bold">
                {
                    data.map((collection, index) => {

                        return (
                            <PhotoCard
                                key={`Альбом ${collection.name}-index=${index}`}
                                alt={`Фото альбома "${collection.name}"`}
                                src={collection.src}
                                href={collection.href}
                            >
                                <div
                                    className={`
                                    h-full w-full flex flex-col justify-end
                                    pl-[15px] pr-[15px] pb-[35px]
                                    `}>
                                    <p className="text-white">
                                        {collection.name}
                                    </p>
                                    <div
                                        // href={collection.href}
                                    >
                                        <p
                                            className="transition-all linear duration-100 underline-offset-2 hover:text-white hover:underline"
                                        >
                                            {'Смотеть ->'}
                                        </p>

                                    </div>
                                </div>
                            </PhotoCard>
                        )
                    })
                }
            </div>
            {
                loadingStatus ?
                    <Loader />
                    : null
            }
            {
                data.length !== collectionsCount || loadingStatus ?
                    <ShowMoreButton func={getMoreCollections} />
                    : null
            }
        </div>
    )
}