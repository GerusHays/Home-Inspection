const {Schedule_detail} = require('../models');

const schedule_DetailData = [
    {
        schedule_id: 1,
        service_id: 1,
    },
    {
        schedule_id: 1,
        service_id: 2,
    },
    {
        schedule_id: 2,
        service_id: 1,
    },
    {
        schedule_id: 2,
        service_id: 3,
    },
];

const seedSchedule_Details = () => Schedule_detail.bulkCreate(schedule_DetailData);

module.exports = seedSchedule_Details;
