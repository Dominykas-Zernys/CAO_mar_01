/* eslint-disable operator-linebreak */
const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};

async function getAllLogs() {
  try {
    const sql =
      'SELECT logs.id, pet_id, description, status, name, dob, client_email, archived FROM logs JOIN pets ON pet_id=pets.id';
    const connection = await mysql.createConnection(dbConfig);
    const [allMeds] = await connection.query(sql);
    await connection.close();
    return allMeds;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function addNewLog(newLog) {
  try {
    const newLogArray = Object.values(newLog);
    const sql = 'INSERT INTO logs(pet_id, description, status) VALUES(?, ?, ?)';
    const connection = await mysql.createConnection(dbConfig);
    const [newMedAdded] = await connection.execute(sql, newLogArray);
    await connection.close();
    return newMedAdded;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = { getAllLogs, addNewLog };
