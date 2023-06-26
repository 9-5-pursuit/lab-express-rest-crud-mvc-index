const express = require("express");
const router = express.Router();
const personsData = require("../models/person.model");

router.get("/", (req, res) => {
  res.json(personsData);
});

module.exports = router;
