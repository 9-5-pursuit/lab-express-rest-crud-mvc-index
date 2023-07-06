const express = require("express");
const specialEvent = express.Router();

const specialEventData = require("../models/machine.model.js");

specialEvent.get("/", (req, res) => {
  res.json(specialEventData);
});

module.exports = specialEvent;
