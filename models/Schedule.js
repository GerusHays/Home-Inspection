const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule extends Model {}

Schedule.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        appointment_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        appointment_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        client_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'client',
                key: 'id'
            }
        },
        inspector_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'inspector',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'schedule'
    }
);

module.exports = Schedule;