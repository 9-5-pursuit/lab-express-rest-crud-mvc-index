const express = require("express");
const router = express.Router();

const machineModel = require("../models/machine.model");

router.get("/", (req, res) => {
  res.send(machineModel);
});

module.exports = router;
