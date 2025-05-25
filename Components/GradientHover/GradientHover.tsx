import './style.css';
export default function GradientHover({ passiveEffect = true, activeEffect = true }: { passiveEffect?: boolean, activeEffect?: boolean }) {

    return (
        <>
            {passiveEffect ?
                <div
                    className={`absolute transition-all opacity-100 
                        duration-300 inset-0 h-full z-20 group-hover:opacity-0 
                        pointer-events-none gradientHoverPassive`}
                />
                : null
            }
            {activeEffect ?
                <div
                    className={`absolute transition-all opacity-0 
                    duration-300 inset-0 h-full z-20 group-hover:opacity-100 
                    pointer-events-none gradientHoverActive`}
                />
                : null
            }
        </>
    )
}