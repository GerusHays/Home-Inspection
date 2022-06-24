const router = require('express').Router();
const { Service } = require('../../models');

router.get('/', (req, res) => {
    Service.findAll({
        order: [ ['name', 'ASC'] ],
        attributes: [
            'id',
            'name',
            'description',
            'price',
        ]
    })
        .then(dbServiceData => res.json(dbServiceData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

module.exports = router;