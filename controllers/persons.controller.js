let person = require('../models/person.model')

const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.json(person)
})

module.exports = router