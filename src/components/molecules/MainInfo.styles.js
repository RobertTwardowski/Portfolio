import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  
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
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 3rem;
    cursor: default;
  }

  span {
    color: #111;
  }
`

