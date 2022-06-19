import useWaitPromise from "@/hooks/useWaitPromise";
import { getCharacters } from "@/http/starWars.service";
import { createContext } from "react";

const CharactersContext = createContext();

export const CharactersContextProvider = ({ children }) => {
  const { ready, data, error } = useWaitPromise(getCharacters);
  return (
    <CharactersContext.Provider value={{ ready, data, error }}>
      {children}
    </CharactersContext.Provider>
  )
};

export default CharactersContext;