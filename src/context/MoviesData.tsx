/*======================================================================
 * FILE:    MoviesData.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Variable for holding the context of our React app.
 */

/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { createContext } from "react";
import { MoviesContextType } from "../Types";

/*----------------------------------------------------------------------
 *                      PUBLIC VARIABLE
 */
export const MoviesDataContext = createContext<MoviesContextType | null>(null);
