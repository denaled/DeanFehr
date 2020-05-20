import React from 'react';
import { Link, Switch, Route } from "react-router-dom"
import NavBar from './components/NaBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home'
import Page2 from './pages/page2'
import Page3 from './pages/page3'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="container">
        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/page2"><Page2/></Route>
          <Route path="/page3"><Page3/></Route>
        </Switch>
      </main>
      
    </div>
  );
}

export default App;
