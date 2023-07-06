const express = require("express");
const people = express.Router();

const personArr = require("../models/person.model");

people.get("/", (req, res) => {
  res.json(personArr);
});

module.exports = people;
