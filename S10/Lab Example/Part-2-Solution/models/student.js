const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Student = sequelize.define('student', {
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
