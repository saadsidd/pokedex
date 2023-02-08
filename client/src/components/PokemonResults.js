import { useState, useEffect } from "react";
import { ResultsContainer } from "./styles/ResultsContainer.styled";

export default function PokemonResults({ typeChoice }) {

  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (typeChoice) => {
    const data = await fetch(`/types/${typeChoice}`);
    const pokemonJSON = await data.json();
    console.log(pokemonJSON);
  }

  useEffect(() => {
    if (typeChoice) {
      fetchPokemon(typeChoice);
    }
  }, [typeChoice]);

  return (
    <ResultsContainer>
      {pokemon}
    </ResultsContainer>
  )
}