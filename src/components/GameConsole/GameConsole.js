import React from "react";
import "./GameConsole.scss";
import SnakeGame from "./Games/SnakeGame/SnakeGame";

export default function GameConsole() {
  return (
    <div>
      <div className="console-screen">
        <SnakeGame />
      </div>
    </div>
  );
}
