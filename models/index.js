// importing the models
const User = require('./User');
const Client = require('./Client');
const Inspector = require('./Inspector');
const Schedule = require('./Schedule');
const Service = require('./Service');
const Schedule_detail = require('./Schedule_detail');

// creating associations
// User belongs to one Client or one Inspector
User.hasOne(Client, { foreignKey: 'user_id' });
Client.belongsTo(User, { foreignKey: 'user_id' });
User.hasOne(Inspector, { foreignKey: 'user_id' });
Inspector.belongsTo(User, { foreignKey: 'user_id' });

Schedule.belongsTo(Client, { foreignKey: 'client_id' });
Schedule.belongsTo(Inspector, { foreignKey: 'inspector_id' });

Inspector.hasMany(Schedule, { foreignKey: 'inspector_id' });
Client.hasMany(Schedule, { foreignKey: 'client_id' });

// Schedule.hasMany(Service, { foreignKey: 'schedule_id' });
// Service.belongsTo(Schedule, { foreignKey: 'schedule_id' });

Schedule_detail.belongsTo(Schedule, { foreignKey: 'schedule_id' });
Schedule.hasMany(Schedule_detail, { foreignKey: 'schedule_id' });

Schedule_detail.hasMany(Service, { foreignKey: 'service_id' });
Service.belongsTo(Schedule_detail, { foreignKey: 'service_id' });




module.exports = {User, Client, Inspector, Schedule, Service, Schedule_detail};