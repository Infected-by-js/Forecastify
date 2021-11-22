import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
  font-family: 'Barlow', sans-serif;
  color: #4A4646;
  margin:0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  outline: none;
  
}



a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

button {
  background-color: transparent;
  border: 2px solid transparent;
  cursor: pointer;
}


`;
