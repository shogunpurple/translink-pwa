const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

const translinkController = require('./controllers/translinkController');

const SERVER_PORT = 3000;

// Middleware 
const enableCorsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
});

app.use(enableCorsMiddleware);
app.use(devMiddleware);


app.get('/translink/:stationCode', translinkController.fetchTrainTimes);


app.listen(SERVER_PORT, () =>
  console.log(`App listening on port ${SERVER_PORT}! 🚀`)
);
