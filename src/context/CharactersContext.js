import { createContext } from "react";

const CharactersContext = createContext({
  ready: false,
  data: null,
  error: false,
});

export default CharactersContext;