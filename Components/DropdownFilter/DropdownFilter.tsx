'use client'
import { useRef, useState } from "react";
import { DropdownFilterProps } from "./DropdownFilter.interface";
import './style.scss'
import TriangleImage from '@/public/images/Triangle.png'
import Image from "next/image";

export default function DropdownFilter(props: DropdownFilterProps) {

    const [openStatus, setOpenStatus] = useState<boolean>(false);
    const [activeElementIndex, setActiveElementIndex] = useState<number>(0);

    return (
        <div className="relative z-30 min-h-[60px] min-w-[195px] bg-[#001E51] dropdown text-white">
            <div className="absolute w-full flex flex-col items-start" onClick={() => { setOpenStatus(!openStatus) }}>
                <div
                    className={`min-h-[60px] h-[60px] w-full flex flex-row 
                    flex-1 justify-start items-center 
                    dropdownElement dropdownActiveMainblock`
                    }>
                    <div className="w-full h-[60px] flex items-center">
                        <p>{props.elements[activeElementIndex].title}</p>
                    </div>
                    <Image
                        alt='Стрелка выпадающего списка'
                        className="pointer-none ml-[5px] object-contain transition-all duration-200"
                        src={TriangleImage}
                        style={{
                            transform: openStatus ? "scaleY(-1)" : "scaleY(1)",
                        }}
                    />
                </div>
                {/* Выпадающее окно */}
                <div
                    className={`
                        w-full overflow-y-auto dropdownListBlock
                        transition-all duration-300 bg-[#001E51]
                    `}
                    style={{
                        maxHeight: openStatus ? 240 : 0,
                    }}
                >
                    {props.elements.map((element, index) => {
                        return (
                            <div
                                key={element.title}
                                className={`
                                    w-full h-[60px] flex items-center dropdownElement
                                    transition-all duration-50
                                    ${element.title === props.elements[activeElementIndex].title
                                        ? 'bg-[#10839D] hover:text-white'
                                        : 'hover:text-[#10839D]'
                                    }
                                  `}
                                onClick={() => {
                                    props.handleSelectSetState(element.returnedValue);
                                    setOpenStatus(false);
                                    setActiveElementIndex(index);
                                }}
                            >
                                <p>
                                    {element.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
