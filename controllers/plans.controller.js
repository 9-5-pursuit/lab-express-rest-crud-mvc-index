const express = require("express");
const router = express.Router();

let planModel = require("../models/plan.model");

router.get("/plan", (req, res) => {
    res.send(planModel)
  });

module.exports = router;
