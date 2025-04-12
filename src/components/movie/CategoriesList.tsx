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
import { CategoryTag } from "../../Types";
import LoadingIndicator from "../LoadingIndicator";
import MoviesList from "./MoviesList";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export default function CategoriesList() {
  const { isLoading } = useMoviesDataContext();

  const tags = Object.keys(CATEGORY_TAGS) as CategoryTag[];

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <div style={{ backgroundColor: "#141414" }}>
      {tags.map((tag) => (
        <div key={tag}>
          <h2 className="category-title">{tag}</h2>
          <MoviesList tag={tag} />
        </div>
      ))}
    </div>
  );
}
