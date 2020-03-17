import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header/>
    
    
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/Services">
          <Services/>
        </Route>
      </Switch>

      <Footer/>
      </div>
  );
}

export default App;
