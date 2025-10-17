import BasicTitle from "@/Components/BasicTitle/BasicTitle"
import PhotosBlock from "@/Components/CollectionsBlock/CollectionsBlock"
import VideosBlock from "@/Components/VideosBlock/VideosBlock"

export default function MediaPage() {
    // const data = [
    //     {
    //         typeMedia: "Видео",
    //         data: new Array(14).fill(null).map((element, index) => (
    //             { name: `Название видео ${index}`, href: '', src: '' }
    //         ))
    //     },
    //     {
    //         typeMedia: "Фото",
    //         data: new Array(14).fill(null).map((element, index) => (
    //             { name: `Название видео ${index}`, href: '', src: '' }
    //         ))
    //     }
    // ]

    return (
        <main className="w-full flex justify-center">
            <div className="w-full felx felx-col justify-center max-w-[1200px]">
                <BasicTitle text="Медиа"/>
                <VideosBlock/>
                <PhotosBlock/>
            </div>
        </main>
    )
}