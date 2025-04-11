/*======================================================================
 * FILE:    CategoriesList.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Component for mapping all movie categories
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { CATEGORY_TAGS } from "../../Constants";
import { useMoviesDataContext } from "../../context/MoviesDataContextHook";
import LoadingIndicator from "../LoadingIndicator";
import MoviesList from "./MoviesList";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export default function CategoriesList() {
  const { isLoading } = useMoviesDataContext();

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <div
      className="categories-container"
      style={{ backgroundColor: "#141414" }}
    >
      {CATEGORY_TAGS.map(({ tag }) => (
        <div className="category-section" key={tag}>
          <h2 className="category-title">{tag}</h2>
          <MoviesList tag={tag} />
        </div>
      ))}
    </div>
  );
}
