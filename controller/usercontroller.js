

const User = require("../models/User.js");



const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}

const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    }
    catch (err) {
        next(err)
    }
}

const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = await User.findOneAndUpdate({ _id: id }, body);
        res.status(200).json(user);
    }
    catch (err) {
        next(err);
    }
}




module.exports = {
    getUsers,
    getUserById,
    updateUser
}