const express = require("express");
const router = express.Router();

let location = require("../models/location.model");
router.get("/", (req, res) => {
  res.send(location);
});

module.exports = router;
