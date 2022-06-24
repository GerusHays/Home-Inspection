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

module.exports = router;