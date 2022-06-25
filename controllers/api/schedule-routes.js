const router = require('express').Router();
const { Client, Inspector, Schedule, Service, User, Schedule_detail } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => { 
    Schedule.findAll({
        order: [ ['appointment_date', 'ASC'], ['appointment_time', 'ASC'] ],
        attributes: [
            'id',
            'appointment_date',
            'appointment_time',
        ],
        include: [
            {
                model: Client,
                attributes: 
                    [
                        'first_name', 
                        'last_name', 
                        'phone_number', 
                        'address_street', 
                        'address_city', 
                        'address_state', 
                        'address_zip'
                    ],
                include: [
                    {
                        model: User,
                        attributes: ['user_name', 'email']
                    }
                ]
            },
            {
                model: Inspector,
                attributes:
                    [
                        'first_name',
                        'last_name',
                        'phone_number',
                        'address_street',
                        'address_city',
                        'address_state',
                        'address_zip'
                    ],
                include: [
                    {
                        model: User,
                        attributes: ['user_name', 'email']
                    }
                ]
            },
            {
                model: Schedule_detail,
                attributes: ['id', 'service_id'],
                include: [
                    {
                        model: Service,
                        attributes: ['name', 'description'],
                    }
                ]
            }
        ]
    })
        .then(dbScheduleData => res.json(dbScheduleData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Schedule.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'appointment_date',
            'appointment_time',
        ],
        include: [
            {
                model: Client,
                attributes:
                    [
                        'first_name',
                        'last_name',
                        'phone_number',
                        'address_street',
                        'address_city',
                        'address_state',
                        'address_zip'
                    ],
                include: [
                    {
                        model: User,
                        attributes: ['user_name', 'email']
                    }
                ]
            },
            {
                model: Inspector,
                attributes:
                    [
                        'first_name',
                        'last_name',
                        'phone_number',
                        'address_street',
                        'address_city',
                        'address_state',
                        'address_zip'
                    ],
                include: [
                    {
                        model: User,
                        attributes: ['user_name', 'email']
                    }
                ]
            },
            {
                model: Schedule_detail,
                attributes: ['id', 'service_id'],
                include: [
                    {
                        model: Service,
                        attributes: ['name', 'description'],
                    }
                ]
            }
        ]
    })
        .then(dbScheduleData => res.json(dbScheduleData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        }
    );
});

router.post('/', (req, res) => {
    Schedule.create({
        appointment_date: req.body.appointment_date,
        appointment_time: req.body.appointment_time,
        client_id: req.body.client_id,
        inspector_id: req.body.inspector_id,
        schedule_detail_id: req.body.schedule_detail_id
    })
        .then(dbScheduleData => res.json(dbScheduleData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Schedule.update(
        {
            appointment_date: req.body.appointment_date,
            appointment_time: req.body.appointment_time,
            client_id: req.body.client_id,
            inspector_id: req.body.inspector_id,
            schedule_detail_id: req.body.schedule_detail_id
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(dbScheduleData => res.json(dbScheduleData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Schedule.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbScheduleData => res.json(dbScheduleData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;