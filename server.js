const path = require('path');
const express = require('express');
const session = require('express-session');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server is listening on port http://localhost:${PORT}/`));
});



//TODO: Connect passportjs
// var authRouter = require('./routes/auth');
// var logger = require('morgan');
// var passport = require('passport');


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
