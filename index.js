const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const Place = require('./models/Place.js');
const Booking = require('./models/Booking.js');
const cookieParser = require('cookie-parser');
const imageDownloader = require("image-downloader");
const multer = require("multer");
const fs = require('fs');
const initWebRoutes = require('./routes/api.js');
const hotelRoute = require('./routes/hotel.js');
const roomRoute = require('./routes/room.js');
const userRoute = require('./routes/user.js');
const carRoute = require('./routes/car.js');
const socketRoute = require('./socket/routes/socket.js');
const errorHandler = require('./middleware/errorHandler.js');

require('dotenv').config();
const app = express();

const bcryptSalt = bcryptjs.genSaltSync(10);
//const jwtSecret = 'vuong'



//=============================================================================================================================================
const io = require('socket.io')(8080, {
    cors: {
        origin: [
            'http://localhost:3000', 'http://localhost:5173',
            'https://hotel-booking-client-bice.vercel.app',
            'https://hotel-booking-client-bice.vercel.app'
        ]
    }
});
const Users = require('./models/User');
const Conversations = require('./socket/models/Conversations');
const Messages = require('./socket/models/Messages');
let users = [];
io.on('connection', socket => {
    console.log('User connected', socket.id);
    socket.on('addUser', userId => {
        const isUserExist = users.find(user => user.userId === userId);
        if (!isUserExist) {
            const user = { userId, socketId: socket.id };
            users.push(user);
            io.emit('getUsers', users);
        }
    });
    socket.on('sendMessage', async ({ senderId, receiverId, message, conversationId }) => {
        const receiver = users.find(user => user.userId === receiverId);
        const sender = users.find(user => user.userId === senderId);
        const user = await Users.findById(senderId);
        console.log('sender :>> ', sender, receiver);
        if (receiver) {
            console.log("getMes")
                .to(receiver.socketId).to(sender.socketId).emit('getMessage', {
                    senderId,
                    message,
                    conversationId,
                    receiverId,
                    user: { id: user._id, fullName: user.fullName, email: user.email }
                });
        } else {


            console.log("getMes")
            io.to(sender.socketId).emit('getMessage', {
                senderId,
                message,
                conversationId,
                receiverId,
                user: { id: user._id, fullName: user.fullName, email: user.email }

            });
        }
    });

    socket.on('disconnect', () => {
        users = users.filter(user => user.socketId !== socket.id);
        io.emit('getUsers', users);
    });
    // io.emit('getUsers', socket.userId);
});
//=============================================================================================================================================






//=============================================================================================================================================
// const http = require('http')
// const Server = require("socket.io").Server
// const server = http.createServer(express())

// // const io = new Server(server, {
// //     cors: {
// //         // origin: [
// //         //     'http://localhost:3000', 'http://localhost:5173',
// //         //     'https://hotel-booking-client-bice.vercel.app',
// //         //     'https://hotel-booking-client-bice.vercel.app'
// //         // ]
// //         origin: "*"
// //     }
// // });
// const io = require('socket.io')(8080, {
//     cors: {
//         origin:
//             "*"
//     }
// });

// // io.on("connection", (socket) => {
// //     console.log("we are connected")

// //     socket.on("chat", chat => {
// //         io.emit("chat", chat)
// //     })

// //     socket.on("disconnect", () => {
// //         console.log("disconnected")
// //     })
// // })

// io.on('connection', socket => {
//     console.log("we are connected")

//     socket.on("chat", chat => {
//         io.emit("chat", chat)
//     })

//     socket.on("disconnect", () => {
//         console.log("disconnected")
//     })
// })


//=============================================================================================================================================








app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(cors({
    credentials: true,
    origin: [
        'http://localhost:5173',
        'https://hotel-booking-website-jqka.netlify.app',
        'https://hotel-booking-client-bice.vercel.app',
        'https://hotel-booking-client-nopskz22g-vuongs-projects-c0daf0e4.vercel.app',
        'https://hotel-booking-client-aws.vercel.app'
    ],
}));
app.use(cookieParser());

initWebRoutes(app);
app.use("/", hotelRoute);
app.use("/", roomRoute);
app.use("/", userRoute);
app.use("/", carRoute)
app.use("/", socketRoute)



app.use(errorHandler);


const PORT = 4000;
app.listen(PORT, () => {
    console.log("🚀 ~ file: index.js:33 ~ app.listen ~ PORT:", PORT)
})


mongoose.connect(process.env.MONGO_URL).then(() => console.log("🚀 ~ file: index.js:43 ~ process.env.MONGO_URL:", "Connected !"));


{/*


app.get('/test', (req, res) => {
    res.json('test ok');
});

mongoose.connect(process.env.MONGO_URL).then(() => console.log("🚀 ~ file: index.js:32 ~ 'Connected!':", 'Connected!'));;


function getUserDataFromReq(req) {
    return new Promise((resolve, reject) => {
        jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            resolve(userData);
        });
    });
}
app.post('/register', async (req, res) => {
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
});

app.post('/login', async (req, res) => {
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
        res.cookie("token", token);
        res.json(userDoc);
    } else {
        res.status(422).json('not found')
    }
});


app.get('/profile', (req, res) => {
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
})


app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
})

app.post('/upload-by-link', async (req, res) => {
    const { link } = req.body;
    const newName = 'photo' + Date.now() + '.jpg';
    await imageDownloader.image({
        url: link,
        dest: __dirname + '/uploads/' + newName,
    });
    res.json(newName);
})

const photosMiddleware = multer({ dest: 'uploads/' });
app.post('/upload', photosMiddleware.array('photos', 100), (req, res) => {
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
});

app.post('/places', (req, res) => {
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
});

app.get('/user-places', (req, res) => {
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
});

app.get('/places/:id', async (req, res) => {
    const { id } = req.params;
    res.json(await Place.findById(id));
});

app.put('/places', async (req, res) => {
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
});

app.get('/places', async (req, res) => {
    res.json(await Place.find({}))
})


app.post('/bookings', async (req, res) => {
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
});


app.get('/bookings', async (req, res) => {
    const userData = await getUserDataFromReq(req);
    res.json(await Booking.find({ user: userData.id }).populate('place'));
});

app.listen(4000);


*/}