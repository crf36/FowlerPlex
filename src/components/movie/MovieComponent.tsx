/*======================================================================
 * FILE:    MovieComponent.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Component to display clickable movie image in carousel
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useNavigate } from "react-router-dom";
import { useMoviesDataContext } from "../../context/MoviesDataContextHook";
import { MovieProps } from "../../Types";
import LoadingIndicator from "../layout/LoadingIndicator";
import { IMG_URL } from "../../Constants";
import { useCallback } from "react";
import "./MovieComponent.css";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export default function MovieComponent({ movie }: MovieProps) {
  const { movies, isLoading } = useMoviesDataContext();

  const navigate = useNavigate();

  const handleMovieClick = useCallback(
    (movie_id: number) => {
      navigate(`/${movie_id}`);
    },
    [navigate]
  );

  if (isLoading || !movies || !movie) {
    return <LoadingIndicator />;
  }

  return (
    <button className="movie-button" onClick={() => handleMovieClick(movie.id)}>
      <img
        src={`${IMG_URL}${movie.poster_path}`}
        alt={movie.title || "Movie poster"}
      />
    </button>
  );
}
