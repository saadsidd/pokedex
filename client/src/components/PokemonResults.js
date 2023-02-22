import Pokemon from "./Pokemon";
import { ResultsContainer } from "./styles/Results.styled";


export default function PokemonResults({ results }) {

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
      {results.length > 0 && createResults(results)}
    </ResultsContainer>
  )
}