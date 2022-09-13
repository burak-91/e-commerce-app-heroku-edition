import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import {Navigation, LogoContainer, NavLinksContainer, NavLink} from './navbar.style.js'
import {selectDropdown} from '../../store/cart/cartSelector'
import CartIcon from '../Cart-Icon/CartIcon'
import CartDropdown from '../Cart-Dropdown/CartDropdown'
import {selectCurrentUser} from '../../store/user/userSelector'
import {signOutStart} from '../../store/user/userActions'

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartDropdownOpen = useSelector(selectDropdown)
  const dispatch = useDispatch()

  const handleSignOut =  () => dispatch(signOutStart())
  


  return (
    <>
        <Navigation>
            <LogoContainer to='/'><Logo/></LogoContainer>
            <NavLinksContainer>
                <NavLink to='/shop'>SHOP</NavLink>
                <NavLink to='/contact'>CONTACT</NavLink>
                {currentUser 
                ? <NavLink as='span' onClick={handleSignOut} >SIGN OUT</NavLink> 
                : <NavLink to='/auth'>SIGN IN</NavLink>}
                <CartIcon/>
            </NavLinksContainer>
            {isCartDropdownOpen && <CartDropdown/>}
        </Navigation>
    </>
  )
}

export default Navbar