import { FaPlay } from "react-icons/fa"; 
const VideoTitle = ({title, overview}) => {
    return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg md:w-1/8  xl:w-1/4">{overview}</p>
        <div className="flex my-3 md:m-0">
        <button className="bg-white text-black  py-1 px-3 md:px-12 md:p-4  text-xl flex gap-2 justify-center items-center rounded-lg hover:bg-opacity-80"> 
        <FaPlay color="black" className="w-5" /> Play
        </button>

        <button className="hidden md:inline-block bg-gray-500 px-12 p-4 text-white text-xl mx-2 bg-opacity-50 rounded-lg">More Info</button>
        </div>
     
    </div>
    );
};
export default VideoTitle;