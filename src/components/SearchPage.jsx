import MovieSuggestions from "./MovieSuggestions";
import SearchBar from "./SearchBar";
import {BG_URL} from "../utils/constants"
const SearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BG_URL} alt="logo"
        />
      </div>
      <SearchBar />
      <MovieSuggestions />
    </div>
  );
};

export default SearchPage;
