const express = require("express");

const machines = express.Router();

const machinesData = require("../models/machine.model");

machines.get("/", (req, res) => {
  res.json(machinesData);
});

machines.get("/:index", (req, res) => {
  // console.log(req.params.index);
  const index = req.params.index;
  res.json(machinesData[index]);
});

module.exports = machines;
