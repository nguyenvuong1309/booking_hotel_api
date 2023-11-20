




const express = require('express');
const router = express.Router();
const userController = require("../controller/usercontroller.js");


router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);



module.exports = router;
