const express = require('express');

const router = express.Router();

const booksController = require('../controllers/booksController');

const { validateBook } = require("../middleware/bookValidation");

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: List of books
 */

router.get('/', booksController.getBooks);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a book
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               publishedYear:
 *                 type: number
 *               genres:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Book created
 */

router.post(
    "/",
    validateBook,
    booksController.createBook
);
/**
 * @swagger
 * /api/books/{id}/reviews:
 *   post:
 *     summary: Add review
 *     tags:
 *       - Reviews
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Review created
 */

router.post('/:id/reviews', booksController.createReview);

module.exports = router;
