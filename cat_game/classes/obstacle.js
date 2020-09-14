export default class Obstacle {
  constructor(position) {
    this.position = position;
    this.element = document.createElement("div");
    this.element.innerHTML = "🚓";
  }

  get node() {
    this.element.classList.add("obstacle");
    this.element.style.left = `${this.position}px`;

    return this.element;
  }

  updateNode() {
    this.element.style.left = `${this.position}px`;
  }
}
