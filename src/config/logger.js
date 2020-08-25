'use strict';
const fs = require('fs')
const pino = require('pino');
const multistream = require('pino-multi-stream').multistream;
const rTracer = require('cls-rtracer');

const streams = [
  {
    stream: fs.createWriteStream('logs/combined.log')
  },
  {
    level: 'error', stream: fs.createWriteStream('logs/error.log')
  }
];

const options = {
  name: require('../../package.json').name,
 /*  prettyPrint: {
    levelFirst: true
  }, */
  mixin: () => {
    return { requestId: rTracer.id() }
  }
};

const logger = pino(options, multistream(streams, { dedupe: true }));

module.exports = logger;
