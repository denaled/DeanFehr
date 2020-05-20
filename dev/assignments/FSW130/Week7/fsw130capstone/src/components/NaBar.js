import React from "react";
import { Link, Switch, Route } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info" >
     
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <a className="navbar-brand" href="./home">
          FSW130 Capstone Project by Dean Fehr
        </a>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item-active " >
          <Link to="/home" className="nav-link " >
            Home </Link></li>
          <Link to="/page2" className="nav-link">
            <li className="nav-item">Page2</li>
          </Link>
          <Link to="/page3" className="nav-link">
            <li className="nav-item">Page3</li>
          </Link>
        </ul>
        </div>
     
    </nav>
  );
}

export default NavBar;
