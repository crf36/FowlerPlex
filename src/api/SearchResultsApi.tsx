import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../Constants";
import { Movie } from "../Types";

export const useFetchSearchResults = function (searchQuery: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<{ [id: string]: Movie }>(
    {}
  );

  const url = `/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;

  useEffect(() => {
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
        setSearchResults(movies || []);
      } catch (error) {
        console.error("Error fetching movie search results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery, url]);
  return { searchResults, isLoading };
};
