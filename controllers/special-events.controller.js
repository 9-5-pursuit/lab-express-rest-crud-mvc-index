const express = require("express");

const specialEvent = express.Router();
const specialEventArray = require("../models/special-event.model.js");

specialEvent.get("/", (request, response) => {
  response.json(specialEventArray);
});

specialEvent.get("/:index", (request, response) => {
  const { index } = request.params;
  response.json(specialEventArray[index]);
});

module.exports = specialEvent;
