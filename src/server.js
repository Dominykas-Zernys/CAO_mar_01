require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const petsRoutes = require('./routes/petsRoutes');
const medRoutes = require('./routes/medicationRoutes');
const prescriptionsRoutes = require('./routes/prescriptionRoutes');
const logsRoutes = require('./routes/logsRoutes');

const app = express();
const { PORT } = process.env;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/pets', petsRoutes);
app.use('/meds', medRoutes);
app.use('/logs', logsRoutes);
app.use('/prescriptions', prescriptionsRoutes);

app.listen(PORT, console.log(`server is running on port ${PORT}`));
