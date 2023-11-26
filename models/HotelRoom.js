








const mongoose = require("mongoose");

const hotelRoomSchema = new mongoose.Schema({
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
    sys: {
        id: String,
    },
    fields: {
        name: String,
        hotelId: String,
        slug: String,
        grade: Number,
        type: String,
        price: Number,
        size: Number,
        pets: Boolean,
        breakfast: Boolean,
        featured: Boolean,
        description: [String],
        extras: [String],
        numberOfRemainRoom: Number,
        images: [
            {
                fields: {
                    file: {
                        url: String
                    }
                }
            }
        ]
    }
},
    { typeKey: '$type' }
);

const HotelRoomModel = mongoose.model('HotelRoom', hotelRoomSchema);

module.exports = HotelRoomModel;