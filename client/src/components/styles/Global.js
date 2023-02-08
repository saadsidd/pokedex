import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    background-color: #f3f3f3;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

export default GlobalStyles;