const jwt = require("jsonwebtoken");

const modelUser = require("../model/User");

module.exports = async function (req, res, next) {
  const token = req.header("token");
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, "randomString");
    req.user = decoded.user;
    let user = await modelUser.findById(req.user.id);
    if (user.membership == 1) {
      next();
    } else {
      res.status(400).send({ message: "Only superusers allowed" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};
