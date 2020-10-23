import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/header';
import Footer from './components/footer/footer'
import Welcome from './components/Welcome/welcome'
import Login from './components/Login/login'
import SignUp from './components/Signup/Signup'
import Search from './components/Search/Search'
import Favorites from './components/Favorites/Favorites'
import Add from './components/Add/Add'
import './App.css';

function App() {
  return (
    <div>

      <Router>
        <Header />
        <div className='col-2'>
        </div>
        <div className='col-8 container'>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/favorites' component={Favorites} />
          <Route exact path='/add' component={Add} />
        </div>
        <div className='col-2'>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
