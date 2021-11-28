const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Student = sequelize.define('student', {
    studentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    studentFullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    studentStatus: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['ACTIVE', 'INACTIVE', 'FREEZED']
    }
});

module.exports = Student;
