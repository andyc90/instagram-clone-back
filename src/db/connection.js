const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI, { dialect: "mysql" });

sequelize.authenticate();

console.log("db connection is working");

module.exports = sequelize;
