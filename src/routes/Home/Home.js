import React from "react";
import CuboidText from "../../components/CuboidText/CuboidText";
import System from "../../components/System/System";
import GameConsole from "../../components/GameConsole/GameConsole";
import "./Home.scss";
import { GlobalConsumer } from "../../context-stores/global-store";

export default function Home() {
  let roles = ['Experimental Baker.', 'Jerry Rigger.',  'Hiker.', 'Kart Racer.'];
  return (
    <GlobalConsumer>
      {(globalContextProps) => {
        return (
          <div className="home">
            <System />
            <section className={"info-band center middle " + globalContextProps.theme}>
              <div className="info-text right">
                <CuboidText terms={roles} /> Software Engineer at Gallup by day. Amateur chef and barista by night. 
              </div>
            </section>
            <GameConsole />
          </div>
        )
      }}
    </GlobalConsumer>

  );
}
