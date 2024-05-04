import { useRef } from "react";
import lang from "../utils/languageConstants";
import {useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchMovieResult } from "../store/GptSlice";


const SearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const searchMovieTMDB = async(movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie +  "&include_adult=false&language=en-US&page=1", API_OPTIONS); 
     const json = await data.json();
      return json.results;
    }

    const handleSearchClick = async () => {
     const tmdbResult = await searchMovieTMDB(searchText.current.value);
     dispatch(addSearchMovieResult({movieName: searchText.current.value, movieResult: tmdbResult}));
    }
  return (
      <div className="pt-[8%] flex justify-center">
        <form className=" w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9 rounded"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handleSearchClick}>
            {lang[langKey].search}
          </button>
        </form>
      </div>
  );
};

export default SearchBar;
