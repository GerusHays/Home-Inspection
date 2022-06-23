const router = require('express').Router();

const userRoutes = require('./user-routes');
const clientRoutes = require('./client-routes');
const inspectorRoutes = require('./inspector-routes');
const scheduleRoutes = require('./schedule-routes');
const serviceRoutes = require('./service-routes');


router.use('/users', userRoutes);
router.use('/clients', clientRoutes);
router.use('/inspectors', inspectorRoutes);
router.use('/schedules', scheduleRoutes);
router.use('/services', serviceRoutes);


module.exports = router;