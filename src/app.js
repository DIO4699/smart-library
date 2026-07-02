require('dotenv').config();

const express = require('express');

const connectDB = require('./config/db');

connectDB();

const app = express();

const booksRouter = require('./routes/books');

const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./config/swagger");

const errorHandler = require("./middleware/errorHandler");

const PORT = 3000;

app.use(express.json());

app.use('/api/books', booksRouter);

app.use(errorHandler);

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
  });
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
