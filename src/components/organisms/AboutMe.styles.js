import styled, { keyframes } from 'styled-components'

const steam = keyframes`
0% {
		background-position: 0 0;
	}
	50% {
		background-position: 400% 0;
	}
	100% {
		background-position: 0 0;
	}
`
const fadeIn=keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`

export const Wrapper = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 1000px;
  height: 85vh;
  margin: 1rem;
  background: rgb(212,212,237);
background: linear-gradient(90deg, rgba(212,212,237,1) 0%, rgba(182,215,227,1) 21%, rgba(9,9,121,1) 100%, rgba(7,14,133,1) 100%);
  border: 2px solid #111;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
  
  border-radius: 6px;
  box-shadow: 0.65px 3px 3px 2px #444;
`
export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    height: 600px;
  }
`
export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    flex-direction: column;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 25px;
    height: 100%;
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    margin-bottom: 1rem;
  }
`
export const ContainerPhoto = styled.div`

position: relative;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:2;
 
`
export const Foto = styled.div`

position: relative;
height: 100%;
width: 100%;

 img {
  position: absolute;
    height: 250px;
    width: 300px;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 6px;
  }

  ::before,
  ::after {
    content: '';
   position: absolute; 
   transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background: linear-gradient(45deg ,#ffff, #111333,	#000);
    background-size: 400%;
    width: calc(300px + 10px);
    height: calc(250px + 10px);
    border-radius: 1px;
    z-index: -1;
    animation: ${steam} 20s linear infinite;
    border-radius: 6px;
  }

::after {
    filter: blur(40px);
  }`
export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;

  span {
    color: #e2e2e2;
    margin: 10px;
  }
`
export const ContainerButton = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;

  a{
    display: flex;
    justify-content: center;
    text-align: center;
    width: 40%;
    padding: 15px 35px;
  border: none;
  color: #e2e2e2;
  font-size: 10px;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
  background: #555;
  box-shadow: 0 0 10px #e2e2e2;
  margin-top: 1rem;
  text-decoration: none;
  
  }
  a:hover {
    box-shadow: 0 0 20px #333;
    color: #111;
    cursor: pointer;
    transition: 0.5s;
  }
`
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    color:#61DAFB;
  }
  100% {
    transform: rotate(360deg);
    color:#61DAFB;
  }
`

export const ReactIcon = styled.span`
animation: ${rotate} 10s linear infinite;

`
const changeColorJS = keyframes `
  0% {
    color: #e2e2e2;
    
  }
    25%{
      color: #FFD600;
    }
    50%{
      color: #FFD600;
      }
      75%{
        color: #FFD600;
      }

  100% {
    color: #e2e2e2;
  }

`
export const JSicon =styled.span`
 animation: ${changeColorJS} 5s  linear infinite;
 margin: 0;
 padding: 0;
`

const changeColorHtml = keyframes `
  0% {
    color: #e2e2e2;
    
  }

  25%{
    color: #E65100;
  }
  50%{
    color: #E65100;
    }
    75%{
      color: #E65100;
    }

  100% {
    color: #e2e2e2;
  }

`
export const HtmlIcon =styled.span`
 animation: ${changeColorHtml} 5s  linear infinite;
 margin: 0;
 padding: 0;
`
const changeColorCss = keyframes `
  0% {
    color: #e2e2e2;
    
  }

  25%{
    color: #0277BD;
  }
  50%{
    color: #0277BD;
    }
    75%{
      color: #0277BD;
    }

  100% {
    color: #e2e2e2;
  }

`
export const CssIcon =styled.span`
 animation: ${changeColorCss} 5s  linear infinite;
 margin: 0;
 padding: 0;
`

