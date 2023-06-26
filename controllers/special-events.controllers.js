const express = require("express");

let specialEvents = require("../models/special-event.model")
const router = express.Router();

router.get("/", (req, res) => {
    res.send(specialEvents)
})

module.exports = router;