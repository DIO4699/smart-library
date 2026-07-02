const { body } = require("express-validator");

exports.validateBook = [
    body("title")
        .notEmpty()
        .withMessage("Title is required"),

    body("author")
        .notEmpty()
        .withMessage("Author is required"),

    body("publishedYear")
        .optional()
        .isInt({ min: 1000, max: 2099 })
        .withMessage("Published year must be between 1000 and 2099"),
];