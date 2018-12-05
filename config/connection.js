const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'j0t0qmso9cukfbwb',
  password: process.env.PASSWORD,
  database: 'cv8ao5tls8ndogm4',
});


connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;