import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
  padding:0;
  margin:0;
  box-sizing: border-box;
}

/* this is to work with a size of 1rem = 10px */
html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: black;
  line-height: 1.5;
  font-size: 1.6rem;
}

ul,li{
  list-style: none;
}

input,
button {
  font: inherit;
  color: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}


`;
export default GlobalStyle;
