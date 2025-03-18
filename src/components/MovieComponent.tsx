import { useNavigate } from "react-router-dom";
import { useMoviesDataContext } from "../context/MoviesDataContextHook";
import { MovieProps } from "../Types";
import LoadingIndicator from "./LoadingIndicator";
import { IMG_URL } from "../Constants";

export default function MovieComponent({ movie }: MovieProps) {
  const { movies, isLoading } = useMoviesDataContext();

  const navigate = useNavigate();
  const handleMovieClick = (movie_id: number) => {
    navigate(`/${movie_id}`);
  };

  if (isLoading || !movies || !movie) {
    return <LoadingIndicator />;
  }

  return (
    <button
      className="w-32 h-48 rounded-lg overflow-hidden transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-white cursor-pointer"
      onClick={() => handleMovieClick(movie.id)}
    >
      <img src={`${IMG_URL}${movie?.poster_path}`} alt={movie?.title} />
      <h3>{movie?.title}</h3>
    </button>
  );
}
