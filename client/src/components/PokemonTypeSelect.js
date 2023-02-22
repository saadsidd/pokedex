import { useState, useEffect } from "react";
import { TypeSelectContainer, PokedexImage, TypeSelect } from "./styles/TypeSelect.styled";

export default function PokemonTypeSelect({ handleChoose }) {

  const [types, setTypes] = useState([]);

  useEffect(() => {

    const fetchTypes = async () => {
      const data = await fetch('/types');
      const dataJSON = await data.json();
      const typesArray = dataJSON.map(type => type.english);
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
        {types.length > 0 && createOptions(types)}
      </TypeSelect>
    </TypeSelectContainer>
  )
}