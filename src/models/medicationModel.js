const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};

async function getAllMeds() {
  try {
    const sql = 'SELECT * FROM medications';
    const connection = await mysql.createConnection(dbConfig);
    const [allMeds] = await connection.query(sql);
    await connection.close();
    return allMeds;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function addNewMed(newMed) {
  try {
    const newMedArray = Object.values(newMed);
    const sql = 'INSERT INTO medications(name, description) VALUES(?, ?)';
    const connection = await mysql.createConnection(dbConfig);
    const [newMedAdded] = await connection.execute(sql, newMedArray);
    await connection.close();
    return newMedAdded;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = { getAllMeds, addNewMed };
