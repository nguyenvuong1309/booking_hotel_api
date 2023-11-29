






require('dotenv').config();
const Hotel = require("../models/Hotel.js");
const Place = require("../models/Place.js");
const jwtSecret = process.env.JWT_SECRET;





const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const hotels = await Place.find({
            ...others,
            price: { $gt: min | 1, $lt: max || 999 },
        }).limit(req.query.limit);
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};

const getHotelById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const hotel = await Place.find({ _id: id })
        res.status(200).json(hotel)
    }
    catch (err) {
        next(err)
    }
}

const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel" });
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
        const resortCount = await Hotel.countDocuments({ type: "resort" });
        const villaCount = await Hotel.countDocuments({ type: "villa" });
        const cabinCount = await Hotel.countDocuments({ type: "cabin" });

        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartments", count: apartmentCount },
            { type: "resorts", count: resortCount },
            { type: "villas", count: villaCount },
            { type: "cabins", count: cabinCount },
        ]);
    } catch (err) {
        next(err);
    }
};

const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(
            cities.map((city) => {
                return Hotel.countDocuments({ city: city });
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

const getHotelsByCity = async (req, res) => {
    try {
        const { city } = req.params;
        const data = await Place.find({ address: city })
        res.json(data);
    }
    catch (err) {
        next(err)
    }
    // res.json([
    //     {
    //         "_id": "6548502f894e222125790937",
    //         "owner": "653fc6277a4b4bfeb4cf578e",
    //         "title": "Terracotta Hotel and Resort Dalat",
    //         "address": "Dalat",
    //         "photos": [
    //             // "photo1699200420541.jpg",
    //             // "photo1699359277935.jpg"
    //             "https://pix8.agoda.net/hotelImages/836781/-1/9c8c65a6230157f1f6d562b237cbc6a8.png?ce=0&s=1024x768",
    //             "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/156676374.jpg?k=2224b3b816dd757306c9b78401b16e504544bf872ecb673d2e60e541cf26f682&o=",
    //             "https://pix8.agoda.net/hotelImages/836781/-1/bf51a6de7aa7e7d34d51faeada654378.jpg?ca=8&ce=1&s=1024x768",
    //             "https://pix8.agoda.net/hotelImages/836781/-1/05c0a6caff8143587c07a77ff2b7cd91.jpg?ca=8&ce=1&s=1024x768",
    //             "https://pix8.agoda.net/hotelImages/836781/-1/f46e1eb77c572999dc1f5c3328904cf2.jpg?ca=8&ce=1&s=1024x768",
    //             "https://pix8.agoda.net/hotelImages/836/836781/836781_16061010140043370901.jpg?ca=6&ce=1&s=1024x768",
    //             "https://pix8.agoda.net/hotelImages/836781/-1/9310ca2a59fabd2be17400be7d8884a9.jpg?ca=8&ce=1&s=1024x768",
    //         ],
    //         "description": "Dalat",
    //         "perks": ["wifi", "tv", "pets"],
    //         "extraInfo": "Dalat",
    //         "checkIn": 14,
    //         "checkOut": 11,
    //         "maxGuests": 2,
    //         "freecancellation": true,
    //         "star": 5,
    //         "aircondition": true,
    //         "price": 120,
    //         "hightLights": ["hospital", "check-in [24-hour]", "airport transfer", "great breakfast", "great view"],
    //         "Facilities": ["parking", "swimming pool", "free wi-fi"],
    //         "grade": 8,
    //         "__v": 1
    //     }
    // ])
}


module.exports = {
    getHotels,
    getHotelById,
    countByType,
    countByCity,
    getHotelsByCity
}

