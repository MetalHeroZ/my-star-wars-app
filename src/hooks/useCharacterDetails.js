import CharactersContext from "@/context/CharactersContext";
import { getIdFromPeopleUrl } from "@/helpers/urlFilter";
import { useContext } from "react";

function useCharacterContext() {
  const { ready, data, error } = useContext(CharactersContext); 
  
  
  return { ready, data, error  }
}