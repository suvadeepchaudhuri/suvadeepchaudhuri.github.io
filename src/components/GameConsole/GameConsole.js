import React from "react";
import "./GameConsole.scss";
import SnakeGame from "./Games/SnakeGame/SnakeGame";

export default function GameConsole() {
  return (
    <div>
      <div className="console-screen">
        <SnakeGame />
      </div>
      <div className="console-dpad">
        <div className="dpad-key">1</div>
        <div className="dpad-key">2</div>
        <div className="dpad-key">3</div>
        <div className="dpad-key">4</div>
        <div className="dpad-key">5</div>
        <div className="dpad-key">6</div>
        <div className="dpad-key">7</div>
        <div className="dpad-key">8</div>
        <div className="dpad-key">9</div>
      </div>
    </div>
  );
}
