






require('dotenv').config();
const Hotel = require("../models/Hotel.js");
const Place = require("../models/Place.js");
const jwtSecret = process.env.JWT_SECRET;





const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        // const hotels = await Hotel.find({
        //     ...others,
        //     cheapestPrice: { $gt: min | 1, $lt: max || 999 },
        // }).limit(req.query.limit);
        const hotels = [
            {
                "_id": "655f77da0d1990bb3ccfe951",
                "name": "Hotel Jane 1",
                "type": "hotel",
                "city": "madrid",
                "address": "somewhere",
                "distance": 500,
                "photos": ["https://dulichchat.com/wp-content/uploads/2019/04/HomeFarm-homestay-dulichchat-8.jpg"],
                "title": "Best hotel in the city",
                "desc": "hotel description",
                "rooms": [],
                "cheapestPrice": 100,
                "featured": true,
                "star": 1,
                "_v": 0
            },
            {
                "_id": "655f77da0d1990bb3ccfe952",
                "name": "Hotel Jane 2",
                "type": "hotel",
                "city": "madrid",
                "address": "somewhere",
                "distance": 500,
                "photos": ["https://dulichchat.com/wp-content/uploads/2019/04/HomeFarm-homestay-dulichchat-8.jpg"],
                "title": "Best hotel in the city",
                "desc": "hotel description",
                "rooms": [],
                "cheapestPrice": 100,
                "featured": true,
                "star": 2,
                "_v": 0
            },
            {
                "_id": "655f77da0d1990bb3ccfe953",
                "name": "Hotel Jane 3",
                "type": "hotel",
                "city": "madrid",
                "address": "somewhere",
                "distance": 500,
                "photos": ["https://dulichchat.com/wp-content/uploads/2019/04/HomeFarm-homestay-dulichchat-8.jpg"],
                "title": "Best hotel in the city",
                "desc": "hotel description",
                "rooms": [],
                "cheapestPrice": 100,
                "featured": true,
                "star": 3,
                "_v": 0
            },
            {
                "_id": "655f77da0d1990bb3ccfe954",
                "name": "Hotel Jane 4",
                "type": "hotel",
                "city": "madrid",
                "address": "somewhere",
                "distance": 500,
                "photos": ["https://dulichchat.com/wp-content/uploads/2019/04/HomeFarm-homestay-dulichchat-8.jpg"],
                "title": "Best hotel in the city",
                "desc": "hotel description",
                "rooms": [],
                "cheapestPrice": 100,
                "featured": true,
                "star": 4,
                "_v": 0
            },
            {
                "_id": "655f77da0d1990bb3ccfe955",
                "name": "Hotel Jane 5",
                "type": "hotel",
                "city": "madrid",
                "address": "somewhere",
                "distance": 500,
                "photos": ["https://dulichchat.com/wp-content/uploads/2019/04/HomeFarm-homestay-dulichchat-8.jpg"],
                "title": "Best hotel in the city",
                "desc": "hotel description",
                "rooms": [],
                "cheapestPrice": 100,
                "featured": true,
                "star": 5,
                "_v": 0
            },
            {
                "_id": "655f77da0d1990bb3ccfe956",
                "name": "Hotel Jane 6",
                "type": "hotel",
                "city": "madrid",
                "address": "somewhere",
                "distance": 500,
                "photos": ["https://dulichchat.com/wp-content/uploads/2019/04/HomeFarm-homestay-dulichchat-8.jpg"],
                "title": "Best hotel in the city",
                "desc": "hotel description",
                "rooms": [],
                "cheapestPrice": 100,
                "featured": true,
                "star": 1,
                "_v": 0
            },
            {
                "_id": "655f77da0d1990bb3ccfe957",
                "name": "Hotel Jane 7",
                "type": "hotel",
                "city": "madrid",
                "address": "somewhere",
                "distance": 500,
                "photos": ["https://dulichchat.com/wp-content/uploads/2019/04/HomeFarm-homestay-dulichchat-8.jpg"],
                "title": "Best hotel in the city",
                "desc": "hotel description",
                "rooms": [],
                "cheapestPrice": 100,
                "featured": true,
                "star": 2,
                "_v": 0
            },
            {
                "_id": "655f77da0d1990bb3ccfe958",
                "name": "Hotel Jane 8",
                "type": "hotel",
                "city": "madrid",
                "address": "somewhere",
                "distance": 500,
                "photos": ["https://dulichchat.com/wp-content/uploads/2019/04/HomeFarm-homestay-dulichchat-8.jpg"],
                "title": "Best hotel in the city",
                "desc": "hotel description",
                "rooms": [],
                "cheapestPrice": 100,
                "featured": true,
                "star": 3,
                "_v": 0
            },
            {
                "_id": "655f77da0d1990bb3ccfe959",
                "name": "Hotel Jane 9",
                "type": "hotel",
                "city": "madrid",
                "address": "somewhere",
                "distance": 500,
                "photos": ["https://dulichchat.com/wp-content/uploads/2019/04/HomeFarm-homestay-dulichchat-8.jpg"],
                "title": "Best hotel in the city",
                "desc": "hotel description",
                "rooms": [],
                "cheapestPrice": 100,
                "featured": true,
                "star": 4,
                "_v": 0
            },
            {
                "_id": "655f77da0d1990bb3ccfe950",
                "name": "Hotel Jane 10",
                "type": "hotel",
                "city": "madrid",
                "address": "somewhere",
                "distance": 500,
                "photos": ["https://dulichchat.com/wp-content/uploads/2019/04/HomeFarm-homestay-dulichchat-8.jpg"],
                "title": "Best hotel in the city",
                "desc": "hotel description",
                "rooms": [],
                "cheapestPrice": 100,
                "featured": true,
                "star": 5,
                "_v": 0
            },
        ]
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};

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
    const { city } = req.params;
    const data = await Place.find({ address: city })
    res.json(data);
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
    countByType,
    countByCity,
    getHotelsByCity
}

