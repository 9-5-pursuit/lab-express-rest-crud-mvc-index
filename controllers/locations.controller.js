const express = require("express");

const locations = express.Router();
const locationsArray = require("../models/location.model.js");

locations.get("/", (request, response) => {
  response.json(locationsArray);
});

locations.get("/:index", (request, response) => {
  const { index } = request.params;
  response.json(locationsArray[index]);
});
module.exports = locations;
