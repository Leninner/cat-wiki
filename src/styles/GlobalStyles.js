import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    display: flex;
    justify-content: center;
  }

  body {
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    max-width: 1248px;
    width: 100%;
    min-height: 100vh;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
    }
  }

  input {
    border: none;
    outline: none;
    font-family: 'Montserrat';
    font-style: normal;
  }
`;
