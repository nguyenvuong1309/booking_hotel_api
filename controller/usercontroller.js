

const User = require("../models/User.js");



const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    }
    catch (err) {
        console.log("🚀 ~ file: usercontroller.js:24 ~ getUserById ~ err:", err)
    }
}



module.exports = {
    getUsers,
    getUserById,
}