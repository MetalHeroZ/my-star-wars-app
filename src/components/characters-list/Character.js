export default function Character({ characterData }) {
  const { name, birth_year, gender, films, vihicles, starships } = characterData;
  return (
    <div className="border shadow rounded-md py-3 px-3 max-w-sm w-full">
      <div className="flex space-x-4">
        <div className="rounded-full bg-gray-300 h-12 w-12 flex justify-center items-center">
          <span className="-mt-0.5 font-bold text-xl text-gray-600">{name[0]}</span>
        </div>
        <div className="flex-1">
          <div className="font-bold text-gray-600 line-clamp-1">{name}</div>
          <div className="font-medium text-gray-400">{gender}</div>
        </div>
      </div>
    </div>
  )
}
