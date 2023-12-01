


const mongoose = require('mongoose');
require('dotenv').config();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bcryptSalt = bcryptjs.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;


const Car = require("../models/CarModel/Car.js");
const BookingCar = require("../models/CarModel/BookingCar.js");



const getAllCar = async (req, res) => {
    res.json(await Car.find({}))
}
const createCar = async (req, res) => {

    const data = req.body
    const response = await Car.create(data);
    res.status(200).json(response)
}
const getCarById = async (req, res) => {

}
const updateCarById = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const response = await Car.findOneAndUpdate({ _id: id }, data)
    res.status(200).json(response);
}






const getAllBookingCar = async (req, res) => {
    return await BookingCar.find({})
}
const createBookingCar = async (req, res) => {
    const data = req.body;
    const response = await BookingCar.create(data);
    res.status(200).json(response);
}
const getBookingCarById = async (req, res) => { }
const updateBookingCarById = async (req, res) => { }


module.exports = {
    getAllCar,
    createCar,
    getCarById,
    updateCarById,


    getAllBookingCar,
    createBookingCar,
    getBookingCarById,
    updateBookingCarById,
}
