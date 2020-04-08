import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: "Dark"
  };

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === "light" ? "dark" : "light"
      };
    });
  };

  updateTheme = newTheme => {
      this.setState({theme: newTheme})
  }

  render() {
    return <Provider value={{
        theme:this.state.theme,
        toggleTheme: this.toggleTheme,
        updateTheme: this.updateTheme
    }}>
        {this.props.children}
        </Provider>;
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
