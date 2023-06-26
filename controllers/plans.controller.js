const express = require("express");

const plan = express.Router();
const planArray = require("../models/plan.model.js");

plan.get("/", (request, response) => {
  response.json(planArray);
});

plan.get("/:index", (request, response) => {
  const { index } = request.params;
  response.json(planArray[index]);
});

module.exports = plan;
