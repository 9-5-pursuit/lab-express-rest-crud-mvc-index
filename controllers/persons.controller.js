const express = require("express");
const router = express.Router();

let personModel = require("../models/person.model");

router.get("/person", (req, res) => {
    res.send(personModel)
  });

module.exports = router;
