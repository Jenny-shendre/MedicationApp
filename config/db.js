const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.getConnection((err) => {
    if (err) console.error("Database connection failed:", err);
    else console.log("Connected to MySQL Database!");
});

module.exports = db;