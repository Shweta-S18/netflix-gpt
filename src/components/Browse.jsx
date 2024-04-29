import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse =  () => {
    
    useNowPlayingMovies();
    useTopRatedMovies();
    useUpcomingMovies();
   
    return <div>
       <Header/>
       <MainContainer/>
       <SecondaryContainer/>
    </div>
};

export default Browse;