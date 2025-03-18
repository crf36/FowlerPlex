import { useMoviesDataContext } from "../context/MoviesDataContextHook";
import LoadingIndicator from "./LoadingIndicator";
import MovieComponent from "./MovieComponent";
import { MoviesListProps } from "../Types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function MoviesList({ category }: MoviesListProps) {
  const { movies, isLoading } = useMoviesDataContext();

  if (isLoading || !movies || !category) {
    return <LoadingIndicator />;
  }

  const movieList = movies[category.key];

  return (
    <div className="movies-list w-full overflow-hidden">
      <h1 className="category-title">{category.name}</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-screen-xl mx-auto relative"
      >
        <CarouselContent className="flex">
          {movieList.map((movie) => (
            <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/8">
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
