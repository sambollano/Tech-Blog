const express = require('express')
const routes = require('./controllers/')
const exphbs = require("express-handlebars");
const path = require('path')
const helpers = require('./utils/helpers')
const session = require('express-session')
const app = express()

const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connnection.js')
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
const hbs = exphbs.create({
    helpers: {
      format_date: date => {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      }
    }
  });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(require('./controllers/'));

sequelize.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log('Now listening ${PORT}'))
});