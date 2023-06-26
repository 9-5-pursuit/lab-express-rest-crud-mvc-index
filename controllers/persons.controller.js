const express = require("express");

const persons = express.Router();

const personsData = require("../models/person.model");

persons.get("/", (req, res) => {
  res.json(personsData);
});

persons.get("/:index", (req, res) => {
  // console.log(req.params.index);
  const index = req.params.index;
  res.json(personsData[index]);
});

module.exports = persons;
