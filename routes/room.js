









const express = require('express');
const router = express.Router();
const roomController = require("../controller/roomController.js");


router.get("/rooms", roomController.getRooms);
router.get("/rooms/:id", roomController.getRoomsById);
router.get("/hotelRoomBooking", roomController.handleGetBookingsRoom);
router.post("/hotemRoomBooking", roomController.handleBookingsRoom);

//router.get("/", getHotels);

module.exports = router;
