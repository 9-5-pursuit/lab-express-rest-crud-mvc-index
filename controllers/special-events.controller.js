const express = require("express");
const router = express.Router();

const specialModel = require("../models/special-event.model.js");

router.get("/", (rep, res) => {
  res.send(specialModel);
});

module.exports = router;
