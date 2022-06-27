const router = require('express').Router();
const sequelize = require('../config/connection');
const passport = require('passport');

// const { User } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage');    
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/sign-up', (req, res) => {
    res.render('sign-up');
});

router.get('scheduler', (req, res) => {
    res.render('scheduler');
});

module.exports = router;