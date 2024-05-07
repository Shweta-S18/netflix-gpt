import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addUpcomingMovies} from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
const useUpcomingMovies = () => {
//Fetch Data from TMDB API and update store
const dispatch = useDispatch();

const upcomingMovies = useSelector((store) => store.movies.addUpcomingMovies);
    const getUpcomingMovies = async () => {
      let data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);

      let json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
      !upcomingMovies && getUpcomingMovies();
    },[]);
    
};

export default useUpcomingMovies;