import React from 'react'
import {BaseButton} from './button.style.js'
const Button = ({content,...otherProps}) => {

  return (
    <BaseButton {...otherProps}>{content}</BaseButton>
  )
}

export default Button