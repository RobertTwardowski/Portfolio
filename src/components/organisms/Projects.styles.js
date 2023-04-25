import styled from "styled-components";

export const Wrapper=styled.div`
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 800px;
  height: 400px;
  border: 2px solid #e2e2e2;
  border-radius: 6px;
  box-shadow: 0.65px 3px 3px 2px #444;
  margin: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    padding-top: 0;
    margin:0;
    margin-top: 1rem;
  }
`

export const ContainerLeft = styled.div`
width: 50%;
height: 100%;
background: url(${props => props.photo});
  display: flex;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`


export const ContainerRight=styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
@media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

`
export const ContainerDown=styled.div`
display: flex;
flex-direction: row;
text-align: center;
align-items:center;

a{
  padding: 1rem;
  text-decoration: none;
  margin: 1rem;
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
}
  a:hover {
    box-shadow: 0 0 20px #333;
    color: #111;
    cursor: pointer;
    transition: 0.5s;
  }`

  export const ContainerUp=styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  h2{
    font-size: 30px;
  }
  `