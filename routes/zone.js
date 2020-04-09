const express = require("express");
const router = express.Router();
const modelZone = require("../model/Zone");
const auth = require("../middleware/auth");
const authSuper = require("../middleware/authSuper");
const common = require("../common/common");

router.post("/", authSuper, async (req, res) => {
  let { obj } = req.body; //obj = {label, description, userLimit, idCreator}
  let zones = await modelZone.find({ label: obj.label });
  if (zones.length > 0)
    return res.status(400).json({ message: "Label is already taken." });

  try {
    let zone = await modelZone.create({ ...obj });
    return res.status(200).json({ zone });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Error in Saving" });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    let arrZone = await modelZone.find();
    return res.status(200).json({ arrZone });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Error in server" });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    let zone = await modelZone.findById(req.params.id);
    if (zone) return res.status(200).json({ zone });
    else return res.status(404).json({ message: "No zone with this id" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Error in server" });
  }
});

router.put("/:id", authSuper, async (req, res) => {
  try {
    let zone = await modelZone.findById(req.params.id);
    if (!zone) return res.status(404).json({ message: "No zone with this id" });
    if (zone.idCreator != req.user.id)
      return res.status(400).json({
        message: "You cannot modify the zones created by others."
      });
    let { obj } = req.body;

    zone = await modelZone.findByIdAndUpdate(req.params.id, obj, {
      useFindAndModify: false
    });

    return res.status(200).json({ zone });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Error in server" });
  }
});

router.delete("/:id", authSuper, async (req, res) => {
  try {
    let zone = await modelZone.findById(req.params.id);
    if (!zone) return res.status(404).json({ message: "No zone with this id" });
    if (zone.idCreator != req.user.id)
      return res.status(400).json({
        message: "You cannot modify the zones created by others."
      });

    await modelZone.findByIdAndRemove(req.params.id, obj, {
      useFindAndModify: false
    });

    return res.status(200).json({ message: "Successfully removed." });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Error in server" });
  }
});

///////////////////// test purpose
router.delete("/", async (req, res) => {
  try {
    await modelZone.remove();
    return res.status(200).json({ message: "Successfully removed all" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Error in server" });
  }
});
//////////////////// test purpose

module.exports = router;
