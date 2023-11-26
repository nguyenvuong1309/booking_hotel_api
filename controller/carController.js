


const mongoose = require('mongoose');
require('dotenv').config();
const Car = require("../models/CarModel/Car.js");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bcryptSalt = bcryptjs.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;




const getAllBookingCar = async (req, res) => {

}

const BookingCar = async (req, res) => {

}



module.exports = {
    getAllBookingCar,
    BookingCar,
}
