const router = require('express').Router();
const sequelize = require('../config/connection');
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');
const authRoutes = require('./auth.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/auth',authRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;