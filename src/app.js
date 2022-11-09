const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');


const { positionRouter } = require('./routes');
const { mainErrorHandler } = require('./errors');
const {PORT, MONGO_URL} = require("./configs/config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/positions', positionRouter);

app.use('*', (req, res, next) => {
    next(new Error('Route not found'))
});

app.use(mainErrorHandler);

app.listen(PORT, () => {
    console.log('Server stated on Port', PORT);
    mongoose.connect(MONGO_URL);
});