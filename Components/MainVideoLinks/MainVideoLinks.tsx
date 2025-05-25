import Image from "next/image";
import BasicTitle from "../BasicTitle/BasicTitle";
import Link from "next/link";
import BaseVideoImage from '@/public/images/Default-Video-Preview-Image.png'

export default function MainVideoLinks() {

    const videoLinks = [
        { href: '', src: '' },
        { href: '', src: '' },
        { href: '', src: '' }
    ];

    const stylesForVideoBlocks = [
        'col-span-2 row-span-2 bg-gray-300',
        '',
        ''
    ]

    return (
        <div className="flex justify-center w-full">
            <div className="w-full min-w-[1200px] max-w-[1200px] ">
                <BasicTitle text="Видео" />
                <div className="grid grid-cols-3 gap-[30px] h-[432px] pl-[30px] pr-[30px] pb-[30px]">
                    {
                        videoLinks.map((video, index) => {
                            const activeClass = stylesForVideoBlocks[index];
                            const activeSrc = video.src !== null && video.src !== undefined && video.src !== '' ?
                                video.src : BaseVideoImage
                            if (video.href !== null && video.href !== undefined && video.href !== '') {
                                return (
                                    <Link key={video.href + '-index=' + index} href={video.href} className={activeClass}>
                                        <Image alt={videoLinks[0]?.href} src={activeSrc} />
                                    </Link>
                                )
                            } else {
                                return (
                                    <div key={video.href + '-index=' + index} className={activeClass}>
                                        <Image 
                                            alt={videoLinks[0]?.href} 
                                            src={activeSrc} 
                                            className="h-full w-full object-contain object-cover"
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}