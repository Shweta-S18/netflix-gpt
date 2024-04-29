import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addTopRatedMovies} from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
//Fetch Data from TMDB API and update store
const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
      let data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);

      let json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    },[]);
    
};

export default useTopRatedMovies;