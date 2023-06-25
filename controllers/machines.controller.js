const express = require("express");
const router = express.Router();

const machines = require("../models/machine.model");

router.get("/", (req, res) => {
  res.send(machines);
});
module.exports = router;
