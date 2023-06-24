const express = require('express')
const router = express.Router()

let plan =  require('../models/plan.model')
router.get('/', (req, res) => {return res.json(plan)})

module.exports = router