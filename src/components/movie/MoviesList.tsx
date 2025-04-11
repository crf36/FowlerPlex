/*======================================================================
 * FILE:    MoviesList.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Component to display carousel of movies
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { useMoviesDataContext } from "../../context/MoviesDataContextHook";
import { MoviesListProps } from "../../Types";
import LoadingIndicator from "../LoadingIndicator";
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
        }}
        className="carousel"
      >
        <CarouselContent className="flex">
          {movieList.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="carousel-item md:basis-1/2 lg:basis-1/8"
            >
              <MovieComponent movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
