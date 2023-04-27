import React from 'react'
import { ButtonMore } from './ButtonMoreInfo.styles'


export const ButtonMoreInfo = ({onClick}) => {

  const handelButton =()=>{
 onClick()
 
  }
  return (
    <ButtonMore onClick={handelButton}>Więcej Info</ButtonMore>
  )
}
