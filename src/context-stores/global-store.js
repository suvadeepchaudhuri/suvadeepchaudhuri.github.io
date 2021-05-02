import React, { Component } from "react";

const GlobalContext = React.createContext();
export default GlobalContext;

export class GlobalProvider extends Component {
  state = { isFirstVisit: true, theme: "dark" };

  toggleTheme = () => {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" });
    } else {
      this.setState({ theme: "light" });
    }
  };

  updateVisit = () => {
    this.setState({ isFirstVisit: false });
  };

  render() {
    const { isFirstVisit, theme } = this.state;
    const { toggleTheme, updateVisit } = this;
    return (
      <GlobalContext.Provider
        value={{ isFirstVisit, theme, updateVisit, toggleTheme }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export const GlobalConsumer = GlobalContext.Consumer;
