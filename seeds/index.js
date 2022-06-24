const seedUsers = require('./user-seeds');
const seedClients = require('./client-seeds');
const seedInspectors = require('./inspector-seeds');
const seedSchedules = require('./schedule-seeds');
const seedServices = require('./service-seeds');
const seedSchedule_Details = require('./schedule_details-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('-------------');
    await seedUsers();
    console.log('-------------');
    await seedClients();
    console.log('-------------');
    await seedInspectors();
    console.log('-------------');
    await seedServices();
    console.log('-------------');
    await seedSchedules();
    console.log('-------------');
    await seedSchedule_Details();
    process.exit(0);
};

seedAll();