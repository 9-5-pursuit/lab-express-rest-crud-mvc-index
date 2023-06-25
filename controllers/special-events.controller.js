const express = require("express");
const router = express.Router();

const specialEvents = require("../models/special-event.model");

router.get("/", (req, res) => {
  res.send(specialEvents);
});

module.exports = router;