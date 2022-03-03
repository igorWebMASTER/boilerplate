import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    font-family: 'Sofia Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    border: none;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
    font-smooth: antialiased;
  }
`;

export default GlobalStyle;
