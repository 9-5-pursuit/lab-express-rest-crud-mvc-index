const express = require("express");
const router = express.Router();

const locations = require("../models/location.model");

router.get("/", (req, res) => {
  res.send(locations);
});

module.exports = router;
