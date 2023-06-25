const express = require("express");
const router = express.Router();

let locations = require("../models/location.model");
let persons = require("../models/person.model");

router.get("/", (req, res) => {
  res.json(locations);
});

router.get("/people", (req, res) => {
  let peopleArray = [];
  let membersArray = [];

  persons.forEach((person) => {
    if (person.mainLocation === locations[0].zip) {
      peopleArray.push(person);
    } else {
      membersArray.push(person);
    }
  });

  locations[0].people = peopleArray;
  locations[1].member = membersArray;

  res.json(locations);
});

module.exports = router;
