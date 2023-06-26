const express = require("express");
const router = express.Router();

let machines = require("../models/machine.model");

router.get("/", (req, res) => {
  res.json(machines);
});

module.exports = router;
