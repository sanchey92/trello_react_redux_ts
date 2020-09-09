import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: orange;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: all, 0.5s ease-in;
    font-family: 'Roboto', sans-serif;
  }
`;

export {GlobalStyle}
