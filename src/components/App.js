import Routes from '../routes/Routes';
import { CharactersContextProvider } from '@/context/CharactersContext';

function App() {
  return (
    <CharactersContextProvider>
      <Routes />
    </CharactersContextProvider>
  )
}

export default App;