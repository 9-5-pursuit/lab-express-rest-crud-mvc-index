const express = require("express");
const router = express.Router();

const planModel = require("../models/plan.model");

router.get("/", (req, res) => {
  res.send(planModel);
});

module.exports = router;
