const express = require("express");
const router = express.Router();

const personModel = require("../models/person.model");

router.get("/", (req, res) => {
  res.send(personModel);
});

module.exports = router;
