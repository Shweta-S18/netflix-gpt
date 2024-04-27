import { FaPlay } from "react-icons/fa"; 
const VideoTitle = ({title, overview}) => {
    return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="flex">
        <button className="bg-white text-black px-12 p-4  text-xl flex gap-2 justify-center items-center rounded-lg hover:bg-opacity-80"> 
        <FaPlay color="black"/> Play
        </button>

        <button className="bg-gray-500 px-12 p-4 text-white text-xl mx-2 bg-opacity-50 rounded-lg">More Info</button>
        </div>
     
    </div>
    );
};
export default VideoTitle;