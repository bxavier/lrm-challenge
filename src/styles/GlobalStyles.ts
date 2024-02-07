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

  body {
    width: 100%;
    background: ${props => props.theme.colors.primary};
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
  }
  
  `;
