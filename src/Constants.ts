export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const API_KEY = import.meta.env.VITE_API_KEY;
export const URL_QUERY_PARAMS =
  "language=en-US&certification_country=US&certification.lte=PG-13&sort_by=popularity.desc";
export const CATEGORY_TAGS = [
  { tag: "New Releases", url: "/movie/now_playing?" },
  { tag: "Top Rated", url: "/movie/top_rated?" },
  { tag: "Action and Adventure", url: "/discover/movie?with_genres=28&" },
  { tag: "Romance", url: "/discover/movie?with_genres=10749&" },
  { tag: "Family Friendly", url: "/discover/movie?with_genres=10751&" },
  { tag: "Sci-Fi", url: "/discover/movie?with_genres=878&" },
  { tag: "Musical", url: "/discover/movie?with_genres=10402&" },
  { tag: "Thriller", url: "/discover/movie?with_genres=53&" },
];
