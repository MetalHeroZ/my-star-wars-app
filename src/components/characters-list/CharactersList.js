import { useContext } from "react";
import CharactersContext from "@/context/CharactersContext";
import Character from "./Character";
import ErrorMessage from "../shared/ErrorMessage";
import LoadingMessage from "../shared/LoadingMessage";

export default function CharactersList() {
  const { ready, data, error } = useContext(CharactersContext);
  
  return (
    <div className="container space-y-8 mt-9">
      <h1 className="font-bold text-2xl text-center text-blue-500"> 
        Meet the characters of <b>Star Wars!</b>
      </h1>

      {!ready && (
        <div className="flex justify-center items-center">
          <LoadingMessage /> 
        </div>
      )}

      {ready && !error && ( 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {data.results.map(character => 
            <Character 
              key={character.url}
              characterData={character} 
            /> 
          )}
        </div>
      )}
      
      {ready && error && <ErrorMessage />}
    </div>
  )
}
