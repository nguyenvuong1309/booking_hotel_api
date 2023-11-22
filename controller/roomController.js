





const room1 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-1.jpeg?raw=true";
const room2 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-2.jpeg?raw=true";
const room3 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-3.jpeg?raw=true";
const room4 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/details-4.jpeg?raw=true";

const img1 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-1.jpeg?raw=true";
const img2 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-2.jpeg?raw=true";
const img3 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-3.jpeg?raw=true";
const img4 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-4.jpeg?raw=true";
const img5 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-5.jpeg?raw=true";
const img6 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-6.jpeg?raw=true";
const img7 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-7.jpeg?raw=true";
const img8 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-8.jpeg?raw=true";
const img9 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-9.jpeg?raw=true";
const img10 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-10.jpeg?raw=true";
const img11 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-11.jpeg?raw=true";
const img12 = "https://github.com/john-smilga/react-beach-resort-project/blob/master/src/images/room-12.jpeg?raw=true";


const getRooms = (req, res) => {
    res.json(
        [
            {
                sys: {
                    id: "1"
                },
                fields: {
                    name: "single economy",
                    slug: "single-economy",
                    type: "single",
                    price: 100,
                    size: 200,
                    capacity: 1,
                    pets: false,
                    breakfast: false,
                    featured: false,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: img1
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            },
            {
                sys: {
                    id: "2"
                },
                fields: {
                    name: "single basic",
                    slug: "single-basic",
                    type: "single",
                    price: 150,
                    size: 250,
                    capacity: 1,
                    pets: false,
                    breakfast: false,
                    featured: false,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: img2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            },
            {
                sys: {
                    id: "3"
                },
                fields: {
                    name: "single standard",
                    slug: "single-standard",
                    type: "single",
                    price: 250,
                    size: 300,
                    capacity: 1,
                    pets: true,
                    breakfast: false,
                    featured: false,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: img3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            },
            {
                sys: {
                    id: "4"
                },
                fields: {
                    name: "single deluxe",
                    slug: "single-deluxe",
                    type: "single",
                    price: 300,
                    size: 400,
                    capacity: 1,
                    pets: true,
                    breakfast: true,
                    featured: false,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: img4
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            },
            {
                sys: {
                    id: "5"
                },
                fields: {
                    name: "double economy",
                    slug: "double-economy",
                    type: "double",
                    price: 200,
                    size: 300,
                    capacity: 2,
                    pets: false,
                    breakfast: false,
                    featured: false,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: img5
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            },
            {
                sys: {
                    id: "6"
                },
                fields: {
                    name: "double basic",
                    slug: "double-basic",
                    type: "double",
                    price: 250,
                    size: 350,
                    capacity: 2,
                    pets: false,
                    breakfast: false,
                    featured: false,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: img6
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            },
            {
                sys: {
                    id: "7"
                },
                fields: {
                    name: "double standard",
                    slug: "double-standard",
                    type: "double",
                    price: 300,
                    size: 400,
                    capacity: 2,
                    pets: true,
                    breakfast: false,
                    featured: false,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: img7
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            },
            {
                sys: {
                    id: "8"
                },
                fields: {
                    name: "double deluxe",
                    slug: "double-deluxe",
                    type: "double",
                    price: 400,
                    size: 500,
                    capacity: 2,
                    pets: true,
                    breakfast: true,
                    featured: true,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: img8
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            },
            {
                sys: {
                    id: "9"
                },
                fields: {
                    name: "family economy",
                    slug: "family-economy",
                    type: "family",
                    price: 300,
                    size: 500,
                    capacity: 3,
                    pets: false,
                    breakfast: false,
                    featured: false,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: img9
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            },
            {
                sys: {
                    id: "10"
                },
                fields: {
                    name: "family basic",
                    slug: "family-basic",
                    type: "family",
                    price: 350,
                    size: 550,
                    capacity: 4,
                    pets: false,
                    breakfast: false,
                    featured: false,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: img10
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            },
            {
                sys: {
                    id: "11"
                },
                fields: {
                    name: "family standard",
                    slug: "family-standard",
                    type: "family",
                    price: 400,
                    size: 600,
                    capacity: 5,
                    pets: true,
                    breakfast: false,
                    featured: false,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: img11
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            },
            {
                sys: {
                    id: "12"
                },
                fields: {
                    name: "family deluxe",
                    slug: "family-deluxe",
                    type: "family",
                    price: 500,
                    size: 700,
                    capacity: 6,
                    pets: true,
                    breakfast: true,
                    featured: true,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: img12
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            },
            {
                sys: {
                    id: "13"
                },
                fields: {
                    name: "presidential",
                    slug: "presidential-room",
                    type: "presidential",
                    price: 600,
                    size: 1000,
                    capacity: 10,
                    pets: true,
                    breakfast: true,
                    featured: true,
                    description:
                        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                    extras: [
                        "Plush pillows and breathable bed linens",
                        "Soft, oversized bath towels",
                        "Full-sized, pH-balanced toiletries",
                        "Complimentary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Comfortable beds"
                    ],
                    images: [
                        {
                            fields: {
                                file: {
                                    url: room1
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room2
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room3
                                }
                            }
                        },
                        {
                            fields: {
                                file: {
                                    url: room4
                                }
                            }
                        }
                    ]
                }
            }
        ]
    )
}


module.exports = {
    getRooms,
}