import { useState, useEffect } from "react";
import { ResultsContainer } from "./styles/ResultsContainer.styled";
import { Result } from "./styles/Result.styled";
import { TitleContainer } from "./styles/TitleContainer.styled";
import { StatsContainer } from "./styles/StatsContainer.styled";
import { StatLabel } from "./styles/StatLabel.styled";
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
    return results.map((pokemon, index) => {
      return (
        <Result key={index}>

          <div className='left' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0px 20px', borderRight: '1px solid black'}}>
            <img style={{borderRight: '1px black'}} src={`./thumbnails/${pokemon.id.toString().padStart(3, '0')}.png`} alt={pokemon.name.english} />
          </div>

          <div className='right' style={{width: '100%'}}>
            <TitleContainer>
              {`#${pokemon.id.toString().padStart(3, '0')} | ${pokemon.name.english}`}
            </TitleContainer>
            {/* <hr /> */}
            <StatsContainer>
              <div><StatLabel>Type: </StatLabel>{pokemon.type.map((type, index) => <TypeBadge type={type} key={index}>{type}</TypeBadge>)}</div>
              <div><StatLabel>HP: </StatLabel>{pokemon.base.HP}</div>
              <div><StatLabel>Attack: </StatLabel>{pokemon.base.Attack}</div>
              <div><StatLabel>Defense: </StatLabel>{pokemon.base.Defense}</div>
              <div><StatLabel>Speed: </StatLabel>{pokemon.base.Speed}</div>
            </StatsContainer>
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