import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import { ResultsContainer } from "./styles/Results.styled";


export default function PokemonResults({ page, typeChoice }) {

  const [results, setResults] = useState(null);

  useEffect(() => {

    const fetchPokemon = async (typeChoice) => {
      const data = await fetch(`/types/${typeChoice}/${page}`);
      const pokemonJSON = await data.json();
      setResults(pokemonJSON);
    }

    if (typeChoice) {
      fetchPokemon(typeChoice);
    }

  }, [typeChoice, page]);

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

  return (
    <ResultsContainer>
      {results && createResults(results)}
    </ResultsContainer>
  )
}