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

router.get('/:id', (req, res) => {
    Service.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbServiceData => res.json(dbServiceData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Service.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })
        .then(dbServiceData => res.json(dbServiceData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Service.update(
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbServiceData => res.json({ message: 'Successfully updated service!' }))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Service.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbServiceData => res.json({ message: 'Successfully deleted service!' }))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;