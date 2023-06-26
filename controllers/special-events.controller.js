const express = require('express');
const specialEvents = express.Router();
const specialEventsData = require('../models/special-event.model');

specialEvents.get('/', (req, res) => {
  res.json(specialEventsData);
});

specialEvents.get('/:index', (req, res) => {
  const { index } = req.params;
  res.json(specialEventsData[index]);
});

module.exports = specialEvents;
