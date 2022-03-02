const express = require('express');
const {
  prescriptionIndex,
  prescriptionPost,
} = require('../controllers/prescriptionController');

const prescriptionsRoutes = express.Router();

prescriptionsRoutes.get('/', prescriptionIndex);
prescriptionsRoutes.post('/', prescriptionPost);

module.exports = prescriptionsRoutes;
