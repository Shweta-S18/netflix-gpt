import MovieList from "./MovieList";
import {useSelector} from "react-redux"

const SecondaryContainer = () => {
const movies = useSelector((store) => store.movies);
    return (
    movies.nowPlayingMovies && (

    <div className="bg-black text-white">
        <div className= "mt-0 xl:-mt-52 pl-2 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies}/>
        <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
        </div>
    </div>   
    )
    )
};
export default SecondaryContainer;