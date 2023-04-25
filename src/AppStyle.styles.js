import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

@media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`
