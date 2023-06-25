let plan = require('../models/plan.model')

const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.json(plan)
})

module.exports = router