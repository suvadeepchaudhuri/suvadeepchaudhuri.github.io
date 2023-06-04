import React from "react";
import { ReactComponent as ThemeIcon } from "./icons/theme_icon.svg";
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
import { GlobalProvider, GlobalConsumer } from "./context-stores/global-store";

class App extends React.Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = { isMobile: false, showMenu: false };
  }

  componentDidMount() {
    window.addEventListener("resize", this.setScreen());
    window.addEventListener("deviceorientation", this.setScreen());
  }

  setScreen() {
    if (window.innerWidth < 576) {
      this.setState({ isMobile: true });
    }
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  /**
   * The state of the Application route
   *
   * @property state
   * @type {Object}
   */
  state;

  render() {
    let _this = this;
    function getMenuButton(theme) {
      let menuButton;
      if (_this.state.isMobile) {
        menuButton = (
          <button
            className={"btn btn-menu" + (_this.state.showMenu ? " close" : "")}
            onClick={_this.toggleMenu}
          >
            <div className={"btn-line " + theme} />
            <div className={"btn-line " + theme} />
            <div className={"btn-line " + theme} />
          </button>
        );
      }
      return menuButton;
    }

    return (
      <GlobalProvider>
        <GlobalConsumer>
          {(globalContextProps) => {
            return (
              <div className={"app " + globalContextProps.theme }>
                <Router>
                  <header className="app-header">
                    {getMenuButton(globalContextProps.theme)}
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
                            className={
                              "home-menu__link " + globalContextProps.theme
                            }
                            activeClassName="home-menu__link-active"
                            to="/home"
                            onClick={this.toggleMenu}
                          >
                            Desk
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className={
                              "home-menu__link " + globalContextProps.theme
                            }
                            activeClassName="home-menu__link-active"
                            to="/skills"
                            onClick={this.toggleMenu}
                          >
                            Work
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className={
                              "home-menu__link " + globalContextProps.theme
                            }
                            activeClassName="home-menu__link-active"
                            to="/resources"
                            onClick={this.toggleMenu}
                          >
                            Things
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className={
                              "home-menu__link " + globalContextProps.theme
                            }
                            activeClassName="home-menu__link-active"
                            to="/about"
                            onClick={this.toggleMenu}
                          >
                            Who
                          </NavLink>
                        </li>
                      </ul>
                      <div className="app-controls">
                        <button
                          className="toggle-theme-button"
                          onClick={globalContextProps.toggleTheme}
                          aria-label="Toggle Dark Mode"
                        >
                          <ThemeIcon
                            className={"theme-icon " + globalContextProps.theme}
                          />
                        </button>
                      </div>
                    </nav>
                  </header>
                  <Redirect exact from="/" to="/home" />
                  <Redirect exact from="/about" to="/about" />

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
          }}
        </GlobalConsumer>
      </GlobalProvider>
    );
  }
}

export default App;
