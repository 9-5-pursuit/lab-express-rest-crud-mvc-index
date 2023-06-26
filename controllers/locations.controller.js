const express = require("express");
const router = express.Router();

let models = require("../models/location.model");

router.get("/", (req, res) => {
  res.send(models);
});

module.exports = router;
