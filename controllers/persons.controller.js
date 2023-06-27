const express = require("express");
const router = express.Router();

let personsModel = require("../models/person.model")


router.get("/", (req,res)=>{
    res.send(personsModel);
})

module.exports = router