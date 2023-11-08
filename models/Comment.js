







const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    placeId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Place' },
    message: { type: String },
    commenter: { type: String },
    // checkIn: { type: Date, required: true },
    // checkOut: { type: Date, required: true },
    // name: { type: String, required: true },
    // phone: { type: String, required: true },
    // price: Number,
}, {
    timestamps: true
});


const CommentModel = mongoose.model('Comment', commentSchema);

module.exports = CommentModel;