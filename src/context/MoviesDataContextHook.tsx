/*======================================================================
 * FILE:    MoviesDataContextHook.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Custom hook for accessing our app's context.
 */

/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { use } from "react";
import { MoviesContextType } from "../Types";
import { MoviesDataContext } from "./MoviesData";

/*----------------------------------------------------------------------
 *                      CUSTOM HOOK
 */
export function useMoviesDataContext(): MoviesContextType {
  const context = use(MoviesDataContext);

  if (!context) {
    throw new Error(
      "useMoviesDataContext must be used within a MoviesDataProvider"
    );
  }

  return context;
}
