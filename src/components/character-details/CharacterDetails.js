import useWaitPromise from "@/hooks/useWaitPromise";
import { getPeople } from "@/http/starWars.service";
import Planet from './Planet';
import { home } from "@/routes/routes.constants";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import LoadingMessage from "../shared/LoadingMessage";

function CharacterDetails({ match }) {
  const { id } = match.params;
  const { ready, data, error } = useWaitPromise(() => getPeople(id));
  
  return (
    <div className="container mt-9 space-y-6 max-w-2xl">
      <Link to={home} className="bg-white border border-gray-200 px-4 py-2">
        <i className="fa fa-arrow-left mr-1"></i> Back to the list
      </Link>
      {!ready && (
        <div className="bg-white border border-gray-200 px-5 py-3 space-y-3">
          <LoadingMessage />
        </div>
      )}
      {ready && !error && (
        <Fragment>
          <div>
            <h4 className="text-gray-500 font-bold mb-1">Basic information</h4>
            <Details details={data} />
          </div>
          <div>
            <h4 className="text-gray-500 font-bold mb-1">Planet</h4>
            <Planet url={data.homeworld}/>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default CharacterDetails;