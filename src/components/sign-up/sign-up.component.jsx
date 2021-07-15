import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss'

const SignUp = ({ signUpStart }) => {
  const [userCredentioals, setCredenctions] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })
  const { displayName, email, password, confirmPassword } = userCredentioals;
  
  const handleSubmit = async event => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert("Password do no match");
      return;
    }
    signUpStart({ displayName, email, password });
  }

  const handleChange = event => {
    const { name, value } = event.target;

    setCredenctions({ ...userCredentioals, [name]: value })
  }

  return(
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput 
          name='displayName' 
          type='text' 
          value={displayName} 
          handleChange={handleChange}
          label='Display Name'
          required 
        />
        <FormInput 
          name='email' 
          type='email' 
          value={email} 
          handleChange={handleChange}
          label='Email'
          required 
        />
        <FormInput 
          name='password' 
          type='password' 
          value={password} 
          handleChange={handleChange}
          label='Password'
          required 
        />
        <FormInput 
          name='confirmPassword' 
          type='password' 
          value={confirmPassword} 
          handleChange={handleChange}
          label='Confirm Password'
          required 
        />
        <CustomBtn type='submit'>Sign Up</CustomBtn>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);