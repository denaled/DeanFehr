import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Button from './components/Button'
import Nav from './components/Nav'
import Footer from './components/Footer'
import DropDown from './components/DropDown'

function App() {
  return (
    <div className="Main">
      <Nav/>
      <Header/>
      <DropDown/>
      <Footer/>
    </div>
  );
}

export default App;
