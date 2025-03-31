export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  tag: string;
}

export type MoviesContextType = {
  movies: { [id: string]: Movie };
  isLoading: boolean;
};

export interface MoviesListProps {
  tag: string;
}

export interface MovieProps {
  movie?: Movie;
}

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  runtime: number;
  genres: { id: number; name: string }[];
  vote_average: number;
  vote_count: number;
  tagline: string;
}
