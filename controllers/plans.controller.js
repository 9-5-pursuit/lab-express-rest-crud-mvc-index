const express = require("express");
const plans = express.Router();

const plansData = require("../models/plan.model.js");

plans.get("/", (req, res) => {
  res.json(plansData);
});

module.exports = plans;
