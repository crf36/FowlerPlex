export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const API_KEY = import.meta.env.VITE_API_KEY;
export const URL_QUERY_PARAMS =
  "language=en-US&certification_country=US&certification.lte=PG-13&sort_by=popularity.desc";
export const CATEGORY_TAGS = [
  { tag: "New Releases", url: "/movie/now_playing?" },
  { tag: "Top Rated", url: "/movie/top_rated?" },
  { tag: "Family Friendly", url: "/discover/movie?with_genres=10751&" },
  { tag: "Action", url: "/discover/movie?with_genres=28&" },
  { tag: "Romance", url: "/discover/movie?with_genres=10749&" },
  { tag: "Drama", url: "/discover/movie?with_genres=18&" },
  { tag: "Sci-Fi", url: "/discover/movie?with_genres=878&" },
  { tag: "Thriller", url: "/discover/movie?with_genres=53&" },
];
