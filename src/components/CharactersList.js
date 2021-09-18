import CharactersContext from "@/context/CharactersContext";
import { goToDetails } from "@/routes/routes.constants";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const { ready, data, error } = useContext(CharactersContext);

  return (
    <div className="container">
      {ready ? (
        <span>The List 🎃</span>
      ) : (
        <span> loading ... </span>
      )}
      <br />
      <Link to={goToDetails(4)} className='underline font-semibold text-purple-700'>
        Go to details  
      </Link>
    </div>
  )
}
