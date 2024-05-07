import MovieSuggestions from "./MovieSuggestions";
import SearchBar from "./SearchBar";
import {BG_URL} from "../utils/constants"
const SearchPage = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className="h-screen object-cover md:w-screen"
          src={BG_URL} alt="logo"
        />
      </div>
    <div>
      <SearchBar />
      <MovieSuggestions />
    </div>
    </>
  );
};

export default SearchPage;
