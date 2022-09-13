import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cartSelector.js'
import {CartItemContainer, Imag, ItemDetails, Span} from './cartItem.style.js'


const CartItem = () => {
    const cartItems = useSelector(selectCartItems)
  return (
    <>
        {cartItems.map(cartItem => (
            <CartItemContainer key={cartItem.id}>
                <Imag src={cartItem.imageUrl} alt={`${cartItem.name}`} />
                <ItemDetails>
                    <Span>{cartItem.name}</Span>
                    <Span>{cartItem.quantity} x ${cartItem.price}</Span>
                </ItemDetails>
            </CartItemContainer>
        ))}
    </>
  )
}

export default CartItem