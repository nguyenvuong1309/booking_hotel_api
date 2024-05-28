





const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/User.js');
const Place = require('../models/Place.js');
const Booking = require('../models/Booking.js');
const Comment = require('../models/Comment.js');
const axios = require("axios");
//const Hotel = require("../models/Hotel.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const imageDownloader = require("image-downloader");
const userServices = require("../services/userServices.js");
const { setCookie } = require("cookies-next");
var crypto = require("crypto");

const bcryptSalt = bcryptjs.genSaltSync(10);

const jwtSecret = process.env.JWT_SECRET;

const handleHelloWorld = (req, res) => {
  return res.json("test hello world");
};

function getUserDataFromReq(req, res, next) {
  try {
    return new Promise((resolve, reject) => {
      jwt.verify(
        req.headers["authorization"].split(" ")[1],
        jwtSecret,
        {},
        async (err, userData) => {
          if (err) {
            next(err);
          }
          resolve(userData);
        }
      );
    });
  } catch (err) {
    res.json(null);
    next(err);
  }
}

const algorithm = "aes-256-cbc";

const key = "adnan-tech-programming-computers";
const iv = Buffer.from("d2a094145042a8f482c290a8100e6862", "hex"); //crypto.randomBytes(16);

const registrationAttempts = new Map();

const registerAtempt = (email) => {
  const currentTime = Date.now();
  if (!registrationAttempts.has(email)) {
    registrationAttempts.set(email, []);
  }

  const attempts = registrationAttempts.get(email);
  const recentAttempts = attempts.filter(
    (attempt) => currentTime - attempt < 5 * 60 * 1000
  );

  if (recentAttempts.length >= 5) {
    const lastAttemptTime = recentAttempts[recentAttempts.length - 1];
    const timeSinceLastAttempt = currentTime - lastAttemptTime;
    if (timeSinceLastAttempt < 10 * 60 * 1000) {
      console.log(
        "🚀 ~ returnres.status ~ ,Too many registration attempts. Please try again later."
      );
      return false;
    } else {
      registrationAttempts.set(email, []);
    }
  }
};

const handleRegister = async (req, res) => {
  const { token, name, email, password, fullName } = req.body;
  const res = registerAtempt(email);
  if (!res) {
    return;
  }
  try {
    // Sending secret key and response token to Google Recaptcha API for authentication.
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6LcRtOUpAAAAAFEIBKTni6ZCdqSVnucLTqSprv5u&response=${token}`
    );
    if (response.data.success) {
      try {
        let cipher = crypto.createCipheriv(algorithm, key, iv);
        let encryptName = cipher.update(name, "utf-8", "hex");
        encryptName += cipher.final("hex");
        cipher = null;

        cipher = crypto.createCipheriv(algorithm, key, iv);
        let encryptEmail = cipher.update(email, "utf-8", "hex");
        encryptEmail += cipher.final("hex");
        cipher = null;

        cipher = crypto.createCipheriv(algorithm, key, iv);
        let encryptFullName = cipher.update(fullName, "utf-8", "hex");
        encryptFullName += cipher.final("hex");
        cipher = null;

        const base64Data = Buffer.from("iv", "binary").toString("base64");
        const userDoc = await User.create({
          name: encryptName,
          email: encryptEmail,
          password: bcryptjs.hashSync(password, bcryptSalt),
          fullName: encryptFullName,
        });
        res.json(userDoc);
      } catch (e) {
        console.log("🚀 ~ handleRegister ~ e:", e);
        res.status(422).json(e);
      }
    } else {
      //res.send("Robot 🤖");
      res.status(422).json("not found");
    }
  } catch (error) {
    console.log("🚀 ~ handleLogin ~ error:", error);
    // Handle any errors that occur during the reCAPTCHA verification process
    console.error(error);
    res.status(500).send("Error verifying reCAPTCHA");
  }
};

const handleLogin = async (req, res, next) => {
  try {
    const { token, email, password } = req.body;
    try {
      // Sending secret key and response token to Google Recaptcha API for authentication.
      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=6LcRtOUpAAAAAFEIBKTni6ZCdqSVnucLTqSprv5u&response=${token}`
      );

      // Check response status and send back to the client-side
      if (response.data.success) {
        let cipher = crypto.createCipheriv(algorithm, key, iv);
        let encryptEmail = cipher.update(email, "utf-8", "hex");
        encryptEmail += cipher.final("hex");

        const userDoc = await User.findOne({ email: encryptEmail });

        const passOk = bcryptjs.compareSync(password, userDoc.password);

        let decipher1 = crypto.createDecipheriv(algorithm, key, iv);
        let decryptEmail = decipher1.update(userDoc.email, "hex", "utf-8");
        decryptEmail += decipher1.final("utf8");

        let decipher2 = crypto.createDecipheriv(algorithm, key, iv);
        let decryptName = decipher2.update(userDoc.name, "hex", "utf-8");
        decryptName += decipher2.final("utf8");

        if (passOk) {
          const token = jwt.sign(
            {
              email: decryptEmail,
              id: userDoc._id,
              name: decryptName,
            },
            jwtSecret,
            { expiresIn: "1d" }
          );
          // res.json({
          //     'token': token,
          //     "userInfo": userDoc
          // });
          return res.status(200).json({
            user: {
              id: userDoc._id,
              email: decryptEmail,
              fullName: decryptName,
            },
            token: token,
          });
        } else {
          res.status(422).json("not found");
        }
      } else {
        //res.send("Robot 🤖");
        res.status(422).json("not found");
      }
    } catch (error) {
      console.log("🚀 ~ handleLogin ~ error:", error);
      // Handle any errors that occur during the reCAPTCHA verification process
      console.error(error);
      res.status(500).send("Error verifying reCAPTCHA");
    }
  } catch (err) {
    next(err);
  }
};

