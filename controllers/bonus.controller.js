const express = require("express");
const router = express.Router();

let location = require("../models/location.model");
let persons = require("../models/person.model");

router.get("/", (req, res) => {
    res.send(
        location.map((location) => {
            location.members = persons.filter((person) => {
                return location.zip === person.mainLocation;
            });
            return location;
        })
    );
});

module.exports = router;
