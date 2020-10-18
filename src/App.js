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

    this.state = {isMobile: false}
  }

  componentDidMount(){
    window.addEventListener("resize", this.setScreen());
    window.addEventListener("deviceorientation", this.setScreen());
    
    this.mediaSmall = window.matchMedia('(max-width: 400px)').matches;
    console.log('.matches: ',window.matchMedia('(max-width: 400px)').matches);
  }

  setScreen() {
    console.log(window);
    if(window.innerWidth < 576)
    {
      this.setState({isMobile:true});
    }
    
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
            <nav className={this.state.isMobile ? "app-navigation--drawer":"app-navigation"}>
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
