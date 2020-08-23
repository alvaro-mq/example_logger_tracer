
const app = require('./config/express');
const { createConnection } = require('./config/database');
const logger = console; // TODO: reemplazar con el logger
const PORT = 3000; // TODO: ingresar como env

createConnection();
app.listen(PORT, (err) => {
  if (err) logger.err('Error al iniciar la app');
  logger.info(`La app esta iniciada en el puerto ${PORT}`);
});

// module.exports = app;