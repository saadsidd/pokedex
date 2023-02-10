import styled from "styled-components";

export const TypeSelectContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0px;
  background-color: #f1dddd;
`;

export const PokedexImage = styled.div`
  & > img {
    width: 200px;
  }
`;

export const TypeSelect = styled.select`
  width: 300px;
  height: 50px;
  padding-left: 20px;
  font-size: 20px;
`;