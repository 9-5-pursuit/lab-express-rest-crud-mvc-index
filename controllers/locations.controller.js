const express = require("express");
const router = express.Router();

const locations = require("../models/location.model");
const peopleData = require("../models/person.model");

router.get("/", (req, res) => {
  res.send(locations);
});

// - - - BONUS (FAIL) - - -
// router.get("/people", (req, res) => {
//   const locationsWithPeople = [...locations];
//   locationsWithPeople.forEach(({ zip }) => {
//     peopleData.forEach((person) => {
//       if (person.mainLocation === zip) {
//         locationsWithPeople.people = person;
//        });
//     res.send(locationsWithPeople);
//
// });

// basic understanding
// // people.forEach((person) => {
// //   if (person.mainLocation === zip) {
// //     locations.people = person;
// //   }

// extreme basic
// //   if (obj.zip === "11011") {
// //     obj.members = members;
// //   }
// // });

module.exports = router;
