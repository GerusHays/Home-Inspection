const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        user_name: 'Admin',
        email: 'luicks212@gmail.com',
        password: 'password',
    },
    {
        user_name: 'User',
        email: 'test@test.com',
        password: 'password',
    },
    {
        user_name: 'inspector',
        email: 'inspect@test.com',
        password: 'password',
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;