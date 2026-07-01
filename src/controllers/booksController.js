const Book = require("../models/Book");
const Review = require("../models/Review");

exports.createBook = async (req, res) => {
    try {
        const books = await Book.find()
            .select("-__v")
            .skip((page - 1) * limit)
            .limit(limit);

        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

/*
 * Get paginated books.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */
exports.getBooks = async (req, res) => {
    try {
        let { page = 1, limit = 5 } = req.query;

        page = Math.max(1, Number(page));
        limit = Math.min(100, Math.max(1, Number(limit)));

        const total = await Book.countDocuments();

        const books = await Book.find()
            .select("-__v")
            .skip((page - 1) * limit)
            .limit(limit);

        res.json({
            data: books,
            total,
            page,
            limit,
        });
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