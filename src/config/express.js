'use strict';

const express = require('express');
const responseTime = require('response-time');
const pinoHttp = require('pino-http')
const logger = require('../config/logger');
const rTracer = require('cls-rtracer');

const routes = require('../api/routes');

const app = express();

app.use(express.json());

app.use(pinoHttp({
  logger
}));
app.use(responseTime());
app.use(rTracer.expressMiddleware({ useHeader: true }))

app.use('/v1', routes);

module.exports = app;