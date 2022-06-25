const {Client} = require('../models');

const clientData = [
    {
        first_name: 'John',
        last_name: 'Doe',
        address_street: '123 Main St',
        address_city: 'New York',
        address_state: 'NY',
        address_zip: 10001,
        phone_number: 1234567890,
        user_id: 2
    }
];

const seedClients = () => Client.bulkCreate(clientData);

module.exports = seedClients;