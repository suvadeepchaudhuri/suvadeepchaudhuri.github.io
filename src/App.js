import React from "react";
import logo from "./logo.svg";
import "./styles/common.scss";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Skills from "./routes/Skills/Skills";
import Resources from "./routes/Resources/Resources";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = { isMobile: false, showMenu: false };
  }

  componentDidMount() {
    window.addEventListener("resize", this.setScreen());
    window.addEventListener("deviceorientation", this.setScreen());
  }

  setScreen() {
    console.log(window);
    if (window.innerWidth < 576) {
      this.setState({ isMobile: true });
    }
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
    console.log(JSON.stringify(this.state));
  }

  /**
   * The state of the Application route
   *
   * @property state
   * @type {Object}
   */
  state;

  render() {
    let menuButton;
    if (this.state.isMobile) {
      menuButton = (
        <button
          className={"btn btn-menu" + (this.state.showMenu ? " close" : "")}
          onClick={this.toggleMenu}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </button>
      );
    }
    return (
      <div className="app">
        <Router>
          <header className="app-header">
            {menuButton}
            <nav
              className={
                this.state.isMobile
                  ? "app-navigation--drawer " +
                    (this.state.showMenu
                      ? "app-navigation--drawer__show"
                      : "app-navigation--drawer__hide")
                  : "app-navigation"
              }
            >
              <ul className="home-menu">
                <li>
                  <NavLink
                    className="home-menu__link"
                    activeClassName="home-menu__link-active"
                    to="/home"
                    onClick={this.toggleMenu}
                  >
                    Intro
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="home-menu__link"
                    activeClassName="home-menu__link-active"
                    to="/skills"
                    onClick={this.toggleMenu}
                  >
                    Work
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="home-menu__link"
                    activeClassName="home-menu__link-active"
                    to="/resources"
                    onClick={this.toggleMenu}
                  >
                    Things
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="home-menu__link"
                    activeClassName="home-menu__link-active"
                    to="/about"
                    onClick={this.toggleMenu}
                  >
                    Who
                  </NavLink>
                </li>
              </ul>
              {/* <ul className="home-controls">
                <li className="dark-mode" alt-text="Switch Mode">
                  Dark Mode
                </li>
              </ul> */}
            </nav>
          </header>
          <Redirect exact from="/" to="/home" />

          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
