const express = require("express");
const router = express.Router();

let plan = require("../models/plan.model");
router.get("/", (req, res) => {
  res.send(plan);
});

module.exports = router;
