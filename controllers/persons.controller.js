const express = require("express");
const router = express.Router();

let person = require("../models/person.model");
router.get("/", (req, res) => {
  res.send(person);
});

module.exports = router;
