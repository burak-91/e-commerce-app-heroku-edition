import React from 'react'
import {addItemToCart} from '../../store/cart/cartAction'
import { selectCartItems } from '../../store/cart/cartSelector.js'
import { useDispatch,useSelector } from 'react-redux'
import {ProductCartContainer, Footer, Name, Price} from './shop.style.js'
import Button from '../Button/Button'
const Shop = (product) => {
    const dispatch = useDispatch()
    const {imageUrl,name,price} = product.product
    const cartItems = useSelector(selectCartItems)
    const handleClick = () => {
      dispatch(addItemToCart(cartItems,product.product)) 
    }

  return (
    <ProductCartContainer>
     <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button content='Add to Cart' onClick={handleClick} type='button' inverted/>
    </ProductCartContainer>
  )
}

export default Shop