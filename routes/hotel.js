


const express = require('express');
const router = express.Router();
const hotelController = require("../controller/hotelController.js");


router.get("/hotels", hotelController.getHotels);
router.get("/hotels/countByType", hotelController.countByType);
router.get("/hotels/countByCity", hotelController.countByCity);
//router.get("/", getHotels);

module.exports = router;
