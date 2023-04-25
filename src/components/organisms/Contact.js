import React from 'react'
import { Wrapper, Container } from './Contact.styles'
import { ButtonMore } from '../../components/atom/ButtonMoreInfo.styles'

export const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <form action='MAILTO:twardowski.robert1908@gmail.com' method='post'>
          <label>Imię:</label>
          <input type='text' name='imie' required />

          <label>Nazwisko:</label>
          <input type='text' name='nazwisko' required />

          <label>Adres e-mail:</label>
          <input type='email' name='adres-email' required />

          <label>Treść wiadomości:</label>
          <textarea name='wiadomosc' rows='10' required></textarea>

          <ButtonMore type='submit' value='Wyślij'>
            Wyślij
          </ButtonMore>
        </form>
      </Container>
    </Wrapper>
  )
}
