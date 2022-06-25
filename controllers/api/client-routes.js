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

router.get('/:id', (req, res) => {
    Client.findOne({
        where: {
            id: req.params.id
        },
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

router.post('/', (req, res) => {
    Client.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address_street: req.body.address_street,
        address_city: req.body.address_city,
        address_state: req.body.address_state,
        address_zip: req.body.address_zip,
        phone_number: req.body.phone_number,
        user_id: req.body.user_id
    })
        .then(dbClientData => res.json(dbClientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Client.update(
        req.body,
        {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(dbClientData => res.json(dbClientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Client.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbClientData => res.json(dbClientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;