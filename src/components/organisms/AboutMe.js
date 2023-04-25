import React from 'react'
import { Link } from 'react-router-dom'
import {
  Wrapper,
  Container,
  ContainerPhoto,
  ContainerIcons,
  ContainerLeft,
  ContainerRight,
  Foto,
  ReactIcon,
  JSicon,
  HtmlIcon,
  CssIcon,
  ContainerButton
} from './AboutMe.styles'
import Photo from '../../assets/Photo/RobertTwardowski.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faJs,
  faHtml5,
  faCss3
} from '@fortawesome/free-brands-svg-icons'

export const AboutMe = () => {
  return (
    <Wrapper>
      <Container>
        <ContainerLeft>
          <ContainerPhoto>
            <Foto>
              <img src={Photo} alt='RobertTwardowski'></img>
            </Foto>
          </ContainerPhoto>

          <ContainerIcons>
            <ReactIcon>
              <FontAwesomeIcon icon={faReact} size='4x' />
            </ReactIcon>
            <JSicon>
              <FontAwesomeIcon icon={faJs} size='4x' />
            </JSicon>

            <HtmlIcon>
              <FontAwesomeIcon icon={faHtml5} size='4x' />
            </HtmlIcon>
            <CssIcon>
              <FontAwesomeIcon icon={faCss3} size='4x' />
            </CssIcon>
          </ContainerIcons>
          <ContainerButton><Link to='/Projects'>Projekty</Link></ContainerButton>
          
        </ContainerLeft>
        <ContainerRight>
          <p>
            Cześć! Jestem Robert, student informatyki zainteresowany pracą jako
            frontend developer. Moje umiejętności obejmują React JS, HTML i CSS,
            a także chęć do ciągłego rozwoju i nauki. Studia informatyczne dają
            mi mocne podstawy teoretyczne i praktyczne, które chętnie
            wykorzystam w branży IT. Jako frontend developer, cenię sobie
            kreatywność i estetykę w projektowaniu interfejsów użytkownika. Jest
            to dla mnie równie ważne, jak znajomość technologii i narzędzi,
            które umożliwiają tworzenie funkcjonalnych i responsywnych stron
            internetowych. Jestem zmotywowany do pracy w zespole i współpracy z
            doświadczonymi programistami, którzy mogą mi pomóc w dalszym rozwoju
            moich umiejętności. Jestem gotowy na nowe wyzwania i chętnie podejmę
            pracę jako frontend developer, aby zdobywać doświadczenie i rozwijać
            się w branży IT.
          </p>
        </ContainerRight>
      </Container>
    </Wrapper>
  )
}
