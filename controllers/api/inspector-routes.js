const router = require('express').Router();
const { User, Inspector } = require('../../models');
const sequelize = require('../../config/connection');

// get all inspectors
router.get('/', (req, res) => {
    Inspector.findAll({
        attributes: [
            'id',
            'first_name',
            'last_name',
            'address_street',
            'address_city',
            'address_state',
            'address_zip',
            'phone_number',
        ],
        include: [
            {
                model: User,
                attributes: ['user_name', 'email']
            }
        ]
    })
        .then(dbInspectorData => res.json(dbInspectorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Inspector.findOne({
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
        ],
        include: [
            {
                model: User,
                attributes: ['user_name', 'email']
            }
        ]
    })
        .then(dbInspectorData => res.json(dbInspectorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Inspector.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address_street: req.body.address_street,
        address_city: req.body.address_city,
        address_state: req.body.address_state,
        address_zip: req.body.address_zip,
        phone_number: req.body.phone_number,
        UserId: req.body.UserId
    })
        .then(dbInspectorData => res.json(dbInspectorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
}); 

router.put('/:id', (req, res) => {
    Inspector.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbInspectorData => res.json(dbInspectorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Inspector.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbInspectorData => res.json(dbInspectorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;