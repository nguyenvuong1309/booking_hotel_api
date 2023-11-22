









const express = require('express');
const router = express.Router();
const roomController = require("../controller/roomController.js");


router.get("/rooms", roomController.getRooms);

//router.get("/", getHotels);

module.exports = router;
