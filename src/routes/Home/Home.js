import React from "react";
import Keyboard from "../../components/Keyboard/Keyboard";
import Monitor from "../../components/Monitor/Monitor";
import System from "../../components/System/System";
import GameConsole from "../../components/GameConsole/GameConsole";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <System />
      <GameConsole />
    </div>
  );
}
