const express = require('express');
const homeController = require('../controller/homeController.js');
const router = express.Router();
const multer = require("multer");





const initWebRoutes = (app) => {
    router.get("/test", homeController.handleHelloWorld);
    router.post("/register", homeController.handleRegister)
    router.post("/login", homeController.handleLogin)
    router.get("/profile", homeController.handleGetProfile)
    router.post("/logout", homeController.handleLogout)
    router.post("/upload-by-link", homeController.handlePost_Upload_By_Link)
    const photosMiddleware = multer({ dest: 'uploads/' });
    router.post("/upload", photosMiddleware.array('photos', 100), homeController.handlePostUpload)
    router.post('/places', homeController.handlePostPlaces)
    router.get('/user-places', homeController.handleGet_User_places)

    router.get('/places/:id', homeController.handleGetPlacesById)
    router.put('/places/:id', homeController.handleUpdatePlaces)
    router.get('/places', homeController.handleGetAllPlaces)

    router.post('/bookings', homeController.handleBookingsRoom)
    router.get('/bookings', homeController.handleGetBookingInfo)

    // route nay la de thuc hien cac thao tac voi comment.
    router.post("/create-comment", homeController.handleCreateComment);
    router.get("/comments/:idPlace", homeController.handleGetAllComments);



    // router.get("/hotels/countByType", homeController.countByType);
    // router.get("/hotels/countByCity", homeController.countByCity);
    // router.get("/", getHotels);
    return app.use("/", router);
}


module.exports = initWebRoutes 