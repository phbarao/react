import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Nunito', sans-serif;

  }

  a {
    text-decoration: none;
    color: #999;

    &:hover {
      color: #76D7C4;
    }
  }

`;
