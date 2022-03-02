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

async function getAllPrescriptions() {
  try {
    const sql =
      'SELECT prescriptions.id, comment, timestamp, pet_id, pets.name AS petName, dob, client_email, medication_id, medications.name, medications.description FROM prescriptions JOIN pets ON pet_id=pets.id JOIN medications ON medication_id=medications.id WHERE pets.archived=0';
    const connection = await mysql.createConnection(dbConfig);
    const [allPrescriptions] = await connection.query(sql);
    await connection.close();
    return allPrescriptions;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function addNewPrescription(newPresc) {
  try {
    const newPrescArray = Object.values(newPresc);
    const sql =
      'INSERT INTO prescriptions(medication_id, pet_id, comment) VALUES(?, ?, ?)';
    const connection = await mysql.createConnection(dbConfig);
    const [newPrescAdded] = await connection.execute(sql, newPrescArray);
    await connection.close();
    return newPrescAdded;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = { getAllPrescriptions, addNewPrescription };
