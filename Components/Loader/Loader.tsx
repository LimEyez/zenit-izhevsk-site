import { ThreeDot } from "react-loading-indicators";

export default function Loader() {

    return (
        <div className="h-[100px] flex justify-center items-center pt-[10px]">
            <ThreeDot color={['#FFFFFF']} />
        </div>
    )
}