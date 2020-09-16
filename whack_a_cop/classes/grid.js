export default class Grid {
  constructor() {
    this.hitPosition = 0;
    this.squares = document.querySelectorAll(".square");
    this.score = document.getElementById("score");
    this.result = 0;
  }

  clear = () => {
    this.squares.forEach((square) => square.classList.remove("cop"));
  };

  moveCopToRandomPosition = () => {
    this.clear();

    const position = Math.floor(Math.random() * this.squares.length);
    this.squares[position].classList.add("cop");
    this.hitPosition = this.squares[position].id;
  };

  setup = () => {
    this.squares.forEach((square, index) => {
      square.id = index;
      square.addEventListener("mouseup", () => {
        if (square.id == this.hitPosition) {
          this.result++;
          this.score.textContent = this.result;
          square.classList.remove("cop");
          // Set position to NaN is a hack so the event listener won't add to the
          // score more than once.
          this.hitPosition = NaN;
        }
      });
    });
  };
}
