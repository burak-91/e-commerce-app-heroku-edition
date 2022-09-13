import {useState} from 'react'
import {SignUpContainer} from './signup.style.js'
import FormInput from '../Form-Input/FormInput'
import Button from '../Button/Button'
//import { createAuthUserWithEmailAndPassword ,createUserDocument } from '../../firebase/firebase'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../store/user/userActions.js'


const defaultUser = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
   
    const [user, setUser] = useState(defaultUser)

    const dispatch = useDispatch()
    const resetFormFields = () => { setUser(defaultUser) }

  const handleChange = (e) => {
   setUser((prevState) => ({...prevState,[e.target.name]: e.target.value }))
  }  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(user.password !== user.confirmPassword) return alert('Passwords do not match')
    const { email, password, displayName,} = user
    
    try {
      dispatch(signUpStart(email,password,displayName))
      // const { user }= await createAuthUserWithEmailAndPassword(email, password)
      // await createUserDocument(user, {displayName: user.displayName})
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Email already in use')
      }else{
        console.log(error)
      }
    }
  }

 


  return (
    <SignUpContainer>
      <h2>Do not have an account</h2>
      <span>Sign Up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput label='username' value={user.displayName} type='text' name='displayName' onChange={handleChange}  required />
        <FormInput label='email' value={user.email} type='text' name='email' onChange={handleChange} required />
        <FormInput label='password' value={user.password} type='password' name='password' onChange={handleChange} required/>
        <FormInput label='confirm password' value={user.confirmPassword} type='password' name='confirmPassword' onChange={handleChange} required/>
        <Button content='Sign Up' type='submit'/>
      </form>
    </SignUpContainer>
  )
}

export default SignUp