const handleGetProfile = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (token && token !== "null") {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) {
          return next(err); // Add return to stop further execution
        }
        const data = await User.findById(userData?.id);

        const decryptedData = {};
        const fieldsToDecrypt = [
          "email",
          "name",
          "fullName",
          "Web3AddressWallet",
          "work",
          "education",
          "description",
          "image",
          "address",
        ];

        fieldsToDecrypt.forEach((field) => {
          if (data?.[field]) {
            let decipher = crypto.createDecipheriv(
              algorithm,
              key,
              Buffer.from(iv, "binary")
            );
            let decryptedField = decipher.update(data[field], "hex", "utf-8");
            decryptedField += decipher.final("utf-8");
            decryptedData[field] = decryptedField;
          }
        });
        console.log("🚀 ~ jwt.verify ~ decryptedData:", decryptedData);
        return res.json({ _id: userData?.id, ...decryptedData }); // Ensure response is returned
      });
    } else {
      return res.status(404).json({ error: "don't have token" }); // Ensure response is returned
    }
  } catch (error) {
    console.log("🚀 ~ handleGetProfile ~ error:", error);
    return next(error); // Ensure function returns after error
  }
};



const handleLogout = (req, res) => {
    // res.cookie('token', '').json(true);
    res.json(true);
};

const handlePost_Upload_By_Link = async (req, res, next) => {
    try {
        const { link } = req.body;
        const newName = 'photo' + Date.now() + '.jpg';
        await imageDownloader.image({
            url: link,
            dest: __dirname + '/../uploads/' + newName,
        });
        res.json(newName);
    }
    catch (err) {
        next(err)
    }
};

const handlePostUpload = (req, res, next) => {
    try {
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
    }
    catch (err) {
        next(err)
    }
};

const handlePostPlaces = (req, res, next) => {
    console.log(req.headers)
    try {
        const token = req.headers['authorization'].split(' ')[1];
        const {
            title, address, addedPhotos,
            description, perks, extraInfo,
            checkIn, checkOut, maxGuests,
            price, hightLights, freeCancellation,
            airCondition, grade
        } = req.body.placeData;
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) {
                next(err)
            }
            const placeDoc = await Place.create({
                owner: userData.id,
                title, address, photos: addedPhotos,
                description, perks, extraInfo,
                checkIn, checkOut, maxGuests,
                price, hightLights, freeCancellation,
                airCondition, grade
            });
            res.json(placeDoc);
        });
    }
    catch (err) {
        next(err)
    }
};

const handleGet_User_places = (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1];
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
    }
    catch (err) {
        next(err)
    }
};

const handleGetPlacesById = async (req, res, next) => {
    try {
        const { id } = req.params;
        res.json(await Place.findById(id));
    }
    catch (err) {
        next(err)
    }
    // res.json(
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
    //         "price": 120,
    //         "hightLights": ["hospital", "check-in [24-hour]", "airport transfer", "great breakfast", "great view"],
    //         "Facilities": ["parking", "swimming pool", "free wi-fi"],
    //         "freecancellation": true,
    //         "aircondition": true,
    //         "grade": 8,
    //         "__v": 1
    //     }
    // )
};


const handleUpdatePlaces = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        const {
            id,
            title, address, addedPhotos,
            description, perks, extraInfo,
            checkIn, checkOut, maxGuests,
            price, hightLights, freeCancellation,
            airCondition, grade, star,
            city
        } = req.body.placeData;

        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) {
                next(err)
            }
            const placeDoc = await Place.findById(id);

            if (userData.id === placeDoc?.owner?.toString()) {
                placeDoc.set({
                    title, address, photos: addedPhotos,
                    description, perks, extraInfo,
                    checkIn, checkOut, maxGuests,
                    price, hightLights, freeCancellation,
                    airCondition, grade, star,
                    city
                })
                await placeDoc.save();
                res.json('ok');
            }
        });
    }
    catch (err) {
        next(err)
    }
};

const handleGetAllPlaces = async (req, res, next) => {
    try {
        res.json(await Place.find({}))
    }
    catch (err) {
        next(err)
    }
};

const handleBookingsRoom = async (req, res, next) => {
    try {
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
            next(err)
        })
    }
    catch (err) {
        next(err)
    }
};

const handleGetBookingInfo = async (req, res, next) => {
    try {
        const userData = await getUserDataFromReq(req);
        res.json(await Booking.find({ user: userData.id }).populate('place'));
    }
    catch (err) {
        next(err)
    }
};

const handleCreateComment = async (req, res, next) => {
    try {
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
            res.status(422).json(e)
        }
    }
    catch (err) {
        next(err)
    }
}

const handleGetAllComments = async (req, res, next) => {
    try {
        const { idPlace } = req.params;
        const comments = await userServices.getAllComments(idPlace);
        res.json(comments)
    }
    catch (err) {
        next(err)
    }
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