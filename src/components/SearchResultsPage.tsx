import { useNavigate, useSearchParams } from "react-router-dom";
import { useFetchSearchResults } from "../api/SearchResultsApi";
import "./SearchResultsPage.css";

export function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

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
