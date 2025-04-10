export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const API_KEY = import.meta.env.VITE_API_KEY;
export const URL_QUERY_PARAMS =
  "language=en-US&certification=G|PG|PG-13&certification_country=US";

export const CATEGORY_TAGS = [
  {
    tag: "New Releases",
    url: "/discover/movie?sort_by=release_date.desc&with_release_type=3|2&vote_count.gte=10&",
  },
  {
    tag: "Action and Adventure",
    url: "/discover/movie?with_genres=28&sort_by=popularity.desc&",
  },
  {
    tag: "Family Friendly",
    url: "/discover/movie?with_genres=10751&&sort_by=popularity.desc&",
  },
  {
    tag: "Romance",
    url: "/discover/movie?with_genres=10749&&sort_by=popularity.desc&",
  },
  {
    tag: "Mystery",
    url: "/discover/movie?with_genres=9648&&sort_by=popularity.desc&",
  },
  {
    tag: "Sci-Fi",
    url: "/discover/movie?with_genres=878&&sort_by=popularity.desc&",
  },
  {
    tag: "Musical",
    url: "/discover/movie?with_genres=10402&&sort_by=popularity.desc&",
  },
  {
    tag: "Thriller",
    url: "/discover/movie?with_genres=53&&sort_by=popularity.desc&",
  },
];
