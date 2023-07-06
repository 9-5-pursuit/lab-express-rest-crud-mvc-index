const express = require("express");
const plans = express.Router();
const planArr = require("../models/plan.model");

plans.get("/", (req, res) => {
  res.json(planArr);
});

module.exports = plans;
