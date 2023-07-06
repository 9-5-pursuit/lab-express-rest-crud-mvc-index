const express = require("express");
const locations = express.Router();
const locationArr = require("../models/location.model");
const personArr = require("../models/person.model");

locations.get("/", (req, res) => {
  res.json(locationArr);
});

locations.get("/people", (req, res) => {
  const result = [...locationArr];
  locationArr.forEach(({ zip }, index) => {
    const people = personArr.filter((p) => p.mainLocation === zip);
    result[index].people = people;
  });

  res.json(result);
});

module.exports = locations;
