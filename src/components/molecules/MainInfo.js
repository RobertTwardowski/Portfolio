import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper, Container } from './MainInfo.styles'
import { ButtonMoreInfo } from '../atom/ButtonMoreInfo'

export const MainInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate('')
  const handleClick = () => {
    setIsExpanded(true);
   setTimeout(()=>navigate('/about'),1000) 
  }

  return (
    <Wrapper isExpanded={isExpanded}>
      <Container isExpanded={isExpanded}>
        <h2>
          Cześć, mam na imię Robert<span>.</span>
        </h2>
        <h3>
          Witaj na mojej stronie<span>!</span>
        </h3>
        <ButtonMoreInfo onClick={handleClick}/>
      </Container>
    </Wrapper>
  )
}
