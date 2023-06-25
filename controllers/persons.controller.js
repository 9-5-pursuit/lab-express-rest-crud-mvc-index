const express = require("express");
const router = express.Router();

const people = require("../models/person.model");

router.get("/", (req, res) => {
  res.send(people);
});

module.exports = router;
