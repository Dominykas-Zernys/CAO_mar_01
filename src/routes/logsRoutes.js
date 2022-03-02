const express = require('express');
const { logsIndex, logsPost } = require('../controllers/logsController');

const logsRoutes = express.Router();

logsRoutes.get('/', logsIndex);
logsRoutes.post('/', logsPost);

module.exports = logsRoutes;
