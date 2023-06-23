let locations = require('../models/location.model')
let persons = require('../models/person.model')

const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', (req,res) => {
    res.json(locations)
})

router.get('/people', (req,res) => {
    const peoplesLocations = locations.map(x => {
        const peopleInLocation = persons.filter(y => y.mainLocation === x.zip)
        return({
            street: x.street,
            city: x.city,
            state: x.state,
            zip: x.zip,
            people: peopleInLocation
        })
    })
    res.send(peoplesLocations)
})