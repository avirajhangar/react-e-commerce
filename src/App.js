import './App.css';
import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { selectCurrentUser } from './redux/user/user.selectors';

import { checkUserSession } from './redux/user/user.actions';

import './pages/homepage/homepage.styles.scss';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() =>{
    checkUserSession();
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage} />
      <Route path='/check-out' component={CheckoutPage} />
      <Route 
        exact 
        path='/signin' 
        render={() => 
          currentUser ? (
            <Redirect to='/' />
          ) : (
            <SignInAndSignUp />
          ) 
        } 
      />
    </div>
  );
}


const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
