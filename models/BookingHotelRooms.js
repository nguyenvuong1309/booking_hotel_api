






const mongoose = require("mongoose");

const BookingHotelRoomSchema = new mongoose.Schema({
    hotelRoom: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'HotelRoom' },
    hotelId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Place' },
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    hotelName: String,
    hotelAddress: String,
    name: { type: String, required: true },
    phone: { type: String, required: true },
    price: Number,
});

const BookingHotemRoomModel = mongoose.model('BookingHotelRoom', BookingHotelRoomSchema);

module.exports = BookingHotemRoomModel;    