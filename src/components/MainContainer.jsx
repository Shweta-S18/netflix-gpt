import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle.jsx";
import VideoBackground from './VideoBackground.jsx';
const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    if(!movies) return; /* if movie is null so don't render anything */

    const mainMovie = movies[2];
    const {original_title, overview, id} = mainMovie
    return (
        <div className="pt-[18%] md:pt-0 bg-black">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
    )  
};

export default MainContainer;