'use strict';

const express = require('express');
const routes = require('../api/routes');

const app = express();

app.use('/v1', routes);

module.exports = app;