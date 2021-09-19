import { useState, useEffect } from 'react';

function useWaitPromise(thePromise) {
  const [ ready, setReady ] = useState(false);
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(false);

  const fetchData = async () => {
    try {
      const response = await thePromise();
      setData(response.data);
      setReady(true);
    } catch (error) {
      setError(true);
      setReady(true);
    }
  }

  useEffect( () => {
    fetchData();    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ready, data, error };
}

export default useWaitPromise;