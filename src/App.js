import React from 'react'
import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/Homepage.component';

function Title () {
  return(
    <div>
       <h1>welcome to men pages</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path='/shop/hats' component={Title} />
      <Route exact path='/' component={HomePage} />

    </div>
  );
}

export default App;
