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
export const VideoBG = styled.video`
  position: fixed; /* ustawienie pozycji na "relative" */
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  `