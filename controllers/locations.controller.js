const express = require("express");
const router = express.Router();

let locationModel = require("../models/location.model");

router.get("/location", (req, res) => {
    res.send(locationModel)
  });

module.exports = router;
