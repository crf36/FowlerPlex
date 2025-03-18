export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
}

export interface MoviesByCategory {
  newReleaseMovies: Movie[];
  topRatedMovies: Movie[];
  familyFriendlyMovies: Movie[];
  actionMovies: Movie[];
  romanceMovies: Movie[];
  dramaMovies: Movie[];
  sciFiMovies: Movie[];
  thrillerMovies: Movie[];
}

export type MoviesContextType = {
  movies: MoviesByCategory;
  isLoading: boolean;
};

export interface Category {
  key: keyof MoviesByCategory;
  name: string;
}

export const categories: Category[] = [
  { key: "newReleaseMovies", name: "New Releases" },
  { key: "topRatedMovies", name: "Top Rated" },
  { key: "familyFriendlyMovies", name: "Family Friendly" },
  { key: "actionMovies", name: "Action" },
  { key: "romanceMovies", name: "Romance" },
  { key: "dramaMovies", name: "Drama" },
  { key: "sciFiMovies", name: "Sci-Fi" },
  { key: "thrillerMovies", name: "Thriller" },
];

export interface MoviesListProps {
  category: {
    key: keyof MoviesByCategory;
    name: string;
  };
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
