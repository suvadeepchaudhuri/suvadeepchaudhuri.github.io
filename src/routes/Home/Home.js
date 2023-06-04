import React  from "react";
import CuboidText from "../../components/CuboidText/CuboidText";
import System from "../../components/System/System";
import GameConsole from "../../components/GameConsole/GameConsole";
import "./Home.scss";
import { GlobalConsumer } from "../../context-stores/global-store";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showGame: false };
  }

  roles = ["Experimental Baker.", "Jerry Rigger.", "Hiker.", "Kart Racer."];

  toggleGame() {
    this.setState({ showGame: !this.state.showGame });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showGame !== this.state.showGame) {
      const gameConsole = document.getElementsByClassName("game-console")[0];
      if (gameConsole) {
        window.scrollTo({
          top: gameConsole.offsetTop + gameConsole.clientHeight,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  }

  render() {
    return (
      <GlobalConsumer>
        {(globalContextProps) => {
          return (
            <div className={"home " + globalContextProps.theme}>
              <System />
              <section className="info-band center middle">
                <div className="info-text right">
                  <CuboidText terms={this.roles} /> I design and write software
                  for Microsoft by day.
                </div>
              </section>
              <button
                className={"launch-game " + globalContextProps.theme}
                onClick={this.toggleGame.bind(this)}
              >
                {this.state.showGame
                  ? "Return >"
                  : "< Time Travel back to 2001"}
              </button>
              {this.state.showGame ? <GameConsole /> : ""}
            </div>
          );
        }}
      </GlobalConsumer>
    );
  }
}