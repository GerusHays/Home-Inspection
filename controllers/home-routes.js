const router = require('express').Router();
const authorized = require('../utils/authorized')

// const { User } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', { loggedIn: req.user });    
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/sign-up', (req, res) => {
    res.render('sign-up');
});

router.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});

router.get('/scheduler', authorized, (req, res) => {
    res.render('scheduler', {loggedIn: req.user});
});

module.exports = router;