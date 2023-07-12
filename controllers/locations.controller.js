const express = require('express');
const router = express.Router();

const locationModel = require('../models/location.model.js');

router.get("/", (rep, res) => {
  res.send(locationModel);
});

module.exports = router;