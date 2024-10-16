import { createContext } from "react";
export const AppContext = createContext({
  MovieData: [],
  isFormOpen: false,
  handleSelectedMovie: () => {},
  handleSubmit: () => {},
});
