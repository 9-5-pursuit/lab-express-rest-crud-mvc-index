const express = require("express");
const router = express.Router();

let specialevents = require("../models/special-event.model");

router.get("/", (req, res) => {
  res.json(specialevents);
});

module.exports = router;
