const express = require('express');
const plans = express.Router();
const plansData = require('../models/plan.model');

plans.get('/', (req, res) => {
  res.json(plansData);
});

plans.get('/:index', (req, res) => {
  const { index } = req.params;
  res.json(plansData[index]);
});

module.exports = plans;
