import { useOutlet } from "react-router-dom";
import { useMoviesDataContext } from "../context/MoviesDataContextHook";
import LoadingIndicator from "./LoadingIndicator";

export function Navigation() {
  const { isLoading } = useMoviesDataContext();

  const currentOutlet = useOutlet();

  return isLoading ? <LoadingIndicator /> : <>{currentOutlet}</>;
}
