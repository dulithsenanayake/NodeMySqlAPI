const Sequelize = require('sequelize');
const fs = require('fs');
const env = require('dotenv').config();
const sequelize = new Sequelize('uokse', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        "timestamps": true
    }
});

module.exports = sequelize;
