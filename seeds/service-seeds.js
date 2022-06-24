const {Service} = require('../models');

const serviceData = [
    {
        name: 'Water Inspection',
        description: 'Inspects the water system for any damage or damage to the water system.',
        price: '100',
    },
    {
        name: 'Plumbing Inspection',
        description: 'Inspects the plumbing system for any damage or damage to the plumbing system.',
        price: '200',
    },
    {
        name: 'Electrical Inspection',
        description: 'Inspects the electrical system for any damage or damage to the electrical system.',
        price: '300',
    }
];

const seedService = () => Service.bulkCreate(serviceData);

module.exports = seedService;