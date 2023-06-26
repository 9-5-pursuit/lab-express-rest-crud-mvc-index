const express = require('express');
const locations = express.Router();
const locationsData = require('../models/location.model');
const personsData = require('../models/person.model');

locations.get('/', (req, res) => {
  res.json(locationsData);
});

locations.get('/people', (req, res) => {
  const organizedLocations = locationsData.map((location) => {
    const people = personsData.filter(
      (person) => person.mainLocation === location.zip
    );
    return { ...location, people };
  });

  res.json(organizedLocations);
});

module.exports = locations;
