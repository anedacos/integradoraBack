require("dotenv").config();

const config = {
  database: process.env.DATABASE,
};

module.exports = config;
