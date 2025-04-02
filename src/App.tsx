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
import CategoriesList from "./components/CategoriesList";
import { MovieDetailsPage } from "./components/MovieDetails";

/*----------------------------------------------------------------------
 *                      CUSTOM HELPERS
 */
function ErrorPage() {
  return <div>Some Error</div>;
}

function SearchResultsPage() {
  return <div>Search Results</div>;
}

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <CategoriesList /> },
        { path: ":movie_id", element: <MovieDetailsPage /> },
        { path: "search", element: <SearchResultsPage /> },
      ],
    },
  ]);
  return (
    <MoviesDataProvider>
      <RouterProvider router={router} />
    </MoviesDataProvider>
  );
}

export default App;
