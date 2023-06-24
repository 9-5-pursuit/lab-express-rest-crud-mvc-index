const express = require('express')
const router = express.Router()

let loc = require('../models/location.model')
let people = require('../models/person.model')
router.get('/', (req, res) => { return res.json(loc) })
router.get('/people', (req, res) => {

    let newArr = loc.map((item) => {
        var temp = item
        return { ...item, people: people.filter(item => item.mainLocation == temp.zip) }
    })
    return res.json(newArr)
})


module.exports = router