const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL Database!");
    connection.release(); 
  }
});

module.exports = db;
