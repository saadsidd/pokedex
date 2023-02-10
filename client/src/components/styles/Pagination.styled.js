import styled from "styled-components";

export const PaginationContainer = styled.footer`
  display: flex;
  align-items: center;
  font-weight: 900;
`;

const PageButton = styled.button`
  width: 75px;
  height: 40px;
  margin: 20px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  background-color: #333;
  cursor: pointer;
  transition: transform 100ms linear;

  &:hover {
    background-color: #fff;
    color: black;
    border: 2px solid black;
    transform: scale(1.05);
  }
`;

export const PrevPageButton = styled(PageButton)`
  &::before {
    content: '<';
  }
`;

export const NextPageButton = styled(PageButton)`
  &::before {
    content: '>';
  }
`;