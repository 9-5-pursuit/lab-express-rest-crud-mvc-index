const express = require("express");

let locations = require("../models/location.model")
console.log(locations)
const router = express.Router();

router.get("/", (req, res) => {
    res.send(locations)
})

module.exports = router;