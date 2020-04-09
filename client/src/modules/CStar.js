import { Avatar } from "../components/Avatar";

import { randomColor, randomDx, randomDy, randomRadius, HEIGHT } from "./Utils";

export class CStar {
  constructor(x, y, radius) {
    this.radius = radius;
    this.x = x;
    this.y = y;

    this.dx = randomDx();
    this.dy = randomDy();

    // mass is that of a sphere as opposed to circle
    // it *does* make a difference in how realistic it looks
    this.mass = this.radius * this.radius * this.radius;
    this.color = randomColor();
  }

  speed() {
    // magnitude of velocity vector
    return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
  }
  angle() {
    // velocity's angle with the x axis
    return Math.atan2(this.dy, this.dx);
  }
  onGround() {
    return this.y + this.radius >= HEIGHT;
  }
}
