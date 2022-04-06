import Routes from '../routes/Routes';
import { CharactersContextProvider } from '@/context/CharactersContext';

const App = () => (
    <CharactersContextProvider>
      <Routes />
    </CharactersContextProvider>
);

export default App;