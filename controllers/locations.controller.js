const express = require("express");
const router = express.Router();

const locationModel = require("../models/location.model");

router.get("/", (req, res) => {
  res.send(locationModel);
});

module.exports = router;
