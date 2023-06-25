const express = require("express");
const router = express.Router();

const plans = require("../models/plan.model");

router.get("/", (req, res) => {
  res.send(plans);
});

module.exports = router;
