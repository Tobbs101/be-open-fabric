require("dotenv").config();

module.exports = {
  database: "open_fabric",
  url: process.env.DB_PROD_URL,
  dialect: "postgres",
};
