import Cat from "./cat.js";
import Obstacle from "./obstacle.js";

const gameState = {
  gameOver: 1,
  gameRunning: 2,
};

export default class Game {
  constructor(gravity) {
    this.cat = new Cat();
    this.gravity = gravity;
    this.grid = document.querySelector(".grid");
    this.selector = document.getElementById("game");
    this.state = gameState.gameRunning;
    document.addEventListener("keyup", this.control);
  }

  control = (event) => {
    if (event.keyCode == 32) {
      if (!this.cat.isJumping) {
        this.cat.isJumping = true;
        this.cat.jump(this.gravity);
      }
    }
  };

  run = () => {
    const randomTime = Math.random() * 4000;
    const obstacle = new Obstacle(1000);
    this.grid.appendChild(obstacle.node);

    const timerId = setInterval(() => {
      if (
        obstacle.position > 0 &&
        obstacle.position < 60 &&
        this.cat.position < 60
      ) {
        clearInterval(timerId);
        const message = document.getElementById("message");
        this.state = gameState.gameOver;
        message.innerHTML = "Game Over, Meow! 🐱";
        while (this.grid.firstChild) {
          this.grid.removeChild(this.grid.firstChild);
        }
      }
      obstacle.position -= 10;
      obstacle.updateNode();
    }, 20);

    if (this.state === gameState.gameRunning) {
      setTimeout(this.run, randomTime);
    }
  };
}
