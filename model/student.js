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
        stu_no: {
            type: Sequelize.STRING,
            AllowNull: false
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
