import React, { useState, useEffect } from "react";
import CuboidText from "../../components/CuboidText/CuboidText";
import System from "../../components/System/System";
import GameConsole from "../../components/GameConsole/GameConsole";
import "./Home.scss";
import { GlobalConsumer } from "../../context-stores/global-store";

export default function Home() {
  let roles = ["Experimental Baker.", "Jerry Rigger.", "Hiker.", "Kart Racer."];
  const [showGame, setShowGame] = useState(false);
  function toggleGame() {
    setShowGame(!showGame);
  }
  useEffect(() => {
    if (showGame) {
      const gameConsole = document.getElementsByClassName("game-console")[0];
      window.scrollTo({
        top: gameConsole.offsetTop + gameConsole.clientHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  });
  return (
    <GlobalConsumer>
      {(globalContextProps) => {
        return (
          <div className={"home " + globalContextProps.theme}>
            <System />
            <section className="info-band center middle">
              <div className="info-text right">
                <CuboidText terms={roles} /> I design and write software for
                Gallup by day.
              </div>
            </section>
            <button
              role="button"
              className={"launch-game " + globalContextProps.theme}
              onClick={toggleGame}
            >
              {showGame ? "Return >" : "< Time Travel back to 2001"}
            </button>
            {showGame ? <GameConsole /> : ""}
          </div>
        );
      }}
    </GlobalConsumer>
  );
}
