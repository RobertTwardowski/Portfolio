import styled from 'styled-components'

export const ButtonMore = styled.button`
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

  :hover {
    box-shadow: 0 0 20px #333;
    color: #111;
    cursor: pointer;
    transition: 0.5s;
  }
`
