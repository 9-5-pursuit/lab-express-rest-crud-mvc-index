//DEPENDENCIES
const express = require('express');
const router = express.Router();

const plansData = require('../models/PlanModel');

//ROUTES

router.get('/', (req, res) => {
    res.json(plansData);
})

//EXPORT
module.exports = router;