const express = require("express");
const router = express.Router();

const bonusController = require("./bonus.controller");
let location = require("../models/location.model");

router.get("/", (req, res) => {
    res.json(location);
});
router.use("/people", bonusController);

module.exports = router;
