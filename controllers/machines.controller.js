const express = require("express");
const router = express.Router();
const machinesData = require("../models/machine.model");

router.get("/", (req, res) => {
  res.json(machinesData);
});

module.exports = router;
