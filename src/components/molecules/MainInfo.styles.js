import styled,{css,keyframes} from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateX(-2000px);
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`

  export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 1200px;
  height: 90vh;
  padding: 1rem;

 

  h2 {
    
    margin-bottom: 5rem;
    font-size: 4rem;
    cursor: default;
    z-index: 2;
    text-shadow:0 0 50px #000;
    ${({ isExpanded }) =>
      isExpanded &&
      css`
        animation: ${slideIn} 1s ease forwards;
      `}
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 3rem;
    cursor: default;
    transition: transform 0.5s ease;
    text-shadow:0 0 50px #000;
    ${({ isExpanded }) =>
    isExpanded &&
    `
      transform: translateX(2000px);
    `}
  }
  

  span {
    color: #111;
  }

  button{
    transition: transform 0.5s ease;
    ${({ isExpanded }) =>
    isExpanded &&
    `
      transform: translateY(2000px);
    `}
  }
`

