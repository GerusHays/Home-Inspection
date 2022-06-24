const {Schedule} = require('../models');

const scheduleData = [
    {
        appointment_date: '2022-07-15',
        appointment_time: '12:00:00',
        client_id: 1,
        inspector_id: 1,
    },
    {
        appointment_date: '2022-07-15',
        appointment_time: '13:00:00',
        client_id: 1,
        inspector_id: 1,
    },
];

const seedSchedules = () => Schedule.bulkCreate(scheduleData);

module.exports = seedSchedules;