import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Wrapper,
  NeonWrapper,
  Txt,
  StyledMenu,
  StyledButton
} from './NavBar.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <NeonWrapper>
        <Txt>
          <Link to=''>Robert Twardowski</Link>
        </Txt>
      </NeonWrapper>

      <>
        <StyledButton onClick={handleMenuButtonClick}>
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} size='2x' />
          ) : (
            <FontAwesomeIcon icon={faBars} size='2x' />
          )}
        </StyledButton>
        {window.innerWidth > 798 ? (
          <ul>
            <li>
              <Link to='/About'>O mnie</Link>
            </li>
            <li>
              <Link to='/Projects'>Projekty</Link>
            </li>
            <li>
              <Link to='/Contact'>Kontakt</Link>
            </li>
          </ul>
        ) : (
          <StyledMenu
            isOpen={isOpen}
          >
            <ul>
              <li>
                <Link onClick={() => setIsOpen(false)} to='/About'>
                  O mnie
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to='/Projects'>
                  Projekty
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to='/Contact'>
                  Kontakt
                </Link>
              </li>
            </ul>
          </StyledMenu>
        )}
      </>
    </Wrapper>
  )
}

export default Header
