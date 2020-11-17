import React from "react";
import System from "../../components/System/System";
import GameConsole from "../../components/GameConsole/GameConsole";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <System />
      <section className="info-band center middle">
        <div className="info-text right">
          Experimental Baker. Chef.<br/> Software Engineer, currently working on service layer and front-end.
        </div>
      </section>
      <GameConsole />
    </div>
  );
}
