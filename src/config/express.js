'use strict';

const express = require('express');
const rTracer = require('cls-rtracer');

const routes = require('../api/routes');

const app = express();

app.use(express.json());
app.use(rTracer.expressMiddleware({ useHeader: true }))

app.use('/v1', routes);

module.exports = app;