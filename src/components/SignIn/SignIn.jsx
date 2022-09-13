import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../Form-Input/FormInput'
import Button from '../Button/Button'

import {SignInContainer, ButtonsContainer} from './signin.style.js'
import {googleSingInStart, emailSignInStart} from '../../store/user/userActions'
import { useDispatch } from 'react-redux'

const defaultUser = {
  email: '',
  password: ''
}


const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultUser)
  const dispatch = useDispatch();

  const resetFormFields = () => { setUser(defaultUser) }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const logGoogleUser = async () => {
    dispatch(googleSingInStart());
    navigate('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = user
    try {
      dispatch(emailSignInStart(email,password))
      resetFormFields();
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('User not found')
      } else if(error.code === 'auth/wrong-password') {
        alert('Wrong password or email')
      }else {
        console.log(error)
      }
    }
  }


  return (
    <SignInContainer>
      <h2>Already have an account</h2>
      <span>Sign In with Email,Password or Google</span>
      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" value={user.email} label="Email" required onChange={handleChange} />
        <FormInput type="password" name="password" value={user.password} label="Password" required onChange={handleChange} />
        <ButtonsContainer>
          <Button type='submit' content='Sign In' />
          <Button type='button' content='Google Sign In' google onClick={logGoogleUser} />
        </ButtonsContainer>
      </form>


    </SignInContainer>
  )
}

export default SignIn