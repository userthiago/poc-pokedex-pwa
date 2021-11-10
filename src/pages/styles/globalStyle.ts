import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #313131;
    --secondary-color: #616161;
    --pokedex-color: #DC0A2D;
    --pokedex-color--hover: #9e0722;
    --white-color: #FFFFFF;

    --font-family: 'Roboto', Helvetica, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: var(--font-family);
  }

  body {
    background: var(--secondary-color);
  }
  
  button {
    cursor: pointer;
  }
`;
