const express = require("express");
const router = express.Router();

let machineModel = require("../models/machine.model");

router.get("/machine", (req, res) => {
    res.send(machineModel)
  });

module.exports = router;
