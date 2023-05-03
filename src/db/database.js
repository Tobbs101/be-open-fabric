require("dotenv").config();

module.exports = {
  database: "open_fabric",
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
