/*======================================================================
 * FILE:    SearchResultsApi.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Custom hook that fetches movies that contain the query
 *              string.
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../Constants";
import { Movie } from "../Types";

/*----------------------------------------------------------------------
 *                      PUBLIC HOOKS
 */
export const useFetchSearchResults = function (searchQuery: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<{ [id: string]: Movie }>(
    {}
  );

  useEffect(() => {
    const url = `/search/movie?query=${encodeURIComponent(
      searchQuery
    )}&include_adult=false&language=en-US&page=1`;

    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`${BASE_URL}${url}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });

        const data = await response.json();

        const movies = Object.fromEntries(
          data.results.map((movie: Movie) => [movie.id, { ...movie }])
        );
        setSearchResults(movies || {});
      } catch (error) {
        console.error("Error fetching movie search results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);
  return { searchResults, isLoading };
};
