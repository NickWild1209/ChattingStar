export class CStar {
  constructor(x, y, v = 0, a = 0) {
    this.x = x;
    this.y = y;
    this.v = v;
    this.a = a;
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}
