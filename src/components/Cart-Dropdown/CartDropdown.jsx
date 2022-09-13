import React from 'react'
import { useSelector } from 'react-redux'
import {CartDropdownContainer, EmptyMessage} from './cartdropdown.style.js'
import Button from '../Button/Button.jsx'
import CartItem from '../CartItem/CartItem.jsx'
import { useNavigate } from 'react-router-dom'
import {selectCartCount} from '../../store/cart/cartSelector'

const CartDropdown = () => {
    const cartItems  = useSelector(selectCartCount)
    const navigate = useNavigate()
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

  return (
    <CartDropdownContainer>
     {
     cartItems>0 
     ? <CartItem style={{'height': '240px', 'display': 'flex', 'flex-direction': 'column','overflow':'scroll'}} /> 
     : <EmptyMessage>Your cart is empty</EmptyMessage>
     }
     <Button onClick={goToCheckoutHandler} content='CHECKOUT'/>
    </CartDropdownContainer>
  )
}

export default CartDropdown