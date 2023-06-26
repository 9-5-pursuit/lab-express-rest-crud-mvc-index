const express = require("express");
const router = express.Router();

let specialEventModel = require("../models/special-event.model");

router.get("/special-event", (req, res) => {
    res.send(specialEventModel)
  });

module.exports = router;
