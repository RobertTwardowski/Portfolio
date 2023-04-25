import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper, Container } from './MainInfo.styles'
import { ButtonMoreInfo } from '../atom/ButtonMoreInfo'

export const MainInfo = () => {
  const navigate = useNavigate('')

  const handleClick = () => {
    navigate('/about')
  }

  return (
    <Wrapper>
      <Container>
        <h2>
          Cześć, mam na imię Robert<span>.</span>
        </h2>
        <h3>
          Witaj na mojej stronie<span>!</span>
        </h3>
        <ButtonMoreInfo onClick={handleClick} />
      </Container>
    </Wrapper>
  )
}
