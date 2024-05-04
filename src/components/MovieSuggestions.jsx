import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const MovieSuggestions = () => {
  const { movieResult, movieName } = useSelector((store) => store.gpt);

  if (!movieResult) return null;

  return (
    <div className="px-6 bg-black bg-opacity-70 text-white pb-6">
      <h1 className="text-xl ml-8 pl-7 py-4">{movieName}</h1>
      <div className="pl-12 flex  overflow-x-scroll hide-scollbar">
        <div className="flex flex-wrap gap-8 ">
          {movieResult?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSuggestions;
