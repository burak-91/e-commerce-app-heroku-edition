import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import {AuthenticationContainer} from './authPage.style.js'


const AuthPage = () => {
  return (
    <div>
      <Navbar />
    <AuthenticationContainer>
        <SignIn />
        <SignUp />
    </AuthenticationContainer>
    </div>
  )
}

export default AuthPage