import useWaitPromise from "@/hooks/useWaitPromise";
import { getCharacters } from "@/http/starWars.service";
import { createContext } from "react";

const CharactersContext = createContext();

export const CharactersContextProvider = ({ children }) => {
  const characters = useWaitPromise(getCharacters);
  return (
    <CharactersContext.Provider value={characters}>
      {children}
    </CharactersContext.Provider>
  )
};

export default CharactersContext;