import { createContext } from "react";
import { MoviesContextType } from "../Types";

export const MoviesDataContext = createContext<MoviesContextType | null>(null);
