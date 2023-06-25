//DEPENDENCIES
const express = require('express');
const router = express.Router();

const machineData = require('../models/MachineModel');

//ROUTES

router.get('/', (req, res) => {
    res.json(machineData);
})

//EXPORT

module.exports = router;