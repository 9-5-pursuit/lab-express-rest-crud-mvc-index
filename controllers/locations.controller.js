const express = require("express");
const router = express.Router();
const locationsData = require("../models/location.model");

router.get("/", (req, res) => {
  res.json(locationsData);
});

module.exports = router;
