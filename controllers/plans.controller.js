const express = require("express");
const router = express.Router();

const plansModel = require("../models/plan.model.js");

router.get("/", (rep, res) => {
  res.send(plansModel);
});

module.exports = router;
