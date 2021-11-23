const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    averageGrade: {
        type: DataTypes.NUMBER,
        validate: {
            min: 1,
            max: 10
        }
    },
    faculty: DataTypes.STRING
});

module.exports = Student;