import React, { Component } from "react";
import { ThemeContextConsumer } from "./themeContext";

function Nav(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className="navBar" >
          <ul className={`${context.theme}-theme`}>
            <li href="#" className={context.theme}>Home</li>
            <li href="#" className={context.theme}>About us</li>
            <li href="#" className={context.theme}>Contact</li>
          </ul>
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default Nav;
