import styled from "styled-components";
import typeColors from "../helpers/typeColors";

export const TypeBadge = styled.button`
  width: 75px;
  margin-right: 5px;
  border: none;
  padding: 4px;
  background-color: ${({ type }) => typeColors[type]};
  color: white;
  text-shadow: 1px 1px 2px black;
  font-weight: 700;
`;