import styled from "styled-components";

export const FooterStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: center;


a{
    padding: 0.5rem;
    text-decoration: none;
    color: #e2e2e2;
}
a:hover{
    color:#333;
    rotate: -90deg;
    transition: 0.8s ease-in;
}

@media (max-width: 768px) {
    rotate: -90deg;
    padding: 0;
  }
`