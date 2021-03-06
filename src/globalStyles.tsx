import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: Ubuntu, Helvetica, Sans-Serif;
    box-sizing: border-box;
  }

  html,
  body {
    background-color: #fffced;
    color: #686767;
  }
`;

export default GlobalStyle;
