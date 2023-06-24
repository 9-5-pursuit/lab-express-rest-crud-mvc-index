const express = require('express')
const router = express.Router()

let mach =  require('../models/machine.model')
router.get('/', (req, res) => {return res.json(mach)})

module.exports = router