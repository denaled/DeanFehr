import React from "react";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info" >
     
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <a className="navbar-brand" href="./home">
          FSW125 Capstone Project by Dean Fehr
        </a>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item-active ">Caps</li>
        </ul>
        </div>
     
    </nav>
  );
}

export default NavBar;
