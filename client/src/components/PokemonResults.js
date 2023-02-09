import { useState, useEffect } from "react";
import { ResultsContainer, Result, ImageContainer, InfoContainer, Title, StatsContainer, StatLabel } from "./styles/Results.styled";
import { TypeBadge } from "./styles/TypeBadge.styled";


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
        <Result key={pokemon.id} onClick={event => console.log(event.currentTarget)}>

          <ImageContainer><img src={`./thumbnails/${pokemon.id.toString().padStart(3, '0')}.png`} alt={pokemon.name.english} /></ImageContainer>

          <InfoContainer>
            <Title>{`#${pokemon.id.toString().padStart(3, '0')} |\u00A0 ${pokemon.name.english}`}</Title>
            <StatsContainer>
              <div><StatLabel>Type: &nbsp;&nbsp;</StatLabel>{pokemon.type.map((type, index) => <TypeBadge type={type} key={index}>{type}</TypeBadge>)}</div>
              <div><StatLabel>HP: </StatLabel>{pokemon.base.HP}</div>
              <div><StatLabel>Attack: </StatLabel>{pokemon.base.Attack}</div>
              <div><StatLabel>Defense: </StatLabel>{pokemon.base.Defense}</div>
              <div><StatLabel>Speed: </StatLabel>{pokemon.base.Speed}</div>
            </StatsContainer>
          </InfoContainer>

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