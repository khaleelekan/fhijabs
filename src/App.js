import React from 'react'
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header-component';

import HomePage from './components/pages/homepage/Homepage.component';
import ShopPage from './components/pages/shop-page/ShopPage.component';



function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/' component={HomePage} />

    </div>
  );
}

export default App;
