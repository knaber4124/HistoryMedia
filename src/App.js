import React from 'react';
import Router from 'react-router-dom';
import Header from './components/header/header';
import Footer from "./components/footer/footer";
import Welcome from "./components/Welcome/welcome"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Welcome/>
      <Footer />
    </div>
  );
}

export default App;
