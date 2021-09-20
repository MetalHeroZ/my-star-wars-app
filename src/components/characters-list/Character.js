import { goToDetails } from "@/routes/routes.constants";
import { Link } from "react-router-dom";

export default function Character({ characterData }) {
  const { name, films, url } = characterData;
  return (
    <Link to={goToDetails(url)}>
      <div className="panel hover:shadow transition-all py-3 px-3 max-w-sm w-full mx-auto md:mx-0">
        <div className="flex space-x-4">
          <div className="rounded-full bg-blue-50 h-12 w-12 flex justify-center items-center">
            <span className="-mt-0.5 font-bold text-xl text-gray-600">{name[0]}</span>
          </div>
          <div className="flex-1">
            <div className="font-bold text-gray-600 line-clamp-1">{name}</div>
            <div className="font-medium text-gray-400 text-sm">Films: {films.length}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
