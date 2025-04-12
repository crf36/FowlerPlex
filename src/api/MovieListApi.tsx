/*======================================================================
 * FILE:    MovieListApi.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Custom hook for fetching data from the TMDB
 *              API based on different movie categories.
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useEffect, useState } from "react";
import { Movie, Movies } from "../Types.js";
import {
  API_KEY,
  BASE_URL,
  CATEGORY_TAGS,
  URL_QUERY_PARAMS,
} from "../Constants.js";

/*----------------------------------------------------------------------
 *                      PUBLIC HOOKS
 */
export const useFetchMovies = function () {
  const [movies, setMovies] = useState({} as Movies);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async (tag: string, query: string) => {
      try {
        // Grab movie data from TMDB API
        const url = `${BASE_URL}${query}${URL_QUERY_PARAMS}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const data = await response.json();

        // Map each movie to have a unique key that includes the category tag
        const moviesWithTag = Object.fromEntries(
          data.results.map((movie: Movie) => [
            `${tag}-${movie.id}`,
            { ...movie, tag },
          ])
        );
        setMovies((prevState) => ({
          ...prevState,
          ...moviesWithTag,
        }));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    const fetchAllMovies = async () => {
      try {
        await Promise.all(
          Object.entries(CATEGORY_TAGS).map(([tag, url]) =>
            fetchMovies(tag, url)
          )
        );
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllMovies();
  }, []);

  return { movies, isLoading };
};
