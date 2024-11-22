import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins' sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.text.main};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
