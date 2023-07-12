const express = require("express");
const router = express.Router();

const machineModel = require("../models/machine.model.js");

router.get("/", (rep, res) => {
  res.send(machineModel);
});

module.exports = router;
