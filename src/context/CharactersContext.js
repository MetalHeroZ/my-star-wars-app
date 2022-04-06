import { useState, useEffect } from 'react';
import useWaitPromise from "@/hooks/useWaitPromise";
import { getCharacters } from "@/http/starWars.service";
import { createContext } from "react";

const CharactersContext = createContext();

export const CharactersContextProvider = ({ children,  }) => {
  const [context, setContext] = useState({}) 
  const charactersResponse = useWaitPromise(getCharacters);

  useEffect(() => {
    if (charactersResponse.ready) {
      setContext(charactersResponse);
    }
  }, [charactersResponse])

  return (
    <CharactersContext.Provider value={{ context, setContext}}>
      { children }
    </CharactersContext.Provider>
  )
};


export default CharactersContext;