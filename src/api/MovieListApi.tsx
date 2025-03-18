import { useEffect, useState } from "react";
import { MoviesByCategory } from "../Types.js";
import { API_KEY, BASE_URL, URL_QUERY_PARAMS } from "../Constants.js";

export const useFetchMovies = function () {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<MoviesByCategory>({
    newReleaseMovies: [],
    topRatedMovies: [],
    familyFriendlyMovies: [],
    actionMovies: [],
    romanceMovies: [],
    dramaMovies: [],
    sciFiMovies: [],
    thrillerMovies: [],
  });

  useEffect(() => {
    const fetchMovies = async (category: string, urlPath: string) => {
      try {
        const response = await fetch(
          `${BASE_URL}${urlPath}${URL_QUERY_PARAMS}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        const data = await response.json();
        setMovies((prevState) => ({
          ...prevState,
          [category]: data.results || [],
        }));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    const fetchAllMovies = async () => {
      const fetchRequests = [
        fetchMovies("newReleaseMovies", "/movie/now_playing?"),
        fetchMovies("topRatedMovies", "/movie/top_rated?"),
        fetchMovies(
          "familyFriendlyMovies",
          "/discover/movie?with_genres=10751&"
        ),
        fetchMovies("actionMovies", "/discover/movie?with_genres=28&"),
        fetchMovies("romanceMovies", "/discover/movie?with_genres=10749&"),
        fetchMovies("dramaMovies", "/discover/movie?with_genres=18&"),
        fetchMovies("sciFiMovies", "/discover/movie?with_genres=878&"),
        fetchMovies("thrillerMovies", "/discover/movie?with_genres=53&"),
      ];

      await Promise.all(fetchRequests);
      setIsLoading(false);
    };
    fetchAllMovies();
  }, []);

  return { movies, isLoading };
};
