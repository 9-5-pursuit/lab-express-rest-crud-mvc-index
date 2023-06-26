const express = require("express");
const router = express.Router();

let specialEvents = require("../models/special-event.model");

router.get("/", (req, res) => {
  res.json(specialEvents);
});

module.exports = router;
