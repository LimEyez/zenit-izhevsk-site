import Link from "next/link";
import { PhotoCardProps } from "./PhotoCard.interface";
import DefaultCardImage from '@/public/images/Default-Card-Image.png'
import Image from "next/image"
import GradientHover from "../GradientHover/GradientHover";

export default function PhotoCard(props: PhotoCardProps) {

    const width = props.width !== null && props.width !== undefined ? props.width : 360;
    const height = props.height !== null && props.height !== undefined ? props.height : 480;
    const borderRadius = props.borderRadius !== null && props.borderRadius !== undefined ? props.borderRadius : 30;
    //Компонент изображения (Показывает либо переданное изображение, либо стандартное)
    const ImageComponent = () => {
        return (
            <div className="w-full h-full scale-110 group-hover:scale-100 transition-all duration-300">
                <Image
                    alt={props.alt ? props.alt : "Зенит-Ижевск стандартная обложка свежей нвости"}
                    src={props.src ? props.src : DefaultCardImage}
                    className="w-full h-full object-cover pointer-events-none"
                />
            </div>
        )
    };

    //Блок с переданным контентом
    const childrenBlock =
        <div className="absolute h-full z-21 inset-0">
            {props.children}
        </div>

    //Выбираем либо обычный блок, либо блок-ссылку
    if (props.href !== null && props.href !== undefined && props.href !== '') {
        return (
            <Link
                className={`
                rounded-[30px] bg-transparent overflow-hidden relative group`}
                style={{
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    width: typeof width == 'number' ? width + 'px' : width,
                    height: typeof height == 'number' ? height + 'px' : height,
                    maxWidth: typeof width == 'number' ? width + 'px' : width,
                    maxHeight: typeof height == 'number' ? height + 'px' : height,
                    minWidth: typeof width == 'number' ? width + 'px' : width,
                    minHeight: typeof height == 'number' ? height + 'px' : height,
                    borderRadius: typeof borderRadius == 'number' ? borderRadius + 'px' : borderRadius,
                }}
                href={props.href}
            >
                <ImageComponent />
                <GradientHover />
                {childrenBlock}
            </Link>
        )
    } else {

        return (
            <div
                className={`
                rounded-[30px] bg-transparent overflow-hidden relative group`}
                style={{
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    width: typeof width == 'number' ? width + 'px' : width,
                    height: typeof height == 'number' ? height + 'px' : height,
                    maxWidth: typeof width == 'number' ? width + 'px' : width,
                    maxHeight: typeof height == 'number' ? height + 'px' : height,
                    minWidth: typeof width == 'number' ? width + 'px' : width,
                    minHeight: typeof height == 'number' ? height + 'px' : height,
                    borderRadius: typeof borderRadius == 'number' ? borderRadius + 'px' : borderRadius,
                }}
            >
                <ImageComponent />
                <GradientHover />
                {childrenBlock}
            </div>
        )
    }
}