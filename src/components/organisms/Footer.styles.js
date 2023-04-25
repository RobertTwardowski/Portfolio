import styled from "styled-components";

export const FooterStyles =styled.div`
position: absolute;
top:200px;
left:20px;
z-index: 1;

@media (max-width: 768px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
  }
`