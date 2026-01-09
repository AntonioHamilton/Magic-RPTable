import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: ${theme.fontFamily.sans};
    font-size: ${theme.fontSize.base};
    font-weight: ${theme.fontWeight.normal};
    line-height: ${theme.lineHeight.normal};
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fontFamily.heading};
    font-weight: ${theme.fontWeight.bold};
    line-height: ${theme.lineHeight.tight};
    color: ${theme.colors.text.primary};
  }

  h1 {
    font-size: ${theme.fontSize["4xl"]};
  }

  h2 {
    font-size: ${theme.fontSize["3xl"]};
  }

  h3 {
    font-size: ${theme.fontSize["2xl"]};
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  #root {
    min-height: 100vh;
  }
`;
