export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const API_KEY = import.meta.env.VITE_API_KEY;
export const URL_QUERY_PARAMS =
  "language=en-US&certification=G|PG|PG-13&certification_country=US&sort_by=popularity.desc";

export const CATEGORY_TAGS = [
  {
    tag: "New Releases",
    url: "/discover/movie?sort_by=release_date.desc&with_release_type=3|2&vote_count.gte=10&",
  },
  { tag: "Action and Adventure", url: "/discover/movie?with_genres=28&" },
  { tag: "Family Friendly", url: "/discover/movie?with_genres=10751&" },
  {
    tag: "Romance",
    url: "/discover/movie?with_genres=10749&",
  },
  {
    tag: "Mystery",
    url: "/discover/movie?with_genres=9648&",
  },
  { tag: "Sci-Fi", url: "/discover/movie?with_genres=878&" },
  { tag: "Musical", url: "/discover/movie?with_genres=10402&" },
  { tag: "Thriller", url: "/discover/movie?with_genres=53&" },
];
