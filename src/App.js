import React from "react";
import logo from "./logo.svg";
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
  }


  mediaSmall = false;
  componentDidMount(){
    this.mediaSmall = window.matchMedia('(max-width: 400px)').matches;
    console.log(window.matchMedia('(max-width: 400px)'));
  }

  /**
   * The state of the Application route
   *
   * @property state
   * @type {Object}
   */
  state;

  render() {
    return (
      <div className="app">
        <Router>
          <header className="app-header">
            <button className="btn btn-menu">
              <div className="btn-line"/>
              <div className="btn-line"/>
              <div className="btn-line"/>
            </button>
            <nav className={"app-navigation " + (this.mediaSmall ? "app-navigation--drawer":"")}>
              <ul className="home-menu">
                <li>
                  <NavLink
                    className="home-menu__link"
                    activeClassName="home-menu__link-active"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="home-menu__link"
                    activeClassName="home-menu__link-active"
                    to="/skills"
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="home-menu__link"
                    activeClassName="home-menu__link-active"
                    to="/resources"
                  >
                    Resources
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="home-menu__link"
                    activeClassName="home-menu__link-active"
                    to="/about"
                  >
                    About
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
