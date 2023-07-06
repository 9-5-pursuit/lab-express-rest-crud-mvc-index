const express = require("express");
const specialEvents = express.Router();
const eventArr = require("../models/special-event.model");

specialEvents.get("/", (req, res) => {
  res.json(eventArr);
});

module.exports = specialEvents;
