const {Service} = require('../models');

const serviceData = [
    {
        name: 'Essentials Package',
        description: 'This option includes our company standard covering all major items inside and outside the home',
        price: '450',
    },
    {
        name: 'Premium Package',
        description: 'Our Premium Package provides everything that we deliver in our Plus Package, and much more.',
        price: '650',
    },
    {
        name: 'Advanced Package',
        description: 'This includes everything in our Essentials and Premium Packages as well as a 20% discount towards additional services.',
        price: '800',
    },
    {
        name: 'Water Testing',        
        description: 'This option includes a water testing service that will be performed by our technician.',
        price: '100',
    },
    {
        name: 'Wind Mitigation Inspection',
        description: 'This option includes a wind mitigation inspection that will be performed by our technician.',
        price: '150'
    },
    {
        name: 'Chemical Testing',
        description: 'This option includes a chemical testing service that will be performed by our technician.',
        price: '200',
    }
];

const seedService = () => Service.bulkCreate(serviceData);

module.exports = seedService;