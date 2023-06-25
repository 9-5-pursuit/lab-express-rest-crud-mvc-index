//DEPENDENIES
const express = require('express');
const router = express.Router();

const locationsData = require('../models/LocationModel');

//ROUTES

router.get("/", (req, res) => {
    res.json(locationsData);
})


//EXPORT
module.exports = router;