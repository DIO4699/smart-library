require('dotenv').config();

module.exports = {
  ports: process.env.PORTS || 3000,
  mongoUri: process.env.MONGO_URI,
};
