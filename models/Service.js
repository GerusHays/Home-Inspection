const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Service extends Model {}

Service.init()

module.exports = Service;