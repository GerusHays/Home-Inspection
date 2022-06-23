// importing the models
const User = require('./User');
const Client = require('./Client');
const Inspector = require('./Inspector');
const Schedule = require('./Schedule');
const Service = require('./Service');

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

Schedule.hasMany(Services, { foreignKey: 'schedule_id' });
Service.belongsTo(Schedule, { foreignKey: 'schedule_id' });


module.exports = {User, Client, Inspector, Schedule, Service};