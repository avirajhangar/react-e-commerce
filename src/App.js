import './App.css';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { selectCurrentUser } from './redux/user/user.selectors';

import './pages/homepage/homepage.styles.scss';

class App extends React.Component {
  unsubcribeFromAuth = null;

  componentDidMount() {
   
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Route path='/shop' component={ShopPage} />
        <Route path='/check-out' component={CheckoutPage} />
        <Route 
          exact 
          path='/signin' 
          render={() => 
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUp />
            ) 
          } 
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(App);
