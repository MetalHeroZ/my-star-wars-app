import useWaitPromise from '@/hooks/useWaitPromise';
import { getFromUrl } from '@/http/starWars.service';
import DataSets from '../shared/DataSet';
import ErrorMessage from '../shared/ErrorMessage';
import LoadingMessage from '../shared/LoadingMessage';

function Planet({ url }) {
  const { ready, data, error } = useWaitPromise(() => getFromUrl(url));
  const getDataSet = () => [
    { label: 'name' , icon: 'fas fa-globe-americas', value: data.name},
    { label: 'Rotation Period' , icon: 'fas fa-undo', value: data.rotation_period },
    { label: 'Orbital Period' , icon: 'fas fa-sync-alt', value: data.orbital_period },
    { label: 'diameter' , icon: 'fas fa-ruler-horizontal', value: data.diameter },
    { label: 'Climate' , icon: 'fas fa-cloud', value: data.climate },
    { label: 'Gravity' , icon: 'fas fa-weight-hanging', value: data.gravity },
  ];
  
  return (
    <div className="panel rounded-md px-5 py-3">
      {!ready && <LoadingMessage />}
      {ready && error && <ErrorMessage />}
      {ready && !error && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <DataSets dataset={getDataSet()} />
        </div>
      )}
    </div>
  )
}
export default Planet