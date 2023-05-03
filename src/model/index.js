const dbConfig = require("../db/database");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.url);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user.model")(sequelize, Sequelize);
db.product = require("./product.model")(sequelize, Sequelize);

console.log(dbConfig);

module.exports = db;
