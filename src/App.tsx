import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MoviesDataProvider } from "./context/MoviesDataProvider";
import MainPage from "./components/MainPage";
import CategoriesList from "./components/CategoriesList";
import { MovieDetailsPage } from "./components/MovieDetails";

function ErrorPage() {
  return <div>Some Error</div>;
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <CategoriesList /> },
        { path: ":movie_id", element: <MovieDetailsPage /> },
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
