const express = require("express");
const router = express.Router();

const personModel = require("../models/person.model.js");

router.get("/", (rep, res) => {
  res.send(personModel);
});

module.exports = router;
