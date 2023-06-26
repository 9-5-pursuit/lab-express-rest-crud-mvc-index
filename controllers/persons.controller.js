const express = require("express");

let persons = require("../models/person.model")
const router = express.Router();

router.get("/", (req, res) => {
    res.send(persons)
})

module.exports = router;