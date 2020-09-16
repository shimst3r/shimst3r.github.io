export default class Cat {
  isJumping = false;
  position = 0;

  constructor() {
    this.selector = document.querySelector(".cat");
  }

  jump(gravity) {
    let count = 0;
    const upTimerId = setInterval(() => {
      if (count === 15) {
        clearInterval(upTimerId);
        const downTimerId = setInterval(() => {
          console.log("down");
          if (count === 0) {
            clearInterval(downTimerId);
            this.isJumping = false;
          }
          this.position -= 5;
          this.position = this.position * gravity;
          count--;
          this.selector.style.bottom = `${this.position}px`;
        }, 20);
      }
      console.log("up");
      count++;
      this.position += 30;
      this.position = this.position * gravity;
      this.selector.style.bottom = `${this.position}px`;
    }, 20);
  }
}
