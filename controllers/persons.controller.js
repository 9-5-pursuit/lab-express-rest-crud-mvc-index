const express = require("express");
const router = express.Router();

const person = require("../models/person.model");

router.get("/", (req, res) => {
  console.log(person);
  res.json(person);
});

module.exports = router;
