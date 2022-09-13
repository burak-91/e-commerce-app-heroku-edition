import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {selectCartCount,selectDropdown} from '../../store/cart/cartSelector'
import {setCartDropdown} from '../../store/cart/cartAction'
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg'
import {CartIconContainer,Span} from './cart-icon.style.js'



const CartIcon = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectCartCount)
  const cartItems = useSelector(selectCartCount)
  const isDropdown = useSelector(selectDropdown)
  
  const handleDropdown = () => dispatch(setCartDropdown(!isDropdown))
  
  return (
    <CartIconContainer  onClick={handleDropdown}>
        <ShoppingCartIcon style={{ 'width': '24px', 'height': '24px'}} />
        {
        cartItems> 0 
        ? <Span>{totalQuantity}</Span> 
        : <Span>0</Span>
        }
    </CartIconContainer>
  )
}

export default CartIcon