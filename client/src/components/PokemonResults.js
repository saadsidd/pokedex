import { useState, useEffect } from "react";
import { ResultsContainer } from "./styles/ResultsContainer.styled";
import { Result } from "./styles/Result.styled";

export default function PokemonResults({ typeChoice }) {

  const [results, setResults] = useState(null);

  const fetchPokemon = async (typeChoice) => {
    const data = await fetch(`/types/${typeChoice}`);
    const pokemonJSON = await data.json();
    console.log(pokemonJSON);
    // setResults(JSON.stringify(pokemonJSON));
    setResults(pokemonJSON);
  }

  const createResults = (results) => {
    return results.map((pokemon, index) => {
      return (
        <Result key={index}>

          <div className='left' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px'}}>
            <img style={{}} src={`./thumbnails/${pokemon.id.toString().padStart(3, '0')}.png`} alt={pokemon.name.english} />
          </div>

          <div className='right' style={{width: '100%', backgroundColor: 'lightblue'}}>
            <header className='title' style={{fontWeight: '500'}}>
              {`#${pokemon.id.toString().padStart(3, '0')} | ${pokemon.name.english}`}
              <hr />
            </header>
            <div>
              Type: {pokemon.type[0]}
            </div>
            <div>
              HP: {pokemon.base.HP}
            </div>
            <div>
              Attack: {pokemon.base.Attack}
            </div>
            <div>
              Defense: {pokemon.base.Defense}
            </div>
            <div>
              Speed: {pokemon.base.Speed}
            </div>
          </div>

        </Result>
      )
    });
  }

  useEffect(() => {
    if (typeChoice) {
      fetchPokemon(typeChoice);
    }
  }, [typeChoice]);

  return (
    <ResultsContainer>
      {results && createResults(results)}
    </ResultsContainer>
  )
}