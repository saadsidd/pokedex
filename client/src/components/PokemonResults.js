import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import { ResultsContainer } from "./styles/Results.styled";


export default function PokemonResults({ typeChoice }) {

  const [results, setResults] = useState(null);

  const fetchPokemon = async (typeChoice) => {
    const data = await fetch(`/types/${typeChoice}`);
    const pokemonJSON = await data.json();
    console.log(pokemonJSON);
    setResults(pokemonJSON);
  }

  const createResults = (results) => {
    return results.map((pokemon) => {
      return (
        <Pokemon
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name.english}
          types={pokemon.type}
          hp={pokemon.base.HP}
          attack={pokemon.base.Attack}
          defense={pokemon.base.Defense}
          speed={pokemon.base.Speed}
        />
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