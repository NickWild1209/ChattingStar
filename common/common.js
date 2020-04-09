const modelUser = require("../model/User");
const modelZone = require("../model/Zone");

const user_limit_in_zone = 100;
const star_radius = 100;
const superstar_radius = 200;

let dicZone = {};

let doInit = async () => {
  dicZone = {};
  let arrZone = await modelZone.find();
  for (let zone in arrZone) {
    dicZone[zone._id] = { dicStar: {} };
  }
};

class CStar {
  constructor(idUser, idZone, x = 0, y = 0, vx = 0, vy = 0, isSuper = false) {
    this.idUser = idUser;
    this.idZone = idZone;
    this.pos = new Point2D(x, y);
    this.v = new Point2D(vx, vy);
    this.radius = isSuper ? star_radius : superstar_radius;
  }
}

class CPoint2D {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

const diclen = obj => {
  return Object.keys(obj).length;
};

module.exports = {
  dicZone,
  doInit,
  CStar,
  CPoint2D,
  user_limit_in_zone,
  diclen
};
