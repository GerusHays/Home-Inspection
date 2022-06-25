const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule_detail extends Model {}

Schedule_detail.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        schedule_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'schedule',
                key: 'id'
            }
        },
        service_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'service',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'schedule_detail'
    }
);

module.exports = Schedule_detail;