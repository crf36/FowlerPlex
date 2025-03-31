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
import { Movie } from "../Types.js";
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
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<{ [id: string]: Movie }>({});

  useEffect(() => {
    const fetchMovies = async (tag: string, url: string) => {
      try {
        const response = await fetch(`${BASE_URL}${url}${URL_QUERY_PARAMS}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const data = await response.json();

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
          await Promise.all(
            CATEGORY_TAGS.map(({ tag, url }) => fetchMovies(tag, url))
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
