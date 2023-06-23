let locations = require('../models/location.model')

const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', (req,res) => {
    res.send('f')
})