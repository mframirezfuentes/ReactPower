require("dotenv").config();

const config = {
  dbUrl: process.env.MONGO_URI,
  port: process.env.PORT,
  host: process.env.HOST,
};

module.exports = config;
