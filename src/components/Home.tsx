import { useNavigate } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import { AnimationComponent } from "./index";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = (path: any) => {
        navigate(path);
    };
    return (
        <div className="flex flex-col items-center justify-center text-white">
            <div className="flex flex-col items-center">
                <span className="xl:-mt-[1000px] md:-mt-[700px]"><AnimationComponent status={'user'} /></span>
                <h2 className="text-xl font-semibold mt-4 "><AnimatedText text={'Choose your option'} /></h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-4 md:space-y-0 md:space-x-8">
                <button
                    className="flex flex-col items-center space-y-2 p-4 bg-black rounded-lg shadow-md"
                    onClick={() => handleClick('/student')}>
                    <div className="flex justify-center items-center bg-white p-2 rounded-full" style={{ height: '50px', width: '50px' }}>
                        <AnimationComponent status={'users'} />
                    </div>
                    <span>Student</span>
                </button>
                <button className="flex flex-col items-center space-y-2 p-4 bg-black rounded-lg shadow-md"
                    onClick={() => handleClick('/parents')}>
                    <div className="flex justify-center items-center bg-white p-2 rounded-full" style={{ height: '50px', width: '50px' }}>
                        <AnimationComponent status={'users'} />
                    </div>
                    <span>Parents</span>
                </button>
                <button className="flex flex-col items-center space-y-2 p-4 bg-black rounded-lg shadow-md"
                    onClick={() => handleClick('/admin')}>
                    <div className="flex justify-center items-center bg-white p-2 rounded-full" style={{ height: '50px', width: '50px' }}>
                        <AnimationComponent status={'users'} />
                    </div>
                    <span>Admin</span>
                </button>
                <button className="flex flex-col items-center space-y-2 p-4 bg-black rounded-lg shadow-md"
                    onClick={() => handleClick('/teacher')}>
                    <div className="flex justify-center items-center bg-white p-2 rounded-full" style={{ height: '50px', width: '50px' }}>
                        <AnimationComponent status={'users'} />
                    </div>
                    <span>Teacher</span>
                </button>


            </div>
        </div>
    )
}
