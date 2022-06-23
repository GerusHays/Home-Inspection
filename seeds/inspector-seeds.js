const {Inspector} = require('../models');

const inspectorData = [
    {
        first_name: 'Johnny',
        last_name: 'Inspector',
        address_street: '123 Main St',
        address_city: 'New York',
        address_state: 'NY',
        address_zip: 10001,
        phone_number: 1234567890,
        user_id: 3
    }
];

const seedInspectors = () => Inspector.bulkCreate(inspectorData);

module.exports = seedInspectors;