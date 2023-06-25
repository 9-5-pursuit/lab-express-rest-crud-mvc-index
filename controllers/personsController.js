//DEPENDENCIES
const express = require('express');
const router = express.Router();

const personsData = require('../models/PersonModel');

//ROUTES

router.get('/', (req, res) => {
    res.json(personsData);
})

//EXPORT
module.exports = router;