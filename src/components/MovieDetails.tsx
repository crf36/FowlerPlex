/*======================================================================
 * FILE:    MovieDetails.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Component to display information about a selected movie
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useFetchMovieDetails } from "../api/MovieDetailsApi";
import LoadingIndicator from "./LoadingIndicator";
import "./MovieDetails.css";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export function MovieDetailsPage() {
  const { movieDetails, isLoading } = useFetchMovieDetails();

  if (isLoading || !movieDetails) {
    return <LoadingIndicator />;
  }

  return (
    <div className="movie-details">
      <div
        className="movie-details-header"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
        }}
      >
        <div>
          <div className="movie-details-header-content">
            <h1 className="movie-title">{movieDetails.title}</h1>
            <p className="movie-release-date">{movieDetails.release_date}</p>
          </div>
        </div>
      </div>

      <div className="movie-content-container">
        <div className="movie-poster-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>

        <div className="movie-info-container">
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>

          <h3>Genres</h3>
          <div className="genres-container">
            {movieDetails.genres.map((genre) => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>

          <h3>Rating</h3>
          <p className="rating">⭐ {movieDetails.vote_average} / 10</p>
        </div>
      </div>
    </div>
  );
}
