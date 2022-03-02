const express = require('express');
const {
  petsIndex,
  petsAdd,
  petsDelete,
} = require('../controllers/petsController');

const petsRoutes = express.Router();

petsRoutes.get('/', petsIndex);
petsRoutes.post('/', petsAdd);
petsRoutes.delete('/:id', petsDelete);

module.exports = petsRoutes;
