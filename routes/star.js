const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const authSuper = require("../middleware/authSuper");

const common = require("../common/common");

router.post("/tryEnterZone", auth, async (req, res) => {
  let { idUser, idZone } = req.body;
  if (!common.dicZone[idZone]) {
    return res.status(404).json({ message: "That zone does not exist now" });
  }

  if (common.dicZone[idZone].dicStar[idUser])
    return res.status(400).json({ message: "You are already in it" });

  if (
    common.diclen(common.dicZone[idZone].dicStar) == common.user_limit_in_zone
  )
    return res.status(400).json({ message: "Already Full" });

  let star = new common.CStar(idUser, idZone, 0, 0, 2, 2, false);
  common.dicZone[idZone].dicStar[idUser] = star;

  return res.status(200).json({ star });
});

router.post("/exit", auth, async (req, res) => {
  let { idUser, idZone } = req.body;
  delete common.diclen[idZone].dicStar[idUser];
  return res.status(200).json({ message: "Exit succeed" });
});

///// Here, there must be something about movement.

module.exports = router;
