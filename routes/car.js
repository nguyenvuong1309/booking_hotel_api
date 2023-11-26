




const express = require('express');
const router = express.Router();
const carController = require("../controller/carController.js");



router.get("bookingCar", carController.getAllBookingCar)
router.post("/bookingCar", carController.BookingCar)

module.exports = router;
