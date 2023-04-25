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

body{
    
    font-family: 'Montserrat','Roboto', sans-serif;
   color: #111;
   background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898 no-repeat center center/cover;

}


ul{
    list-style-type: none;
}
`
