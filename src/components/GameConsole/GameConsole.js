import React from "react";
import "./GameConsole.scss";
import SnakeGame from "./Games/SnakeGame/SnakeGame";

const KEYCODE_LEFT = 37;
const KEYCODE_UP = 38;
const KEYCODE_RIGHT = 39;
const KEYCODE_DOWN = 40;

// TODO: try to make this a functional component
export default class GameConsole extends React.Component {
  constructor(props) {
    super(props);
    this.snakeGame = React.createRef();
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick(keycode) {
    console.log(keycode);
    console.log(this);
    this.snakeGame.current.handleKeyDown({
      keyCode: keycode,
      preventDefault: () => {},
    });
  }

  render() {
    return (
      <div className="game-console">
        {React.version}
        <div className="console-screen">
          <SnakeGame ref={this.snakeGame} />
        </div>
        <div className="dpad">
          <div
            className="dpad-up"
            onClick={() => {
              this.handleClick(KEYCODE_UP);
            }}
          ></div>
          <div
            className="dpad-left"
            onClick={() => {
              this.handleClick(KEYCODE_LEFT);
            }}
          ></div>
          <div
            className="dpad-right"
            onClick={() => {
              this.handleClick(KEYCODE_RIGHT);
            }}
          ></div>
          <div
            className="dpad-down"
            onClick={() => {
              this.handleClick(KEYCODE_DOWN);
            }}
          ></div>
        </div>
      </div>
    );
  }
}
