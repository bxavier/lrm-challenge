import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: ${props => props.theme.fonts.family.primary};
  }

  button {
    cursor: pointer;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.white};
  }

  #root, .App {
    width: 100%;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
    text-align: left;
  }
  
  `;
