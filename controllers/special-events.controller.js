const express = require("express");
const router = express.Router();

const specialEvent = require("../models/special-event.model");

router.get("/", (req, res) => {
  console.log(specialEvent);
  res.json(specialEvent);
});

module.exports = router;
