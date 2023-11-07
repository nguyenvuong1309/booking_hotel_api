







const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    place: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Place' },
    message: { type: String },
    commenter: { Type: String },
    // checkIn: { type: Date, required: true },
    // checkOut: { type: Date, required: true },
    // name: { type: String, required: true },
    // phone: { type: String, required: true },
    // price: Number,
});


const CommentModel = mongoose.model('Booking', commentSchema);

module.exports = CommentModel;