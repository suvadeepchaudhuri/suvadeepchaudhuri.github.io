import React from "react";
import CuboidText from "../../components/CuboidText/CuboidText";
import System from "../../components/System/System";
import GameConsole from "../../components/GameConsole/GameConsole";
import "./Home.scss";

export default function Home() {
  let roles = ['Experimental Baker.', 'Home Chef.', 'Kart Racer.', 'Jerry Rigger.'];
  return (
    <div className="home">
      <System />
      <section className="info-band center middle">
        <div className="info-text right">
        <CuboidText terms={roles}/> Software Engineer, currently working on service layer and front-end.
        </div>
      </section>
      <GameConsole />
    </div>
  );
}
