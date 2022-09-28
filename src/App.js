import React from 'react'
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header-component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import HomePage from './components/pages/homepage/Homepage.component';
import ShopPage from './components/pages/shop-page/ShopPage.component';
import SignInSignUp from './components/pages/sign-in-sign-up/sign-in-sign-up';


class App extends React.Component{
  constructor(){
    super();
  
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

 componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged( async user =>{
      createUserProfileDocument(user);
     });
     
 }
 componentWillUnmount(){
  this.unsubscribeFromAuth();
 }

  render () {
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signin' component={SignInSignUp} />
      </Switch>

    </div>
  );
}
}

export default App;
