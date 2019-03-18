const express = require('express');

const app = express();

const translinkController = require('./controllers/translinkController');

const SERVER_PORT = 3000;

// Middleware 
const enableCorsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};

app.use(enableCorsMiddleware);

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.
  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  });

  app.use(devMiddleware);
} else {
  // Production
  app.use(express.static('../dist'))
}


app.get('/translink/:stationCode', translinkController.fetchTrainTimes);


app.listen(SERVER_PORT, () =>
  console.log(`App listening on port ${SERVER_PORT}! 🚀`)
);
