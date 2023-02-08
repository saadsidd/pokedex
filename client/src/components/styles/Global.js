import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    background-color: rebeccapurple;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyles;