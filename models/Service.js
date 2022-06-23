const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Service extends Model {}

Service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'service'
    }
);

module.exports = Service;