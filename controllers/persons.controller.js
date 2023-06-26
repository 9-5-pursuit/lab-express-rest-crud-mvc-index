const express = require("express");

const person = express.Router();
const personArray = require("../models/person.model.js");

person.get("/", (request, response) => {
  response.json(personArray);
});

person.get("/:index", (request, response) => {
  const { index } = request.params;
  response.json(personArray[index]);
});

module.exports = person;
