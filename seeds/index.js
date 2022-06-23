const seedUsers = require('./user-seeds');
const seedClients = require('./client-seeds');
const seedInspectors = require('./inspector-seeds');

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
    process.exit(0);
};

seedAll();