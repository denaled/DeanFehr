import React, { Component } from "react";
import { ThemeContextConsumer } from "./themeContext";

function DropDown(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <div className="DropDown">
          <select value={context.theme}
            className={`${context.theme}-theme`}
            onChange={e => context.updateTheme(e.target.value)}
          >
            <option value="Dark">Dark Theme</option>
            <option value="Light">Light Theme</option>
            <option value="Green">Green Theme</option>
            <option value="Dark-Change">Dark Change Theme</option>
          </select>
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default DropDown;
