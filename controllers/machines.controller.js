const express = require('express');
const machines = express.Router();
const machinesData = require('../models/machine.model');

machines.get('/', (req, res) => {
  res.json(machinesData);
});

machines.get('/:index', (req, res) => {
  const { index } = req.params;
  res.json(machinesData[index]);
});

module.exports = machines;
