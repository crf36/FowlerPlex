/*======================================================================
 * FILE:    MoviesList.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Component to display responsive carousel of movies.
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useMoviesDataContext } from "../../context/MoviesDataContextHook";
import { MoviesListProps } from "../../Types";
import LoadingIndicator from "../layout/LoadingIndicator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel/carousel";
import MovieComponent from "./MovieComponent";
import "./MoviesList.css";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export default function MoviesList({ tag }: MoviesListProps) {
  const { movies, isLoading } = useMoviesDataContext();

  if (isLoading || !movies || !tag) {
    return <LoadingIndicator />;
  }

  const movieList = Object.values(movies).filter((movie) => movie.tag === tag);

  return (
    <div className="movies-list">
      <Carousel
        opts={{
          align: "start",
          containScroll: "trimSnaps",
        }}
        className="carousel"
      >
        <CarouselContent className="carousel-content">
          {movieList.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="carousel-item basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 p-1 sm:p-2"
            >
              <div className="movie-wrapper">
                <MovieComponent movie={movie} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="carousel-nav-btn left-nav-button" />
        <CarouselNext className="carousel-nav-btn right-nav-button" />
      </Carousel>
    </div>
  );
}
