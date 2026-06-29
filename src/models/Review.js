const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },

    reviewerName: String,

    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },

    comment: String,

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Review", ReviewSchema);