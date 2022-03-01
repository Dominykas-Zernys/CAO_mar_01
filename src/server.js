require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const { PORT } = process.env;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.listen(PORT, console.log(`server is running on port ${PORT}`));
