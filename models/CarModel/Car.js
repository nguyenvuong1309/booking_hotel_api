






const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
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

    name: String,
    from: String,
    to: String,
    departureTime: String,
    estimatedTimeOfArrival: String,
    numberRemain: Number,
    price: Number,
    images: [String],
    description: String
});

const CarModel = mongoose.model('Car', carSchema);

module.exports = CarModel;