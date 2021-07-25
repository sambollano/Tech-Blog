const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'tarryone',
    email: 'tarryone@test.com',
    password: 'password123'
  },
  {
    username: "sambollano",
    email: "sambollano54@gmail.com",
    password: "p@ssword10"
    },
    {
        
    username: 'tinastewart31',
    email: 'tinastewart@test.com',
    password: 'password123'
  },
  {
    username: 'Sarrah',
    email: 'sarrahappy@test.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;