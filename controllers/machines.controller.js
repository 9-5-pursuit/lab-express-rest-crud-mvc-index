let machine = require('../models/machine.model')

const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.json(machine)
})

module.exports = router