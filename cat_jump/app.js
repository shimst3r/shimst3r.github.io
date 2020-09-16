import Game from "./classes/game.js";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(0.9);
  game.run();
});
