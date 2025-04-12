/*======================================================================
 * FILE:    MovieDetailsApi.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Custom hook for fetching details about a specific movie.
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useEffect, useState } from "react";
import { MovieDetails } from "../Types";
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../Constants";

/*----------------------------------------------------------------------
 *                      CUSTOM HOOK
 */
export const useFetchMovieDetails = function () {
  const { movie_id } = useParams<{ movie_id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  useEffect(() => {
    if (!movie_id) {
      return;
    }

    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/movie/${movie_id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const data = await response.json();
        setMovieDetails(data || []);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };

    fetchMovieDetails();
  }, [movie_id]);
  return { movieDetails, isLoading };
};
