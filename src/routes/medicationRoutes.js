const express = require('express');
const { medsIndex, medsPost } = require('../controllers/medicationController');

const medRoutes = express.Router();

medRoutes.get('/', medsIndex);
medRoutes.post('/', medsPost);

module.exports = medRoutes;
