const express = require("express");
const router = express.Router();

const plan = require("../models/plan.model");

router.get("/", (req, res) => {
  res.json(plan);
});

module.exports = router;
