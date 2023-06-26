const express = require("express");

let machines = require("../models/machine.model")
const router = express.Router();

router.get("/", (req, res) => {
    res.send(machines)
})

module.exports = router;