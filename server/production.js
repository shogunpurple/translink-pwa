const express = require('express');
const translinkController = require('./controllers/translinkController');

const app = express();

const SERVER_PORT = 3000;

// Middleware 
const enableCorsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};

app.use(enableCorsMiddleware);

app.get('/translink/:stationCode', translinkController.fetchTrainTimes);

app.listen(SERVER_PORT, () =>
  console.log(`App listening on port ${SERVER_PORT}! 🚀`)
);
