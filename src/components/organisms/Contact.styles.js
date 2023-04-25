import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 1200px;
  height: 90vh;
   margin: 1rem;
   @media (max-width: 768px) {
    width: 100%;
  }

  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 40%;
    height: 60%;
    border: 2px solid #e2e2e2;
    border-radius: 6px;
    padding: 1rem;
    box-shadow: 0.5px 3px 3px 2px #e2e2e2;
    @media (max-width: 768px) {
    width: 100%;
  }
  }

  label{
    padding:5px;
  }
  input{
    padding: 8px;
    border-radius: 6px;
    box-shadow: 4px 4px 10px 4px rgba(66, 68, 90, 1);
  
    width: 80%;
  }
  textarea{
    padding: 4px;
    height: 250px;
    width: 80%;
    border-radius: 6px;
    box-shadow: 4px 4px 10px 0px rgba(66, 68, 90, 1);
  }
`