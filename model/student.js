const Sequelize = require('sequelize');
const db = require('../configuration/config');

const students = db.define(
    'students',
    {
        id: {
            type: Sequelize.INTEGER,
            AllowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            AllowNull: false
        }
    },
    {
        tableName: 'students',
        timestamps:false
    }
);

module.exports = students;
