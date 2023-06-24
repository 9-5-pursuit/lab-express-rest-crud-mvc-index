const express = require("express");
const router = express.Router();

let plans = require("../models/plan.model");

router.get("/", (req, res) => {
    res.json(plans);
});

module.exports = router;
