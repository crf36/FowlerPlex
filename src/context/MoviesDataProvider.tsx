import { useFetchMovies } from "../api/MovieListApi";
import { MoviesDataContext } from "./MoviesData";
import { ReactNode } from "react";

export function MoviesDataProvider({ children }: { children: ReactNode }) {
  const { movies, isLoading } = useFetchMovies();

  return (
    <MoviesDataContext value={{ movies, isLoading }}>
      {children}
    </MoviesDataContext>
  );
}
