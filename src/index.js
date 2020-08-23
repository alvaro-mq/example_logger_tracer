const express = require('express');
const app = express();
const PORT = 3000;
const logger = console; // TODO: reemplazar con el logger
const routes = require('./api/routes');

app.use('/v1', routes);

app.listen(PORT, (err) => {
  if (err) logger.err('Error al iniciar la app');
  logger.info(`La app esta iniciada en el puerto ${PORT}`);
});