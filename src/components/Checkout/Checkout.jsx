import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cartSelector.js'
import {CheckoutItemContainer, ImageContainer, Img, Span, Arrow, RemoveButton} from  './checkout.style.js'
import {removeByChoosing,removeItemFromCart,addItemToCart} from '../../store/cart/cartAction'



const Checkout = (product) => {
    const {imageUrl, name, price, quantity} = product.product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

  const removeItemHandler = () => {
      dispatch(removeItemFromCart(cartItems,product.product))
  }
  const removeAllHandler = () => {
      dispatch(removeByChoosing(cartItems,product.product))
  }
  const addItemHandler = () => {
      dispatch(addItemToCart(cartItems,product.product))
  }
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt='product' />
      </ImageContainer>
      <Span name>{name}</Span>
      <Span quantity>
        <Arrow  onClick={removeItemHandler}>&#10094;</Arrow>
        <Span value>{quantity}</Span>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Span>
      <Span price>{price}</Span>
      <RemoveButton  onClick={removeAllHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default Checkout