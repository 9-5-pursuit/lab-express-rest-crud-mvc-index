const express = require("express");
const router = express.Router();

const specialEventsModel = require("../models/special-event.model");

router.get("/", (req, res) => {
  res.send(specialEventsModel);
});

module.exports = router;
