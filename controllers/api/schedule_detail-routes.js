const router = require('express').Router();
const {ScheduleDetail} = require('../../models');
const sequelize = require('../../config/connection');

router.post('/', (req, res) => {
    ScheduleDetail.create({
        schedule_id: req.body.schedule_id,
        service_id: req.body.service_id,
    })
    .then(scheduleDetail => res.json(scheduleDetail))
    .catch(err => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
    ScheduleDetail.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(scheduleDetail => { message: 'Successfully deleted schedule detail!' })
    .catch(err => res.status(400).json(err));
});

module.exports = router;