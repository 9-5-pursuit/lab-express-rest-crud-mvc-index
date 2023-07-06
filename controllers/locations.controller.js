const express = require("express");
const location = express.Router();

let locationData = require("../models/location.model.js");

location.get("/", (req, res) => {
  res.json(locationData);
});

module.exports = location;
