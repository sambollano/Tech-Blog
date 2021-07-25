const express = require('express')
const routes = require('./controllers/')
const sequelize = require('./config/connnection.js')
const path = require('path')
const helpers = require('./utils/helpers');

const app = express()

const PORT = process.env.PORT || 3001

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// turn on connection to db and server
sequelize.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log('Now listening ${PORT}'))
});