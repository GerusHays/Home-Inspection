const router = require('express').Router();
const { Client, User } = require('../../models');
const sequelize = require('../../config/connection');

// get all clients
router.get('/', (req, res) => {
    Client.findAll({
        attributes: [
            'id',
            'first_name',
            'last_name',
            'address_street',
            'address_city',
            'address_state',
            'address_zip',
            'phone_number',
            'user_id',
        ],
        include: [
            {
                model: User,
                attributes: ['user_name']
            }
        ]
    })
        .then(dbClientData => res.json(dbClientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;