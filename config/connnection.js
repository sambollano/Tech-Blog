const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        port: 5501,
        user: 'root',
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
        },
      });
      db.connect(function(err) {
        if (err) throw err
        console.log("You have connected to MySQL " + connection.threadId)
    });
    }
    
    module.exports = connnection; 