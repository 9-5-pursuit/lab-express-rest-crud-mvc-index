const express = require("express");

let plans = require("../models/plan.model")
const router = express.Router();

router.get("/", (req, res) => {
    res.send(plans)
})

module.exports = router;