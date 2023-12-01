





// const  "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-1.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-1.jpeg?raw=true";
// const "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true";
// const "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true";
// const "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true";

// const  "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-1.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-1.jpeg?raw=true";
// const  "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-2.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-2.jpeg?raw=true";
// const "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-3.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-3.jpeg?raw=true";
// const  "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-4.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-4.jpeg?raw=true";
// const  "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-5.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-5.jpeg?raw=true";
// const  "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-6.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-6.jpeg?raw=true";
// const  "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-7.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-7.jpeg?raw=true";
// const "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-8.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-8.jpeg?raw=true";
// const "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-9.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-9.jpeg?raw=true";
// const "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-10.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-10.jpeg?raw=true";
// const "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-11.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-11.jpeg?raw=true";
// const "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-12.jpeg?raw=true" = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-12.jpeg?raw=true";

const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const BookingHotelRoom = require('../models/BookingHotelRooms.js');
const HotelRoom = require("../models/HotelRoom.js")
const Place = require("../models/Place.js");

function getUserDataFromReq(req, res, next) {
    try {
        return new Promise((resolve, reject) => {
            jwt.verify(req.headers['authorization'].split(' ')[1], jwtSecret, {}, async (err, userData) => {
                if (err) {
                    next(err)
                }
                resolve(userData);
            });
        });
    } catch (err) {
        next(err);
    }
}

