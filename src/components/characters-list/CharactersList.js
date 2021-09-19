import CharactersContext from "@/context/CharactersContext";
import { goToDetails } from "@/routes/routes.constants";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Character from "./Character";

export default function CharactersList() {
  const { ready, data, error } = useContext(CharactersContext);
  
  return (
    <div className="container space-y-8 mt-9">
      <h1 className="font-bold text-xl text-center"> 
        Meet the characters of <b>Star Wars!</b>
      </h1>
      {ready && !error && ( 
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data && data.results.map(character => 
            <Character 
              key={character.url}
              characterData={character} 
            /> 
          )}
        </div>
      )}

      {!ready && (
        <div className="flex justify-center items-center"> 
          <span className="font-bold text-center">
            ¯\_(ツ)_/¯ <br />
            waiting for the data ...
          </span> 
        </div>
      )}
      
      {ready && error && (
        <div className="font-bold text-center">
          (╯°□°）╯︵ ┻━┻ <br />
          Something went wrong.
        </div>
      )}
    </div>
  )
}
