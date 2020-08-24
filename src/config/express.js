'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../api/routes');

const app = express();

app.use(express.json());
app.use('/v1', routes);

/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 */

module.exports = app;