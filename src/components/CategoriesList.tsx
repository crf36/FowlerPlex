import { useMoviesDataContext } from "../context/MoviesDataContextHook";
import { categories } from "../Types";
import LoadingIndicator from "./LoadingIndicator";
import MoviesList from "./MoviesList";

export default function CategoriesList() {
  const { isLoading } = useMoviesDataContext();

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <div>
      {categories.map((category) => (
        <MoviesList key={category.key} category={category} />
      ))}
    </div>
  );
}
