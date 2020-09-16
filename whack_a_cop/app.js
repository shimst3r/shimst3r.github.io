import Game from "./classes/game.js";

document.addEventListener("DOMContentLoaded", () => {
    const game = new Game();
    const gameTimeInSeconds = 60;

    game.run(gameTimeInSeconds);
});
