//DEPENDENCIES
const express = require('express');
const router = express.Router();

const specialEventData = require('../models/SpecialEventModel');

//ROUTES

router.get('/', (req, res) => {
    res.json(specialEventData);
})

//EXPORT
module.exports = router;