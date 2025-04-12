/*======================================================================
 * FILE:    Constants.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Shared constants (categories and URLs)
 */

/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { CategoryTag } from "./Types";

/*----------------------------------------------------------------------
 *                      CONSTANTS
 */
export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const URL_QUERY_PARAMS =
  "language=en-US&certification=G|PG|PG-13&certification_country=US";

export const CATEGORY_TAGS: Record<CategoryTag, string> = {
  "New Releases":
    "/discover/movie?sort_by=release_date.desc&with_release_type=3|2&vote_count.gte=10&",
  "Action and Adventure":
    "/discover/movie?with_genres=28&sort_by=popularity.desc&",
  "Family Friendly":
    "/discover/movie?with_genres=10751&sort_by=popularity.desc&",
  Romance: "/discover/movie?with_genres=10749&sort_by=popularity.desc&",
  Mystery: "/discover/movie?with_genres=9648&sort_by=popularity.desc&",
  "Sci-Fi": "/discover/movie?with_genres=878&sort_by=popularity.desc&",
  Musical: "/discover/movie?with_genres=10402&sort_by=popularity.desc&",
  Thriller: "/discover/movie?with_genres=53&sort_by=popularity.desc&",
};
