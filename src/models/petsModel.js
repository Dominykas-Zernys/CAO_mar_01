const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};

async function getAllPets() {
  try {
    const sql = 'SELECT * FROM pets WHERE archived = 0';
    const connection = await mysql.createConnection(dbConfig);
    const [pets] = await connection.query(sql);
    await connection.close();
    return pets;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function addNewPet(newPetObj) {
  try {
    const petInfo = Object.values(newPetObj);
    const sql = 'INSERT INTO pets (name, dob, client_email) VALUES (?, ?, ?)';
    const connection = await mysql.createConnection(dbConfig);
    const [pets] = await connection.query(sql, petInfo);
    await connection.close();
    return pets;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteOnePet(idToDelete) {
  try {
    const sql = 'UPDATE pets SET archived = 1 WHERE id = ?';
    const connection = await mysql.createConnection(dbConfig);
    const [pets] = await connection.query(sql, [idToDelete]);
    await connection.close();
    return pets;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = { getAllPets, addNewPet, deleteOnePet };
