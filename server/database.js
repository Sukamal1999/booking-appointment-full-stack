const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost', // Replace with your MySQL host
  user: 'root1', // Replace with your MySQL username
  password: 'sukamal', // Replace with your MySQL password
  database: '                             mnkj,i', // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db.promise();
