











const mongoose = require("mongoose");

const bookingCarSchema = new mongoose.Schema({
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // title: String,
    // address: String,
    // photos: [String],
    // description: String,
    // perks: [String],
    // extraInfo: String,
    // checkIn: Number,
    // checkOut: Number,
    // maxGuests: Number,
    // price: Number,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // person booking.
    carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car" }, // car being booked.
    from: String,
    to: String,
    departureTime: String,
    estimatedTimeOfArrival: String,
    price: Number,
    images: [String]
});

const BookingCarModel = mongoose.model('booingCar', bookingCarSchema);

module.exports = BookingCarModel;