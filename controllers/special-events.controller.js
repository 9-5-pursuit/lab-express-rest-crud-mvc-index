const express = require("express");
const router = express.Router();

const specialEventModel = require("../models/special-event.model");

router.get("/", (req, res) => {
  res.send(specialEventModel);
});

module.exports = router;
