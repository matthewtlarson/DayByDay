//this handles everything server side, routes port etc//
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
<<<<<<< HEAD
// const helpers = require('./utils/helpers');
=======
const helpers = require('./utils/helpers');
>>>>>>> ddfaa3f16a0d71574ad1ba1d4f2b6dc29dacdbb6

const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD

const hbs = exphbs.create({ /*helpers*/ });
=======
const hbs = exphbs.create({ helpers });
>>>>>>> ddfaa3f16a0d71574ad1ba1d4f2b6dc29dacdbb6

const sess = {
    secret: 'ETHERUEM CLASSIC',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

<<<<<<< HEAD


=======
>>>>>>> ddfaa3f16a0d71574ad1ba1d4f2b6dc29dacdbb6
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
