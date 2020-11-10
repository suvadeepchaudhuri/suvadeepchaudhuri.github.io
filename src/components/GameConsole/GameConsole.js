import React from "react";
import "./GameConsole.scss";
import SnakeGame from "./Games/SnakeGame/SnakeGame";

const KEYCODE_LEFT = 37;
const KEYCODE_UP = 38;
const KEYCODE_RIGHT = 39;
const KEYCODE_DOWN = 40;
const CONSOLE_PHONE = "phone";
const CONSOLE_GAMEBOY = "gameboy";

// TODO: try to make this a functional component
export default class GameConsole extends React.Component {
  constructor(props) {
    super(props);
    this.snakeGame = React.createRef();
    this.state = {
      consoleType: CONSOLE_GAMEBOY,
      currentGameRef: this.snakeGame,
    };
    // this.handleClick = this.handleClick.bind(this)
    this.handlePhoneUp = this.handlePhoneUp.bind(this);
    this.handlePhoneDown = this.handlePhoneDown.bind(this);
  }

  handleClick(keycode) {
    this.snakeGame.current.handleKeyDown(
      new KeyboardEvent("keydown", { keyCode: keycode, cancelable: false })
    );
  }

  handlePhoneUp() {
    this.snakeGame.current.handlePhoneUp();
  }

  handlePhoneDown() {
    this.snakeGame.current.handlePhoneDown();
  }

  render() {
    let gameboyControls = (
      <div className="dpad">
        <div
          className="dpad-up"
          onClick={() => {
            this.handleClick(KEYCODE_UP);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            this.handleClick(KEYCODE_UP);
          }}
        ></div>
        <div
          className="dpad-left"
          onClick={() => {
            this.handleClick(KEYCODE_LEFT);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            this.handleClick(KEYCODE_LEFT);
          }}
        ></div>
        <div
          className="dpad-right"
          onClick={() => {
            this.handleClick(KEYCODE_RIGHT);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            this.handleClick(KEYCODE_RIGHT);
          }}
        ></div>
        <div
          className="dpad-down"
          onClick={() => {
            this.handleClick(KEYCODE_DOWN);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            this.handleClick(KEYCODE_DOWN);
          }}
        ></div>
      </div>
    );

    let phoneControls = (
      <div className="updown">
        <button
          className="buttonset-up"
          onClick={this.handlePhoneUp}
          onTouchEnd={(e) => {
            e.preventDefault();
            this.handlePhoneUp();
          }}
        />
        <button
          className="buttonset-down"
          onClick={this.handlePhoneDown}
          onTouchEnd={(e) => {
            e.preventDefault();
            this.handlePhoneDown();
          }}
        />
      </div>
    );

    let controls =
      this.state.consoleType === CONSOLE_GAMEBOY
        ? gameboyControls
        : phoneControls;
    return (
      <div className="game-console">
        {React.version}
        <div className="console-screen">
          <SnakeGame ref={this.snakeGame} />
        </div>
        {controls}
      </div>
    );
  }
}
