import { useState, useEffect } from 'react';
import GlobalStyles from './components/styles/Global';
import PokemonTypeSelect from './components/PokemonTypeSelect';
import PokemonResults from './components/PokemonResults';
import Pagination from './components/Pagination';

function App() {

  const [typeChoice, setTypeChoice] = useState('');
  const [tenPokemon, setTenPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleChooseType = (type) => {
    setTypeChoice(type);
    setCurrentPage(1);
  }

  useEffect(() => {

    const fetchPokemon = async () => {
      const data = await fetch(`/types/${typeChoice}/${currentPage}`);
      const dataJSON = await data.json();
      setTenPokemon(dataJSON.tenPokemon);
      setTotalPages(dataJSON.totalPages);
    }

    if (typeChoice) {
      fetchPokemon();
    }

  }, [typeChoice, currentPage]);

  return (
    <>
      <GlobalStyles typeChoice={typeChoice} />
      <PokemonTypeSelect handleChoose={handleChooseType} />
      <PokemonResults results={tenPokemon} />
      <Pagination
        typeChoice={typeChoice}
        currentPage={currentPage}
        totalPages={totalPages}
        pageUp={() => setCurrentPage(currentPage + 1)}
        pageDown={() => setCurrentPage(currentPage - 1)}
      />
    </>
  );
}

export default App;