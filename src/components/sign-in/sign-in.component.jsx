import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentioals, setCredenctions] = useState({ email: '', password: '' })
  const { email, password } = userCredentioals;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  }

  const handleChange = e => {
    const {value, name} = e.target;
    setCredenctions({ ...userCredentioals, [name]: value });
  }

  return(
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sing in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className='buttons'>
          <CustomBtn type="submit">Submit Form</CustomBtn>
          <CustomBtn type='button' isGoogleButton onClick={googleSignInStart}>Sign in with google</CustomBtn>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);