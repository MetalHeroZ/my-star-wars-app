import useWaitPromise from '@/hooks/useWaitPromise';
import { getCharacters } from '@/http/starWars.service';
import React from 'react'
import Routes from '../routes/Routes';
import CharactersContext from '@/context/CharactersContext';

function App() {
  const characters = useWaitPromise(getCharacters);
  return (
    <CharactersContext.Provider value={characters} >
      <Routes />
    </CharactersContext.Provider>
  )
}

export default App;