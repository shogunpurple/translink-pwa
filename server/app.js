const express = require('express');
const path = require('path');

const app = express();

const translinkController = require('./controllers/translinkController');

// Middleware 
const enableCorsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};

app.use(enableCorsMiddleware);

app.get('/translink/:stationCode', translinkController.fetchTrainTimes);

module.exports = app;

