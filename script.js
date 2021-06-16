var mysql = require('mysql');

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '3306',
  user: 'root',
  password: 'password',
  database: 'new_infoDB'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});