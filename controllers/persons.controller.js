const express = require('express');
const persons = express.Router();
const personData = require('../models/person.model');

persons.get('/', (req, res) => {
  res.json(personData);
});

persons.get('/:index', (req, res) => {
  const { index } = req.params;
  res.json(personData[index]);
});

module.exports = persons;