const getRooms = async (req, res, next) => {
    try {
        const data = await HotelRoom.find({});
        res.json(data);
    }
    catch (err) {

        next(err);
    }
    // res.json(
    //     [
    //         {
    //             _id: "6560907006d8e3b612b21902",
    //             sys: {
    //                 id: "1"
    //             },
    //             fields: {
    //                 _id: "",
    //                 name: "single economy",
    //                 hotelId: "6548502f894e222125790937",
    //                 slug: "single-economy",
    //                 grade: 9,
    //                 type: "single",
    //                 price: 100,
    //                 size: 200,
    //                 capacity: 1,
    //                 pets: false,
    //                 breakfast: false,
    //                 featured: false,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-1.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         {
    //             sys: {
    //                 id: "2"
    //             },
    //             fields: {
    //                 name: "single basic",
    //                 hotelId: "6548502f894e222125790937",
    //                 slug: "single-basic",
    //                 type: "single",
    //                 price: 150,
    //                 size: 250,
    //                 capacity: 1,
    //                 pets: false,
    //                 breakfast: false,
    //                 featured: false,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         {
    //             sys: {
    //                 id: "3"
    //             },
    //             fields: {
    //                 name: "single standard",
    //                 hotelId: "6548502f894e222125790937",
    //                 slug: "single-standard",
    //                 type: "single",
    //                 price: 250,
    //                 size: 300,
    //                 capacity: 1,
    //                 pets: true,
    //                 breakfast: false,
    //                 featured: false,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         {
    //             sys: {
    //                 id: "4"
    //             },
    //             fields: {
    //                 name: "single deluxe",
    //                 hotelId: "6548502f894e222125790937",
    //                 slug: "single-deluxe",
    //                 type: "single",
    //                 price: 300,
    //                 size: 400,
    //                 capacity: 1,
    //                 pets: true,
    //                 breakfast: true,
    //                 featured: false,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         {
    //             sys: {
    //                 id: "5"
    //             },
    //             fields: {
    //                 name: "double economy",
    //                 hotelId: "6548502f894e222125790937",
    //                 slug: "double-economy",
    //                 type: "double",
    //                 price: 200,
    //                 size: 300,
    //                 capacity: 2,
    //                 pets: false,
    //                 breakfast: false,
    //                 featured: false,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-5.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         {
    //             sys: {
    //                 id: "6"
    //             },
    //             fields: {
    //                 name: "double basic",
    //                 hotelId: "65601b9f8fa08fdb9e326bae",
    //                 slug: "double-basic",
    //                 type: "double",
    //                 price: 250,
    //                 size: 350,
    //                 capacity: 2,
    //                 pets: false,
    //                 breakfast: false,
    //                 featured: false,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-6.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         {
    //             sys: {
    //                 id: "7"
    //             },
    //             fields: {
    //                 name: "double standard",
    //                 hotelId: "65601b9f8fa08fdb9e326bae",
    //                 slug: "double-standard",
    //                 type: "double",
    //                 price: 300,
    //                 size: 400,
    //                 capacity: 2,
    //                 pets: true,
    //                 breakfast: false,
    //                 featured: false,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-7.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         {
    //             sys: {
    //                 id: "8"
    //             },
    //             fields: {
    //                 name: "double deluxe",
    //                 hotelId: "65601b9f8fa08fdb9e326bae",
    //                 slug: "double-deluxe",
    //                 type: "double",
    //                 price: 400,
    //                 size: 500,
    //                 capacity: 2,
    //                 pets: true,
    //                 breakfast: true,
    //                 featured: true,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-8.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         {
    //             sys: {
    //                 id: "9"
    //             },
    //             fields: {
    //                 name: "family economy",
    //                 hotelId: "65601b9f8fa08fdb9e326bae",
    //                 slug: "family-economy",
    //                 type: "family",
    //                 price: 300,
    //                 size: 500,
    //                 capacity: 3,
    //                 pets: false,
    //                 breakfast: false,
    //                 featured: false,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-9.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         {
    //             sys: {
    //                 id: "10"
    //             },
    //             fields: {
    //                 name: "family basic",
    //                 hotelId: "65601b9f8fa08fdb9e326bae",
    //                 slug: "family-basic",
    //                 type: "family",
    //                 price: 350,
    //                 size: 550,
    //                 capacity: 4,
    //                 pets: false,
    //                 breakfast: false,
    //                 featured: false,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-10.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         {
    //             sys: {
    //                 id: "11"
    //             },
    //             fields: {
    //                 name: "family standard",
    //                 hotelId: "65601b9f8fa08fdb9e326bae",
    //                 slug: "family-standard",
    //                 type: "family",
    //                 price: 400,
    //                 size: 600,
    //                 capacity: 5,
    //                 pets: true,
    //                 breakfast: false,
    //                 featured: false,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-11.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         {
    //             sys: {
    //                 id: "12"
    //             },
    //             fields: {
    //                 name: "family deluxe",
    //                 hotelId: "65601b9f8fa08fdb9e326bae",
    //                 slug: "family-deluxe",
    //                 type: "family",
    //                 price: 500,
    //                 size: 700,
    //                 capacity: 6,
    //                 pets: true,
    //                 breakfast: true,
    //                 featured: true,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-12.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         },
    //         {
    //             sys: {
    //                 id: "13"
    //             },
    //             fields: {
    //                 name: "presidential",
    //                 hotelId: "6548502f894e222125790937",
    //                 slug: "presidential-room",
    //                 type: "presidential",
    //                 price: 600,
    //                 size: 1000,
    //                 capacity: 10,
    //                 pets: true,
    //                 breakfast: true,
    //                 featured: true,
    //                 description:
    //                     "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //                 extras: [
    //                     "Plush pillows and breathable bed linens",
    //                     "Soft, oversized bath towels",
    //                     "Full-sized, pH-balanced toiletries",
    //                     "Complimentary refreshments",
    //                     "Adequate safety/security",
    //                     "Internet",
    //                     "Comfortable beds"
    //                 ],
    //                 images: [
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-1.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                             }
    //                         }
    //                     },
    //                     {
    //                         fields: {
    //                             file: {
    //                                 url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         }
    //     ]
    // )
}

const createRooms = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        const { hotelRoom } = req.body;
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) {
                next(err)
            }
            const response = await HotelRoom.create({
                sys: {
                    id: hotelRoom.sys.id,
                },
                fields: {
                    name: hotelRoom.fields.name,
                    hotelId: hotelRoom.fields.hotelId,
                    slug: hotelRoom.fields.slug,
                    type: hotelRoom.fields.type,
                    price: hotelRoom.fields.price,
                    size: hotelRoom.fields.size,
                    capacity: hotelRoom.fields.capacity,
                    pets: hotelRoom.fields.pets,
                    breakfast: hotelRoom.fields.breakfast,
                    featured: hotelRoom.fields.featured,
                    description: hotelRoom.fields.description,
                    extras: hotelRoom.fields.extras,
                    images: hotelRoom.fields.images,
                    policyCancelBooking: hotelRoom.fields.policyCancelBooking,
                    numberOfRemainRoom: hotelRoom.fields.numberOfRemainRoom,
                }
            });
            res.json(response);
        });
    } catch (err) {
        next(err);
    }
}

const getRoomsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        res.json(await HotelRoom.findById(id));
    }
    catch (err) {
        next(err)
    }
    // res.json(
    //     {
    //         _id: "6560907006d8e3b612b21902",
    //         sys: {
    //             id: "1"
    //         },
    //         fields: {
    //             _id: "",
    //             name: "single economy",
    //             hotelId: "6548502f894e222125790937",
    //             slug: "single-economy",
    //             grade: 9,
    //             type: "single",
    //             price: 100,
    //             size: 200,
    //             capacity: 1,
    //             pets: false,
    //             breakfast: false,
    //             featured: false,
    //             description:
    //                 "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
    //             extras: [
    //                 "Plush pillows and breathable bed linens",
    //                 "Soft, oversized bath towels",
    //                 "Full-sized, pH-balanced toiletries",
    //                 "Complimentary refreshments",
    //                 "Adequate safety/security",
    //                 "Internet",
    //                 "Comfortable beds"
    //             ],
    //             images: [
    //                 {
    //                     fields: {
    //                         file: {
    //                             url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-1.jpeg?raw=true"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     fields: {
    //                         file: {
    //                             url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     fields: {
    //                         file: {
    //                             url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     fields: {
    //                         file: {
    //                             url: "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true"
    //                         }
    //                     }
    //                 }
    //             ]
    //         }
    //     },
    // )
}

const handleGetBookingsRoom = async (req, res, next) => {
    try {
        const userData = await getUserDataFromReq(req);
        res.json(await BookingHotelRoom.find({ user: userData.id }).populate('hotelRoom'));
        //res.json(await BookingHotelRoom.find({}));
    }
    catch (err) {
        next(err);
    }
}


const handleBookingsRoom = async (req, res, next) => {
    try {
        const userData = await getUserDataFromReq(req);
        const {
            hotelRoom, checkIn, checkOut,
            numberOfGuests, name, phone, price,
            hotelName, hotelAddress, hotelId
        } = req.body;
        if (hotelRoom && checkIn && checkOut &&
            numberOfGuests && name && phone && price &&
            hotelName && hotelAddress) {
            BookingHotelRoom.create({
                hotelRoom, checkIn, checkOut,
                numberOfGuests, name, phone, price,
                hotelName, hotelAddress,
                user: userData.id, hotelId
            }).then((doc) => {
                res.json(doc);
            }).catch((err) => {
                next(err)
            })
        }
        else {
            console.log("Plase enter all the field");
        }
    } catch (err) {
        next(err)
    }
};


const handleGetBookingsRoomById = async (req, res, next) => {
    try {
        const { id } = req.params;
        res.json(await BookingHotelRoom.find({ _id: id }).populate('hotelId'));
    }
    catch (err) {
        next(err)
    }
}

const updateRoomById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const hotelRoom = req.body;
        // const data = await HotelRoom.create({
        //     sys: {
        //         id: hotelRoom.sys.id,
        //     },
        //     fields: {
        //         name: hotelRoom.fields.name,
        //         hotelId: hotelRoom.fields.hotelId,
        //         slug: hotelRoom.fields.slug,
        //         type: hotelRoom.fields.type,
        //         price: hotelRoom.fields.price,
        //         size: hotelRoom.fields.size,
        //         capacity: hotelRoom.fields.capacity,
        //         pets: hotelRoom.fields.pets,
        //         breakfast: hotelRoom.fields.breakfast,
        //         featured: hotelRoom.fields.featured,
        //         description: hotelRoom.fields.description,
        //         extras: hotelRoom.fields.extras,
        //         images: hotelRoom.fields.images,
        //         numberOfRemainRoom: hotelRoom.fields.numberOfRemainRoom,
        //     }
        // });
        const user = await HotelRoom.findOneAndUpdate({ _id: id }, hotelRoom);
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
}


const deleteBookingRoomById = async (req, res, next) => {
    try {
        const { id } = req.params
        console.log("🚀 ~ file: roomController.js:1016 ~ deleteBookingRoomById ~ id:", id)
        const response = await BookingHotelRoom.deleteOne({ _id: id })
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getRooms,
    createRooms,
    getRoomsById,
    handleGetBookingsRoom,
    handleBookingsRoom,
    handleGetBookingsRoomById,
    updateRoomById,
    deleteBookingRoomById,
}
