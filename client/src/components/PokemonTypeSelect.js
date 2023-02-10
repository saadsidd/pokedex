import { useState, useEffect } from "react";
import { TypeSelectContainer, PokedexImage, TypeSelect } from "./styles/TypeSelect.styled";

export default function PokemonTypeSelect({ handleChoose }) {

  const [types, setTypes] = useState(null);

  useEffect(() => {

    const fetchTypes = async () => {
      const data = await fetch('/types');
      const typesJSON = await data.json();
      const typesArray = typesJSON.map(type => type.english);
      setTypes(typesArray);
    }

    fetchTypes();
    
  }, []);

  const createOptions = (types) => {
    return types.map((type, index) => <option key={index} value={type}>{type}</option>);
  }

  return (
    <TypeSelectContainer>
      <PokedexImage>
        <img src='./pokedex.png' alt='pokedex' />
      </PokedexImage>
      <TypeSelect defaultValue='placeholder' onChange={event => handleChoose(event.target.value)}>
        <option value='placeholder' disabled>Select a Pokémon type</option>
        {types && createOptions(types)}
      </TypeSelect>
    </TypeSelectContainer>
  )
}