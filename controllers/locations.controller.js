const express = require("express");

const locations = express.Router();

const locationsData = require("../models/location.model");

locations.get("/", (req, res) => {
  res.json(locationsData);
});

locations.get("/:index", (req, res) => {
  //   console.log(req.params.index);
  const index = req.params.index;
  res.json(locationsData[index]);
});

module.exports = locations;
