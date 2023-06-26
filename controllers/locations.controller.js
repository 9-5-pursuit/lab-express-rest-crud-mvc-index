const express = require("express");
const router = express.Router();

const location = require("../models/location.model");

router.get("/", (req, res) => {
  res.json(location);
});

module.exports = router;
