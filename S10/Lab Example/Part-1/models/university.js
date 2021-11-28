const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const University = sequelize.define('university', {
    universityId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    universityName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 20]
        }
    }    
});

module.exports = University;
