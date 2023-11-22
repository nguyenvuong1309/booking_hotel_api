





const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/User.js');
const Place = require('../models/Place.js');
const Booking = require('../models/Booking.js');
const Comment = require('../models/Comment.js');
const Hotel = require("../models/Hotel.js");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const imageDownloader = require("image-downloader");
const userServices = require("../services/userServices.js");
const bcryptSalt = bcryptjs.genSaltSync(10);

const jwtSecret = process.env.JWT_SECRET;



// mongoose.connect(process.env.MONGO_URL).then(() => console.log("🚀 ~ file: index.js:32 ~ 'Connected!':", 'Connected!'));;


const handleHelloWorld = (req, res) => {
    return res.json('test hello world');
}

function getUserDataFromReq(req) {
    return new Promise((resolve, reject) => {
        jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            resolve(userData);
        });
    });
}

const handleRegister = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcryptjs.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
    }
    catch (e) {
        res.status(422).json(e)
    }
};

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email })
    const passOk = bcryptjs.compareSync(password, userDoc.password)
    if (passOk) {
        // jwt.sign({
        //     email: userDoc.email,
        //     id: userDoc._id,
        //     name: userDoc.name
        // }, jwtSecret, (err, token) => {
        //     if (err) throw err;
        //     console.log("login success");
        //     res.cookie('token', token).json(userDoc
        //     );
        // });
        //res.json('pass ok')
        // =========================================================================================
        const token = jwt.sign({
            email: userDoc.email,
            id: userDoc._id,
            name: userDoc.name
        }, jwtSecret, { expiresIn: "1d" })
        res.cookie("token", token,
            {
                httpOnly: true,
                path: "/",
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
            }
        );
        res.json(userDoc);
    } else {
        res.status(422).json('not found')
    }
};

const handleGetProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const { name, email, _id } = await User.findById(userData.id);
            res.json({ name, email, _id })
        })
    } else {
        res.json(null);
    }
};

const handleLogout = (req, res) => {
    res.cookie('token', '').json(true);
};

const handlePost_Upload_By_Link = async (req, res) => {
    const { link } = req.body;
    const newName = 'photo' + Date.now() + '.jpg';
    await imageDownloader.image({
        url: link,
        dest: __dirname + '/../uploads/' + newName,
    });
    res.json(newName);
};

const handlePostUpload = (req, res) => {
    const uploadedFiles = [];
    for (let i = 0; i < req.files.length; i++) {
        const { path, originalname } = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath)
        uploadedFiles.push(newPath.replace('uploads\\', ''))
    }
    res.json(uploadedFiles);
};

const handlePostPlaces = (req, res) => {
    const { token } = req.cookies;
    const {
        title, address, addedPhotos,
        description, perks, extraInfo,
        checkIn, checkOut, maxGuests,
        price,
    } = req.body.placeData;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const placeDoc = await Place.create({
            owner: userData.id,
            title, address, photos: addedPhotos,
            description, perks, extraInfo,
            checkIn, checkOut, maxGuests,
            price,
        });
        res.json(placeDoc);
    });
};

const handleGet_User_places = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (userData) {
                if (err) res.json(err);
                const { id } = userData;
                res.json(await Place.find({ owner: id }));
            } else {
                console.log("🚀 ~ file: index.js:159 ~ jwt.verify ~ userData is null:", "userData is null")
                res.json("error")
            }
        });
    } else {
        console.log("🚀 ~ file: index.js:164 ~ app.get ~ 'Do not have token':", 'Do not have token')
    }
};

const handleGetPlacesById = async (req, res) => {
    const { id } = req.params;
    res.json(await Place.findById(id));
};


const handleUpdatePlaces = async (req, res) => {
    const { token } = req.cookies;
    const {
        id,
        title, address, addedPhotos,
        description, perks, extraInfo,
        checkIn, checkOut, maxGuests,
        price,
    } = req.body.placeData;

    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const placeDoc = await Place.findById(id);

        if (userData.id === placeDoc?.owner?.toString()) {
            placeDoc.set({
                id,
                title, address, photos: addedPhotos,
                description, perks, extraInfo,
                checkIn, checkOut, maxGuests,
                price,
            })
            await placeDoc.save();
            res.json('ok');
        }
    });
};

const handleGetAllPlaces = async (req, res) => {
    res.json(await Place.find({}))
};

const handleBookingsRoom = async (req, res) => {
    const userData = await getUserDataFromReq(req);
    const {
        place, checkIn, checkOut,
        numberOfGuests, name, phone, price
    } = req.body;
    Booking.create({
        place, checkIn, checkOut,
        numberOfGuests, name, phone, price,
        user: userData.id,
    }).then((doc) => {
        res.json(doc);
    }).catch((err) => {
        throw err;
    })
};

const handleGetBookingInfo = async (req, res) => {
    const userData = await getUserDataFromReq(req);
    res.json(await Booking.find({ user: userData.id }).populate('place'));
};

const handleCreateComment = async (req, res) => {
    const { placeId, message, commenter } = req.body;
    try {
        const userDoc = await Comment.create({
            placeId,
            message,
            commenter
        });
        res.json(userDoc);
    }
    catch (e) {
        console.log("🚀 ~ file: homeController.js:234 ~ handleCreateComment ~ e:", e)
        res.status(422).json(e)
    }
}

const handleGetAllComments = async (req, res) => {
    const { idPlace } = req.params;
    const comments = await userServices.getAllComments(idPlace);
    res.json(comments)
}



module.exports = {
    handleHelloWorld,
    handleRegister,
    handleLogin,
    handleGetProfile,
    handleLogout,
    handlePost_Upload_By_Link,
    handlePostUpload,
    handlePostPlaces,
    handleGet_User_places,
    handleGetPlacesById,
    handleUpdatePlaces,
    handleGetAllPlaces,
    handleBookingsRoom,
    handleGetBookingInfo,
    handleCreateComment,
    handleGetAllComments,

}