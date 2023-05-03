module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "open-fabric",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};