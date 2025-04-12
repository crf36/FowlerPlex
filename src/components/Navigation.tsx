/*======================================================================
 * FILE:    Navigation.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Component for routing to the current outlet.
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useOutlet } from "react-router-dom";
import { useMoviesDataContext } from "../context/MoviesDataContextHook";
import LoadingIndicator from "./layout/LoadingIndicator";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export function Navigation() {
  const { isLoading } = useMoviesDataContext();

  const currentOutlet = useOutlet();

  return isLoading ? <LoadingIndicator /> : <>{currentOutlet}</>;
}
