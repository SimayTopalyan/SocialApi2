// config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sql7709483", "sql7709483", "75p1lUBZ8t", {
  host: "sql7.freesqldatabase.com",
  dialect: "mysql",
  port: "3306",
});

module.exports = sequelize;
