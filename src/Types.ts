export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  tag?: string;
}

export interface Movies {
  [key: string]: Movie;
}

export interface MovieDetails extends Movie {
  backdrop_path: string;
  runtime: number;
  genres: { id: number; name: string }[];
  vote_average: number;
  vote_count: number;
  tagline: string;
}

export type CategoryTag =
  | "New Releases"
  | "Action and Adventure"
  | "Family Friendly"
  | "Romance"
  | "Mystery"
  | "Sci-Fi"
  | "Musical"
  | "Thriller";

export interface MoviesContextType {
  movies: { [id: string]: Movie };
  isLoading: boolean;
}

export interface MoviesListProps {
  tag: string;
}

export interface MovieProps {
  movie: Movie;
}

export interface SearchResultsProps {
  query: string;
}
