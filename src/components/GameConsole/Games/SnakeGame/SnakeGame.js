import React, { Component } from "react";
import "./SnakeGame.scss";

const DEFAULT_SNAKE_LENGTH = 4;
const SNAKE_COLOR = "green";
const SNAKE_COLOR_RETRO = "#2B2B2B";
const FOOD_COLOR = "red";
const FOOD_COLOR_RETRO = "#1f1F1F";
const CANVAS_COLOR_RETRO = "rgba(113, 170, 94, 1)";
const CANVAS_WIDTH = "216";
const CANVAS_HEIGHT = "144";

export default class SnakeGame extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      gameLevel: { id: 2, label: "Medium", frameCheckFactor: 4 },
    };
    this.loop = this.loop.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
    this.toggleGameLevel = this.toggleGameLevel.bind(this);
  }

  canvas;

  canvasWidth = CANVAS_WIDTH;
  canvasHeight = CANVAS_HEIGHT;
  context;

  grid = 8;
  count = 0;

  levels = [
    { id: 1, label: "Easy", frameCheckFactor: 6 },
    { id: 2, label: "Medium", frameCheckFactor: 4 },
    { id: 3, label: "Hard", frameCheckFactor: 3 },
  ];

  selectedLevel = this.levels[1];
  // score = this.snake.maxCells - DEFAULT_SNAKE_LENGTH;

  snake = {
    x: 160,
    y: 160,

    // snake velocity. moves one grid length every frame in either the x or y direction
    dx: this.grid,
    dy: 0,

    // keep track of all grids the snake body occupies
    cells: [],

    // length of the snake. grows when eating a unit of food
    maxCells: DEFAULT_SNAKE_LENGTH,
  };

  food = {
    x: 200, //320,
    y: 120, //320,
  };

  componentDidMount() {
    this.canvas = document.getElementById("game");
    this.context = this.canvas.getContext("2d");
    requestAnimationFrame(this.loop);
    // this.setState({ score: this.snake.maxCells });
  }

  toggleGameLevel() {
    console.log("level toggle");
    let numLevels = this.levels.length;
    let currentLevelIndex = this.levels.findIndex(
      (level) => level.id === this.state.gameLevel.id
    );
    let newLevelIndex = 0;
    if (currentLevelIndex === numLevels - 1) {
      newLevelIndex = 0;
    } else {
      newLevelIndex = currentLevelIndex + 1;
    }

    this.setState({ gameLevel: this.levels[newLevelIndex] });
    // this.selectedLevel = this.levels[newLevelIndex];
  }

  handleKeyDown(e, callback) {
    // prevent snake from backtracking on itself by checking that it's
    // not already moving on the same axis (pressing left while moving
    // left won't do anything, and pressing right while moving left
    // shouldn't let you collide with your own body)
    e.preventDefault();
    console.log(e);
    console.log(e.key);
    // left arrow key
    if (e.keyCode === 37 && this.snake.dx === 0) {
      this.snake.dx = -this.grid;
      this.snake.dy = 0;
    }
    // up arrow key
    else if (e.keyCode === 38 && this.snake.dy === 0) {
      this.snake.dy = -this.grid;
      this.snake.dx = 0;
    }
    // right arrow key
    else if (e.keyCode === 39 && this.snake.dx === 0) {
      this.snake.dx = this.grid;
      this.snake.dy = 0;
    }
    // down arrow key
    else if (e.keyCode === 40 && this.snake.dy === 0) {
      this.snake.dy = this.grid;
      this.snake.dx = 0;
    }
  }

  currentTouchKeycode = 39;

  handleTouch(event, callback) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    let clientY = event.touches[0].clientY;
    let clientHeight = window.innerHeight;
    // touching the top half of the screen will move the snake 90 degrees in the counterclockwise direction
    // bottom half: clockwise
    let isClockwise = clientY <= clientHeight / 2 ? false : true;

    if (isClockwise) {
      this.moveClockWise();
    } else {
      this.moveCounterClockWise();
    }

    // this.handleKeyDown({
    //   keyCode: this.currentTouchKeycode,
    //   preventDefault: event.preventDefault,
    // });
  }

  handleUp() {
    this.handleKeyDown({
      keyCode: 38,
      preventDefault: function () {},
    });
  }

  handleLeft() {
    this.handleKeyDown({
      keyCode: 37,
      preventDefault: function () {},
    });
  }
  
  handleRight() {
    this.handleKeyDown({
      keyCode: 39,
      preventDefault: function () {},
    });
  }

  handleDown() {
    this.handleKeyDown({
      keyCode: 40,
      preventDefault: function () {},
    });
  }

  moveClockWise() {
    this.currentTouchKeycode =
      this.currentTouchKeycode === 40 ? 37 : this.currentTouchKeycode + 1;
    this.handleKeyDown({
      keyCode: this.currentTouchKeycode,
      preventDefault: function () {},
    });
  }

  moveCounterClockWise() {
    this.currentTouchKeycode =
      this.currentTouchKeycode === 37 ? 40 : this.currentTouchKeycode - 1;
    this.handleKeyDown({
      keyCode: this.currentTouchKeycode,
      preventDefault: function () {},
    });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // game loop
  loop() {
    requestAnimationFrame(this.loop);
    let scoreNode = document.getElementById("snake-score");

    // slow game loop to 15 fps instead of 60 (60/15 = 4)
    if (++this.count < this.state.gameLevel.frameCheckFactor) {
      return;
    }

    // console.log(this);

    this.count = 0;
    this.context = this.canvas.getContext("2d");
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // IF SHOWING ON PHONE
    this.context.fillStyle = CANVAS_COLOR_RETRO;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // move snake by it's velocity
    this.snake.x += this.snake.dx;
    this.snake.y += this.snake.dy;

    // wrap snake position horizontally on edge of screen
    if (this.snake.x < 0) {
      this.snake.x = this.canvas.width - this.grid;
    } else if (this.snake.x >= this.canvas.width) {
      this.snake.x = 0;
    }

    // wrap snake position vertically on edge of screen
    if (this.snake.y < 0) {
      this.snake.y = this.canvas.height - this.grid;
    } else if (this.snake.y >= this.canvas.height) {
      this.snake.y = 0;
    }

    // keep track of where snake has been. front of the array is always the head
    this.snake.cells.unshift({ x: this.snake.x, y: this.snake.y });

    // remove cells as we move away from them
    if (this.snake.cells.length > this.snake.maxCells) {
      this.snake.cells.pop();
    }

    // draw food
    this.context.fillStyle = FOOD_COLOR_RETRO; // IF SHOWING ON PHONE
    this.context.fillRect(
      this.food.x,
      this.food.y,
      this.grid - 1,
      this.grid - 1
    );

    // draw snake one cell at a time
    this.context.fillStyle = SNAKE_COLOR_RETRO; //"green"; // IF SHOWING ON PHONE
    this.snake.cells.forEach((cell, index) => {
      // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
      this.context.fillRect(cell.x, cell.y, this.grid - 1, this.grid - 1);

      // snake eats food
      if (cell.x === this.food.x && cell.y === this.food.y) {
        this.snake.maxCells++;
        if (scoreNode) {
          scoreNode.innerHTML =
            "Score: " + (this.snake.maxCells - DEFAULT_SNAKE_LENGTH);
        }
        // canvas is 400x400 which is 25x25 grids
        this.food.x =
          this.getRandomInt(0, this.canvasWidth / this.grid) * this.grid;
        this.food.y =
          this.getRandomInt(0, this.canvasHeight / this.grid) * this.grid;
      }

      // check collision with all cells after this one (modified bubble sort)
      for (let i = index + 1; i < this.snake.cells.length; i++) {
        // snake occupies same space as a body part. reset game
        if (
          cell.x === this.snake.cells[i].x &&
          cell.y === this.snake.cells[i].y
        ) {
          this.snake.x = 160;
          this.snake.y = 160;
          this.snake.cells = [];
          this.snake.maxCells = 4;
          this.snake.dx = this.grid;
          this.snake.dy = 0;

          this.food.x =
            this.getRandomInt(0, this.canvasWidth / this.grid) * this.grid;
          this.food.y =
            this.getRandomInt(0, this.canvasHeight / this.grid) * this.grid;
          if (scoreNode) {
            scoreNode.innerHTML = "Score: 0";
          }
        }
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        {/* <div display='none' id="snake-score">
          Score: 0
        </div> */}
        <canvas
          width={this.canvasWidth}
          height={this.canvasHeight}
          id="game"
          onKeyDown={this.handleKeyDown}
          onTouchStart={this.handleTouch}
          onTouchEnd={(e) => {
            e.preventDefault();
          }}
          tabIndex="0"
        ></canvas>
      </React.Fragment>

      // <div className="snake-game" onKeyDown={this.handleKeyDown}>
      //   <div className="snake-game__info">
      //     <div className="snake-game__score" id="snake-score">
      //       Score: 0
      //     </div>
      //     <div
      //       className="snake-game__score"
      //       id="snake-score"
      //       onClick={this.toggleGameLevel}
      //     >
      //       Level: {this.state.gameLevel.label}
      //     </div>
      //   </div>

      //   <canvas
      //     width="400"
      //     height="400"
      //     id="game"
      //     fillStyle="#71aa5e"
      //     onKeyDown={this.handleKeyDown}
      //     onTouchStart={this.handleTouch}
      //     onTouchEnd={(e)=>{e.preventDefault()}}
      //     tabIndex="0"
      //   ></canvas>
      // </div>
    );
  }
}
