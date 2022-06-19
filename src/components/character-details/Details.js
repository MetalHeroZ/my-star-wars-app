import DataSets from "../shared/DataSet";

function Details({ details }) {
  const { name, height, hair_color, eye_color, skin_color, gender, birth_year } = details;
  const getDataSet = () => [
    { label: 'Height' , icon: 'fas fa-ruler', value: height },
    { label: 'Hair Color' , icon: 'fas fa-dot-circle', value: hair_color },
    { label: 'Eye Color' , icon: 'fas fa-eye', value: eye_color },
    { label: 'Skin Color' , icon: 'fas fa-user', value: skin_color },
    { label: 'Gender' , icon: 'fas fa-mercury', value: gender },
    { label: 'Birthday' , icon: 'fas fa-birthday-cake', value: birth_year },
  ];
  return (
    <div className="panel px-5 py-3 space-y-4">
      <h1 className="font-bold text-2xl text-blue-500">{name}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <DataSets dataset={getDataSet()} />
      </div>
    </div>
  )
}

export default Details;