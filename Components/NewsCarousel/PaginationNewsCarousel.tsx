export default function PaginationNewsCarousel(props: {
    NumberOfSlides: number, 
    className?: string, 
    moveToSlide?: (index: number) => void,
    activeIndex: number
}
) {

    return (
        <div className="flex flex-row gap-[10px]">
            {new Array(props.NumberOfSlides).fill(null).map((__, index) => {
                return (
                    <div 
                        key={'pagination-is-' + index} 
                        className={`
                            w-full min-w-[20px] max-w-[50px] 
                            h-[5px] bg-[#3F4147] transition-all 
                            duration-200 pointer-events-auto
                        `}
                        onClick={() => {props.moveToSlide?.(index)}}
                        style={{
                            backgroundColor: index == props.activeIndex ? '#10839D' : undefined
                        }}
                    >
                    </div>
                )
            })}
        </div>
    )
}