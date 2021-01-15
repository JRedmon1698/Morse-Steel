const mysql = require('mysql');
const mysqlPassword = require('../mysql.config.js');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: mysqlPassword,
  database: 'morse_steel'
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('successfully Connected to DB');
});
