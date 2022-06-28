const LocalStrategy = require('passport-local');
const passport = require('passport');
const User = require('../../models/user');


passport.serializeUser((user, done) => {
   done(null, user);
});

passport.deserializeUser((user, done) => {
   return done(null, user);
});


passport.use(new LocalStrategy(
    async (username, password, done) => {
        User.findOne({ where: { user_name: username} })
            .then(user => {
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.checkPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            })
            .catch(err => {
                console.log(err);
                done(err);});
    }
));