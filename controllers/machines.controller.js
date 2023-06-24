const express = require("express");
const router = express.Router();

let machine = require("../models/machine.model");

router.get("/", (req, res) => {
    res.json(machine);
});

module.exports = router;
