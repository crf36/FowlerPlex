/*======================================================================
 * FILE:    App.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Top-level app component of this React app.
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MoviesDataProvider } from "./context/MoviesDataProvider";
import MainPage from "./components/MainPage";
import CategoriesList from "./components/movie/CategoriesList";
import { MovieDetailsPage } from "./components/movie/MovieDetails";
import { SearchPage } from "./components/search/SearchPage";
import { NotFoundPage } from "./components/layout/NotFoundPage";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <MainPage />,
        errorElement: <NotFoundPage />,
        children: [
          { path: "", element: <CategoriesList /> },
          { path: ":movie_id", element: <MovieDetailsPage /> },
          { path: "search", element: <SearchPage /> },
        ],
      },
    ],
    { basename: "/FowlerPlex" }
  );
  return (
    <MoviesDataProvider>
      <RouterProvider router={router} />
    </MoviesDataProvider>
  );
}

export default App;
