import React, { Component } from "react";
import { ThemeContextConsumer } from "./themeContext";

function Footer(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className="footer">
          <p className={`${context.theme}-theme`}>
              This is the footer
          </p>
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default Footer;
