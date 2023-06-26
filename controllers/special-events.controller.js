const express = require("express");
const router = express.Router();

let specialEvent = require("../models/special-event.model");

router.get("/", (req, res) => {
  res.send(specialEvent);
});

module.exports = router;
