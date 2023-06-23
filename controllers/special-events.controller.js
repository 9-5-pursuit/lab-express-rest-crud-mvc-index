let specialEvent = require('../models/special-event.model')

const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.json(specialEvent)
})

module.exports = router