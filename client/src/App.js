import { useState } from 'react';
import GlobalStyles from './components/styles/Global';
import PokemonTypeSelect from './components/PokemonTypeSelect';
import PokemonResults from './components/PokemonResults';

function App() {

  const [typeChoice, setTypeChoice] = useState(null);

  return (
    <>
      <GlobalStyles />
      <PokemonTypeSelect handleChoose={type => setTypeChoice(type)} />
      <PokemonResults typeChoice={typeChoice} />
    </>
  );
}

export default App;