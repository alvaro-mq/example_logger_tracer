'use strict';
const pino = require('pino');
const rTracer = require('cls-rtracer');

const options = {
  name: require('../../package.json').name,
  prettyPrint: {
    levelFirst: true
  },
  mixin: () => {
    return { requestId: rTracer.id() }
  }
};
const logger = pino(options);

module.exports = logger;
