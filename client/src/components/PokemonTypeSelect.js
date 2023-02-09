import { useState, useEffect } from "react";
import { TypeSelect } from "./styles/TypeSelect.styled";

export default function PokemonTypeSelect({ handleChoose }) {

  const [types, setTypes] = useState(null);

  const fetchTypes = async () => {
    const data = await fetch('/types');
    const typesJSON = await data.json();
    const typesArray = typesJSON.map(type => type.english);
    setTypes(typesArray);
  }

  const createOptions = (types) => {
    return types.map((type, index) => <option key={index} value={type}>{type}</option>);
  }

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <TypeSelect defaultValue='placeholder' onChange={event => handleChoose(event.target.value)}>
      <option value='placeholder' disabled>Select a Pokémon type</option>
      {types && createOptions(types)}
    </TypeSelect>
  )
}