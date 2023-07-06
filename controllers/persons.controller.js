const express = require("express");
const persons = express.Router();

const personsData = require("../models/person.model.js");

persons.get("/", (req, res) => {
  res.json(personsData);
});

module.exports = persons;
