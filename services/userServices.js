const Comment = require("../models/Comment")
const mongoose = require('mongoose');




const getAllComments = async (idPlace) => {
    const comment = await Comment.find({});
    return comment
}


module.exports = {
    getAllComments
}