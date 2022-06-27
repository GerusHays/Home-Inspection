const passport = require("passport");
const router = require('express').Router();

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureMessage: 'Invalid Credentials'
}));

module.exports = router;