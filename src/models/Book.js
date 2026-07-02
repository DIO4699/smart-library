const mongoose = require('mongoose');

const { validateBook } = require("../middleware/bookValidation");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    publishedYear: Number,

    genres: [String],

    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
});

module.exports = mongoose.model('Book', BookSchema);
