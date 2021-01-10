const mysql = require('mysql');
const mysqlPassword = require('../mysql.config.js');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'morsesteel'
});

connection.connect()
  .then(() => console.log('Connected to mysql'))
  .catch((err) => console.log(err));

  