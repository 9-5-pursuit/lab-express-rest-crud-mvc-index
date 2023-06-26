const express = require("express");
const router = express.Router();

let locations = require("../models/location.model");

router.get("/", (req, res) => {
  res.json(locations);
});

module.exports = router;
