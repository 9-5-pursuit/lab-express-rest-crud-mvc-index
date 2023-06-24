const express = require("express");
const router = express.Router();

let persons = require("../models/person.model");

router.get("/", (req, res) => {
    res.json(persons);
});

module.exports = router;
