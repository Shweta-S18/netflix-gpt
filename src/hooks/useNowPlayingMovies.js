import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addNowPlayingMovies} from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
const useNowPlayingMovies = () => {
//Fetch Data from TMDB API and update store
const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.addNowPlayingMovies);

    const getNowPlayingMovies = async () => {
      let data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

      let json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    };

    useEffect(() => {
        !nowPlayingMovies &&  getNowPlayingMovies();       
    },[]);
    
};

export default useNowPlayingMovies;