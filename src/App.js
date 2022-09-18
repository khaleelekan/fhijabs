import React from 'react'
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header-component';

import HomePage from './components/pages/homepage/Homepage.component';
import ShopPage from './components/pages/shop-page/ShopPage.component';
import SignInSignUp from './components/pages/sign-in-sign-out/sign-in-sign-up';




function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signin' component={SignInSignUp} />
      </Switch>

    </div>
  );
}

export default App;
