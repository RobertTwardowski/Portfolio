import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FooterStyles } from './FooterIcons.styles'

export const FooterIcons = () => {
  return (
    <FooterStyles>
      <a href='https://github.com/RobertTwardowski' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} size='4x' rotation={90} /></a>
      <a href='https://www.linkedin.com/in/robert-twardowski-1a1583254/' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} size='4x' rotation={90} /></a>
    </FooterStyles>
  )
}
