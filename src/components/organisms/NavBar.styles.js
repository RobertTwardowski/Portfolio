import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
 
  
  ul {
    display: flex;
    flex-direction: row;
  
  }
  li {
    padding: 2rem;
  }

  a:hover {
    color: #344;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.5s, opacity 0.5s linear;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
`
export const NeonWrapper = styled.div`
  display: inline-flex;
`

export const Txt = styled.span`
  color: #fff;
  font-size: 1rem;
  padding: 1rem;
  font-weight: bold;
  text-shadow:0 0 10px #fff;
  text-transform: uppercase;
`
export const StyledMenu = styled.div`
  background-color: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1rem;
  display: ${props => props.isOpen ? "block" : "none"};
  position: absolute;
  top: 0px;
  right: 0px;
  


  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: block;
    height: 100%;
  }

  li {
    margin-bottom: 1.5em;
  }

  a {
    color: #b8b7ad;
    text-decoration: none;
  }
`

export const StyledButton = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.5em;
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 10;


  &:hover {
    color: lightgray;
  }

  @media (min-width: 798px) {
    display: none;
  }
`