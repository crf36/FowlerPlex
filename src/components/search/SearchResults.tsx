/*======================================================================
 * FILE:    SearchResults.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Component that displays the movie results based on the
 *              search query.
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useNavigate } from "react-router-dom";
import { useFetchSearchResults } from "../../api/SearchResultsApi";
import "./SearchResults.css";
import { SearchResultsProps } from "../../Types";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export function SearchResults({ query }: SearchResultsProps) {
  const { searchResults, isLoading } = useFetchSearchResults(query);

  const navigate = useNavigate();
  const handleMovieClick = (movie_id: number) => {
    navigate(`/${movie_id}`);
  };

  return (
    <div className="search-results-page">
      <h1>Search Results for: "{query}"</h1>

      {isLoading && <p>Loading...</p>}
      {!isLoading && Object.keys(searchResults).length === 0 && (
        <p>No results found.</p>
      )}

      <div className="movie-list">
        {Object.keys(searchResults).map((movieId) => {
          const movie = searchResults[movieId];
          return (
            <button
              key={movie.id}
              className="movie-item"
              onClick={() => handleMovieClick(movie.id)}
              aria-label={`Select ${movie.title}`}
            >
              <div className="movie-image">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
