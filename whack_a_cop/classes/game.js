import Grid from "./grid.js";

export default class Game {
  constructor() {
    this.gameState = document.getElementById("game-state");
    this.grid = new Grid();
    this.timeLeft = document.getElementById("time-left");
  }

  countDown = (remainingTime, timerId) => {
    if (remainingTime === 0) {
      clearInterval(timerId);
      this.grid.clear();
      this.gameState.innerText = "Game Over";
    }

    this.timeLeft.innerText = remainingTime;
    setTimeout(this.countDown, 1000, remainingTime - 1, timerId);
  };

  run = (gameTime) => {
    this.grid.setup();
    // This will replace the cop once per seconds.
    const timerId = setInterval(this.grid.moveCopToRandomPosition, 1000);

    this.countDown(gameTime, timerId);
  };
}
