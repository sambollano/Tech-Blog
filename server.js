const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const sequelize = require("./config/connection");

const helpers = require('./utils/helpers');
const router = require("express").Router();


const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
  },
  resave: false,
  saveUninitialized: true,
};

const app = express();
const PORT = process.env.PORT || 5501;
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// turn on connection to database and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

app.use(routes);