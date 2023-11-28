




const express = require('express');
const router = express.Router();
const carController = require("../controller/carController.js");




router.get("/cars", carController.getAllCar);
router.post("/createCar", carController.createCar);
router.get("/cars/:id", carController.getCarById);
router.put("/cars/:id", carController.updateCarById);




router.get("/bookingCar", carController.getAllBookingCar)
router.post("/createBookingCar", carController.createBookingCar)
router.get("/bookingCar/:id", carController.createBookingCar)
router.put("/bookingCar/:id", carController.createBookingCar)

module.exports = router;
