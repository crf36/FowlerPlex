/*======================================================================
 * FILE:    MoviesDataProvider.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Provider component of our context pattern.
 */

/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useFetchMovies } from "../api/MovieListApi";
import { MoviesDataContext } from "./MoviesData";
import { ReactNode } from "react";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export function MoviesDataProvider({ children }: { children: ReactNode }) {
  const { movies, isLoading } = useFetchMovies();

  return (
    <MoviesDataContext value={{ movies, isLoading }}>
      {children}
    </MoviesDataContext>
  );
}
