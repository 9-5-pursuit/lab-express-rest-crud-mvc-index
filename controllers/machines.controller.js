const express = require("express");
const router = express.Router();

let machine = require("../models/machine.model");

router.get("/", (req, res) => {
  res.send(machine);
});

module.exports = router;
