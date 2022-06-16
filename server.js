const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}/`);
});

//TODO: Connect passportjs
// var authRouter = require('./routes/auth');
// var logger = require('morgan');
// var passport = require('passport');
// var session = require('express-session');

// var SQLiteStore = require('connect-sqlite3')(session);

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false,
//   store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
// }));
// app.use(passport.authenticate('session'));

// app.use('/', authRouter);
