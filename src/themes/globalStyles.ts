import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body, div, img {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
  }
  
  div {
    display: table;
    margin: 0 auto;
  }
  
  .App {
    display: flex;
    align-items: center;
    width: 1200px;
    height: 100%;
  }
`;

export default GlobalStyles;
