import { useState } from 'react';
import GlobalStyles from './components/styles/Global';
import PokemonTypeSelect from './components/PokemonTypeSelect';
import PokemonResults from './components/PokemonResults';
import Pagination from './components/Pagination';

function App() {

  const [typeChoice, setTypeChoice] = useState(null);
  const [page, setPage] = useState(1);

  const handleChooseType = (type) => {
    setTypeChoice(type);
    setPage(1);
  }

  return (
    <>
      <GlobalStyles />
      <PokemonTypeSelect handleChoose={handleChooseType} />
      <PokemonResults page={page} typeChoice={typeChoice} />
      <Pagination typeChoice={typeChoice} page={page} pageUp={() => setPage(page + 1)} pageDown={() => setPage(page - 1)} />
    </>
  );
}

export default App;