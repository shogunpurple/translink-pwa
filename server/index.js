const express = require('express');
const path = require('path');
const binaryMimeTypes = require('./mimeTypes');
const app = require('./app'); 

const SERVER_PORT = 3000;

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
  app.listen(SERVER_PORT, () => console.log(`Listening on 3000`));
} else {
  // Production
  const serverless = require('serverless-http');
  app.use(express.static(path.join(__dirname, '../dist')));
  exports.handler = serverless(app, { binary: binaryMimeTypes }); 
}

