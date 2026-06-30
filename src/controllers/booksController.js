const Book = require("../models/Book");
const Review = require("../models/Review");

exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);

        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.json(books);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

exports.createReview = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                error: "Book not found",
            });
        }

        const review = await Review.create({
            ...req.body,
            bookId: book._id,
        });

        book.reviews.push(review._id);

        await book.save();

        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};