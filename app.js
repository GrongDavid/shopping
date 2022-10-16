const express = require('express');
const morgan = require('morgan');

const itemRoutes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/items', itemRoutes);


module.exports = app;

