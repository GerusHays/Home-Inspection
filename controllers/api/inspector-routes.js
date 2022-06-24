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

module.exports = router;