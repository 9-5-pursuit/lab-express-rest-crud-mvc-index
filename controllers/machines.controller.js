const express = require("express");

const machine = express.Router();
const machineArray = require("../models/machine.model.js");

machine.get("/", (request, response) => {
  response.json(machineArray);
});
machine.get("/:index", (request, response) => {
  const { index } = request.params;
  response.json(machineArray[index]);
});

module.exports = machine;
