import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:ital,wght@0,700;1,500&display=swap');
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}

*, *::after, a::before{
box-sizing: inherit;

}

body {
    font-family: 'Montserrat', 'Roboto', sans-serif;
    color: #fff;
    width: 100%;
    height: 100%;
  }

ul{
    list-style-type: none;
    color: #fff;
    text-shadow:0 0 5px #fff;
}
`
