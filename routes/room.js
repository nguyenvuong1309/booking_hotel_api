









const express = require('express');
const router = express.Router();
const roomController = require("../controller/roomController.js");


router.get("/rooms", roomController.getRooms);
router.post("/rooms", roomController.createRooms);

router.get("/rooms/:id", roomController.getRoomsById);
router.put("/rooms/:id", roomController.updateRoomById)

router.get("/hotelRoomBooking", roomController.handleGetBookingsRoom);
router.post("/hotemRoomBooking", roomController.handleBookingsRoom);

router.get("/hotelRoomBooking/:id", roomController.handleGetBookingsRoomById);

//router.get("/", getHotels);

module.exports = router;
