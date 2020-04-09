export const WIDTH = 800,
  HEIGHT = 800;
export let bigBalls = true;

export function randomColor() {
  let red = Math.floor(Math.random() * 3) * 127;
  let green = Math.floor(Math.random() * 3) * 127;
  let blue = Math.floor(Math.random() * 3) * 127;

  // dim down the small balls
  if (!bigBalls) {
    red *= 0.65;
    green *= 0.65;
    blue *= 0.65;
  }

  let rc = "rgb(" + red + ", " + green + ", " + blue + ")";
  return rc;
}

export function randomX() {
  let x = Math.floor(Math.random() * WIDTH);
  if (x < 30) {
    x = 30;
  } else if (x + 30 > WIDTH) {
    x = WIDTH - 30;
  }
  return x;
}

export function randomY() {
  let y = Math.floor(Math.random() * HEIGHT);
  if (y < 30) {
    y = 30;
  } else if (y + 30 > HEIGHT) {
    y = HEIGHT - 30;
  }
  return y;
}

export function randomRadius() {
  if (bigBalls) {
    let r = Math.ceil(Math.random() * 10 + 20);
    return r;
  } else {
    let r = Math.ceil(Math.random() * 2 + 2);
    //let r = 5;
    return r;
  }
}

export function randomDx() {
  let r = Math.floor(Math.random() * 10 - 4);
  return r;
}

export function randomDy() {
  let r = Math.floor(Math.random() * 10 - 3);
  return r;
}

export function distanceNextFrame(a, b) {
  return (
    Math.sqrt((a.x + a.dx - b.x - b.dx) ** 2 + (a.y + a.dy - b.y - b.dy) ** 2) -
    a.radius -
    b.radius
  );
}

export function distance(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}
