require("dotenv").config();

module.exports = {
  database: "open_fabric",
  host: process.env.DB_PROD_HOST,
  username: process.env.DB_PROD_USER,
  password: process.env.DB_PROD_PASS,
  url: process.env.DB_PROD_URL,
  dialect: "postgres",
};

// module.exports = {
//   database: "open-fabric",
//   host: "localhost",
//   username: "root",
//   password: "",
//   url: "",
//   dialect: "mysql",
// };
